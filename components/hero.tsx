"use client";
import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { ShimmerText } from "./shimmer-text";
import { SubHeading } from "./subheading";
import { GartnerLogo, GartnerLogoText, Star } from "@/icons/general";
import { motion } from "motion/react";
import { Button } from "./button";
import { Badge } from "./badge";
import Link from "next/link";

export const Hero = () => {
  return (
    <Container className="border-divide flex flex-col items-center justify-center border-x px-4 pt-10 pb-10 md:pt-32 md:pb-20">
      <Badge text="For fast moving logistics, supply chain, and manufacturing teams." />
      <Heading className="mt-4">
        <span className="text-brand">AI Agents</span> for Logistics & Operations{" "}
      </Heading>

      <SubHeading className="mx-auto mt-6 max-w-lg">
        Automate logistics, finance, and compliance workflows with AI agents that reason, act, and deliver.
      </SubHeading>

      <div className="mt-6 flex items-center gap-4">
        <Button as={Link} href="https://cal.com/team/lume/lume-intro-20" target="_blank" rel="noopener noreferrer">
          Book a demo
        </Button>
        {/* <Button variant="secondary" as={Link} href="/pricing">
          View pricing
        </Button> */}
      </div>
    </Container>
  );
};
