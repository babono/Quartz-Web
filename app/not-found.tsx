import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-custom flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-neon-purple">
        404
      </p>
      <h1 className="font-display text-4xl font-extrabold md:text-5xl">
        This page went{" "}
        <span className="gradient-text-purple-blue">off the grid.</span>
      </h1>
      <p className="max-w-md text-muted">
        The page you were looking for doesn&apos;t exist — or it moved somewhere
        more focused.
      </p>
      <Link className="glowing-btn" href="/">
        Back to home
      </Link>
    </div>
  );
}
