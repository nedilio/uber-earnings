import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  //   const res = await fetch("https://data.mongodb-api.com/...", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ time: new Date().toISOString() }),
  //   });

  data.time = new Date().toISOString();

  return NextResponse.json(data);
}
