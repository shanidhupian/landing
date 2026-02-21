import { businessInfo } from "@/data/business";

export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We would love to hear from you. Contact us for inquiries or quotes.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-8 border border-primary-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500">Address</h4>
                <p className="mt-1 text-gray-900">
                  {businessInfo.address}<br />
                  {businessInfo.city} - {businessInfo.pincode}<br />
                  {businessInfo.state}, India
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">CEO</h4>
                <p className="mt-1 text-gray-900">{businessInfo.ceo}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500">GST Number</h4>
                <p className="mt-1 text-gray-900 font-mono">{businessInfo.gst}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8 border border-primary-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Business Details</h3>
            <div className="space-y-6">
              <div><h4 className="text-sm font-medium text-gray-500 mb-2">Established</h4><p className="text-gray-900 font-semibold">Since {businessInfo.establishedYear}</p></div>
              <div><h4 className="text-sm font-medium text-gray-500 mb-2">GST Registration</h4><p className="text-gray-900 font-semibold">{businessInfo.gstRegistrationDate}</p></div>
              <div><h4 className="text-sm font-medium text-gray-500 mb-2">Nature of Business</h4><p className="text-gray-900">{businessInfo.natureOfBusiness}</p></div>
            </div>
            <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-200">
              <p className="text-sm text-gray-600 text-center">For inquiries or quotes, please contact us through the provided channels.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
