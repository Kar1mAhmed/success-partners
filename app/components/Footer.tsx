import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#154762] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src="/logo.svg"
              alt="شركاء النجاح"
              width={160}
              height={45}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              شركة عراقية رائدة في تقديم حلول متكاملة في الخدمات الهندسية، التطوير العقاري، الوكالات التجارية، والتجارة العامة.
            </p>
          </div>

          {/* Mobile: 2 columns, Desktop: normal */}
          <div className="grid grid-cols-2 lg:contents gap-8 col-span-2 lg:col-span-1">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-gray-300 hover:text-[#39BA9F] transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-gray-300 hover:text-[#39BA9F] transition-colors">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#values" className="text-sm text-gray-300 hover:text-[#39BA9F] transition-colors">
                  قيمنا
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-[#39BA9F] transition-colors">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/imprint" className="text-sm text-gray-300 hover:text-[#39BA9F] transition-colors">
                  معلومات قانونية
                </Link>
              </li>
            </ul>
          </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+9647755554017"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#39BA9F] transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span dir="ltr">+964 775 555 4017</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+9647855554017"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#39BA9F] transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span dir="ltr">+964 785 555 4017</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@successpartners-iq.com"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#39BA9F] transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span dir="ltr">info@successpartners-iq.com</span>
                </a>
              </li>
            </ul>
          </div>

          </div>

          {/* Social Media - Hidden on mobile */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/successpartnersiq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#39BA9F] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
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
            © {new Date().getFullYear()} شركاء النجاح. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
