import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked } from "marked";

const CONTENT_DIR = path.join(process.cwd(), "content");

// Mirrors the options the previous Saga/Parsley pipeline used: hard line
// breaks plus GitHub-flavoured extras (tables, strikethrough, task lists).
const marked = new Marked({ gfm: true, breaks: true });

export type Page = {
  slug: string;
  title: string;
  html: string;
};

export function getPageSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md") && file !== "index.md")
    .map((file) => path.basename(file, ".md"));
}

export function getPage(slug: string): Page {
  const source = fs.readFileSync(path.join(CONTENT_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(source);

  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    html: marked.parse(content, { async: false }),
  };
}
