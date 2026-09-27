export default function Header() {
  // Format today's date in US style (MM/DD/YYYY)
  const today = new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <header className="bg-brand dark:bg-gray-900 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600 dark:text-white">
        Sacrament Meeting Planner
      </h1>
      <div className="flex items-center gap-4">
        <span className="text-blue-600 dark:text-white">{today}</span>
        {/* Render the toggle here */}
        
      </div>
    </header>
  );
}
