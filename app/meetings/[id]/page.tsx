import MeetingDetail from "../../../components/MeetingDetail";

export default async function MeetingDetailPage({ params }: { params: { id: string } }) {
  const res = await fetch(`http://localhost:3000/api/meetings/${params.id}`, {
    cache: "no-store",
  });

  // Handle errors based on status codes
  if (res.status === 400) {
    return <p>Invalid meeting ID. Please provide a valid number.</p>;
  }

  if (res.status === 404) {
    return <p>No meeting found with ID {params.id}.</p>;
  }

  if (!res.ok) {
    return <p>Failed to load meeting.</p>;
  }

  const meeting = await res.json();
  return <MeetingDetail meeting={meeting} />;
}
