"use client";

import { ReactNode, useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface IProps {
  children: ReactNode;
}


export function Reveal({ children }: IProps) {
  const [isVisible, setIsVisible] = useState("hidden");
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      setIsVisible("visible");
    }
  }, [inView]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={isVisible}
        transition={{ duration: 0.5, delay: 0.12 }}
      >
        {children}
      </motion.div>
    </>
  );
}
