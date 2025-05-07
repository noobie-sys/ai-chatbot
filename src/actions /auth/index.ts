"use server";

import { client } from "@/lib/prisma";

export const onCompleteUserregistration = async (
  fullName: string,
  clerkId: string,
  type: string
) => {
  try {
    const registered = await client.user.create({
      data: {
        fullName,
        clerkId,
        type,
        subscription: {
          create: {},
        },
      },
      select: {
        fullName: true,
        clerkId: true,
        type: true,
      },
    });
    if (registered) {
      return { status: 200, user: registered };
    }
  } catch (error) {
    return { status: 400 };
  }
};
