"use server";
import { db } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const postCommnet = async (
  data: FormData,
  autherId: string,
  blogId: string
) => {
  try {
    const comment = data.get("comment");

    console.log("dfd");
    if (!comment) throw new Error("comment empty");
    await db.comment.create({
      data: {
        text: comment.toString().trim(),
        authorId: autherId,
        blogId: blogId,
      },
    });
    revalidatePath("/blog/" + blogId);
  } catch (error) {
    console.log(error);
  }
};
