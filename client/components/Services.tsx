import { useRef, useState, useEffect } from "react";
import { Truck, Package, Shield, BarChart3, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  color: string;
}

const serviceCategories = [
  { id: "transport", label: "Transport", icon: Truck },
  { id: "storage", label: "Storage", icon: Package },
  { id: "protection", label: "Protection", icon: Shield },
  { id: "management", label: "Management", icon: BarChart3 },
  { id: "solutions", label: "Solutions", icon: Zap },
];

const services: ServiceCard[] = [
  {
    id: "spot",
    title: "Logistics Spot",
    description: "Get fixed prices and guaranteed loading when booking your shipments online.",
    category: "transport",
    icon: <Truck className="w-12 h-12" />,
    color: "from-blue-50 to-blue-100",
  },
  {
    id: "contract",
    title: "Contract Service",
    description: "Transport your goods with stable rates and choice of allocation options.",
    category: "transport",
    icon: <Package className="w-12 h-12" />,
    color: "from-cyan-50 to-cyan-100",
  },
  {
    id: "storage",
    title: "Warehouse Solutions",
    description: "Secure storage and inventory management for your goods.",
    category: "storage",
    icon: <Package className="w-12 h-12" />,
    color: "from-green-50 to-green-100",
  },
  {
    id: "quote",
    title: "Freight Quote",
    description: "Get a freight quote for standard and specialized shipments easily.",
    category: "management",
    icon: <BarChart3 className="w-12 h-12" />,
    color: "from-purple-50 to-purple-100",
  },
  {
    id: "go",
    title: "Logistics Go",
    description: "Book and manage your deliveries from door to door with a simple platform.",
    category: "transport",
    icon: <Truck className="w-12 h-12" />,
    color: "from-pink-50 to-pink-100",
  },
  {
    id: "spot",
    title: "Logistics Spot",
    description: "Get fixed prices and guaranteed loading when booking your shipments online.",
    category: "transport",
    icon: <Truck className="w-12 h-12" />,
    color: "from-blue-50 to-blue-100",
  },
  {
    id: "contract",
    title: "Contract Service",
    description: "Transport your goods with stable rates and choice of allocation options.",
    category: "transport",
    icon: <Package className="w-12 h-12" />,
    color: "from-cyan-50 to-cyan-100",
  },
  {
    id: "storage",
    title: "Warehouse Solutions",
    description: "Secure storage and inventory management for your goods.",
    category: "storage",
    icon: <Package className="w-12 h-12" />,
    color: "from-green-50 to-green-100",
  },
  {
    id: "quote",
    title: "Freight Quote",
    description: "Get a freight quote for standard and specialized shipments easily.",
    category: "management",
    icon: <BarChart3 className="w-12 h-12" />,
    color: "from-purple-50 to-purple-100",
  },
  {
    id: "go",
    title: "Logistics Go",
    description: "Book and manage your deliveries from door to door with a simple platform.",
    category: "transport",
    icon: <Truck className="w-12 h-12" />,
    color: "from-pink-50 to-pink-100",
  },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("transport");

  // Create infinite loop array
  const infiniteServices = [...services, ...services];

  // Auto-scroll infinite loop
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let speed = 0.9; // scroll speed
    let isHovering = false;

    const scroll = () => {
      if (!isHovering) {
        container.scrollLeft += speed;
      }

      // Reset to beginning when reaching half
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      requestAnimationFrame(scroll);
    };

    scroll();

    // Pause on hover
    container.addEventListener("mouseenter", () => (isHovering = true));
    container.addEventListener("mouseleave", () => (isHovering = false));

    return () => {
      container.removeEventListener("mouseenter", () => {});
      container.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <section id="services" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Logistics services and solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A modern and flexible set of services that grow with your needs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-gray-200 pb-6">
          {serviceCategories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 font-medium transition-all rounded-t-lg border-b-2 -mb-6",
                activeCategory === category.id
                  ? "border-b-primary text-primary"
                  : "border-b-transparent text-gray-600 hover:text-primary"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="hidden sm:inline">{category.label}</span>
            </button>
            );
          })}
        </div>

        {/* INFINITE SCROLL SERVICES */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-scroll pb-4 whitespace-nowrap hide-scrollbar"
        >
          {infiniteServices.map((service, index) => (
            <div key={index} className="min-w-[80%] md:min-w-[50%] lg:min-w-[33%]">
              <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/30">

                {/* Gradient Header */}
                <div
                  className={`bg-gradient-to-br ${service.color} h-44 flex items-center justify-center`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>

                  <button className="inline-flex gap-1 text-primary font-semibold text-sm hover:gap-2 transition-all">
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
