import { prisma } from "@/db";
import React from "react";

const AllItems = async () => {
  const items = await prisma.item.findMany();
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default AllItems;
