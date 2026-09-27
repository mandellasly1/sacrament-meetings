import MeetingCard from "../../components/MeetingCard";

export default async function MeetingsPage() {
  // Fetch meetings from your API route instead of lib/meetings-db
  const res = await fetch("http://localhost:3000/api/meetings", {
    cache: "no-store", // ensures fresh data every time
  });

  if (!res.ok) {
    return <p>Failed to load meetings.</p>;
  }

  const meetings = await res.json();

  return (
    <div className="grid gap-4">
      {meetings.map((m: any) => (
        <MeetingCard key={m.id} meeting={m} />
      ))}
    </div>
  );
}
