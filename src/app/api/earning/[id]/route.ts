import {
  deleteEarning,
  getData,
  getEarningById,
  updateData,
} from "@/services/supabase";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const res = await getEarningById(params.id);
  return NextResponse.json(res);
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id, ...data } = await request.json();
  const res = await updateData(params.id, data);
  return NextResponse.json(res);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await deleteEarning(params.id);

  return NextResponse.json({
    message: "Deleted",
    status: "success",
    statusCode: 200,
  });
}
