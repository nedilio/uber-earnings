import Form from "@/components/Form";
import { earnings } from "@/utils/mockdata";
import React from "react";

const EarningEdit = ({ params }: { params: { id: string } }) => {
  const earning = earnings.find((earning) => earning.id === params.id);

  return (
    <div>
      EarningEdit {params.id}
      <Form earning={earning} />
    </div>
  );
};

export default EarningEdit;
