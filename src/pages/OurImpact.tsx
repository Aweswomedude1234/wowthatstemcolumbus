import PageShell from "@/components/layout/PageShell";

const metrics = [
  {
    label: "Students served",
    value: "—",
    note: "Across camps, workshops, and clubs",
  },
  {
    label: "Free programs hosted",
    value: "—",
    note: "Hands-on STEM + chess experiences",
  },
  {
    label: "Volunteer hours",
    value: "—",
    note: "Student-led community impact",
  },
  {
    label: "Partners + sponsors",
    value: "—",
    note: "Local organizations supporting kids",
  },
  {
    label: "Tournaments + showcases",
    value: "—",
    note: "Including USCF-rated chess events",
  },
  {
    label: "Families reached",
    value: "—",
    note: "Central Ohio community connections",
  },
];

export default function OurImpact() {
  return (
    <PageShell
      title="Our Impact"
      description={
        <>
          A snapshot of how WOW That’s STEM Columbus is expanding access to free STEM and chess opportunities.
        </>
      }
      maxWidthClassName="max-w-5xl"
    >
      <div className="space-y-8">
        <section aria-labelledby="impact-metrics">
          <h2 id="impact-metrics" className="text-lg md:text-xl font-semibold tracking-tight">
            Key metrics
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground font-medium max-w-3xl">
            We’ll keep these numbers up to date as we grow. If you share your latest metrics, we can replace the
            placeholders instantly.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-[var(--radius)] border border-border bg-background/50 p-4 shadow-[var(--shadow-soft)]"
              >
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted-foreground">{m.label}</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight">{m.value}</p>
                <p className="mt-1 text-sm text-muted-foreground font-medium">{m.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="impact-story">
          <h2 id="impact-story" className="text-lg md:text-xl font-semibold tracking-tight">
            What it looks like
          </h2>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div className="rounded-[var(--radius)] border border-border bg-card/70 p-5 backdrop-blur-sm">
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                We run free, hands-on workshops where students build real skills—coding, business, robotics, invention,
                and chess. Our goal is to make high-quality opportunities available to every student, regardless of
                background.
              </p>
            </div>
            <div className="rounded-[var(--radius)] border border-border bg-card/70 p-5 backdrop-blur-sm">
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                From beginner-friendly introductions to advanced challenges and competition prep, we focus on confidence,
                community, and consistent growth.
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
