"use client";
import React, { useTransition } from "react";
import { createItem } from "./_actions";

const CreateItem = () => {
  const [isPending, startTransition] = useTransition();
  console.log(
    "🚀 ~ file: CreateItem.tsx:7 ~ CreateItem ~ isPending:",
    isPending
  );
  const handleClick = async () => {
    console.log("PRESSED");
    startTransition(async () => {
      await createItem({ title: "new item" });
    });
  };
  return (
    <button disabled={isPending} onClick={handleClick}>
      {isPending ? "Creating..." : "Create Item"}
    </button>
  );
};

export default CreateItem;
