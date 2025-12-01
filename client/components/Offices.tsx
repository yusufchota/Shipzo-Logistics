import { MapPin, Phone, Mail } from "lucide-react";

interface Office {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  region: string;
}

export default function Offices() {
  const offices: Office[] = [
    {
      city: "New York",
      country: "USA",
      address: "123 Shipping Lane, New York, NY 10001",
      phone: "+1 (212) 555-0100",
      email: "ny@logistics.com",
      region: "North America",
    },
    {
      city: "Hamburg",
      country: "Germany",
      address: "45 Port Street, Hamburg 20001",
      phone: "+49 (40) 1234-5678",
      email: "hamburg@logistics.com",
      region: "Europe",
    },
    {
      city: "Shanghai",
      country: "China",
      address: "789 Harbor Road, Shanghai, 200001",
      phone: "+86 (21) 5555-8888",
      email: "shanghai@logistics.com",
      region: "Asia Pacific",
    },
    {
      city: "Dubai",
      country: "UAE",
      address: "321 Trade Zone, Dubai, UAE",
      phone: "+971 (4) 555-1000",
      email: "dubai@logistics.com",
      region: "Middle East",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "567 Maritime Avenue, Singapore 018988",
      phone: "+65 6555-0100",
      email: "singapore@logistics.com",
      region: "Asia Pacific",
    },
    {
      city: "Los Angeles",
      country: "USA",
      address: "890 Port Boulevard, Los Angeles, CA 90001",
      phone: "+1 (213) 555-0200",
      email: "la@logistics.com",
      region: "North America",
    },
    {
      city: "Mumbai",
      country: "India",
      address: "123 Shipping Lane, Mumbai, 400001",
      phone: "+91 (22) 5555-0100",
      email: "ny@logistics.com",
      region: "Asia Pacific",
    },
    {
      city: "chennai",
      country: "India",
      address: "45 Port Street, chennai 200001",
      phone: "+49 (40) 1234-5678",
      email: "hamburg@logistics.com",
      region: "bay of Bengal",
    },
    {
      city: "Visakapatanam",
      country: "India",
      address: "789 Harbor Road, Visakapatanam, 200001",
      phone: "+86 (21) 5555-8888",
      email: "shanghai@logistics.com",
      region: "bay of Bengal",
    },
    {
      city: "Sharja",
      country: "UAE",
      address: "321 Trade Zone, Dubai, UAE",
      phone: "+971 (4) 555-1000",
      email: "dubai@logistics.com",
      region: "Middle East",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "567 Maritime Avenue, Singapore 018988",
      phone: "+65 6555-0100",
      email: "singapore@logistics.com",
      region: "Asia Pacific",
    },
    {
      city: "Los Angeles",
      country: "USA",
      address: "890 Port Boulevard, Los Angeles, CA 90001",
      phone: "+1 (213) 555-0200",
      email: "la@logistics.com",
      region: "North America",
    },
  ];

  return (
    <section id="company" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Global Office Network
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With offices in key locations worldwide, we're always ready to support your logistics needs. Visit us or get in touch.
          </p>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Region Badge */}
              <div className="inline-flex px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                {office.region}
              </div>

              {/* City */}
              <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                {office.city}
              </h3>
              <p className="text-gray-600 font-medium mb-6">{office.country}</p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-gray-600 text-sm leading-relaxed">{office.address}</p>
                </div>

                <div className="flex gap-3 items-start">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <a
                    href={`tel:${office.phone}`}
                    className="text-gray-600 text-sm hover:text-primary transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>

                <div className="flex gap-3 items-start">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <a
                    href={`mailto:${office.email}`}
                    className="text-gray-600 text-sm hover:text-primary transition-colors break-all"
                  >
                    {office.email}
                  </a>
                </div>
              </div>

              {/* Button */}
              <button className="w-full mt-6 py-2 border-2 border-gray-200 text-primary font-semibold rounded-lg hover:border-primary hover:bg-primary/5 transition-colors">
                Get Directions
              </button>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl overflow-hidden border border-gray-200 h-96 flex items-center justify-center w-100">
          <div className="text-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5556909.180645258!2d-126.16770869097539!3d47.151301611944795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485e5ffe7c3b0f9%3A0x944278686c5ff3ba!2sWashington%2C%20USA!5e0!3m2!1sen!2sin!4v1764416178496!5m2!1sen!2sin" width="1200" height="450"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
