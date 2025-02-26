import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-[600px] text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/images/hero_section_ai_generated.jpg"
          alt="Beautiful lawn"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Professional Lawn Care Services in Your Area
          </h1>
          <p className="text-xl mb-8">
            Transform your outdoor space with our expert lawn care services. 
            We provide professional, reliable, and affordable lawn maintenance 
            solutions tailored to your needs.
          </p>
          <div className="space-x-4">
            <Link 
              href="/services" 
              className="inline-block bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-100 transition-colors"
            >
              Our Services
            </Link>
            <Link 
              href="/contact" 
              className="inline-block bg-transparent border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 