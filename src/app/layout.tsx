import Container from '@/components/Container'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/global.css'

export const metadata = { title: 'Aramis Sennyey | Personal Site', description: 'Ponderings of eternal k8s.' }

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased'>
        <main className='flex flex-col h-screen justify-between'>
          <Header />
          <div className='mb-auto'>
            {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
            <Container>{children}</Container>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
