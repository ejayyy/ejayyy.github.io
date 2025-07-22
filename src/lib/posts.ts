import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Post {
    slug: string;
    filename: string;
    title: string;
    date: Date;
    spoiler?: string;
    draft: boolean;
}

// 서버 사이드에서만 실행되는 함수
export function getAllPosts(): Post[] {
    const contentDir = path.join(process.cwd(), "src/content");
    const files = fs.readdirSync(contentDir);

    const allPosts = files
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

    return allPosts
        .filter((post) => !post.draft)
        .sort((a, b) => b.date.getTime() - a.date.getTime());
} 