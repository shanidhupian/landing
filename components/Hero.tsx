import ImageWithFallback from "./ImageWithFallback";
import { businessInfo } from "@/data/business";

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 text-white overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback src="/images/hero/hero-bg.webp" alt="Hero Background" fill className="object-cover opacity-15" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 min-h-[75vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          <div className="max-w-2xl z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">Welcome to {businessInfo.name}</h1>
            <p className="text-xl sm:text-2xl mb-4 text-white/95 font-medium">Leading Wholesaler & Distributor Since {businessInfo.establishedYear}</p>
            <p className="text-lg sm:text-xl mb-8 text-white/85">Quality Cotton Fabric, Lycra Fabric & Bakery Boxes</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 hover:text-primary-700 transition-all text-center shadow-xl">
                View Products
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all text-center">
                Contact Us
              </a>
            </div>
          </div>
          <div className="hidden lg:block relative w-full h-[550px] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
            <ImageWithFallback src="/images/hero/hero-main.png" alt="Shani Group - Shani House, Radadiya Brothers" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
