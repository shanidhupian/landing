import ImageWithFallback from "./ImageWithFallback";
import { businessInfo } from "@/data/business";

export default function About() {
  const stats = [
    { label: "Years of Experience", value: `${new Date().getFullYear() - parseInt(businessInfo.establishedYear)}+` },
    { label: "Annual Turnover", value: businessInfo.annualTurnover },
    { label: "Employees", value: businessInfo.employees },
    { label: "GST Registered", value: "Since 2017" },
  ];

  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Your trusted partner for quality fabrics and packaging solutions</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-12">
          <div className="lg:col-span-7 relative w-full min-h-[280px] sm:min-h-[320px] lg:min-h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <ImageWithFallback src="/images/about/about-us.webp" alt="About Shani Dhupian" fill className="object-cover" />
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
            <h3 className="text-2xl font-semibold text-gray-900">{businessInfo.name}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {businessInfo.name} is a leading wholesaler and distributor of cotton fabric, lycra fabric, and bakery boxes, serving customers since {businessInfo.establishedYear} in Surat, Gujarat.
            </p>
            <p className="text-gray-600 mb-3 leading-relaxed">We pride ourselves on providing high-quality products at competitive prices.</p>
            </div>

            <div className="mt-3 bg-gradient-to-br from-primary-50 to-accent-light rounded-2xl p-7 sm:p-8 border border-primary-200">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h4 className="text-lg font-semibold text-gray-900">Business Information</h4>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">GST:</span> {businessInfo.gst}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">Nature</span>
                  <p className="text-base text-gray-900 font-semibold leading-snug">{businessInfo.natureOfBusiness}</p>
                </div>
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">Legal Status</span>
                  <p className="text-base text-gray-900 font-semibold leading-snug">{businessInfo.legalStatus}</p>
                </div>
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">GST Registered</span>
                  <p className="text-base text-gray-900 font-semibold leading-snug">{businessInfo.gstRegistrationDate}</p>
                </div>
                <div>
                  <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">Legal Name</span>
                  <p className="text-base text-gray-900 font-semibold leading-snug">{businessInfo.legalName ?? businessInfo.ceo}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-primary-50 to-accent-light rounded-lg p-6 text-center border border-primary-100">
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
