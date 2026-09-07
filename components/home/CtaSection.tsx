import { site } from "@/lib/site";

export function CtaSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="bg-orb w-full h-full top-0 left-0 opacity-5 bg-gradient-to-br from-neon-purple to-neon-blue" />
      <div className="container-custom relative z-10 flex flex-col items-center text-center gap-6">
        <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight">
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
