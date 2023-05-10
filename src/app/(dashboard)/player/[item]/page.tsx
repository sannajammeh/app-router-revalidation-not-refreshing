import React from "react";
import ClientForm from "./ClientForm";
import { prisma } from "@/db";
import { notFound } from "next/navigation";

const Item = async ({ params: { item } }: any) => {
  const data = await prisma.item.findUnique({
    where: {
      id: Number(item),
    },
  });

  if (!data) return notFound();
  return (
    <div>
      Item {item}
      <ClientForm id={Number(item)} title={data.title} />
    </div>
  );
};

export default Item;
