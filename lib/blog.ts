import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
  content?: string;
  contentHtml?: string;
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: data.slug || slug,
        title: data.title,
        date: data.date,
        author: data.author || "Philip Riccio",
        description: data.description || "",
      };
    });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fileNames = fs.readdirSync(postsDirectory);
  const fileName = fileNames.find((name) => {
    const fullPath = path.join(postsDirectory, name);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return data.slug === slug || name.replace(/\.md$/, "") === slug;
  });

  if (!fileName) return null;

  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug: data.slug || fileName.replace(/\.md$/, ""),
    title: data.title,
    date: data.date,
    author: data.author || "Philip Riccio",
    description: data.description || "",
    contentHtml,
  };
}

export function getAllPostSlugs(): string[] {
  const posts = getAllPosts();
  return posts.map((post) => post.slug);
}
