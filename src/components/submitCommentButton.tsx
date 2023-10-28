"use client";
import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

function SubmitCommentButton(props: { comment: string }) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending || !props.comment}
      className="flex items-center justify-center w-20 bg-purple dark:bg-purple dark:text-white dark:hover:bg-purple-dark hover:bg-purple-dark "
    >
      {pending ? <Loader2 className=" h-6 w-6 animate-spin" /> : "Comment"}
    </Button>
  );
}

export default SubmitCommentButton;
