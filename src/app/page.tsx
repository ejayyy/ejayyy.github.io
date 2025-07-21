import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import LaptopCatLight from "/public/laptop-cat-light.svg";
import LaptopCatNight from "/public/laptop-cat-night.svg";

export default async function Home() {
  const contentDir = path.join(process.cwd(), "src/app/content");
  const files = fs.readdirSync(contentDir);

  const posts = files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(contentDir, file);
      const content = fs.readFileSync(filePath, "utf8");

      const { data: frontmatter } = matter(content);

      const slug = file.replace(/\.(md|mdx)$/, "");
      return {
        slug,
        filename: file,
        title:
          frontmatter.title ||
          slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " "),
        date: frontmatter.date ? new Date(frontmatter.date) : new Date(0),
        spoiler: frontmatter.spoiler,
        draft: frontmatter.draft || false,
      };
    });

  const sortedPosts = posts
    .filter((post) => !post.draft)
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="space-y-6">
      <div className="sm:w-90 sm:mr-3 sm:float-left sm:mb-0">
        <LaptopCatLight
          className="w-full h-full fill-slate-600 dark:hidden"
          aria-label="Laptop Cat Logo"
        />
        <LaptopCatNight
          className="w-full h-full fill-rose-200 hidden dark:block"
          aria-label="Laptop Cat Logo"
        />
      </div>
      {sortedPosts.map((post) => (
        <article key={post.slug} className="group">
          <Link href={`/blog/${post.slug}`} className="main-link">
            <div className="basis-2/3">
              <h2 className="font-semibold">{post.title}</h2>
              {post.spoiler && <span className="text-sm">{post.spoiler}</span>}
            </div>
            {post.date && (
              <time className="text-sm" dateTime={post.date.toISOString()}>
                {post.date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            )}
          </Link>
        </article>
      ))}
    </div>
  );
}
