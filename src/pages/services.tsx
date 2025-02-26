import Image from 'next/image';
import Link from 'next/link';

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 1,
    title: "Basic Lawn Service",
    description: "Professional mowing, edging, and cleanup for residential lawns.",
    price: "Starting at $35",
    features: [
      "Professional lawn mowing",
      "Edge trimming sidewalks & driveways",
      "Weed eating around obstacles",
      "Blowing off all hard surfaces",
      "Weekly or bi-weekly service"
    ]
  },
  {
    id: 2,
    title: "Premium Lawn Care",
    description: "Complete lawn maintenance package with added services.",
    price: "Starting at $50",
    features: [
      "All Basic Service features",
      "Weed control in lawn & beds",
      "Trimming small bushes",
      "Removal of small branches",
      "Monthly service report"
    ]
  }
];

export default function Services() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Lawn Maintenance Services</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Professional and reliable lawn maintenance services in the Rio Grande Valley
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                <p className="text-green-950 font-semibold mb-4">{service.price}</p>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/contact"
            className="inline-block bg-green-950 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>

        <div className="mt-16 text-center text-gray-600">
          <p className="mb-4">* Prices may vary based on lawn size and condition</p>
          <p>* Additional services available upon request</p>
        </div>
      </div>
    </div>
  );
} 