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
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            My Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Thoughts, tutorials, and insights
          </p>
        </header>

        <div className="space-y-6">
          {sortedPosts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200 hover:shadow-md dark:hover:shadow-gray-800/50">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2">
                    {post.title}
                  </h2>
                  {post.spoiler && (
                    <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                      {post.spoiler}
                    </p>
                  )}
                  {post.date && (
                    <time
                      dateTime={post.date.toISOString()}
                      className="text-sm text-gray-500 dark:text-gray-500"
                    >
                      {post.date.toISOString().split('T')[0]}
                    </time>
                  )}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}