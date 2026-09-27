import { NextResponse } from "next/server";
import { getMeetingById } from "../../../../lib/meetings-db";

export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // Await the params object (Next.js App Router requirement)
    const { id: idParam } = await context.params;
    const id = Number(idParam);

    // Case 1: Invalid ID (not a number)
    if (isNaN(id)) {
      return NextResponse.json(
        { error: "Invalid meeting ID. Must be a number." },
        { status: 400 }
      );
    }

    // Case 2: Meeting not found
    const meeting = getMeetingById(id);
    if (!meeting) {
      return NextResponse.json(
        { error: `No meeting found with ID ${id}` },
        { status: 404 }
      );
    }

    // Case 3: Meeting found
    return NextResponse.json(meeting, { status: 200 });
  } catch (err) {
    // Case 4: Unexpected error (server failure)
    console.error("Server error in GET /api/meetings/[id]:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
