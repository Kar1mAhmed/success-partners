"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Phone, Mail, MapPin, Instagram, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              تواصل معنا
            </h1>
            <div className="w-24 h-1 bg-[#154762] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              نحن هنا للإجابة على استفساراتكم ومساعدتكم في تحقيق أهدافكم
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-12">معلومات التواصل</h2>
              <div className="space-y-8">
                {/* Phone Numbers */}
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-[#154762] text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">الهاتف</h3>
                    <a href="tel:+9647755554017" className="block text-lg text-gray-600 hover:text-[#154762] mb-2">
                      +964 775 555 4017
                    </a>
                    <a href="tel:+9647855554017" className="block text-lg text-gray-600 hover:text-[#154762]">
                      +964 785 555 4017
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-[#39BA9F] text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">البريد الإلكتروني</h3>
                    <a href="mailto:info@successpartners-iq.com" className="text-lg text-gray-600 hover:text-[#39BA9F] break-all">
                      info@successpartners-iq.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-[#154762] text-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">الموقع</h3>
                    <p className="text-lg text-gray-600">العراق</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-8">
                  <h3 className="font-bold text-xl text-gray-900 mb-6">تابعنا على</h3>
                  <div className="flex gap-6">
                    <a
                      href="https://instagram.com/successpartnersiq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-[#154762] text-white flex items-center justify-center hover:bg-[#1a5670] transition-colors"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="https://linkedin.com/company/successpartnersiq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-[#154762] text-white flex items-center justify-center hover:bg-[#1a5670] transition-colors"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-12 rounded-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">أرسل لنا رسالة</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-base font-semibold text-gray-900 mb-3">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-[#154762] focus:outline-none transition-colors text-lg"
                    placeholder="أدخل اسمك الكامل"
                    dir="rtl"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-base font-semibold text-gray-900 mb-3">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-[#154762] focus:outline-none transition-colors text-lg"
                    placeholder="example@email.com"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-base font-semibold text-gray-900 mb-3">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-[#154762] focus:outline-none transition-colors text-lg"
                    placeholder="+964 XXX XXX XXXX"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-semibold text-gray-900 mb-3">
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 rounded-lg border-2 border-gray-200 focus:border-[#154762] focus:outline-none transition-colors resize-none text-lg"
                    placeholder="اكتب رسالتك هنا..."
                    dir="rtl"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-5 bg-[#154762] text-white text-lg font-semibold rounded-lg hover:bg-[#1a5670] transition-colors flex items-center justify-center gap-3"
                >
                  <span>إرسال الرسالة</span>
                  <Send className="h-6 w-6" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
