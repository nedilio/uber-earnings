"use client";

import { earnings } from "@/utils/mockdata";

const AddAll = () => {
  const handleAddAll = () => {
    console.log("AddAll");
    earnings.forEach(async (earning) => {
      const { id, ...rest } = earning;
      console.log(rest);
      fetch("/api/earning", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rest),
      });
    });
  };
  return <button onClick={handleAddAll}>AddAll</button>;
};

export default AddAll;
