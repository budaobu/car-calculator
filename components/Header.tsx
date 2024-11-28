import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="py-4 border-b">
      <div className="container mx-auto px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/apple-touch-icon.png" 
            alt="Logo" 
            width={40} 
            height={40} 
            className="rounded-full"
          />
          <span className="text-xl font-semibold">电车还是油车</span>
        </Link>
      </div>
    </header>
  )
}

