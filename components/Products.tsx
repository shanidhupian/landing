import ImageWithFallback from "./ImageWithFallback";
import { productCategories } from "@/data/business";

export default function Products() {
  return (
    <section id="products" className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Products & Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">We offer a wide range of high-quality fabrics and packaging solutions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-primary-100">
              <div className="relative w-full h-64 bg-gray-200">
                <ImageWithFallback src={category.image} alt={category.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.name}</h3>
                <ul className="space-y-2">
                  {category.products.map((product, i) => (
                    <li key={i} className="text-gray-600 flex items-center">
                      <span className="w-5 h-5 text-primary-500 mr-2">✓</span>
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 border border-primary-100">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">HSN Codes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-primary-50 rounded-lg border border-primary-100">
              <div className="text-sm text-gray-500 mb-2">HSN Code</div>
              <div className="text-xl font-semibold text-primary-600">5901</div>
              <div className="text-sm text-gray-600 mt-2">Textile fabrics coated with gum or amylaceous substances</div>
            </div>
            <div className="text-center p-4 bg-primary-50 rounded-lg border border-primary-100">
              <div className="text-sm text-gray-500 mb-2">HSN Code</div>
              <div className="text-xl font-semibold text-primary-600">5907</div>
              <div className="text-sm text-gray-600 mt-2">Textile fabrics otherwise impregnated, coated or covered</div>
            </div>
            <div className="text-center p-4 bg-primary-50 rounded-lg border border-primary-100">
              <div className="text-sm text-gray-500 mb-2">HSN Code</div>
              <div className="text-xl font-semibold text-primary-600">6308</div>
              <div className="text-sm text-gray-600 mt-2">Sets consisting of woven fabric and yarn</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
