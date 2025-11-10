import Header from "./components/Header";
import Footer from "./components/Footer";
import Image from "next/image";
import { Building2, TrendingUp, Handshake, Package, ArrowRight, CheckCircle2, Target, Users, Lightbulb, Award, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#154762] via-[#1a5670] to-[#39BA9F]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#39BA9F] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building Success<br />
            <span className="text-[#39BA9F]">Together</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Leading Iraqi company providing integrated solutions in engineering services, real estate development, commercial agencies, and general trade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#39BA9F] text-white font-semibold rounded-lg hover:bg-[#2da88c] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Get In Touch
            </a>
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
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="w-20 h-1 bg-[#39BA9F] mb-8"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                <strong className="text-gray-900">Success Partners</strong> is an Iraqi company specialized in multiple fields, established to be an effective platform providing professional and strategic services in several vital sectors.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We work to provide a business environment based on transparency, quality, and true partnership. We always strive to be the trusted choice for entities looking for meticulous execution, sustainable solutions, and long-term vision.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#39BA9F] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Professional Excellence</h3>
                    <p className="text-sm text-gray-600">Delivering high-quality results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#39BA9F] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Trusted Partnership</h3>
                    <p className="text-sm text-gray-600">Building lasting relationships</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="Modern office building"
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#39BA9F]/20 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#154762]/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#154762]/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-[#154762]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be at the forefront of distinguished Iraqi companies, leading in providing comprehensive and smart solutions with real added value, keeping pace with market developments and contributing to building a thriving economy.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#39BA9F]/10 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-[#39BA9F]" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide a diverse range of high-quality services within an operational model that integrates experience with innovation, with full commitment to delivery deadlines, performance efficiency, and understanding customer needs with the highest degree of professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions tailored to meet your business needs across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Engineering Services */}
            <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-[#154762]/20 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#154762] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Engineering Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide integrated engineering solutions aimed at achieving efficiency and quality at every stage of the project.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39BA9F] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Engineering consultations and designs for residential, commercial, and industrial projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39BA9F] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Project management and execution with direct supervision</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39BA9F] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Technical studies and engineering analysis reports</span>
                </li>
              </ul>
            </div>

            {/* Real Estate Development */}
            <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-[#39BA9F]/20 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#39BA9F] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Estate Development & Marketing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Development and marketing services for real estate projects using tools and strategies built on deep understanding of the local market.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#154762] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Project planning and strategic vision for maximum ROI</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#154762] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Effective digital and advertising marketing strategies</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#154762] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Feasibility studies and financial analysis reports</span>
                </li>
              </ul>
            </div>

            {/* Commercial Agencies */}
            <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-[#154762]/20 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#154762] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Commercial Agencies</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We represent local and international brands within Iraq and provide them with the necessary operational and marketing services for expansion.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39BA9F] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Professional commercial representation before target sectors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39BA9F] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Product and service distribution with dedicated channels</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#39BA9F] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Long-term strategic partnerships based on transparency</span>
                </li>
              </ul>
            </div>

            {/* General Trade */}
            <div className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-[#39BA9F]/20 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-[#39BA9F] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">General Trade</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We manage an integrated supply chain that supports major projects and institutions with reliable products and services.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#154762] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Import and export with international markets for high-quality materials</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#154762] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Supply of materials and equipment from construction to technical equipment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#154762] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Comprehensive supply solutions from start to delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="py-24 bg-gradient-to-br from-[#154762] to-[#1a5670] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-[#39BA9F] transition-colors duration-300">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trust & Integrity</h3>
              <p className="text-gray-300 text-sm">In all our dealings</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-[#39BA9F] transition-colors duration-300">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality & Excellence</h3>
              <p className="text-gray-300 text-sm">In execution</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-[#39BA9F] transition-colors duration-300">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-300 text-sm">In every step</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-[#39BA9F] transition-colors duration-300">
                <Handshake className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Teamwork</h3>
              <p className="text-gray-300 text-sm">And team spirit</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-[#39BA9F] transition-colors duration-300">
                <Lightbulb className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-300 text-sm">Continuous improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Professional team collaboration"
                  width={700}
                  height={525}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Team
              </h2>
              <div className="w-20 h-1 bg-[#39BA9F] mb-8"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our team consists of a group of engineers, developers, business experts, and marketing professionals, united by full commitment to professionalism and results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We invest in knowledge and continuously develop our team&apos;s performance to maintain a high level of efficiency and innovation in every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? Contact us today and let&apos;s build success together
            </p>
          </div>

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
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-200 text-sm mb-1">+964 775 555 4017</p>
              <p className="text-gray-200 text-sm">+964 785 555 4017</p>
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
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-white/90 text-sm break-all">info@successpartners-iq.com</p>
            </a>

            <div className="group bg-gradient-to-br from-[#154762] to-[#1a5670] p-8 rounded-2xl text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#39BA9F] transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <div className="space-y-2">
                <a href="https://instagram.com/successpartnersiq" target="_blank" rel="noopener noreferrer" className="block text-gray-200 text-sm hover:text-[#39BA9F] transition-colors">
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
