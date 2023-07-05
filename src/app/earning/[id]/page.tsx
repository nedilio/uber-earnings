import Form from "@/components/Form";
import { getEarningById } from "@/services/supabase";
import { earnings } from "@/utils/mockdata";
import React from "react";

export default async function EarningEdit({
  params,
}: {
  params: { id: string };
}) {
  const data = await fetch(
    `${process.env.API_BASE_URL}/api/earning/${params.id}`,
    { cache: "no-store" }
  );
  const earning = await data.json();

  return (
    <div>
      EarningEdit {params.id}
      <Form
        earning={earning}
        baseURL={process.env.API_BASE_URL ? process.env.API_BASE_URL : ""}
      />
    </div>
  );
}
