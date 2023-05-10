"use client";
import React from "react";
import { updateItem } from "../_actions";

interface Props {
  id: number;
  title: string;
}

const ClientForm = ({ title, id }: Props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    updateItem(id, {
      title: data.title as string,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          defaultValue={title}
          required
          placeholder="enter title"
        />

        <button className="block mt-2">Update item</button>
      </form>
    </>
  );
};

export default ClientForm;
