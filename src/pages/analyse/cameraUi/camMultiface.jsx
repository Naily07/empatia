import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";
import { Button, CircularProgress, Stack } from "@mui/material";
import { VideoCameraBack } from "@mui/icons-material";

const emotionsData = {
  0: "Hangry",
  1: "disgust",
  2: "fear",
  3: "happy",
  4: "neutral",
  5: "sad",
  6: "surprised",
};

const MAX_FACES = 1; // Change ici pour limiter à plus de visages

const WebcamDisplay = ({ setCamActive }) => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [loading, setLoading] = useState(true);
  const [emotions, setEmotions] = useState([]);
  const isMirrored = true;

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      console.log("Modèles face-api.js chargés");
    };
    loadModels();
  }, []);

  useEffect(() => {
    let interval;
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

        if (!isMirrored) {
          resizedDetections = resizedDetections.map((d) => {
            const box = d.box;
            const flippedBox = new faceapi.Box(
              dims.width - box.x - box.width,
              box.y,
              box.width,
              box.height
            );
            return { ...d, box: flippedBox };
          });
        }

        // Limiter à MAX_FACES
        resizedDetections = resizedDetections.slice(0, MAX_FACES);

        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, resizedDetections);

        resizedDetections.forEach((detection, i) => {
          const box = detection.box;
          const emotion = emotions[i];
          if (!emotion) return;

          const emotionText = emotion;
          const textWidth = ctx.measureText(emotionText).width;
          ctx.save();
          ctx.scale(-1, -1)
          // if (isMirrored) {
          //   ctx.setTransform(-1, 0, 0, 1, canvas.width, 0);
          // }

          ctx.font = "16px Arial";
          ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
          ctx.fillRect(box.x, box.y - 25, textWidth + 10, 22);
          ctx.fillStyle = "white";
          ctx.fillText(emotionText, box.x + 5, box.y - 8);

          ctx.restore();
        });
      }
    };

    if (isCameraOn && !loading) {
      interval = setInterval(detectFaces, 300);
    }

    return () => clearInterval(interval);
  }, [isCameraOn, loading, emotions]);

  useEffect(() => {
    let interval;
    const captureAndSend = async () => {
      const screenshot = webcamRef.current?.getScreenshot();
      if (!screenshot) return;

      const blob = await fetch(screenshot).then((res) => res.blob());
      const formData = new FormData();
      formData.append("file", blob, "capture.jpg");

      try {
        const res = await fetch("http://127.0.0.1:8000/predict", {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        const detected = Array.isArray(data.class_id)
          ? data.class_id
          : [data.class_id];

        const emotionLabels = detected.slice(0, MAX_FACES).map(
          (id) => emotionsData[id] || ""
        );
        setEmotions(emotionLabels);
      } catch (err) {
        console.error("Erreur backend :", err);
      }
    };

    if (isCameraOn && !loading) {
      interval = setInterval(captureAndSend, 1000); // chaque seconde
    }

    return () => clearInterval(interval);
  }, [isCameraOn, loading]);

  const stopCamera = () => {
    const stream = webcamRef.current?.stream;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {isCameraOn ? (
        <>
          <Webcam
            mirrored={isMirrored}
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
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
              transform: isMirrored ? "scaleX(-1)" : "none",
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
