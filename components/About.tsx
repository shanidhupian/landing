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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <ImageWithFallback src="/images/about/about-us.webp" alt="About Shani Dhupian" fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">{businessInfo.name}</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {businessInfo.name} is a leading wholesaler and distributor of cotton fabric, lycra fabric, and bakery boxes, serving customers since {businessInfo.establishedYear} in Surat, Gujarat.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">We pride ourselves on providing high-quality products at competitive prices.</p>
            <div className="bg-gradient-to-br from-primary-50 to-accent-light rounded-lg p-8 border border-primary-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Business Information</h4>
              <div className="space-y-4">
                <div><span className="text-sm font-medium text-gray-500">Nature of Business</span><p className="text-gray-900 font-semibold">{businessInfo.natureOfBusiness}</p></div>
                <div><span className="text-sm font-medium text-gray-500">Legal Status</span><p className="text-gray-900 font-semibold">{businessInfo.legalStatus}</p></div>
                <div><span className="text-sm font-medium text-gray-500">CEO</span><p className="text-gray-900 font-semibold">{businessInfo.ceo}</p></div>
                <div><span className="text-sm font-medium text-gray-500">GST Number</span><p className="text-gray-900 font-semibold">{businessInfo.gst}</p></div>
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
