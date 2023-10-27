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
        className="flex items-center justify-center  flex-col gap-2"
      >
        <h1 className="text-5xl font-extrabold text-purple hero-heading">
          Write, Share, Inspire
        </h1>
        <p className="text-xl font-medium text-center hero-para">
          Empower yourself to write, share your insights,
          <br /> and inspire others through your words
        </p>
      </div>
    </main>
  );
}

export default Hero;
