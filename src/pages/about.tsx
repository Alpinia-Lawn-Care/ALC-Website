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
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-950 via-[#0B2A1F] to-green-950 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
          <p className="text-xl text-center text-white/90 max-w-2xl mx-auto">
            Professional lawn care services in the Rio Grande Valley
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          {/* Our Story Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-green-950 text-center">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Founded with a passion for creating beautiful outdoor spaces, Alpinia Lawn Care has been serving the Rio Grande Valley community with professional and reliable lawn care services.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We take pride in transforming and maintaining landscapes that enhance the beauty of your property while providing exceptional customer service.
            </p>
          </div>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-950 via-[#0B2A1F] to-green-950 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Lawn?</h2>
              <p className="text-white/80 mb-6">
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
      </div>
    </div>
  );
} 