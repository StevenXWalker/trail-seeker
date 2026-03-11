import { NextResponse } from "next/server";
import { bucketList, recentHikes } from "../../data/trails";

export async function GET() {
  return NextResponse.json({
    recent: recentHikes,
    bucketList,
  });
}
