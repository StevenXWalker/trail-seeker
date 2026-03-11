import { NextResponse } from "next/server";
import { trails } from "../../data/trails";

export async function GET() {
  return NextResponse.json({
    updatedAt: new Date().toISOString(),
    trails,
  });
}
