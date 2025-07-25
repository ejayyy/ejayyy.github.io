import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CustomPre, CustomCode } from "@/components/CodeBlock";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "src/content");
  const files = fs.readdirSync(contentDir);
  
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Read the MDX file as raw text
  const filePath = path.join(process.cwd(), "src/content", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");

  // Parse frontmatter and content
  const { data: frontmatter, content } = matter(fileContent);

  // MDX components for custom rendering
  const components = {
    pre: CustomPre,
    code: CustomCode,
  };

  return (
    <div className="space-y-8">
      <div>
        {frontmatter.title && (
          <h1 className="font-semibold text-gray-900 dark:text-white mt-0 mb-2">
            {frontmatter.title}
          </h1>
        )}
        {frontmatter.spoiler && (
          <small className="text-sm">{frontmatter.spoiler}</small>
        )}
        {frontmatter.date && (
          <p className="text-right">
            {frontmatter.date instanceof Date
              ? frontmatter.date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : String(frontmatter.date)}
          </p>
        )}
      </div>
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <MDXRemote 
          source={content} 
          components={components}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </div>
    </div>
  );
}

export const dynamicParams = false;
