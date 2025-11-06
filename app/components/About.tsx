import Image from "next/image";
import { Target, Lightbulb, Users, Award, Zap } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <Reveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">من نحن</h2>
          </Reveal>
          <div className="w-24 h-1 bg-[#154762] mx-auto" />
        </div>

        {/* Two-column with image */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <Reveal className="order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                شركة <strong className="text-[#154762]">شركاء النجاح</strong> هي شركة عراقية متخصصة متعددة المجالات، تأسست لتكون منصة فعالة توفر خدمات احترافية واستراتيجية في عدة قطاعات حيوية.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                نعمل على توفير بيئة أعمال قائمة على الشفافية، الجودة، والشراكة الحقيقية، لنكون الخيار الموثوق للتنفيذ المتقن والحلول المستدامة.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&auto=format&fit=crop&w=1200"
                alt="Our team collaborating on modern projects"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </Reveal>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20">
          <Reveal>
            <div className="p-10 rounded-xl border-2 border-gray-200">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-[#154762]">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">رؤيتنا</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                أن نكون في طليعة الشركات العراقية المتميزة، الرائدة في تقديم حلول شاملة وذكية ذات قيمة مضافة حقيقية.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="p-10 rounded-xl border-2 border-gray-200">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-[#154762]">
                <Lightbulb className="h-7 w-7" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">رسالتنا</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                تقديم خدمات عالية الجودة بنموذج تشغيلي يدمج الخبرة بالابتكار، مع الالتزام الكامل بمواعيد التسليم.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Values */}
        <Reveal>
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">قيمنا</h3>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          {[
            { icon: <Users className="h-6 w-6" />, text: "الثقة والنزاهة" },
            { icon: <Award className="h-6 w-6" />, text: "الجودة والتميز" },
            { icon: <Target className="h-6 w-6" />, text: "التركيز على العميل" },
            { icon: <Users className="h-6 w-6" />, text: "العمل الجماعي" },
            { icon: <Zap className="h-6 w-6" />, text: "التحسين المستمر" },
          ].map((value, index) => (
            <Reveal key={index} delay={index * 70}>
              <div className="flex flex-col items-center gap-3 p-6 md:p-8 bg-white rounded-lg border border-gray-200 hover:border-[#154762] transition-colors">
                <div className="w-12 h-12 rounded-full bg-gray-100 text-[#154762] flex items-center justify-center">
                  {value.icon}
                </div>
                <span className="text-sm md:text-base font-semibold text-gray-900 text-center">
                  {value.text}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
