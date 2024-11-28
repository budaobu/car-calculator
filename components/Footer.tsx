import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-8 py-4 border-t">
      <div className="container mx-auto px-4">
        <nav className="flex justify-center space-x-4">
          <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900">
            关于
          </Link>
          <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
            联系
          </Link>
          <Link href="/disclaimer" className="text-sm text-gray-600 hover:text-gray-900">
            免责声明
          </Link>
          <a
            href="https://github.com/budaobu/car-calculator"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            GitHub
          </a>
        </nav>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          Made with <a href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="hover:underline">v0.dev</a>
        </div>
      </div>
    </footer>
  )
}

