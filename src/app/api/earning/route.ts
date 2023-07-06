import { addData, getData } from "@/services/supabase";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const response = await addData(data);
  if ("code" in response) return NextResponse.json(response, { status: 400 });
  return NextResponse.json(response, { status: 201 });
}

export async function GET() {
  const res = await getData();
  return NextResponse.json(res);
}
