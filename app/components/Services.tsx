import { Hammer, Building2, Briefcase, Package } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Hammer className="h-10 w-10" />,
      title: "الخدمات الهندسية",
      description: "الاستشارات والتصميمات الهندسية • إدارة وتنفيذ المشاريع • الدراسات الفنية",
    },
    {
      icon: <Building2 className="h-10 w-10" />,
      title: "تطوير وتسويق عقاري",
      description: "تخطيط المشاريع العقارية • تسويق فعّال رقمي • دراسات جدوى مالية",
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: "الوكالات التجارية",
      description: "التمثيل التجاري الاحترافي • توزيع المنتجات • شراكات استراتيجية",
    },
    {
      icon: <Package className="h-10 w-10" />,
      title: "التجارة العامة",
      description: "الاستيراد والتصدير • توفير المواد والمعدات • حلول التوريد الشامل",
    },
  ];

  return (
    <section id="services" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            خدماتنا
          </h2>
          <div className="w-24 h-1 bg-[#154762] mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المتخصصة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 border-2 border-gray-200 rounded-lg hover:border-[#154762] transition-colors"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-8 text-[#154762]">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {service.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block px-10 py-5 bg-[#154762] text-white text-lg font-semibold rounded-lg hover:bg-[#1a5670] transition-colors"
          >
            تحدث إلى فريقنا
          </a>
        </div>
      </div>
    </section>
  );
}
