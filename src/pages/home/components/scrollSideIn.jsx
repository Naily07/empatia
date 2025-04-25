import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

export default function ScrollSlideIn({ children, delay = 0.3, x = -100 }) {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  // const [scrollDirection, setScrollDirection] = useState("down");
  const domRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   const diff = latest - scrollY.getPrevious();
  //   setScrollDirection(diff > 0 ? "down" : "up");
  // });

  useEffect(() => {
    const el = domRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const isAboveViewport = rect.top > 0;

    if (inView) {
      controls.start("visible");
    } else if (!inView  && isAboveViewport) {
      controls.start("hidden");
    }
  }, [inView]);

  const variants = {
    hidden: { opacity: 0, x },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={(node) => {
        ref(node); // useInView
        domRef.current = node; // accès au DOM
      }}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
