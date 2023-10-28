import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaRegCommentDots } from "react-icons/fa6";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { BlogwithAutherandComments } from "@/lib/queries/blog";

import Image from "next/image";
import Link from "next/link";
import { formatTimeRelative } from "@/helper/formatDataRelative";

function BlogCard(props: BlogwithAutherandComments) {
  return (
    <Card className="dark:bg-black-foreground">
      <Link href={`blog/${props.id}`}>
        <CardHeader className="flex items-center justify-start flex-row gap-x-2 space-y-0">
          <Avatar className="w-8 h-8">
            <AvatarImage src={props.author.image as string} />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-baseline justify-center text-sm ">
            <div className="font-semibold">{props.author.name}</div>
            <div className="-mt-1 font-light text-gray-700">
              {formatTimeRelative(props.createdAt)}
            </div>
          </div>
        </CardHeader>
        <CardContent className="w-full  flex flex-col-reverse xs:flex-row items-start justify-between gap-3">
          <div className="flex items-start flex-col gap-2">
            <CardTitle className="font-extrabold">{props.title}</CardTitle>
            <CardDescription>{props.text?.substring(0, 20)}</CardDescription>
          </div>
          {props.image ? (
            <div className="w-1/3">
              <Image
                src={props.image}
                alt="blog cover image"
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-2xl w-full h-auto object-contain"
              />
            </div>
          ) : props.video ? (
            <div className="w-1/3">
              <video
                src={props.video}
                controls
                autoPlay
                muted
                className="rounded-2xl w-full h-auto"
              />
            </div>
          ) : null}
        </CardContent>
        <CardFooter>
          <Button
            variant="ghost"
            asChild
            className="flex items-center justify-start gap-2  p-2"
          >
            <Link href={`blog/${props.id}#comment-box`}>
              {props._count.comments}
              <FaRegCommentDots />
              Comments
            </Link>
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
}

export default BlogCard;
