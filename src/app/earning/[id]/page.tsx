import Form from "@/components/Form";
import { getEarningById } from "@/services/supabase";
import { earnings } from "@/utils/mockdata";
import React from "react";

export default async function EarningEdit({
  params,
}: {
  params: { id: string };
}) {
  const earning = await getEarningById(params.id);

  return (
    <div>
      EarningEdit {params.id}
      <Form earning={earning} />
    </div>
  );
}
