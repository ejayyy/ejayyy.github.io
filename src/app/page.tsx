import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import matter from 'gray-matter'

export default async function Home() {
  const contentDir = path.join(process.cwd(), 'src/app/content')
  const files = fs.readdirSync(contentDir)

  const posts = files
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(contentDir, file)
      const content = fs.readFileSync(filePath, 'utf8')

      const { data: frontmatter } = matter(content)

      const slug = file.replace(/\.(md|mdx)$/, '')
      return {
        slug,
        filename: file,
        title: frontmatter.title || slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' '),
        date: frontmatter.date ? new Date(frontmatter.date) : new Date(0),
        spoiler: frontmatter.spoiler,
        draft: frontmatter.draft || false
      }
    })

  const sortedPosts = posts
    .filter(post => !post.draft)
    .sort((a, b) => b.date.getTime() - a.date.getTime())

  return (
    <div>
      <div>
        {sortedPosts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
              <small>{post.spoiler && <p>{post.spoiler}</p>}</small>
              {post.date && (
                <time dateTime={post.date.toISOString()}>
                  {post.date.toISOString().split('T')[0]}
                </time>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}