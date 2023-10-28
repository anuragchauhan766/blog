import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { ComentwithAuther } from "@/lib/queries/comment";
import { formatTimeRelative } from "@/helper/formatDataRelative";

function CommentCard(props: ComentwithAuther) {
  return (
    <Card className="w-full bg-transparent dark:bg-transparent">
      <CardHeader className="flex flex-row items-center justify-start gap-2">
        <Avatar className="w-8 h-8">
          {props.author.image && <AvatarImage src={props.author.image} />}

          <AvatarFallback>B</AvatarFallback>
        </Avatar>
        <div className="flex items-center justify-center gap-1">
          <div className="font-semibold">{props.author.name}</div>•
          <div className=" font-light text-gray-700">
            {formatTimeRelative(props.createdAt)}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-black dark:text-white font-normal">
          {props.text}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export default CommentCard;
