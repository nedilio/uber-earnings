import { addData, updateData } from "@/services/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  await addData(data);

  data.time = new Date().toISOString();

  return NextResponse.json(data);
}

export async function PUT(request: Request) {
  const { id, ...data } = await request.json();
  const res = await updateData(id, data);
  return NextResponse.json(res);
}
