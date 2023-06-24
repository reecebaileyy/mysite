
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-500 text-gray-900">
      <nav className="p-6 border-b border-gray-300">
        <Link className="mr-6" href="/">
          Home
        </Link>
        <Link className="mr-6" href="/projects">
          Projects
        </Link>
        <Link className="mr-6" href="/about">
          About
        </Link>
        <Link className="mr-6" href="/contact">
          Contact
        </Link>
      </nav>
      <main className="p-6">
        <h1 className="text-2xl mb-6">Welcome to my portfolio!</h1>
        <p>This is a basic Next.js portfolio template with Tailwind CSS. Feel free to customize it to fit your needs.</p>
      </main>
    </div>
  )
}
