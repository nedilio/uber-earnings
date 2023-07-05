"use client";

import { Button } from "@tremor/react";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const handelDelete = (id: string) => {
    console.log("❌ Deleting earning: ", id);
    fetch(`/api/earning/${id}`, {
      method: "DELETE",
    }).then(() => {
      router.refresh();
    });
  };
  return (
    <Button
      className="text-xs"
      color="slate"
      size="xs"
      onClick={() => handelDelete(id)}
    >
      ❌
    </Button>
  );
};

export default DeleteButton;
