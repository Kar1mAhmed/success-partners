import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedSection from "./components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { Building2, TrendingUp, Handshake, Package, ArrowLeft, CheckCircle2, Target, Users, Lightbulb, Award, Shield, Sparkles, BarChart3, Globe2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#154762] via-[#1a5670] to-[#39BA9F]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#39BA9F] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            نبني النجاح<br />
            <span className="text-[#39BA9F]">معاً</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            شركة عراقية رائدة في تقديم حلول متكاملة في الخدمات الهندسية، التطوير العقاري، الوكالات التجارية، والتجارة العامة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#39BA9F] text-white font-semibold rounded-lg hover:bg-[#2da88c] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              استكشف خدماتنا
              <ArrowLeft className="mr-2 w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              تواصل معنا
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                من نحن
              </h2>
              <div className="w-20 h-1 bg-[#39BA9F] mb-8"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong className="text-gray-900">شركة شركاء النجاح</strong> هي شركة عراقية متخصصة متعددة المجالات، تأسست لتكون منصة فعالة توفر خدمات احترافية واستراتيجية في عدة قطاعات حيوية تشمل: الخدمات الهندسية، التطوير والتسويق العقاري، الوكالات التجارية، والتجارة العامة.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                نعمل على توفير بيئة أعمال قائمة على الشفافية، الجودة، والشراكة الحقيقية، ونسعى دائماً لنكون الخيار الموثوق للجهات التي تبحث عن التنفيذ المتقن، الحلول المستدامة، والرؤية بعيدة المدى.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#39BA9F] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">التميز المهني</h3>
                    <p className="text-sm text-gray-600">تقديم نتائج عالية الجودة</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#39BA9F] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">شراكة موثوقة</h3>
                    <p className="text-sm text-gray-600">بناء علاقات طويلة الأمد</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                    alt="مبنى مكتب حديث"
                    width={600}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#39BA9F]/20 rounded-2xl -z-10"></div>
                <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#154762]/20 rounded-2xl -z-10"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="w-14 h-14 bg-[#154762]/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-[#154762]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">رؤيتنا</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  أن نكون في طليعة الشركات العراقية المتميزة، الرائدة في تقديم حلول شاملة وذكية، ذات قيمة مضافة حقيقية، تواكب تطورات السوق وتُسهم في بناء اقتصاد مزدهر.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="w-14 h-14 bg-[#39BA9F]/10 rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-[#39BA9F]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">رسالتنا</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  تتمثل رسالتنا في تقديم مجموعة متنوعة من الخدمات عالية الجودة ضمن نموذج تشغيلي يدمج الخبرة بالابتكار، مع الالتزام الكامل بمواعيد التسليم، كفاءة الأداء، وتفهم احتياجات العملاء بأعلى درجات الاحتراف.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              خدماتنا
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              حلول شاملة مصممة لتلبية احتياجات عملك عبر قطاعات متعددة
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Engineering Services */}
            <AnimatedSection delay={0.1}>
              <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-[#154762]/20 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-[#154762] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">الخدمات الهندسية</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  نُقدّم حلول هندسية متكاملة تهدف إلى تحقيق الكفاءة والجودة في كل مرحلة من مراحل المشروع.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#39BA9F] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">الاستشارات والتصميمات الهندسية لمشاريع سكنية وتجارية وصناعية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#39BA9F] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">إدارة وتنفيذ المشاريع مع إشراف مباشر على كافة المراحل</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#39BA9F] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">الدراسات الفنية وإعداد تقارير وتحليلات هندسية</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Real Estate Development */}
            <AnimatedSection delay={0.2}>
              <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-[#39BA9F]/20 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-[#39BA9F] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">التطوير والتسويق العقاري</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  نقدم خدمات تطوير وتسويق المشاريع العقارية باستخدام أدوات واستراتيجيات مبنية على فهم عميق لحركة السوق العقاري المحلي.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#154762] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">تخطيط المشاريع ووضع تصورات استراتيجية لأعلى عائد استثماري</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#154762] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">تسويق فعّال باستخدام وسائل رقمية وإعلانية احترافية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#154762] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">دراسات جدوى وتقارير تحليلية مالية وفنية</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Commercial Agencies */}
            <AnimatedSection delay={0.3}>
              <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-[#154762]/20 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-[#154762] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">الوكالات التجارية</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  نقوم بتمثيل علامات تجارية محلية ودولية داخل العراق ونوفر لها الخدمات التشغيلية والتسويقية اللازمة للتوسع.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#39BA9F] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">التمثيل التجاري الاحترافي أمام القطاعات المستهدفة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#39BA9F] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">توزيع المنتجات والخدمات عبر قنوات مخصصة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#39BA9F] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">شراكات استراتيجية طويلة الأمد مبنية على الشفافية</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* General Trade */}
            <AnimatedSection delay={0.4}>
              <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-[#39BA9F]/20 hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-16 h-16 bg-[#39BA9F] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">التجارة العامة</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  نُدير سلسلة توريد متكاملة تدعم المشاريع الكبرى والمؤسسات بمنتجات وخدمات موثوقة.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#154762] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">الاستيراد والتصدير من أسواق دولية بجودة عالية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#154762] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">توفير المواد والمعدات من مواد البناء إلى التجهيزات الفنية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#154762] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">حلول التوريد الشامل من البداية إلى التسليم</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-24 bg-gradient-to-br from-[#154762] to-[#1a5670] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              قيمنا الأساسية
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              المبادئ التي توجه عملنا وتحدد التزامنا بالتميز
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-[#39BA9F] transition-colors duration-300">
                  <Shield className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">الثقة والنزاهة</h3>
                <p className="text-gray-300 text-sm">في جميع تعاملاتنا</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-[#39BA9F] transition-colors duration-300">
                  <Award className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">الجودة والتميز</h3>
                <p className="text-gray-300 text-sm">في التنفيذ</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-[#39BA9F] transition-colors duration-300">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">التركيز على العميل</h3>
                <p className="text-gray-300 text-sm">في كل خطوة</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-[#39BA9F] transition-colors duration-300">
                  <Handshake className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">العمل الجماعي</h3>
                <p className="text-gray-300 text-sm">وروح الفريق</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="text-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-[#39BA9F] transition-colors duration-300">
                  <Lightbulb className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">الابتكار</h3>
                <p className="text-gray-300 text-sm">والتحسين المستمر</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                    alt="فريق عمل محترف"
                    width={700}
                    height={525}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                فريق العمل
              </h2>
              <div className="w-20 h-1 bg-[#39BA9F] mb-8"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                يتألف فريقنا من مجموعة من المهندسين والمطورين وخبراء الأعمال والتسويق، يجمعهم الالتزام الكامل بالاحتراف والنتائج.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                نستثمر في المعرفة ونُطور أداء فريقنا باستمرار لنحافظ على مستوى عالٍ من الكفاءة والابتكار في كل مشروع.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              تواصل معنا
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مستعدون لبدء مشروعك القادم؟ تواصل معنا اليوم ودعنا نبني النجاح معاً
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <a
              href="tel:+9647755554017"
              className="group bg-gradient-to-br from-[#154762] to-[#1a5670] p-8 rounded-2xl text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#39BA9F] transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">الهاتف</h3>
              <p className="text-gray-200 text-sm mb-1" dir="ltr">+964 775 555 4017</p>
              <p className="text-gray-200 text-sm" dir="ltr">+964 785 555 4017</p>
            </a>

            <a
              href="mailto:info@successpartners-iq.com"
              className="group bg-gradient-to-br from-[#39BA9F] to-[#2da88c] p-8 rounded-2xl text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#154762] transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">البريد الإلكتروني</h3>
              <p className="text-white/90 text-sm break-all" dir="ltr">info@successpartners-iq.com</p>
            </a>

            <div className="group bg-gradient-to-br from-[#154762] to-[#1a5670] p-8 rounded-2xl text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#39BA9F] transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">وسائل التواصل</h3>
              <div className="space-y-2">
                <a href="https://instagram.com/successpartnersiq" target="_blank" rel="noopener noreferrer" className="block text-gray-200 text-sm hover:text-[#39BA9F] transition-colors" dir="ltr">
                  @successpartnersiq
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
