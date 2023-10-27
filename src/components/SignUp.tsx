"use client";
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

function SignUp() {
  return (
    <Button
      onClick={async () => signIn("google", { callbackUrl: "/feed" })}
      className="bg-purple hover:bg-purple-light dark:bg-purple dark:text-white dark:hover:bg-purple-light"
    >
      Sign up
    </Button>
  );
}

export default SignUp;
