import CommentCard from "@/components/CommentCard";
import CommentBox from "@/components/commentBox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatTimeRelative } from "@/helper/formatDataRelative";
import { auth } from "@/lib/auth";
import { getBlog } from "@/lib/queries/blog";
import Image from "next/image";

async function BlogPage({ params }: { params: { id: string } }) {
  const session = await auth();
  const blog = await getBlog(params.id);
  if (!blog) return null;
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="max-w-2xl w-full h-full overflow-y-auto no-scrollbar p-2 pb-20">
        <div className="w-full flex flex-col items-center justify-center gap-4 bg-white dark:bg-black-foreground p-5 rounded-lg">
          {blog.image ? (
            <div className="w-full">
              <Image
                src={blog.image}
                alt="blog cover image"
                width={0}
                height={0}
                sizes="100vw"
                className="rounded-2xl w-full h-auto object-contain"
              />
            </div>
          ) : null}

          <div className="w-full flex flex-row items-center justify-start gap-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src={blog.author.image as string} />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-baseline justify-center text-sm ">
              <div className="font-semibold">{blog.author.name}</div>
              <div className="-mt-1 font-light text-gray-700">
                {formatTimeRelative(blog.createdAt)}
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-2 flex-col  border-b-[0.5px] border-b-violet-400/40  dark:border-b-gray-800 pb-2">
            <div className="w-full text-4xl font-extrabold">
              <h1>{blog.title}</h1>
            </div>
            {blog.video ? (
              <div>
                <video
                  src={blog.video}
                  controls
                  className="rounded-2xl w-full"
                ></video>
              </div>
            ) : null}

            <div className="w-full">
              <p className="whitespace-pre-wrap text-base font-medium ">
                {blog.text}
              </p>
            </div>
          </div>
          <div
            id="comment-box"
            className="w-full flex flex-col items-center justify-center gap-2"
          >
            {session && <CommentBox session={session} blogId={blog.id} />}
            {blog.comments.length > 0
              ? blog.comments.map((comment) => (
                  <CommentCard {...comment} key={comment.id} />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
