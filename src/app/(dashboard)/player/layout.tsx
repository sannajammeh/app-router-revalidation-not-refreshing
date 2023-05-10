import { prisma } from "@/db";
import Link from "next/link";
import React from "react";
import CreateItem from "./CreateItem";
import ManualPushToItems from "./ManualPushToItems";

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const items = await prisma.item.findMany();
  return (
    <div className="grid grid-cols-2 h-screen">
      <aside className="border-r border-gray-400 p-8">
        <div className="grid grid-cols-1 gap-3">
          {items.map((item) => (
            <Link href={`/player/${item.id}`} key={item.id}>
              ITEM LINK: {item.title}
            </Link>
          ))}
          {!!!items.length && <CreateItem />}
          <Link href={`/player/all-items`}>All Items</Link>
          <Link href={`/player/all-items-layout`}>All Items using Layout</Link>
          <ManualPushToItems />
        </div>
      </aside>
      <div className="p-8">{children}</div>
    </div>
  );
};

export default Layout;
