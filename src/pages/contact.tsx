import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: "Phone",
      content: "(956) 295-6043",
      link: "tel:+19562956043"
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: "Email",
      content: "alpinialawncare@gmail.com",
      link: "mailto:alpinialawncare@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: "Service Area",
      content: "Rio Grande Valley, TX\nMcAllen • Edinburg",
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-950 via-[#0B2A1F] to-green-950 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-xl text-center text-white/90 max-w-2xl mx-auto">
            Get in touch to learn more about our lawn care services
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-8 text-center text-green-950">Contact Information</h2>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-green-600 mt-1">{info.icon}</div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-gray-600 hover:text-green-600 transition-colors whitespace-pre-line"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 