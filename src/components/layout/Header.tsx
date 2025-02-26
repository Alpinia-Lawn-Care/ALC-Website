import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="relative bg-gradient-to-r from-green-950 via-[#0B2A1F] to-green-950">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] pointer-events-none" />
      
      <nav className="relative container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <Image
              src="/images/logos/alpinia-logo-white.svg"
              alt="Alpinia Lawn Care"
              width={40}
              height={40}
              priority
            />
            <div className="flex flex-col">
              <span className="text-2xl font-light text-white tracking-wider">ALPINIA</span>
              <span className="text-sm font-medium text-white/80 tracking-widest">LAWN CARE</span>
            </div>
          </Link>
          <div className="space-x-6">
            <Link href="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
            <Link href="/services" className="text-white/90 hover:text-white transition-colors">Services</Link>
            <Link href="/about" className="text-white/90 hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-white/90 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 