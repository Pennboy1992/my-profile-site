import Head from 'next/head'
import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode
  title?: string
}

export default function Layout({ children, title = 'My Profile' }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container mx-auto px-4 pt-20">
        {children}
      </main>
    </div>
  )
}