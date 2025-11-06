"use client";

import { Phone, Mail, MapPin, Instagram, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            تواصل معنا
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#154762] to-[#39BA9F] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نحن هنا للإجابة على استفساراتكم ومساعدتكم في تحقيق أهدافكم
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-right">
                معلومات التواصل
              </h3>
              <div className="space-y-6">
                {/* Phone Numbers */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#154762] to-[#39BA9F] text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="flex-1 text-right">
                    <h4 className="font-semibold text-gray-900 mb-2">الهاتف</h4>
                    <a href="tel:+9647755554017" className="block text-gray-600 hover:text-[#39BA9F] transition-colors">
                      +964 775 555 4017
                    </a>
                    <a href="tel:+9647855554017" className="block text-gray-600 hover:text-[#39BA9F] transition-colors">
                      +964 785 555 4017
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#154762] to-[#39BA9F] text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="flex-1 text-right">
                    <h4 className="font-semibold text-gray-900 mb-2">البريد الإلكتروني</h4>
                    <a href="mailto:info@successpartners-iq.com" className="text-gray-600 hover:text-[#39BA9F] transition-colors break-all">
                      info@successpartners-iq.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#154762] to-[#39BA9F] text-white flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="flex-1 text-right">
                    <h4 className="font-semibold text-gray-900 mb-2">الموقع</h4>
                    <p className="text-gray-600">العراق</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="pt-4">
                  <h4 className="font-semibold text-gray-900 mb-4 text-right">تابعنا على</h4>
                  <div className="flex gap-4 justify-end">
                    <a
                      href="https://instagram.com/successpartnersiq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#154762] to-[#39BA9F] text-white flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com/company/successpartnersiq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-[#154762] to-[#39BA9F] text-white flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-right">
              أرسل لنا رسالة
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 text-right">
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#39BA9F] focus:ring-2 focus:ring-[#39BA9F]/20 outline-none transition-all text-right"
                  placeholder="أدخل اسمك الكامل"
                  dir="rtl"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 text-right">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#39BA9F] focus:ring-2 focus:ring-[#39BA9F]/20 outline-none transition-all text-right"
                  placeholder="example@email.com"
                  dir="ltr"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 text-right">
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#39BA9F] focus:ring-2 focus:ring-[#39BA9F]/20 outline-none transition-all text-right"
                  placeholder="+964 XXX XXX XXXX"
                  dir="ltr"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 text-right">
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#39BA9F] focus:ring-2 focus:ring-[#39BA9F]/20 outline-none transition-all resize-none text-right"
                  placeholder="اكتب رسالتك هنا..."
                  dir="rtl"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-[#154762] to-[#39BA9F] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <span>إرسال الرسالة</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
