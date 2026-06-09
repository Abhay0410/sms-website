
import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

const AnimatedCounter = ({ from = 0, to, suffix = "", prefix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(value) {
          ref.current.textContent = prefix + Math.floor(value) + suffix;
       }
    });
     return () => controls.stop();
   }
 }, [inView, from, to, prefix, suffix]);

 return <span ref={ref}>{prefix}{from}{suffix}</span>;
};

export default AnimatedCounter;
