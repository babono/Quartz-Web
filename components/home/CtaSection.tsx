import { site } from "@/lib/site";

export function CtaSection() {
  return (
    <section
      className="section-glow relative overflow-hidden py-20 md:py-28"
      style={{ ["--section-glow" as string]: "#a626f2" }}
    >
      <div className="container-custom relative z-10 flex flex-col items-center text-center gap-6">
        <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
          Ready to take your{" "}
          <span className="gradient-text-purple-blue">attention back?</span>
        </h2>
        <p className="text-muted max-w-md text-lg">
          Join Quartz on TestFlight and start breaking the loop today.
        </p>
        <a
          className="glowing-btn text-base px-10 py-4"
          href={site.testFlightUrl}
        >
          Download Quartz on TestFlight
        </a>
      </div>
    </section>
  );
}
