import Header from "../components/Header";
import Footer from "../components/Footer";
import { Building2 } from "lucide-react";

export const metadata = {
  title: "Imprint | Success Partners",
  description: "Legal information and company details for Success Partners.",
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
            Imprint
          </h1>
          <p className="text-xl text-gray-200">
            Legal Information & Company Details
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Information</h2>
              <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Company Name</h3>
                  <p className="text-gray-600">Success Partners</p>
                  <p className="text-gray-600 text-sm">شركاء النجاح</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Type</h3>
                  <p className="text-gray-600">Multi-sector Iraqi Company</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">Iraq</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="bg-gray-50 p-8 rounded-2xl space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <a 
                    href="mailto:info@successpartners-iq.com" 
                    className="text-[#39BA9F] hover:text-[#154762] transition-colors"
                  >
                    info@successpartners-iq.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                  <div className="space-y-1">
                    <p>
                      <a 
                        href="tel:+9647755554017" 
                        className="text-[#39BA9F] hover:text-[#154762] transition-colors"
                      >
                        +964 775 555 4017
                      </a>
                    </p>
                    <p>
                      <a 
                        href="tel:+9647855554017" 
                        className="text-[#39BA9F] hover:text-[#154762] transition-colors"
                      >
                        +964 785 555 4017
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Social Media</h3>
                  <div className="space-y-2">
                    <p>
                      <span className="text-gray-600">Instagram: </span>
                      <a 
                        href="https://instagram.com/successpartnersiq" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#39BA9F] hover:text-[#154762] transition-colors"
                      >
                        @successpartnersiq
                      </a>
                    </p>
                    <p>
                      <span className="text-gray-600">LinkedIn: </span>
                      <a 
                        href="https://linkedin.com/company/successpartnersiq" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[#39BA9F] hover:text-[#154762] transition-colors"
                      >
                        @successpartnersiq
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Business Sectors</h2>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#39BA9F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-gray-900">Engineering Services:</strong> Consultations, designs, project management, and technical studies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#39BA9F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-gray-900">Real Estate Development & Marketing:</strong> Project planning, marketing strategies, and feasibility studies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#39BA9F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-gray-900">Commercial Agencies:</strong> Brand representation, product distribution, and strategic partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#39BA9F] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong className="text-gray-900">General Trade:</strong> Import/export, supply chain management, and comprehensive supply solutions</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Disclaimer</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Any reliance you place on such information is strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Through this website, you may be able to link to other websites which are not under the control of Success Partners. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Copyright Notice</h2>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <p className="text-gray-600 leading-relaxed">
                  © {new Date().getFullYear()} Success Partners. All rights reserved. The content, design, graphics, and other materials on this website are protected by copyright and other intellectual property laws. Unauthorized use, reproduction, or distribution of any materials from this website is strictly prohibited without prior written permission from Success Partners.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions or Concerns</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions or concerns about this imprint or any other legal matters related to Success Partners, please contact us using the information provided above.
              </p>
              <div className="bg-[#154762] p-8 rounded-2xl text-white">
                <p className="text-lg mb-4">We are here to help and will respond to your inquiry as soon as possible.</p>
                <a 
                  href="mailto:info@successpartners-iq.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#39BA9F] text-white font-semibold rounded-lg hover:bg-[#2da88c] transition-colors"
                >
                  Contact Us
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
