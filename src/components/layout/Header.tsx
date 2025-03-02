import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToFAQ = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (router.pathname !== '/') {
      router.push('/#faq');
      return;
    }
    const faqSection = document.getElementById('faq');
    if (faqSection) {
      faqSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative bg-gradient-to-r from-green-950 via-[#0B2A1F] to-green-950">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] pointer-events-none" />
      
      <nav className="relative container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <div className="h-12 w-12 md:h-16 md:w-16 bg-white rounded-full overflow-hidden flex items-center justify-center p-1">
              <Image
                src="/images/logos/alc_logo.svg"
                alt="Alpinia Lawn Care"
                width={300}
                height={300}
                priority
                className="h-30 w-30"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-light text-white tracking-wider">ALPINIA</span>
              <span className="text-xs md:text-sm font-medium text-white/80 tracking-widest">LAWN CARE</span>
            </div>
          </Link>

          {/* Hamburger menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
            <Link href="/services" className="text-white/90 hover:text-white transition-colors">Services</Link>
            <Link href="/about" className="text-white/90 hover:text-white transition-colors">About</Link>
            <a href="/#faq" onClick={scrollToFAQ} className="text-white/90 hover:text-white transition-colors">FAQ</a>
            <Link href="/contact" className="text-white/90 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-64 opacity-100 mt-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-4 py-4">
            <Link
              href="/"
              className="text-white/90 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-white/90 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-white/90 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="/#faq"
              onClick={scrollToFAQ}
              className="text-white/90 hover:text-white transition-colors"
            >
              FAQ
            </a>
            <Link
              href="/contact"
              className="text-white/90 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 