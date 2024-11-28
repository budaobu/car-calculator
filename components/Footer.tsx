import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-8 py-4 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <nav className="flex justify-center space-x-4">
          <Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
            关于
          </Link>
          <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
            联系
          </Link>
          <Link href="/disclaimer" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
            免责声明
          </Link>
          <a
            href="https://github.com/budaobu/car-calculator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
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

