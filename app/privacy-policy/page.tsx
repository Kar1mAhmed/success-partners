import Header from "../components/Header";
import Footer from "../components/Footer";
import { Shield } from "lucide-react";

export const metadata = {
  title: "سياسة الخصوصية | شركاء النجاح",
  description: "سياسة الخصوصية لشركة شركاء النجاح - كيف نجمع ونستخدم ونحمي معلوماتك",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="pt-32 pb-24 bg-gradient-to-br from-[#154762] to-[#1a5670]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            سياسة الخصوصية
          </h1>
          <p className="text-xl text-gray-200">
            آخر تحديث: {new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">مقدمة</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                شركة شركاء النجاح (&quot;نحن&quot; أو &quot;لنا&quot; أو &quot;الخاص بنا&quot;) ملتزمة بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمعنا واستخدامنا والكشف عن معلوماتك وحمايتها عند زيارتك لموقعنا الإلكتروني أو استخدام خدماتنا.
              </p>
              <p className="text-gray-600 leading-relaxed">
                يرجى قراءة سياسة الخصوصية هذه بعناية. إذا كنت لا توافق على شروط سياسة الخصوصية هذه، فيرجى عدم الوصول إلى الموقع أو استخدام خدماتنا.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">المعلومات التي نجمعها</h2>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">المعلومات الشخصية</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                قد نجمع معلومات شخصية تقدمها لنا طواعية عندما:
              </p>
              <ul className="list-disc pr-6 text-gray-600 space-y-2 mb-6">
                <li>تتواصل معنا من خلال موقعنا الإلكتروني أو البريد الإلكتروني</li>
                <li>تطلب معلومات حول خدماتنا</li>
                <li>تتعامل معنا لأغراض تجارية</li>
                <li>تشترك في اتصالاتنا</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3 mt-6">المعلومات المجمعة تلقائياً</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                عند زيارتك لموقعنا الإلكتروني، قد نجمع تلقائياً معلومات معينة حول جهازك، بما في ذلك:
              </p>
              <ul className="list-disc pr-6 text-gray-600 space-y-2">
                <li>عنوان IP ونوع المتصفح</li>
                <li>نظام التشغيل ومعلومات الجهاز</li>
                <li>الصفحات التي تمت زيارتها والوقت المستغرق في الصفحات</li>
                <li>عناوين المواقع المُحيلة</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">كيف نستخدم معلوماتك</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                نستخدم المعلومات التي نجمعها من أجل:
              </p>
              <ul className="list-disc pr-6 text-gray-600 space-y-2">
                <li>الرد على استفساراتك وتقديم دعم العملاء</li>
                <li>تقديم الخدمات والوفاء بالالتزامات التعاقدية</li>
                <li>تحسين موقعنا الإلكتروني وخدماتنا</li>
                <li>إرسال اتصالات تسويقية لك (بموافقتك)</li>
                <li>الامتثال للالتزامات القانونية</li>
                <li>الحماية من الأنشطة الاحتيالية أو غير القانونية</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">مشاركة المعلومات والإفصاح عنها</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                نحن لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك في الظروف التالية:
              </p>
              <ul className="list-disc pr-6 text-gray-600 space-y-2">
                <li><strong>مقدمو الخدمات:</strong> مع مقدمي خدمات موثوقين من طرف ثالث يساعدوننا في تشغيل موقعنا الإلكتروني وإدارة أعمالنا</li>
                <li><strong>المتطلبات القانونية:</strong> عندما يقتضي القانون ذلك أو لحماية حقوقنا وسلامتنا</li>
                <li><strong>نقل الأعمال:</strong> فيما يتعلق بعملية دمج أو استحواذ أو بيع أصول</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">أمن البيانات</h2>
              <p className="text-gray-600 leading-relaxed">
                نطبق تدابير أمنية تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو التدمير. ومع ذلك، لا توجد طريقة نقل عبر الإنترنت أو تخزين إلكتروني آمنة بنسبة 100٪، ولا يمكننا ضمان الأمان المطلق.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">حقوقك</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                اعتماداً على موقعك، قد يكون لديك حقوق معينة فيما يتعلق بمعلوماتك الشخصية، بما في ذلك:
              </p>
              <ul className="list-disc pr-6 text-gray-600 space-y-2">
                <li>الحق في الوصول إلى معلوماتك الشخصية</li>
                <li>الحق في تصحيح المعلومات غير الدقيقة</li>
                <li>الحق في طلب حذف معلوماتك</li>
                <li>الحق في الاعتراض على المعالجة أو تقييدها</li>
                <li>الحق في نقل البيانات</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">ملفات تعريف الارتباط وتقنيات التتبع</h2>
              <p className="text-gray-600 leading-relaxed">
                قد نستخدم ملفات تعريف الارتباط وتقنيات تتبع مماثلة لتحسين تجربتك على موقعنا الإلكتروني. يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال تفضيلات المتصفح الخاص بك. يرجى ملاحظة أن تعطيل ملفات تعريف الارتباط قد يؤثر على وظائف موقعنا الإلكتروني.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">روابط الطرف الثالث</h2>
              <p className="text-gray-600 leading-relaxed">
                قد يحتوي موقعنا الإلكتروني على روابط لمواقع إلكترونية تابعة لأطراف ثالثة. نحن لسنا مسؤولين عن ممارسات الخصوصية أو محتوى هذه المواقع الخارجية. نشجعك على مراجعة سياسات الخصوصية لأي مواقع طرف ثالث تزورها.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">خصوصية الأطفال</h2>
              <p className="text-gray-600 leading-relaxed">
                خدماتنا غير موجهة للأفراد الذين تقل أعمارهم عن 18 عاماً. نحن لا نجمع عن قصد معلومات شخصية من الأطفال. إذا كنت تعتقد أننا جمعنا معلومات من طفل، فيرجى الاتصال بنا على الفور.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">التغييرات على سياسة الخصوصية هذه</h2>
              <p className="text-gray-600 leading-relaxed">
                قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة وتحديث تاريخ &quot;آخر تحديث&quot;. نشجعك على مراجعة سياسة الخصوصية هذه بشكل دوري.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">اتصل بنا</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارسات الخصوصية لدينا، يرجى الاتصال بنا:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>شركاء النجاح</strong></p>
                <p className="text-gray-600 mb-2">البريد الإلكتروني: <a href="mailto:info@successpartners-iq.com" className="text-[#39BA9F] hover:text-[#154762]" dir="ltr">info@successpartners-iq.com</a></p>
                <p className="text-gray-600 mb-2">الهاتف: <a href="tel:+9647755554017" className="text-[#39BA9F] hover:text-[#154762]" dir="ltr">+964 775 555 4017</a></p>
                <p className="text-gray-600">الهاتف: <a href="tel:+9647855554017" className="text-[#39BA9F] hover:text-[#154762]" dir="ltr">+964 785 555 4017</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
