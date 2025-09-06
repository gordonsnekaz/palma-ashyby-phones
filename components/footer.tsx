import { MapPin, Phone, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border" style={{ backgroundColor: "#012F6A" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">PAL'S ELECTRONICS</h3>
            <p className="text-gray-200">
              Your trusted smartphone retailer in Harare. We offer premium devices at competitive prices with excellent
              customer service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-200 hover:text-orange-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-200 hover:text-orange-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-200">
                <MapPin className="h-4 w-4" />
                <span>Shop IC13, Zimpost Mall, Harare</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-200">
                <Phone className="h-4 w-4" />
                <span>0780821157 (Palma)</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-200">
                <Phone className="h-4 w-4" />
                <span>077736071 (Ashyby)</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="#products" className="block text-gray-200 hover:text-orange-400 transition-colors">
                All Products
              </a>
              <a href="#contact" className="block text-gray-200 hover:text-orange-400 transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-gray-200 hover:text-orange-400 transition-colors">
                Store Location
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-200">
            © 2024 PAL'S ELECTRONICS. All rights reserved. | Best smartphone deals in Harare
          </p>
        </div>
      </div>
    </footer>
  )
}
