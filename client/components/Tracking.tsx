import { Search, MapPin, Clock } from "lucide-react";

export default function Tracking() {
  const trackingSteps = [
    { status: "Picked up", date: "Jan 15, 2024", location: "New York, USA" },
    { status: "In Transit", date: "Jan 16, 2024", location: "Atlantic Ocean" },
    { status: "Customs Clearance", date: "Jan 18, 2024", location: "Port of Hamburg" },
    { status: "Out for Delivery", date: "Jan 20, 2024", location: "Berlin, Germany" },
  ];

  return (
    <section id="tracking" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Real-time Shipment Tracking
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Know exactly where your shipment is at all times. Our advanced tracking system provides real-time updates and notifications for every step of your journey.
            </p>

            {/* Search Box */}
            <div className="mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter tracking number..."
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:border-primary focus:outline-none text-gray-900 placeholder-gray-400"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors">
                  <Search className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: MapPin, title: "Location", desc: "GPS tracking" },
                { icon: Clock, title: "Timeline", desc: "Estimated arrival" },
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{feature.title}</p>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Tracking Timeline */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Shipment Status</h3>
            <div className="space-y-6">
              {trackingSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${index < 2 ? "bg-primary" : "bg-gray-300"}`}></div>
                    {index !== trackingSteps.length - 1 && (
                      <div className={`w-0.5 h-12 ${index < 2 ? "bg-primary" : "bg-gray-300"}`}></div>
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="font-semibold text-gray-900">{step.status}</p>
                    <p className="text-sm text-gray-600">{step.date}</p>
                    <p className="text-sm text-primary font-medium">{step.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
