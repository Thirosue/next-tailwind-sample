import glob from 'fast-glob'
import * as path from 'path'

interface Article {
  slug: string
  author: string
  date: string
  title: string
  description: string
  component: any
}

async function importArticle(articleFilename: string): Promise<Article> {
  let module = await import(
    `../pages/articles/${articleFilename}`
  )
  let meta = module.meta
  let component = module.default
  return {
    slug: articleFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
    component,
  }
}

export async function getAllArticles(): Promise<Article[]> {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => new Date(z.date).getMilliseconds() - new Date(a.date).getMilliseconds())
}
