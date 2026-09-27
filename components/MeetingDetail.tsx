import { SacramentMeeting } from "../lib/types";

export default function MeetingDetail({ meeting }: { meeting: SacramentMeeting }) {
  return (
    <div className="space-y-2 print:p-8 print:bg-white">
      <h2 className="text-xl font-bold">{meeting.date} — {meeting.meetingType}</h2>
      <p>Presiding: {meeting.presiding}</p>
      <p>Conducting: {meeting.conducting}</p>
      <p>Opening Hymn: {meeting.openingHymn.title}</p>
      <p>Opening Prayer: {meeting.openingPrayer}</p>
      <p>Sacrament Hymn: {meeting.sacramentHymn.title}</p>
      <h3 className="font-semibold">Speakers:</h3>
      <ul>
        {meeting.speakers.map((s, i) => (
          <li key={i}>{s.name} — {s.topic}</li>
        ))}
      </ul>
      <p>Closing Hymn: {meeting.closingHymn.title}</p>
      <p>Closing Prayer: {meeting.closingPrayer}</p>

      {/* Print button */}
      <button
        onClick={() => window.print()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 print:hidden"
      >
        Print Agenda
      </button>
    </div>
  );
}
