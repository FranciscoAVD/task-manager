//Preliminary layout by Frank

import { Sidebar } from "./_components/sidebar";

export default function DashboardPage() {
  return (
    <main className="grow xl:grid xl:grid-cols-[255px_1fr]">
      <section className="border">
        <Sidebar />
      </section>
      <section className="border">
        <section className="border">Top Banner Container</section>
        <section className="border">
          General
          <section className="border">Table Tiews</section>
        </section>
        <section>
          <section className="border">Filters</section>
          Tables
        </section>
      </section>
    </main>
  );
}
