import Header from "../components/Header";
import Footer from "../components/Footer";
import { Building2 } from "lucide-react";

export const metadata = {
  title: "معلومات قانونية | شركاء النجاح",
  description: "معلومات قانونية وتفاصيل الشركة لشركة شركاء النجاح",
};

export default function Imprint() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-32 pb-24 bg-gradient-to-br from-[#154762] to-[#1a5670]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            معلومات قانونية
          </h1>
          <p className="text-xl text-gray-200">
            معلومات الشركة والتفاصيل القانونية
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">معلومات الشركة</h2>
              <div className="bg-gray-50 p-8 rounded-lg space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">اسم الشركة</p>
                  <p className="text-lg font-semibold text-gray-900">شركاء النجاح</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">الموقع</p>
                  <p className="text-lg text-gray-900">العراق</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">نوع الشركة</p>
                  <p className="text-lg text-gray-900">شركة خدمات متكاملة</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">معلومات الاتصال</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#39BA9F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#39BA9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">البريد الإلكتروني</p>
                    <a href="mailto:info@successpartners-iq.com" className="text-lg text-[#39BA9F] hover:text-[#154762] transition-colors" dir="ltr">
                      info@successpartners-iq.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#154762]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#154762]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">الهاتف</p>
                    <a href="tel:+9647755554017" className="block text-lg text-gray-900 hover:text-[#39BA9F] transition-colors mb-1" dir="ltr">
                      +964 775 555 4017
                    </a>
                    <a href="tel:+9647855554017" className="block text-lg text-gray-900 hover:text-[#39BA9F] transition-colors" dir="ltr">
                      +964 785 555 4017
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#39BA9F]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#39BA9F]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">إنستغرام</p>
                    <a href="https://instagram.com/successpartnersiq" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-900 hover:text-[#39BA9F] transition-colors" dir="ltr">
                      @successpartnersiq
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#154762]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#154762]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">لينكد إن</p>
                    <a href="https://linkedin.com/company/successpartnersiq" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-900 hover:text-[#39BA9F] transition-colors" dir="ltr">
                      company/successpartnersiq
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">قطاعات الأعمال</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                شركة شركاء النجاح هي شركة عراقية متخصصة متعددة المجالات تعمل في القطاعات التالية:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-[#154762]/5 to-[#154762]/10 p-6 rounded-lg border border-[#154762]/20">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">الخدمات الهندسية</h3>
                  <p className="text-gray-600 text-sm">استشارات هندسية، تصميم، إدارة المشاريع، والإشراف على التنفيذ</p>
                </div>
                <div className="bg-gradient-to-br from-[#39BA9F]/5 to-[#39BA9F]/10 p-6 rounded-lg border border-[#39BA9F]/20">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">التطوير والتسويق العقاري</h3>
                  <p className="text-gray-600 text-sm">تطوير المشاريع العقارية، التسويق، ودراسات الجدوى</p>
                </div>
                <div className="bg-gradient-to-br from-[#154762]/5 to-[#154762]/10 p-6 rounded-lg border border-[#154762]/20">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">الوكالات التجارية</h3>
                  <p className="text-gray-600 text-sm">تمثيل العلامات التجارية المحلية والدولية في العراق</p>
                </div>
                <div className="bg-gradient-to-br from-[#39BA9F]/5 to-[#39BA9F]/10 p-6 rounded-lg border border-[#39BA9F]/20">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">التجارة العامة</h3>
                  <p className="text-gray-600 text-sm">الاستيراد والتصدير، توريد المواد والمعدات</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">إخلاء المسؤولية</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                المعلومات الواردة في هذا الموقع الإلكتروني هي لأغراض إعلامية عامة فقط. بينما نسعى جاهدين للحفاظ على دقة المعلومات وتحديثها، لا نقدم أي تعهدات أو ضمانات من أي نوع، صريحة أو ضمنية، حول اكتمال أو دقة أو موثوقية أو ملاءمة أو توفر الموقع الإلكتروني أو المعلومات أو المنتجات أو الخدمات أو الرسومات ذات الصلة الواردة في الموقع الإلكتروني لأي غرض من الأغراض.
              </p>
              <p className="text-gray-600 leading-relaxed">
                أي اعتماد تضعه على هذه المعلومات يكون على مسؤوليتك الخاصة تماماً. لن نكون مسؤولين بأي حال من الأحوال عن أي خسارة أو ضرر بما في ذلك، على سبيل المثال لا الحصر، الخسارة أو الضرر غير المباشر أو التبعي، أو أي خسارة أو ضرر ينشأ عن فقدان البيانات أو الأرباح الناشئة عن أو فيما يتعلق باستخدام هذا الموقع الإلكتروني.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">حقوق النشر</h2>
              <p className="text-gray-600 leading-relaxed">
                © {new Date().getFullYear()} شركاء النجاح. جميع الحقوق محفوظة. جميع المحتويات الموجودة على هذا الموقع الإلكتروني، بما في ذلك النصوص والرسومات والشعارات والأيقونات والصور والمقاطع الصوتية ومقاطع الفيديو والبرامج، هي ملك لشركة شركاء النجاح أو مرخصيها ومحمية بموجب قوانين حقوق النشر الدولية.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">الأسئلة والاستفسارات</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                إذا كان لديك أي أسئلة حول هذه المعلومات القانونية أو أي جانب من جوانب خدماتنا، يرجى عدم التردد في الاتصال بنا باستخدام معلومات الاتصال المذكورة أعلاه.
              </p>
              <div className="bg-gradient-to-br from-[#154762] to-[#1a5670] p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-4">نحن هنا لمساعدتك</h3>
                <p className="text-gray-200 mb-6">
                  فريقنا متاح للإجابة على استفساراتك وتقديم المعلومات التي تحتاجها حول خدماتنا.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#39BA9F] text-white font-semibold rounded-lg hover:bg-[#2da88c] transition-all duration-300"
                >
                  تواصل معنا
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
