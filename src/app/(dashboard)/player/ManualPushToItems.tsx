/* eslint-disable react/no-unescaped-entities */
"use client";

import { useRouter } from "next/navigation";
import React from "react";

const ManualPushToItems = () => {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.push("/player/all-items")}>
        All Items useRouter()
      </button>

      <button
        onClick={() =>
          router.push("/player/all-items", { forceOptimisticNavigation: true })
        }
      >
        All Items useRouter() 'forceOptimisticNavigation1'
      </button>
    </>
  );
};

export default ManualPushToItems;
