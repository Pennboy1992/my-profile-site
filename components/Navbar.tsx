import Link from 'next/link'
import Games from '../pages/games'
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">
            Resume
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-blue-600">
              Resume
            </Link>
            <Link href="/about" className="hover:text-blue-600">
              About
            </Link>
            <Link href="/portfolio" className="hover:text-blue-600">
              Apps
            </Link>
            <Link href="/games" className="hover:text-blue-600">
            Games</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

