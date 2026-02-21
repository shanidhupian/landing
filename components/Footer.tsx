import { businessInfo } from "@/data/business";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{businessInfo.name}</h3>
            <p className="text-gray-400 mb-4">Leading wholesaler and distributor of cotton fabric, lycra fabric, and bakery boxes since {businessInfo.establishedYear}.</p>
            <p className="text-sm text-gray-500">GST: {businessInfo.gst}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["#home", "#products", "#about", "#contact"].map((href, i) => (
                <li key={i}><a href={href} className="text-gray-400 hover:text-white transition-colors">{(href === "#home" && "Home") || (href === "#products" && "Products") || (href === "#about" && "About Us") || "Contact"}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="text-gray-400 space-y-1">
              <p>{businessInfo.address}</p>
              <p>{businessInfo.city} - {businessInfo.pincode}</p>
              <p>{businessInfo.state}, India</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} {businessInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
