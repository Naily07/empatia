// theme/theme.ts
import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#12B2C1", light: "#0c7c87", dark: "#41c1cd", contrastText: '#fff' },
            secondary: { main: "#E5F9F8", light: "#a0aead", dark: "#eafaf9" },
            background: {
              default: "#F7FFFF",
              paper: "#E5F9F8",
            },
            text: {
              primary: "#000000",
              secondary: "#555555",
            },
          }
        : {
            primary: {
              main: "#12B2C1", 
              light: "#63ccff", 
              dark: "#0a7a8c", 
              contrastText: "#ffffff",
            },
            secondary: {
              main: "#E5F9F8", // Votre couleur secondaire adaptée au mode sombre
              light: "#ffffff",
              dark: "#b3c6c6",
              contrastText: "#000000",
            },
            background: {
              default: "#121212",
              paper: "#1d1d1d",
            },
            text: {
              primary: "#ffffff",
              secondary: "#b0bec5",
            },
          }),
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
      h1: {
        fontSize: "48px",
        lineHeight: "56px", // Ligne légèrement plus grande pour un meilleur espacement
        "@media (max-width:600px)": {
          fontSize: "32px",
          lineHeight: "38px",
        },
      },
      h2: {
        fontSize: "36px",
        lineHeight: "42px",
        "@media (max-width:600px)": {
          fontSize: "28px",
          lineHeight: "34px",
        },
      },
      h3: {
        fontSize: "30px",
        lineHeight: "36px",
        "@media (max-width:600px)": {
          fontSize: "24px",
          lineHeight: "30px",
        },
      },
      h4: {
        fontSize: "24px",
        lineHeight: "30px",
        "@media (max-width:600px)": {
          fontSize: "20px",
          lineHeight: "26px",
        },
      },
      h5: {
        fontSize: "20px",
        lineHeight: "26px",
        "@media (max-width:600px)": {
          fontSize: "18px",
          lineHeight: "24px",
        },
      },
      h6: {
        fontSize: "16px",
        lineHeight: "22px",
        "@media (max-width:600px)": {
          fontSize: "14px",
          lineHeight: "20px",
        },
      },
      body1: {
        fontSize: '16px',
        lineHeight: '24px', // Bonne lisibilité pour les paragraphes
        '@media (max-width:600px)': {
          fontSize: '14px',
          lineHeight: '20px',
        },
      },
      body2: {
        fontSize: '14px',
        lineHeight: '20px',
        '@media (max-width:600px)': {
          fontSize: '12px',
          lineHeight: '18px',
        },
      },
      caption: {
        fontSize: '12px',
        lineHeight: '16px',
      },
    },
    shape: {
      borderRadius: 8,
    },
  });
