import faceDetect from "../../../assets/faceDetect.png";
import faceDetectDark from "../../../assets/faceDetectDark.png";
import visageemo from "../../../assets/visageemo.png";
import thinkingDark from "../../../assets/divergent-thinking.png";
import thinkingLight from "../../../assets/divergent-thinking_ligth.png";

export const steps = [
  {
    icon: { light: faceDetect, dark: faceDetectDark },
    title: "Regardez-vous",
    text: "Activez votre caméra et laissez EMPATIA vous observer avec douceur.",
    step: 1,
  },
  {
    icon: { light: visageemo, dark: visageemo },
    title: "Ressentez",
    text: "Votre visage parle. EMPATIA traduit vos émotions en mots et en couleurs.",
    step: 2,
  },
  {
    icon: { light: thinkingLight, dark: thinkingDark },
    title: "Comprenez",
    text: "Apprenez à écouter vos émotions et prenez soin de vous.",
    step: 3,
  },
  // {
  //   icon: faceDetect,
  //   title: "Comprenez",
  //   text: "Chaque micro-expression est décodée avec précision.",
  //   step: 4,
  // },
  // {
  //   icon: faceDetect,
  //   title: "Comprenez",
  //   text: "Chaque micro-expression est décodée avec précision.",
  //   step: 5,
  // },
  // {
  //   icon: faceDetect,
  //   title: "Comprenez",
  //   text: "Chaque micro-expression est décodée avec précision.",
  //   step: 6,
  // },
  // {
  //   icon: faceDetect,
  //   title: "Comprenez",
  //   text: "Chaque micro-expression est décodée avec précision.",
  //   step: 7,
  // },
];
