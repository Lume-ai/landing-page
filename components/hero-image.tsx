"use client";
import React, { useRef } from "react";
import { Container } from "./container";
import dynamic from "next/dynamic";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Dot } from "./common/dots";

const Lottie = dynamic(() => import("react-lottie-player/dist/LottiePlayerLight"), {
  ssr: false,
});

const springConfig = {
  stiffness: 300,
  damping: 30,
};

export const HeroImage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const translateX = useTransform(springX, [-0.5, 0.5], [-40, 40]);
  const translateY = useTransform(springY, [-0.5, 0.5], [-40, 40]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = (e.clientX - centerX) / rect.width;
    const y = (e.clientY - centerY) / rect.height;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <Container className="border-divide relative flex items-start justify-start border-x p-2 perspective-distant md:p-4 lg:p-8">
      <Dot top left />
      <Dot top right />
      <Dot bottom left />
      <Dot bottom right />
      <div className="relative w-full">
        <motion.div
          ref={ref}
          className="relative z-10 h-full w-full cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            opacity: {
              duration: 0.3,
              delay: 1,
            },
          }}
          style={{
            translateX,
            translateY,
          }}
        >
          <Lottie
            loop
            play
            path="https://lottie.host/b5899916-3443-462a-b6d4-f7971df4fa77/jnTQLVTFsD.json"
            className="w-full rounded-lg"
            style={{ width: "100%", height: "auto" }}
          />
        </motion.div>
      </div>
    </Container>
  );
};
