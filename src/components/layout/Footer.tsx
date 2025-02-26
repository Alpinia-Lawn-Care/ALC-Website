import { FaFacebook, FaInstagram, FaHome, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCheckCircle, FaClock } from 'react-icons/fa';
import Image from 'next/image';

const serviceAreas = [
  {
    city: "McAllen",
    zip: "78501"
  },
  {
    city: "Edinburg",
    zip: "78539"
  },
  {
    city: "Mission",
    zip: "78572"
  },
  {
    city: "Pharr",
    zip: "78577"
  },
  {
    city: "San Juan",
    zip: "78589"
  },
  {
    city: "Alamo",
    zip: "78516"
  }
];

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-green-950 via-[#0B2A1F] to-green-950 text-white">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.png')] pointer-events-none" />
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="backdrop-blur-sm bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Contact & Hours</h3>
            <div className="space-y-4">
              <div>
                <a href="tel:9562956043" className="flex items-center text-white/90 hover:text-white transition-colors">
                  <FaPhoneAlt className="mr-3" />
                  <span>(956) 295-6043</span>
                </a>
                <a href="mailto:info@alpinialawncare.com" className="flex items-center text-white/90 hover:text-white transition-colors mt-2">
                  <FaEnvelope className="mr-3" />
                  <span>info@alpinialawncare.com</span>
                </a>
              </div>
              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center text-white/90 mb-2">
                  <FaClock className="mr-3" />
                  <span className="text-sm font-medium">Business Hours</span>
                </div>
                <p className="text-sm text-white/70 ml-6">Mon-Fri: 8am - 6pm</p>
                <p className="text-sm text-white/70 ml-6">Sat: By appointment</p>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-sm bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <div className="flex space-x-6">
                <a 
                  href="https://facebook.com/alpinialawncare" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  <FaFacebook size={24} />
                </a>
                <a 
                  href="https://instagram.com/alpinialawncare" 
                  target="https://www.instagram.com/alpinialawncare/" 
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  <FaInstagram size={24} />
                </a>
                <a 
                  href="https://www.homeadvisor.com/alpinialawncare" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/90 hover:text-white transition-colors"
                >
                  <FaHome size={24} />
                </a>
              </div>
              <p className="text-sm text-white/80 border-t border-white/10 pt-4">
                Follow us for lawn care tips, recent projects, and special offers
              </p>
            </div>
          </div>
          <div className="backdrop-blur-sm bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              Service Areas
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {serviceAreas.map((area) => (
                <div 
                  key={area.city} 
                  className="flex items-center text-white/90"
                >
                  <FaCheckCircle className="text-green-500 text-xs mr-1.5" />
                  <span className="text-sm">{area.city}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/70 border-t border-white/10 pt-4">
              Serving the Rio Grande Valley area
            </p>
          </div>
        </div>
        <div className="mt-12 text-center border-t border-white/10 pt-8">
          <p className="text-white/80">&copy; {new Date().getFullYear()} Alpinia Lawn Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 