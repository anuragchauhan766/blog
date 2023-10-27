"use server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const postBlog = async (formData: FormData) => {
  try {
    const session = await auth();
    if (!session) return;
    const textContent = formData.get("content");
    const image = formData.get("image");
    const video = formData.get("video");
    const title = formData.get("title");
    if (!textContent || !title) return;
    const { imageUrl, videoUrl } = await uploadFile(
      session.user?.id,
      image as File,
      video as File
    );
    await db.blog.create({
      data: {
        authorId: session.user.id,
        text: textContent.toString().trim(),
        image: imageUrl,
        video: videoUrl,
        title: title?.toString().trim(),
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const uploadFile = async (userid: string, image?: File, video?: File) => {
  const supabase = createServerActionClient({ cookies });
  const bucket = supabase.storage.from("media");
  let res: { imageUrl: string | undefined; videoUrl: string | undefined } = {
    imageUrl: undefined,
    videoUrl: undefined,
  };
  if (image && image.type !== "application/octet-stream" && image.size !== 0) {
    const { data, error } = await bucket.upload(
      userid + "/" + Date.now() + "image",
      image
    );
    if (error) {
      console.log(error);
      throw new Error("Cannot Upload media");
    } else {
      res.imageUrl = bucket.getPublicUrl(data.path).data.publicUrl;
    }
  }
  if (video && video.type !== "application/octet-stream" && video.size !== 0) {
    const { data, error } = await bucket.upload(
      userid + "/" + Date.now() + "video",
      video
    );
    if (error) {
      console.log(error);
      throw new Error("Cannot Upload media");
    } else {
      res.videoUrl = bucket.getPublicUrl(data.path).data.publicUrl;
    }
  }
  return res;
};
