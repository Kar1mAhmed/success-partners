import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#154762] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src="/logo.svg"
              alt="Success Partners"
              width={160}
              height={45}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              Leading Iraqi company providing integrated solutions in engineering, real estate, commercial agencies, and general trade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-gray-300 hover:text-[#39BA9F] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-300 hover:text-[#39BA9F] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#values" className="text-sm text-gray-300 hover:text-[#39BA9F] transition-colors">
                  Our Values
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-[#39BA9F] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/imprint" className="text-sm text-gray-300 hover:text-[#39BA9F] transition-colors">
                  Imprint
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+9647755554017"
                  className="flex items-center space-x-3 text-sm text-gray-300 hover:text-[#39BA9F] transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+964 775 555 4017</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+9647855554017"
                  className="flex items-center space-x-3 text-sm text-gray-300 hover:text-[#39BA9F] transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+964 785 555 4017</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@successpartners-iq.com"
                  className="flex items-center space-x-3 text-sm text-gray-300 hover:text-[#39BA9F] transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>info@successpartners-iq.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/successpartnersiq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#39BA9F] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/successpartnersiq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#39BA9F] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Success Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
