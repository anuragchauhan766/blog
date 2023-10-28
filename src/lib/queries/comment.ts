import { Prisma } from "@prisma/client";

export type ComentwithAuther = Prisma.CommentGetPayload<
  typeof commentswithAuther
>;

export const commentswithAuther = Prisma.validator<Prisma.CommentDefaultArgs>()(
  {
    include: {
      author: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  }
);
