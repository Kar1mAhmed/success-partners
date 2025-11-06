import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="bg-white pt-40 md:pt-48 pb-24 md:pb-32 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Card */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-200">
          {/* Background image */}
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&auto=format&fit=crop&w=1600"
            alt="Modern architecture representing engineering and development"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Overlay (no gradient) */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center text-white px-6 py-24 md:py-40">
            <Reveal>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                شركاء النجاح
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-3xl text-lg md:text-2xl text-white/90 leading-relaxed">
                حلول احترافية في الخدمات الهندسية، التطوير العقاري، الوكالات التجارية، والتجارة العامة
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
                >
                  تواصل معنا
                </Link>
                <Link
                  href="#services"
                  className="w-full sm:w-auto px-8 py-4 rounded-lg bg-transparent border border-white/70 text-white font-semibold hover:bg-white/10 transition-colors"
                >
                  اكتشف خدماتنا
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 md:gap-12 max-w-4xl mx-auto mt-12">
          <Reveal>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#154762]">4+</div>
              <div className="mt-2 text-gray-600 text-sm md:text-base">مجالات خدمية</div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#39BA9F]">100%</div>
              <div className="mt-2 text-gray-600 text-sm md:text-base">رضا العملاء</div>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#154762]">24/7</div>
              <div className="mt-2 text-gray-600 text-sm md:text-base">دعم مستمر</div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
