import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/blog/fetch'
import markdownToHtml from '@/lib/blog/markdownToHtml'
import Container from '@/components/Container'
import Header from '@/components/Header'
import { PostBody } from '@/components/blog/PostBody'
import { PostHeader } from '@/components/blog/PostHeader'

export default async function Post(props: Params) {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const content = await markdownToHtml(post.content || '')

  return (
    <article className='mb-32'>
      <PostHeader title={post.title} date={post.date} />
      <PostBody content={content} />
    </article>
  )
}

type Params = { params: Promise<{ slug: string }> }

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const title = `${post.title} | Aramis' Personal Blog`

  return { title, openGraph: { title } }
}

export async function generateStaticParams() {
  const posts = getAllPosts()

  return posts.map((post) => ({ slug: post.slug }))
}
