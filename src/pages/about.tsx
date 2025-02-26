import Image from 'next/image';
import Link from 'next/link';
import { FaLeaf, FaHandshake, FaTools } from 'react-icons/fa';

interface ValueProp {
  icon: JSX.Element;
  title: string;
  description: string;
}

const values: ValueProp[] = [
  {
    icon: <FaLeaf className="w-8 h-8 text-green-600" />,
    title: "Eco-Friendly Practices",
    description: "We use sustainable methods and environmentally conscious products to maintain your lawn while protecting our environment."
  },
  {
    icon: <FaHandshake className="w-8 h-8 text-green-600" />,
    title: "Customer First",
    description: "Building lasting relationships through reliable service, clear communication, and exceeding expectations."
  },
  {
    icon: <FaTools className="w-8 h-8 text-green-600" />,
    title: "Professional Excellence",
    description: "Our experienced team uses professional-grade equipment and proven techniques to deliver superior results."
  }
];

export default function About() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-green-950 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Your Local Lawn Care Experts</h1>
            <p className="text-xl text-white/90">
              Serving the Rio Grande Valley with professional and reliable lawn maintenance services since 2023
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Our Story */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="prose prose-lg mx-auto">
            <p>
              Founded in the heart of the Rio Grande Valley, Alpinia Lawn Care was born from a passion 
              for creating and maintaining beautiful outdoor spaces. We understand that a well-maintained 
              lawn is more than just grass – it's an extension of your home and a reflection of your pride 
              in your property.
            </p>
            <p>
              Our team brings years of experience in lawn care and a deep understanding of the unique 
              challenges that come with maintaining lawns in the South Texas climate. We combine this 
              expertise with a commitment to reliability and customer satisfaction to deliver exceptional 
              service to every client.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-green-950 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Lawn?</h2>
          <p className="text-xl mb-8">
            Let us help you maintain a beautiful and healthy lawn year-round
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-white text-green-950 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
} 