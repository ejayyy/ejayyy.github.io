import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export default async function Home() {
  // Read all files from the content directory
  const contentDir = path.join(process.cwd(), 'src/app/content')
  const files = fs.readdirSync(contentDir)

  // Filter for .md and .mdx files
  const posts = files
    .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
    .map(file => {
      const slug = file.replace(/\.(md|mdx)$/, '')
      return {
        slug,
        filename: file,
        title: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')
      }
    })

  return (
    <div>
      <div>
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2>{post.title}</h2>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}