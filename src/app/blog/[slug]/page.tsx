import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { CustomPre, CustomCode } from "@/components/CodeBlock";
import Utterances from "@/components/Utterances";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";
import { mergeKeywords } from "@/lib/metadata-utils";
import { JSX } from "react";

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

    const title = frontmatter.title ? frontmatter.title : "Blog Post";

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

  const { frontmatter, content } = await getPostData(slug);

  const components = {
    pre: CustomPre,
    code: CustomCode,
    a: ({ href, children, ...props }: any) => {
      const isExternal =
        href && (href.startsWith("http://") || href.startsWith("https://"));
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          {...props}
        >
          {children}
        </a>
      );
    },
    ...(["h1", "h2", "h3", "h4", "h5", "h6"] as const).reduce((acc, tag) => {
      acc[tag] = ({ children, ...props }: any) => {
        const textContent =
          typeof children === "string"
            ? children
            : Array.isArray(children)
            ? children
                .map((child) =>
                  typeof child === "string"
                    ? child
                    : typeof child === "object" && child?.props?.children
                    ? Array.isArray(child.props.children)
                      ? child.props.children.join("")
                      : child.props.children
                    : ""
                )
                .join("")
            : "";

        const id = textContent
          .toLowerCase()
          .replace(/[^a-z0-9가-힣]+/g, "-")
          .replace(/(^-|-$)/g, "");
        const Tag = tag as keyof JSX.IntrinsicElements;

        return (
          <Tag id={id} className="group relative" {...props}>
            <a href={`#${id}`} aria-label={`${textContent} 섹션으로 링크`}>
              #
            </a>
            {children}
          </Tag>
        );
      };
      return acc;
    }, {} as any),
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
          repo="ejayyy/ejayyy.github.io"
          issueTerm="pathname"
          label="blog-comment"
        />
      </div>
    </div>
  );
}

export const dynamicParams = false;
