import Header from "../components/Header";
import Footer from "../components/Footer";
import { Building2, MapPin, Phone, Mail, Globe, FileText, Users, Briefcase } from "lucide-react";

export default function Imprint() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#154762] to-[#39BA9F] text-white mb-6">
              <FileText className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              البصمة القانونية
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#154762] to-[#39BA9F] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              المعلومات القانونية والتنظيمية لشركة شركاء النجاح
            </p>
          </div>

          {/* Company Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Company Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#154762] to-[#39BA9F] text-white flex items-center justify-center">
                  <Building2 className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">معلومات الشركة</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">اسم الشركة</p>
                  <p>شركة شركاء النجاح</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">الاسم بالإنجليزية</p>
                  <p>Success Partners Company</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">نوع الشركة</p>
                  <p>شركة ذات مسؤولية محدودة</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">البلد</p>
                  <p>جمهورية العراق</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#154762] to-[#39BA9F] text-white flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">معلومات الاتصال</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#39BA9F] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">الهاتف</p>
                    <p className="text-gray-700">+964 775 555 4017</p>
                    <p className="text-gray-700">+964 785 555 4017</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#39BA9F] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">البريد الإلكتروني</p>
                    <p className="text-gray-700 break-all">info@successpartners-iq.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#39BA9F] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">العنوان</p>
                    <p className="text-gray-700">العراق</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-[#39BA9F] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">وسائل التواصل الاجتماعي</p>
                    <p className="text-gray-700">Instagram & LinkedIn: @successpartnersiq</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Activities */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#154762] to-[#39BA9F] text-white flex items-center justify-center">
                <Briefcase className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">مجالات العمل</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "الخدمات الهندسية",
                "التطوير والتسويق العقاري",
                "الوكالات التجارية",
                "التجارة العامة",
              ].map((activity, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100"
                >
                  <div className="w-2 h-2 rounded-full bg-[#39BA9F]"></div>
                  <span className="text-gray-700 font-medium">{activity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Management */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#154762] to-[#39BA9F] text-white flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">فريق الإدارة</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              تدار الشركة من قبل فريق من المهندسين والمطورين وخبراء الأعمال والتسويق المحترفين، الملتزمين بتقديم خدمات عالية الجودة وحلول مبتكرة لعملائنا.
            </p>
          </div>

          {/* Legal Notice */}
          <div className="bg-gradient-to-br from-[#154762] to-[#39BA9F] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">إشعار قانوني</h2>
            <div className="space-y-3 text-white/90 leading-relaxed">
              <p>
                جميع المعلومات الواردة في هذا الموقع هي لأغراض إعلامية فقط. نبذل قصارى جهدنا لضمان دقة المعلومات، ولكن لا يمكننا ضمان خلوها من الأخطاء أو السهو.
              </p>
              <p>
                جميع العلامات التجارية والشعارات المعروضة على هذا الموقع هي ملك لأصحابها المعنيين. استخدام أي علامة تجارية أو شعار لا يعني الموافقة أو الانتماء.
              </p>
              <p>
                © {new Date().getFullYear()} شركاء النجاح. جميع الحقوق محفوظة.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
