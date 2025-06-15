import DateFormatter from '../DateFormatter'
import { PostTitle } from './PostTitle'
import { type Author } from '@/types/author'

type Props = { title: string; date: string }

export function PostHeader({ title, date }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className='mb-6 text-lg'>
        <DateFormatter dateString={date} />
      </div>
    </>
  )
}
