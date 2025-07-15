// src/components/WebcamDisplay.jsx

import { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import { Button, CircularProgress, Stack } from "@mui/material";
import { VideoCameraBack } from "@mui/icons-material";
import { CreateSession } from "../../../api/session";
import { useSessionAnalyseStorage } from "../../../stores/sessionAnalyseStorage";
import { getUserByEmail } from "../../../api/users";
import { useAccountStore } from "../../../stores/accountStore";
import { createEmotionUser } from "../../../api/emotion";
import { analyseResultUpdate } from "../../../api/analyse";
import { useNavigate } from "react-router-dom";

const emotionsData = {
  0: "angry",
  1: "disgust",
  2: "fear",
  3: "happy",
  4: "neutral",
  5: "sad",
  6: "surprised",
  // etc.
};

const WebcamDisplay = ({ setCamActive }) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [loading, setLoading] = useState(true);
  const [emotion, setEmotion] = useState("");
  const [emotionList, setEmotionList] = useState([]);
  const { emotionAnalyses, session, setSessionAnalyse, setEmotionAnalyse } =
    useSessionAnalyseStorage();
  const { account } = useAccountStore();
  const navigate = useNavigate();
  // Définir si l'image est en miroir ou non
  const isMirrored = true; // Changez à true si vous voulez l'effet miroir

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  // Chargement des modèles face-api.js
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      console.log("Modèles face-api.js chargés");
    };
    loadModels();
  }, []);

  useEffect(() => {
    if (isCameraOn) {
      CreateSession()
        .then((res) => {
          console.log("response session", setSessionAnalyse(res.data["id"]));
        })
        .catch((err) => {
          console.error("Erreur lors de la création de session :", err);
          setCamActive(false);
        });
    }
  }, [isCameraOn]);
  //  Détection en live avec rectangles
  useEffect(() => {
    let interval;
    if (session.length > 0) {
      const detectFaces = async () => {
        if (
          webcamRef.current &&
          webcamRef.current.video.readyState === 4 &&
          faceapi.nets.tinyFaceDetector.params
        ) {
          const video = webcamRef.current.video;
          const detections = await faceapi.detectAllFaces(
            video,
            new faceapi.TinyFaceDetectorOptions()
          );

          const canvas = canvasRef.current;
          const dims = {
            width: video.videoWidth,
            height: video.videoHeight,
          };
          faceapi.matchDimensions(canvas, dims);

          let resizedDetections = faceapi.resizeResults(detections, dims);

          // Si l'image n'est pas en miroir, il faut ajuster les coordonnées
          if (!isMirrored) {
            resizedDetections = resizedDetections.map((detection) => {
              const box = detection.box;
              // Inverser horizontalement les coordonnées
              const adjustedBox = new faceapi.Box(
                dims.width - box.x - box.width, // Nouvelle position X
                box.y, // Y reste identique
                box.width, // Largeur reste identique
                box.height // Hauteur reste identique
              );
              return { ...detection, box: adjustedBox };
            });
          }

          const ctx = canvas.getContext("2d");
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Dessiner les rectangles de détection
          faceapi.draw.drawDetections(canvas, resizedDetections);

          console.log("OK", resizedDetections.length, emotion);

          if (resizedDetections.length > 0 && emotion) {
            const box = resizedDetections[0].box;
            const emotionText = emotion;

            // Définir la police avant de mesurer le texte
            ctx.font = "16px Arial";
            const textWidth = ctx.measureText(emotionText).width;

            // Sauvegarder le contexte avant transformation
            ctx.save();

            if (isMirrored) {
              // En mode miroir, le canvas est déjà inversé par le CSS
              // Il faut contre-inverser le texte pour qu'il reste lisible
              ctx.scale(-1, 1);

              // Dessiner le fond du texte (coordonnées inversées)
              ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
              ctx.fillRect(
                -(box.x + textWidth + 10),
                box.y - 25,
                textWidth + 10,
                22
              );

              // Dessiner le texte de l'émotion (coordonnées inversées)
              ctx.fillStyle = "white";
              ctx.fillText(emotionText, -(box.x + textWidth + 5), box.y - 8);
            } else {
              // En mode normal, dessiner normalement
              ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
              ctx.fillRect(box.x, box.y - 25, textWidth + 10, 22);

              ctx.fillStyle = "white";
              ctx.fillText(emotionText, box.x + 5, box.y - 8);
            }

            // Restaurer le contexte
            ctx.restore();
          }
        }
      };

      if (isCameraOn && !loading) {
        interval = setInterval(detectFaces, 300); // Détection toutes les 300ms
      }

      return () => clearInterval(interval);
    } else {
      setCamActive(false);
    }
  }, [isCameraOn, loading, emotion, session]);

  // Capture automatique toutes les 500ms vers ton backend
  useEffect(() => {
    let interval;
    const captureAndSend = async () => {
      const screenshot = webcamRef.current?.getScreenshot();
      if (!screenshot) return;

      const blob = await fetch(screenshot).then((res) => res.blob());
      const formData = new FormData();
      formData.append("file", blob, "capture.jpg");

      try {
        const res = await fetch("http://192.168.137.1:8000/predict", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        console.log("Emotion id :", data.class_id);
        setEmotionList((prev) => [
          ...prev,
          { name: emotionsData[data.class_id], confidence: data.confidence },
        ]);

        setEmotion(() => emotionsData[data.class_id] || "");
      } catch (err) {
        console.error("Erreur backend :", err);
      }
    };

    if (isCameraOn && !loading) {
      interval = setInterval(captureAndSend, 500); // Toutes les 500ms
    }

    return () => clearInterval(interval);
  }, [isCameraOn, loading]);

  const stopCamera = () => {
    const stream = webcamRef.current?.stream;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    if (emotionList.length > 0) {
      console.log("ListeEMO", emotionList);
      // Supposons que emotionList est un tableau d'objets { name: string, confidence: number }

      const emotionStats = emotionList.reduce((acc, emo) => {
        if (!acc[emo.name]) {
          acc[emo.name] = { count: 0, totalConfidence: 0 };
        }
        acc[emo.name].count += 1;
        acc[emo.name].totalConfidence += emo.confidence;
        return acc;
      }, {});

      // Calculer la moyenne des confidences par émotion
      const emotionWithMeanConfidence = Object.entries(emotionStats)
        .map(([emotion, stats]) => ({
          emotion,
          count: stats.count,
          intesite: stats.totalConfidence / stats.count,
        }))
        .sort((a, b) => b.count - a.count) // trier par nombre d’occurrences décroissant
        .slice(0, 3); // garder les 3 premiers

      console.log(
        "Top 3 émotions dominantes avec intensités moyennes :",
        emotionWithMeanConfidence
      );
      setEmotionAnalyse(emotionWithMeanConfidence);
      // getUserByEmail(account.username)
      //   .then((res) => {
      //     console.log("USER", res);
      //   })
      //   .catch((err) => console.log("eRR", err));
      if (account) {
        console.log("IS Account");
        let emotionsiDS = [];
        console.log('emotionAnalaeiurwqo', emotionAnalyses)
        emotionAnalyses.forEach((el) => {
          createEmotionUser(el)
            .then((res) => {
              console.log('test', emotionsiDS.push(res.data["@id"]))
            })
            .catch((err) => console.log("Err", err));
        });
        console.log('emotionids', emotionsiDS)
        getUserByEmail(account.username)
          .then((res) => {
            const userId = res.data.member[0]["@id"];
            analyseResultUpdate(session, userId, emotionsiDS)
              .then((res) => {
                setEmotionAnalyse([]);
                navigate("/analyse/result");
              })
              .catch((err) => console.log("eRR", err));
          })
          .catch((err) => console.log("eRR", err));
      }
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {isCameraOn ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            mirrored={isMirrored}
            onUserMedia={() => setLoading(false)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
          <canvas
            ref={canvasRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "12px",
              transform: isMirrored ? "scaleX(-1)" : "none", // Appliquer le miroir au canvas aussi
            }}
          />
          {loading && (
            <Stack
              justifyContent="center"
              alignItems="center"
              position="absolute"
              width="100%"
              height="100%"
            >
              <CircularProgress />
            </Stack>
          )}
        </>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            borderRadius: "12px",
          }}
        >
          Caméra désactivée
        </div>
      )}

      {/* Bouton activer/désactiver caméra */}
      {!loading && (
        <Button
          sx={{
            position: "absolute",
            top: "50px",
            right: "50px",
            backgroundColor: isCameraOn ? "#e74c3c" : "#2ecc71",
            color: "white",
          }}
          onClick={() => {
            if (isCameraOn) stopCamera();
            else setLoading(true);
            setIsCameraOn(!isCameraOn);
            setCamActive((v) => !v);
          }}
          startIcon={<VideoCameraBack />}
        >
          {isCameraOn ? "Couper caméra" : "Activer caméra"}
        </Button>
      )}
    </div>
  );
};

export default WebcamDisplay;
