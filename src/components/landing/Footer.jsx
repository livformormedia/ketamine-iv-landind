import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Ketamine Central GA</h3>
            <p className="text-purple-200 mb-4">
              Leading provider of ketamine therapy in Central Georgia, dedicated to helping patients 
              find relief from treatment-resistant mental health conditions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-purple-200">
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Treatment Options</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Patient Resources</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Insurance & Payment</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-purple-200">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>123 Medical Plaza Drive<br />Macon, GA 31201</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(478) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@ketaminecentralga.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-purple-200">
          <p>© 2024 Ketamine Central GA. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">Privacy Policy</a>
            {" | "}
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">Terms of Service</a>
            {" | "}
            <a href="#" className="hover:text-amber-400 transition-colors duration-300">Disclaimer</a>
          </p>
        </div>
      </div>
    </footer>
  );
}