import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-black">
      <main className="text-center p-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-zinc-50">
          Welcome to the Sacrament Meeting Planner
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-zinc-400">
          Plan, view, and print meeting agendas easily. 
          Bishoprics and members can track announcements, hymns, speakers, and more.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="/meetings"
            className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            View Meetings
          </a>
          <a
            href="/meetings/current"
            className="px-6 py-3 rounded bg-gray-200 text-gray-900 hover:bg-gray-300"
          >
            Current Meeting
          </a>
        </div>
      </main>
    </div>
  );
}
