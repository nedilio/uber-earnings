﻿"use client";

import { Button } from "@tremor/react";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      fetch(`/api/earning/${id}`, {
        method: "DELETE",
      }).then(() => {
        router.refresh();
      });
    }
  };
  return (
    <Button
      className="text-xs"
      color="slate"
      size="xs"
      onClick={() => handleDelete(id)}
    >
      ❌
    </Button>
  );
};

export default DeleteButton;
