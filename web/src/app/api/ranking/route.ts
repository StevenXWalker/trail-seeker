import { NextResponse } from "next/server";
import { rankingWeights } from "../../data/trails";

export async function GET() {
  return NextResponse.json({
    weights: rankingWeights,
    description: "Weights for the Trailseeker ranking model.",
  });
}
