import { NextResponse } from "next/server";
import { getMeetings } from "../../../lib/meetings-db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date"); // optional ?date=YYYY-MM-DD
  const meetings = getMeetings(date);
  return NextResponse.json(meetings);
}
