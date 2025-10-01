"use client";

import React from "react";
import { Container } from "./container";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { investorLogos } from "@/constants/investorLogos";

export const LogoCloud = () => {
  return (
    <Container className="border-divide border-x">
      <h2 className="py-8 text-center font-mono text-sm tracking-tight text-neutral-500 uppercase dark:text-gray-300">
        Backed by industry leaders
      </h2>
      <div className="border-divide grid grid-cols-2 border-t md:grid-cols-4">
        {investorLogos.map((logo, position) => {

          return (
            <div
              key={position}
              className={cn(
                "border-divide group relative overflow-hidden",
                "border-r md:border-r-0",
                position % 2 === 0 ? "border-r" : "",
                position < 6 ? "border-b md:border-b-0" : "",
                "md:border-r-0",
                position % 4 !== 3 ? "md:border-r" : "",
                position < 4 ? "md:border-b" : "",
              )}
            >
              <div className="animate-move-left-to-right bg-brand/5 absolute inset-x-0 bottom-0 h-full translate-y-full transition-all duration-200 group-hover:translate-y-0"></div>
              <motion.div
                className="group flex min-h-32 items-center justify-center p-4 py-10 grayscale"
                whileHover={{
                  filter: "grayscale(0)",
                }}
              >
                <motion.img
                  src={logo.src}
                  alt={logo.title}
                  className={cn(
                    "h-8 w-auto object-contain transition-all duration-500 dark:invert dark:filter",
                    logo.className,
                  )}
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
