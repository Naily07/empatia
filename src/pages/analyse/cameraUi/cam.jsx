// src/components/WebcamDisplay.jsx

import { Button, CircularProgress, IconButton, Stack, Typography } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import { VideoCameraBack } from "@mui/icons-material";
import * as faceapi from "face-api.js";

const WebcamDisplay = ({ setCamActive }) => {
  const webcamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [loading, setLoading] = useState(true);
  const [emotion, setEmotion] = useState(null);

  // Charger les modèles
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
      console.log("Modèles face-api chargés ✅");
    };
    loadModels();
  }, []);

  // Détection régulière
  useEffect(() => {
    let interval;
    if (isCameraOn && !loading) {
      interval = setInterval(() => detectEmotions(), 500);
    }
    return () => clearInterval(interval);
  }, [isCameraOn, loading]);

  const detectEmotions = async () => {
    if (
      webcamRef.current &&
      webcamRef.current.video &&
      faceapi.nets.tinyFaceDetector.params
    ) {
      const detections = await faceapi
        .detectAllFaces(
          webcamRef.current.video,
          new faceapi.TinyFaceDetectorOptions()
        )
        .withFaceExpressions();

      if (detections.length > 0) {
        const emotions = detections[0].expressions;
        const mostLikely = Object.entries(emotions).reduce((a, b) =>
          a[1] > b[1] ? a : b
        );
        setEmotion(mostLikely[0]); // Exemple : "happy"
      } else {
        setEmotion(null);
      }
    }
  };

  const stopCamera = () => {
    const stream = webcamRef.current?.stream;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  return (
    <>
      {isCameraOn ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            videoConstraints={videoConstraints}
            width={1280}
            height={720}
            onUserMedia={() => setLoading(false)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />
          {loading && (
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              position={"absolute"}
              width={"100%"}
              height={"100%"}
            >
              <CircularProgress />
            </Stack>
          )}

          {/* Affichage de l'émotion détectée */}
          {emotion && (
            <Typography
              variant="h5"
              sx={{
                position: "absolute",
                top: "20px",
                left: "20px",
                backgroundColor: "rgba(0,0,0,0.6)",
                color: "white",
                padding: "8px 16px",
                borderRadius: "8px",
              }}
            >
              Émotion : {emotion}
            </Typography>
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
            if (isCameraOn) {
              stopCamera();
            } else {
              setLoading(true);
            }
            setIsCameraOn(!isCameraOn);
            setCamActive((v) => !v);
          }}
          startIcon={<VideoCameraBack />}
        >
          {isCameraOn ? "Couper caméra" : "Activer caméra"}
        </Button>
      )}
    </>
  );
};

export default WebcamDisplay;
