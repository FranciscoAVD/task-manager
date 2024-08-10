//Preliminary layout by Frank

export default function DashboardPage() {
  return (
    <main className="grow xl:grid xl:grid-cols-[300px_1fr]">
        <section className="border">Sidebar Container</section>
        <section className="border">
            <section className="border">
                Top Banner Container
            </section>
            <section className="border">
                General
                <section className="border">
                    Table Tiews
                </section>
            </section>
            <section>
                <section className="border">Filters</section>
                Tables
            </section>
        </section>
    </main>
  )
}
