import { Mail, Phone, Globe, Facebook, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0d1b2a] to-[#000814] text-gray-200 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500 opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-16 relative z-10">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-400">Avention Media</h3>
          <p className="flex items-start gap-2 text-sm mb-3">
            <Globe size={16} className="text-yellow-400 mt-1" />
            1178 Broadway, 3rd Floor #4076 <br /> New York, NY 10001, USA
          </p>
          <p className="flex items-start gap-2 text-sm mb-3">
            <Globe size={16} className="text-blue-400 mt-1" />
            501 Silverside Road, Suite 105 #2448 <br /> Wilmington, DE 19809, USA
          </p>
          <p className="flex items-center gap-2 text-sm mb-2">
            <Phone size={16} className="text-yellow-400" /> +1 (888) 317-9410
          </p>
          <p className="flex items-center gap-2 text-sm mb-4">
            <Mail size={16} className="text-blue-400" /> sales@aventionmedia.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-400 transition">About Us</li>
            <li className="hover:text-blue-400 transition">Privacy Policy</li>
            <li className="hover:text-yellow-400 transition">Our Blog</li>
            <li className="hover:text-blue-400 transition">Careers</li>
            <li className="hover:text-yellow-400 transition">FAQ</li>
            <li className="hover:text-blue-400 transition">Sitemap</li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-400">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-yellow-400 transition">Global Base</li>
            <li className="hover:text-blue-400 transition">Industry Base</li>
            <li className="hover:text-yellow-400 transition">Installed Base</li>
            <li className="hover:text-blue-400 transition">Role Base</li>
            <li className="hover:text-yellow-400 transition">Healthcare Base</li>
            <li className="hover:text-blue-400 transition">Data Hygiene</li>
          </ul>
        </div>

        {/* Newsletter + Social */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-yellow-400">Stay Connected</h3>
          <p className="text-sm mb-4 text-blue-200">
            Subscribe to our newsletter for insights & updates.
          </p>
          <div className="flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 text-sm w-full text-gray-800 focus:outline-none"
            />
            <button className="bg-yellow-400 text-gray-900 px-4 py-2 hover:bg-yellow-500 transition">
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[
              { Icon: Facebook, color: "hover:bg-blue-500" },
              { Icon: Twitter, color: "hover:bg-sky-400" },
              { Icon: Linkedin, color: "hover:bg-blue-600" },
              { Icon: Youtube, color: "hover:bg-red-500" },
            ].map(({ Icon, color }, i) => (
              <div
                key={i}
                className={`p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20 cursor-pointer transition text-gray-200 hover:text-white ${color}`}
              >
                <Icon size={20} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-400">
        © {new Date().getFullYear()} Avention Media. All Rights Reserved.
      </div>
    </footer>
  );
}
