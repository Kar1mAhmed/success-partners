import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactPageClient from "./ContactPageClient";
import AnimatedSection from "../components/AnimatedSection";

export const metadata = {
  title: "اتصل بنا | شركاء النجاح",
  description: "تواصل مع شركاء النجاح - نحن هنا لمساعدتك في تحقيق أهدافك",
};

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <AnimatedSection>
        <section className="pt-32 pb-16 bg-gradient-to-br from-[#154762] to-[#1a5670]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              تواصل معنا
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              نحن هنا لمساعدتك. تواصل معنا اليوم ودعنا نبني النجاح معاً
            </p>
          </div>
        </section>
      </AnimatedSection>

      <ContactPageClient />

      <Footer />
    </div>
  );
}
