import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

function PublishButton(props: { content: string; title: string }) {
  const { pending } = useFormStatus();
  const { content, title } = props;

  return (
    <Button
      type="submit"
      disabled={pending || !content || !title}
      className="flex items-center justify-center w-20 bg-purple dark:bg-purple dark:text-white dark:hover:bg-purple-dark hover:bg-purple-dark "
    >
      {pending ? <Loader2 className=" h-6 w-6 animate-spin" /> : "Publish"}
    </Button>
  );
}

export default PublishButton;
