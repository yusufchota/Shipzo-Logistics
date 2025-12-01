import { Calendar, ArrowRight } from "lucide-react";

interface ScheduleRoute {
  route: string;
  departure: string;
  arrival: string;
  frequency: string;
  capacity: string;
}

export default function Schedule() {
  const schedules: ScheduleRoute[] = [
    {
      route: "New York → Hamburg",
      departure: "Every Monday",
      arrival: "14 days",
      frequency: "Weekly",
      capacity: "98% Full",
    },
    {
      route: "Shanghai → Rotterdam",
      departure: "Every Wednesday",
      arrival: "28 days",
      frequency: "Weekly",
      capacity: "85% Full",
    },
    {
      route: "Singapore → Dubai",
      departure: "Daily",
      arrival: "3 days",
      frequency: "Daily",
      capacity: "92% Full",
    },
    {
      route: "Los Angeles → Singapore",
      departure: "Every Friday",
      arrival: "12 days",
      frequency: "Weekly",
      capacity: "88% Full",
    },
  ];

  return (
    <section id="schedules" className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Shipping Schedules
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Plan your shipments with our reliable and frequent sailing schedules. We offer multiple routes to connect major markets worldwide.
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {schedules.map((schedule, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-cyan-50">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">{schedule.frequency}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                  {schedule.route}
                </h3>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold mb-1">
                      Departure
                    </p>
                    <p className="text-gray-900 font-medium">{schedule.departure}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold mb-1">
                      Transit Time
                    </p>
                    <p className="text-gray-900 font-medium">{schedule.arrival}</p>
                  </div>
                </div>

                {/* Capacity Bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                      Vessel Capacity
                    </p>
                    <span className="text-sm font-bold text-primary">{schedule.capacity}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      style={{ width: schedule.capacity.replace("% Full", "") + "%" }}
                    ></div>
                  </div>
                </div>

                <button className="w-full mt-4 py-2 text-primary font-semibold hover:bg-primary/5 rounded-lg transition-colors flex items-center justify-center gap-2">
                  Book Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Need a custom schedule? Our logistics experts can help find the perfect solution for your needs.
          </p>
          <button className="inline-flex px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            View All Routes
          </button>
        </div>
      </div>
    </section>
  );
}
