"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Session } from "next-auth/types";
import { autoHeight } from "@/helper/autoheight";
import { Button } from "./ui/button";
import SubmitCommentButton from "./submitCommentButton";
import { postCommnet } from "@/actions/postCommnet";

function CommentBox(props: { session: Session; blogId: string }) {
  const [comment, setComment] = useState("");
  return (
    <form
      className="w-full flex flex-col items-start justify-start gap-2"
      action={async (data) => {
        console.log("dfdasdfasdf");
        await postCommnet(data, props.session?.user.id, props.blogId);
        setComment("");
      }}
    >
      <div className="flex gap-2 items-start justify-center w-full">
        <Avatar className="h-8 w-8">
          {props.session?.user?.image && (
            <AvatarImage src={props.session?.user?.image} alt="user profile" />
          )}

          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <textarea
          className="bg-transparent appearance-none outline-none w-full h-auto resize-none font-extrabold  text-base dark:text-white overflow-hidden box-border placeholder:text-base placeholder:font-extrabold placeholder:text-neutral-500 py-2 px-6"
          placeholder="Comment here..."
          rows={1}
          name="comment"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
            autoHeight(e);
          }}
        ></textarea>
      </div>
      <div className="w-full flex justify-end">
        <SubmitCommentButton comment={comment} />
      </div>
    </form>
  );
}

export default CommentBox;
