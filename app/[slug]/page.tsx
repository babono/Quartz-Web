import type { Metadata } from "next";
import { getPage, getPageSlugs } from "@/lib/markdown";

type Props = { params: Promise<{ slug: string }> };

// One static route per Markdown file in content/ — drop in a new .md and it
// gets its own page, exactly as the old Saga pipeline did.
export function generateStaticParams() {
  return getPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  return {
    title: page.title,
    openGraph: { title: page.title },
  };
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const page = getPage(slug);

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-8 font-display">{page.title}</h1>
      <div
        className="prose-content"
        dangerouslySetInnerHTML={{ __html: page.html }}
      />
    </div>
  );
}
