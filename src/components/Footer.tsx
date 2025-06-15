import Container from './Container'

export function Footer() {
  return (
    <footer className='bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800'>
      <Container>
        <div className='py-4 flex flex-col lg:flex-row items-center'>
          <div className='text-center lg:text-left'>
            <p className='text-sm text-neutral-500 dark:text-neutral-400'>
              © {new Date().getFullYear()} Aramis Sennyey. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
