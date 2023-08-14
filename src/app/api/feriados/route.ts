import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://apis.digital.gob.cl/fl/feriados/2023", {
    cache: "no-store",
  });
  const feriados = await res.json();
  const mapedFeriados = feriados.map((feriado) => ({
    ...feriado,
    fecha: feriado.fecha + " 00:00",
  }));
  return NextResponse.json(mapedFeriados);
}
