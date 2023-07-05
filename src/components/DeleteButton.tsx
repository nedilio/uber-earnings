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
  return <Button onClick={() => handelDelete(id)}>Delete</Button>;
};

export default DeleteButton;
