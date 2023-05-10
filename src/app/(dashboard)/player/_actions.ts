"use server";

import { prisma } from "@/db";
import { revalidatePath } from "next/cache";

export async function createItem(data: { title: string }) {
  await prisma.item.create({
    data,
  });

  revalidatePath("/player");
}

export async function updateItem(id: number, data: { title: string }) {
  await prisma.item.update({
    where: { id },
    data,
  });

  revalidatePath(`/player`);
  revalidatePath(`/player/all-items`);
  revalidatePath(`/player/all-layout`);
  revalidatePath(`/player/${id}`);
}
