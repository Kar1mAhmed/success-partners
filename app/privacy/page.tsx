import Header from "../components/Header";
import Footer from "../components/Footer";
import { Shield, Lock, Eye, FileText, AlertCircle } from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "جمع المعلومات",
      content: "نقوم بجمع المعلومات التي تقدمها لنا مباشرة عند التواصل معنا، بما في ذلك الاسم، البريد الإلكتروني، رقم الهاتف، وأي معلومات أخرى تختار تقديمها. نستخدم هذه المعلومات فقط لغرض التواصل معك وتقديم الخدمات المطلوبة."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "حماية المعلومات",
      content: "نحن ملتزمون بحماية معلوماتك الشخصية. نتخذ إجراءات أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به، التعديل، الإفصاح، أو التدمير. جميع البيانات المرسلة عبر موقعنا محمية باستخدام تقنيات التشفير المتقدمة."
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "استخدام المعلومات",
      content: "نستخدم المعلومات التي نجمعها للأغراض التالية: الرد على استفساراتك، تقديم الخدمات المطلوبة، تحسين تجربة المستخدم، وإرسال تحديثات حول خدماتنا (إذا وافقت على ذلك). لن نشارك معلوماتك مع أطراف ثالثة دون موافقتك الصريحة."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "حقوقك",
      content: "لديك الحق في الوصول إلى معلوماتك الشخصية، تحديثها، أو حذفها في أي وقت. يمكنك أيضًا الاعتراض على معالجة بياناتك أو طلب نقلها. للقيام بذلك، يرجى التواصل معنا عبر معلومات الاتصال الموضحة في أسفل الصفحة."
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "ملفات تعريف الارتباط",
      content: "نستخدم ملفات تعريف الارتباط (Cookies) لتحسين تجربة التصفح وتحليل حركة المرور على الموقع. يمكنك إدارة إعدادات ملفات تعريف الارتباط من خلال متصفحك. استمرارك في استخدام موقعنا يعني موافقتك على استخدام هذه الملفات."
    }
  ];

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#154762] to-[#39BA9F] text-white mb-6">
              <Shield className="h-10 w-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              سياسة الخصوصية
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#154762] to-[#39BA9F] mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              آخر تحديث: {new Date().toLocaleDateString('ar-IQ', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              في <strong className="text-[#154762]">شركاء النجاح</strong>، نحن نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا وحماية المعلومات التي تقدمها لنا من خلال موقعنا الإلكتروني وخدماتنا.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#154762] to-[#39BA9F] text-white flex items-center justify-center">
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 p-8 bg-gradient-to-br from-[#154762] to-[#39BA9F] rounded-2xl text-white">
            <h2 className="text-2xl font-bold mb-4">اتصل بنا</h2>
            <p className="mb-4 leading-relaxed">
              إذا كان لديك أي أسئلة أو مخاوف بشأن سياسة الخصوصية هذه، يرجى التواصل معنا:
            </p>
            <div className="space-y-2">
              <p>
                <strong>البريد الإلكتروني:</strong>{" "}
                <a href="mailto:info@successpartners-iq.com" className="hover:text-gray-200 underline">
                  info@successpartners-iq.com
                </a>
              </p>
              <p>
                <strong>الهاتف:</strong>{" "}
                <a href="tel:+9647755554017" className="hover:text-gray-200">+964 775 555 4017</a>
                {" / "}
                <a href="tel:+9647855554017" className="hover:text-gray-200">+964 785 555 4017</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
