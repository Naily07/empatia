import { Stack } from "@mui/material";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function CircleBox({ children }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  const domRef = useRef(null);

  useEffect(() => {
    const el = domRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const isAboveViewport = rect.top > 0;

    if (inView) {
      controls.start("visible");
    }
    if (!inView && isAboveViewport) {
      controls.start("hidden");
    }
  }, [inView]);

  return (
    <motion.div
      ref={(node) => {
        ref(node); // useInView
        domRef.current = node; // accès au DOM
      }}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.4, delay: 0.9 },
        },
      }}
    >
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        width={"35px"}
        height={"35px"}
        borderRadius={"50%"}
        // p={2}
        bgcolor={"primary.main"}
        color={"#FFF"}
      >
        {children}
      </Stack>
    </motion.div>
  );
}
