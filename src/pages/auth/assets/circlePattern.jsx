import { Box } from "@mui/material";
import gsap from "gsap";
import { useEffect, useRef } from "react";
export default function CirclePatternBox({
  top = "0%",
  left,
  right,
  size = 80,
  bottom = "0%",
  spacing = "10px",
  backgroundColor = "#f3f3f36e",
  borderColor = "#f3f3f36e",
  borderWidth = 2,
}) {
  const circleRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      circleRef.current,
      { opacity: 0, scale: 0.5, y: -20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 2,
        ease: "power2.out",
      }
    );
  }, []);
  return (
    <Box
      ref={circleRef}
      sx={{
        position: "absolute",
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        borderRadius: "50%",
        border: `${borderWidth}px solid ${borderColor}`,
        zIndex: -1,
        boxSizing: "border-box",
        pointerEvents: "none",
        // effet visuel d'un "padding" interne entre bordure et fond :
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: `${spacing}`,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          backgroundColor,
        }}
      />
    </Box>
  );
}
