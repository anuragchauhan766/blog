"use client";
import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";
import SignUp from "./SignUp";
function Hero() {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(
      ".hero-heading",
      { y: [-10, 0], opacity: [0, 1] },
      { duration: 0.5 }
    );
    animate(".hero-para", { y: [10, 0], opacity: [0, 1] }, { duration: 1 });
  }, []);

  return (
    <main className="w-full h-full flex items-center justify-center">
      <div
        ref={scope}
        className="flex items-center justify-center  flex-col gap-2 w-full max-w-2xl"
      >
        <h1 className="text-4xl xs:text-5xl font-extrabold text-purple hero-heading text-center">
          Write, Share, Inspire
        </h1>
        <p className="text-lg xs:text-xl font-medium text-center hero-para w-3/4">
          Empower yourself to write, share your insights, and inspire others
          through your words
        </p>
      </div>
    </main>
  );
}

export default Hero;
