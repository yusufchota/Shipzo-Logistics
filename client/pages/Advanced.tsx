import Header from "@/components/Header";
import { BarChart3, TrendingUp, Users, Clock, ShieldCheck, Zap } from "lucide-react";

export default function Advanced() {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights into your shipping patterns and cost optimization opportunities.",
    },
    {
      icon: TrendingUp,
      title: "Growth Solutions",
      description: "Scalable logistics infrastructure designed to grow with your business.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "24/7 expert support team tailored to your enterprise needs.",
    },
    {
      icon: Clock,
      title: "Real-time Operations",
      description: "Live tracking and instant notifications for all your shipments.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with international standards.",
    },
    {
      icon: Zap,
      title: "API Integration",
      description: "Seamless integration with your existing systems and workflows.",
    },
  ];

  const stats = [
    { value: "150+", label: "Countries Served", icon: "🌍" },
    { value: "10M+", label: "Shipments/Year", icon: "📦" },
    { value: "99.9%", label: "Uptime", icon: "⚡" },
    { value: "24/7", label: "Support", icon: "🎯" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Advanced Logistics Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience the next generation of logistics management with our cutting-edge technology and enterprise-grade solutions designed for modern supply chains.
            </p>
            <button className="inline-flex px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg">
              Request Demo
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-lg transition-all"
              >
                <p className="text-4xl mb-3">{stat.icon}</p>
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Enterprise Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                      <Icon className="w-6 h-6 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Logistics?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses worldwide that trust us with their supply chain operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Trusted by Industry Leaders
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "John Smith",
                  company: "Global Trade Inc.",
                  quote: "This platform revolutionized how we manage our supply chain.",
                  avatar: "👨‍💼",
                },
                {
                  name: "Sarah Johnson",
                  company: "Premium Logistics",
                  quote: "The best investment we made for our logistics operations.",
                  avatar: "👩‍💼",
                },
                {
                  name: "Michael Chen",
                  company: "Asia Pacific Shipping",
                  quote: "Exceptional support and innovative features throughout.",
                  avatar: "👨‍💼",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <p className="text-4xl">{testimonial.avatar}</p>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  <div className="flex gap-1 mt-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="text-xl">⭐</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
