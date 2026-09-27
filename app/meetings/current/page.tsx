import { redirect } from "next/navigation";

export default async function CurrentMeetingPage() {
  const today = new Date();
  // Calculate the most recent Sunday
  const sunday = new Date(today.setDate(today.getDate() - today.getDay()));
  const dateStr = sunday.toISOString().split("T")[0];

  const res = await fetch(`http://localhost:3000/api/meetings?date=${dateStr}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <p>Failed to load current meeting.</p>;
  }

  const meetings = await res.json();

  if (meetings.length > 0) {
    // Redirect to the first meeting found for that Sunday
    redirect(`/meetings/${meetings[0].id}`);
  } else {
    // Graceful fallback when no meeting exists
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold">No Meeting Found</h2>
        <p className="mt-2 text-gray-700 dark:text-zinc-400">
          There is no sacrament meeting scheduled for {dateStr}.
        </p>
      </div>
    );
  }
}
