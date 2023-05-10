import { prisma } from "@/db";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const items = await prisma.item.findMany();

  return (
    <>
      <div>{children}</div>
      <div>
        {items.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </div>
    </>
  );
};

export default Layout;
