import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.svg"
              alt="Success Partners"
              width={180}
              height={60}
              className="h-14 w-auto brightness-0 invert mb-6"
            />
            <p className="text-gray-400 leading-relaxed text-lg max-w-md">
              شركة عراقية متخصصة في الخدمات الهندسية، التطوير العقاري، الوكالات التجارية، والتجارة العامة
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">تواصل معنا</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+9647755554017"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-3"
                >
                  <Phone className="h-5 w-5" />
                  <span>+964 775 555 4017</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@successpartners-iq.com"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-3"
                >
                  <Mail className="h-5 w-5" />
                  <span className="break-all">info@successpartners-iq.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>العراق</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6">تابعنا</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/successpartnersiq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#154762] flex items-center justify-center transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/company/successpartnersiq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#154762] flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400">
            <p className="text-base">© {new Date().getFullYear()} شركاء النجاح. جميع الحقوق محفوظة</p>
            <div className="flex gap-8">
              <Link href="/privacy" className="hover:text-white transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="/imprint" className="hover:text-white transition-colors">
                البصمة
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
