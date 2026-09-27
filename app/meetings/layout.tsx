import NavLinks from "../../components/NavLinks";

export default function MeetingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-6">
      <NavLinks />
      <div className="mt-4">{children}</div>
    </section>
  );
}
