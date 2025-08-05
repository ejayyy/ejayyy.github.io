import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CustomPre, CustomCode } from "@/components/CodeBlock";
import Utterances from "@/components/Utterances";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";
import { mergeKeywords } from "@/lib/metadata-utils";

// Helper function to get post data
async function getPostData(slug: string) {
  const filePath = path.join(process.cwd(), "src/content", `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);

  return { frontmatter, content };
}

export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), "src/content");
  const files = fs.readdirSync(contentDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { frontmatter } = await getPostData(slug);

    const title = frontmatter.title
      ? frontmatter.title
      : "Blog Post";

    const description = frontmatter.spoiler || "Welcome to my Journal";

    // Merge base keywords with post-specific keywords from frontmatter
    const keywords = mergeKeywords(frontmatter.tags);

    return {
      title,
      description,
      keywords,
      openGraph: {
        title: frontmatter.title || "Blog Post",
        description,
        type: "article",
        publishedTime: frontmatter.date
          ? new Date(frontmatter.date).toISOString()
          : undefined,
        authors: ["EJ"],
      },
    };
  } catch (error) {
    return {
      title: "Blog Post | My sweet little blog",
      description: "Welcome to my Journal",
    };
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Get post data using the helper function
  const { frontmatter, content } = await getPostData(slug);

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

      <div className="border-t border-gray-200 dark:border-gray-700">
        <Utterances
          repo={process.env.NEXT_PUBLIC_UTTERANCES_REPO || ""}
          issueTerm="pathname"
          label={process.env.NEXT_PUBLIC_UTTERANCES_LABEL || "blog-comment"}
        />
      </div>
    </div>
  );
}

export const dynamicParams = false;
