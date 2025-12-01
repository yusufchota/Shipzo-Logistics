import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Tracking from "@/components/Tracking";
import Schedule from "@/components/Schedule";
import Offices from "@/components/Offices";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Tracking />
      <Schedule />
      <Offices />

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-primary text-sm font-bold">
                  LG
                </div>
                <span className="text-xl font-bold">Logistics</span>
              </div>
              <p className="text-white/80 text-sm">
                Global logistics solutions for modern supply chains.
              </p>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Tracking</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Storage</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Solutions</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/80 text-sm">
              © 2024 Global Logistics. All rights reserved.
            </p>
            <div className="flex gap-6 text-white/80 text-sm">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
