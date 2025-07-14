import * as faceapi from 'face-api.js';

useEffect(() => {
  const loadModels = async () => {
    const MODEL_URL = '/models';
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
    console.log("Modèles chargés ✅");
  };

  loadModels();
}, []);