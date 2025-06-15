import { getAllPosts } from '@/lib/blog/fetch'
import { PostHeader } from '@/components/blog/PostHeader'
import DateFormatter from '@/components/DateFormatter'

function PostListItem({ post }) {
  return (
    <div key={post.slug} className='mb-12'>
      <a href={`/blog/posts/${post.slug}`} className='no-underline'>
        <div className='text-gray-500 dark:text-gray-400 mb-2'>
          <DateFormatter dateString={post.date} />
        </div>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1'>{post.title}</h2>
      </a>
    </div>
  )
}

export default async function Post() {
  const posts = getAllPosts().slice(0, 10)

  return (
    <article className='mb-32'>
      {posts.map((post) => (
        <PostListItem key={post.slug} post={post} />
      ))}
    </article>
  )
}
