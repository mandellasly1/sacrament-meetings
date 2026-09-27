import { SacramentMeeting } from "../lib/types";
import Link from "next/link";

export default function MeetingCard({ meeting }: { meeting: SacramentMeeting }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-semibold">{meeting.date}</h2>
      <p>Presiding: {meeting.presiding}</p>
      <p>Conducting: {meeting.conducting}</p>
      <Link href={`/meetings/${meeting.id}`} className="text-blue-600">
        View Details
      </Link>
    </div>
  );
}
