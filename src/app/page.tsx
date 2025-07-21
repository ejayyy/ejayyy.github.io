import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

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
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            My Blog
          </h1>
        </header>
        <div className="space-y-6">
          <div></div>
          {sortedPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="main-link">
                <div className="basis-2/3">
                  <h2 className="font-semibold">{post.title}</h2>
                  {post.spoiler && (
                    <span className="text-sm">{post.spoiler}</span>
                  )}
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
      </div>
    </div>
  );
}
