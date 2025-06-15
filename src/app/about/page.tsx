export default function AboutPage() {
  return (
    <>
      <h1 className='text-3xl font-bold'>About Me</h1>
      <p className='mt-4'>
        Hi, I&#39;m Aramis Sennyey, a Software Engineer at DoorDash on the Web DevEx team. I spend most of my days
        working on our monorepo build system for web. I am also a maintainer of the
        <a
          href='https://github.com/backstage/backstage'
          className='text-blue-500 hover:underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          Backstage
        </a>{' '}
        project, which is an open platform for building developer portals. I have a passion for creating tools that
        improve developer experience and productivity. In my free time, I enjoy exploring new technologies, contributing
        to open source projects and hopefully writing more blog posts in the future.
      </p>
    </>
  )
}
