import { Prisma } from "@prisma/client";
import { db } from "../prisma";

export type BlogwithAutherandComments = Prisma.BlogGetPayload<
  typeof blogwithAutherandComments
>;

export const blogwithAutherandComments =
  Prisma.validator<Prisma.BlogDefaultArgs>()({
    include: {
      _count: {
        select: {
          comments: true,
        },
      },
      comments: {
        include: {
          author: {
            select: {
              name: true,
              image: true,
            },
          },
        },
      },
      author: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });

export const getBlogs = async () => {
  "use server";
  try {
    return db.blog.findMany({
      ...blogwithAutherandComments,
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const getBlog = async (id: string) => {
  "use server";
  try {
    return db.blog.findUnique({
      where: {
        id: id,
      },
      ...blogwithAutherandComments,
    });
  } catch (error) {
    console.log(error);
  }
};
