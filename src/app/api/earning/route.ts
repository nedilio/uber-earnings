import { addData, getData, updateData } from "@/services/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  await addData(data);

  data.time = new Date().toISOString();

  return NextResponse.json(data);
}

export async function GET() {
  const res = await getData();
  return NextResponse.json(res);
}
