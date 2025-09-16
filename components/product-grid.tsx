"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MessageCircle, Filter } from "lucide-react"
import { ProductDetailsDialog } from "@/components/product-details-dialog"

const products = [
  // iPhone Products
  { 
    id: 1, 
    name: "iPhone 11", 
    price: 240, 
    image: "/products/iphone/iphone-11/image-1.png", 
    category: "iPhone",
    images: ["/products/iphone/iphone-11/image-1.png", "/products/iphone/iphone-11/image-2.png", "/products/iphone/iphone-11/image-3.png", "/products/iphone/iphone-11/image-4.png", "/products/iphone/iphone-11/image-5.png"],
    description: "iPhone 11 features a 6.1-inch Liquid Retina display, A13 Bionic chip, and dual-camera system with Night mode.",
    rating: 4.5,
    specs: {
      display: "6.1-inch Liquid Retina HD LCD",
      processor: "A13 Bionic chip with 3rd generation Neural Engine",
      ram: "4GB",
      storage: "64GB/128GB/256GB",
      camera: "Dual 12MP system: Wide and Ultra Wide cameras",
      battery: "Up to 17 hours video playback",
      os: "iOS 13, upgradable to iOS 17"
    }
  },
  { 
    id: 2, 
    name: "iPhone 11 Pro Max", 
    price: 350, 
    image: "/products/iphone/iphone-11-pro-max/image-1.png", 
    category: "iPhone",
    images: ["/products/iphone/iphone-11-pro-max/image-1.png", "/products/iphone/iphone-11-pro-max/image-2.png", "/products/iphone/iphone-11-pro-max/image-3.png", "/products/iphone/iphone-11-pro-max/image-4.png", "/products/iphone/iphone-11-pro-max/image-5.png"],
    description: "iPhone 11 Pro Max features a 6.5-inch Super Retina XDR display, A13 Bionic chip, and Pro camera system with Night mode.",
    rating: 4.7,
    specs: {
      display: "6.5-inch Super Retina XDR OLED",
      processor: "A13 Bionic chip with 3rd generation Neural Engine",
      ram: "4GB",
      storage: "64GB/256GB/512GB",
      camera: "Triple 12MP system: Wide, Ultra Wide, and Telephoto",
      battery: "Up to 20 hours video playback",
      os: "iOS 13, upgradable to iOS 17"
    }
  },
  { 
    id: 3, 
    name: "iPhone 12", 
    price: 280, 
    image: "/iphone-smartphone.png", 
    category: "iPhone",
    images: ["/iphone-smartphone.png", "/modern-smartphone-display-showcase.jpg"],
    description: "5G iPhone with A14 Bionic chip and improved cameras.",
    rating: 4.6,
    specs: {
      display: "6.1-inch Super Retina XDR",
      processor: "A14 Bionic chip",
      ram: "4GB",
      storage: "128GB",
      camera: "12MP Dual camera system",
      battery: "2815 mAh",
      os: "iOS 16"
    }
  },
  { 
    id: 4, 
    name: "iPhone 12 Pro Max", 
    price: 450, 
    image: "/iphone-smartphone.png", 
    category: "iPhone",
    images: ["/iphone-smartphone.png", "/modern-smartphone-display-showcase.jpg"],
    description: "Largest iPhone 12 with pro camera system and LiDAR.",
    rating: 4.8,
    specs: {
      display: "6.7-inch Super Retina XDR",
      processor: "A14 Bionic chip",
      ram: "6GB",
      storage: "256GB",
      camera: "12MP Triple camera system",
      battery: "3687 mAh",
      os: "iOS 16"
    }
  },
  { 
    id: 5, 
    name: "iPhone 13", 
    price: 400, 
    image: "/iphone-smartphone.png", 
    category: "iPhone",
    images: ["/iphone-smartphone.png", "/modern-smartphone-display-showcase.jpg"],
    description: "iPhone 13 with improved battery life and camera performance.",
    rating: 4.7,
    specs: {
      display: "6.1-inch Super Retina XDR",
      processor: "A15 Bionic chip",
      ram: "4GB",
      storage: "128GB",
      camera: "12MP Dual camera system",
      battery: "3240 mAh",
      os: "iOS 17"
    }
  },
  { 
    id: 6, 
    name: "iPhone 13 Pro Max", 
    price: 550, 
    image: "/iphone-smartphone.png", 
    category: "iPhone",
    images: ["/iphone-smartphone.png", "/modern-smartphone-display-showcase.jpg"],
    description: "Pro Max iPhone with 120Hz display and advanced cameras.",
    rating: 4.9,
    specs: {
      display: "6.7-inch Super Retina XDR ProMotion",
      processor: "A15 Bionic chip",
      ram: "6GB",
      storage: "256GB",
      camera: "12MP Triple camera system",
      battery: "4352 mAh",
      os: "iOS 17"
    }
  },
  { 
    id: 7, 
    name: "iPhone 14", 
    price: 550, 
    image: "/iphone-smartphone.png", 
    category: "iPhone",
    images: ["/iphone-smartphone.png", "/modern-smartphone-display-showcase.jpg"],
    description: "Latest iPhone with crash detection and improved cameras.",
    rating: 4.8,
    specs: {
      display: "6.1-inch Super Retina XDR",
      processor: "A15 Bionic chip",
      ram: "6GB",
      storage: "128GB",
      camera: "12MP Dual camera system",
      battery: "3279 mAh",
      os: "iOS 18"
    }
  },
  { 
    id: 8, 
    name: "iPhone 14 Pro", 
    price: 620, 
    image: "/iphone-smartphone.png", 
    category: "iPhone",
    images: ["/iphone-smartphone.png", "/modern-smartphone-display-showcase.jpg"],
    description: "Pro iPhone with Dynamic Island and 48MP camera.",
    rating: 4.9,
    specs: {
      display: "6.1-inch Super Retina XDR ProMotion",
      processor: "A16 Bionic chip",
      ram: "6GB",
      storage: "256GB",
      camera: "48MP Triple camera system",
      battery: "3200 mAh",
      os: "iOS 18"
    }
  },
  { 
    id: 9, 
    name: "iPhone 14 Pro Max", 
    price: 680, 
    image: "/iphone-smartphone.png", 
    category: "iPhone",
    images: ["/iphone-smartphone.png", "/modern-smartphone-display-showcase.jpg"],
    description: "Largest iPhone 14 with best battery life and cameras.",
    rating: 4.9,
    specs: {
      display: "6.7-inch Super Retina XDR ProMotion",
      processor: "A16 Bionic chip",
      ram: "6GB",
      storage: "256GB",
      camera: "48MP Triple camera system",
      battery: "4323 mAh",
      os: "iOS 18"
    }
  },
  { 
    id: 10, 
    name: "iPhone 15", 
    price: 700, 
    image: "/iphone-smartphone.png", 
    category: "iPhone",
    images: ["/iphone-smartphone.png", "/modern-smartphone-display-showcase.jpg"],
    description: "iPhone 15 with USB-C and improved performance.",
    rating: 4.8,
    specs: {
      display: "6.1-inch Super Retina XDR",
      processor: "A16 Bionic chip",
      ram: "6GB",
      storage: "128GB",
      camera: "48MP Dual camera system",
      battery: "3349 mAh",
      os: "iOS 18"
    }
  },
  { 
    id: 11, 
    name: "iPhone 15 Pro", 
    price: 800, 
    image: "/iphone-smartphone.png", 
    category: "iPhone",
    images: ["/iphone-smartphone.png", "/modern-smartphone-display-showcase.jpg"],
    description: "Pro iPhone with titanium build and A17 Pro chip.",
    rating: 4.9,
    specs: {
      display: "6.1-inch Super Retina XDR ProMotion",
      processor: "A17 Pro chip",
      ram: "8GB",
      storage: "256GB",
      camera: "48MP Triple camera system",
      battery: "3274 mAh",
      os: "iOS 18"
    }
  },
  { 
    id: 12, 
    name: "iPhone 15 Pro Max", 
    price: 900, 
    image: "/products/iphone/iphone-15-pro-max/image-1.png", 
    category: "iPhone",
    images: ["/products/iphone/iphone-15-pro-max/image-1.png", "/products/iphone/iphone-15-pro-max/image-2.png", "/products/iphone/iphone-15-pro-max/image-3.png", "/products/iphone/iphone-15-pro-max/image-4.png", "/products/iphone/iphone-15-pro-max/image-5.png"],
    description: "iPhone 15 Pro Max features titanium design, A17 Pro chip, 5x telephoto zoom, and Action Button.",
    rating: 4.9,
    specs: {
      display: "6.7-inch Super Retina XDR OLED with ProMotion 120Hz",
      processor: "A17 Pro chip with 6-core GPU",
      ram: "8GB",
      storage: "256GB/512GB/1TB",
      camera: "48MP Main + 12MP Ultra Wide + 12MP Telephoto (5x zoom)",
      battery: "Up to 29 hours video playback",
      os: "iOS 17, upgradable to iOS 18"
    }
  },
  { 
    id: 13, 
    name: "iPhone 16", 
    price: 950, 
    image: "/iphone-smartphone.png", 
    category: "iPhone",
    images: ["/iphone-smartphone.png", "/modern-smartphone-display-showcase.jpg"],
    description: "Latest iPhone with Apple Intelligence and Camera Control.",
    rating: 4.8,
    specs: {
      display: "6.1-inch Super Retina XDR",
      processor: "A18 chip",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP Dual camera system",
      battery: "3561 mAh",
      os: "iOS 18"
    }
  },
  { 
    id: 14, 
    name: "iPhone 16 Plus", 
    price: 1020, 
    image: "/iphone-smartphone.png", 
    category: "iPhone",
    images: ["/iphone-smartphone.png", "/modern-smartphone-display-showcase.jpg"],
    description: "Larger iPhone 16 with extended battery life.",
    rating: 4.8,
    specs: {
      display: "6.7-inch Super Retina XDR",
      processor: "A18 chip",
      ram: "8GB",
      storage: "128GB",
      camera: "48MP Dual camera system",
      battery: "4674 mAh",
      os: "iOS 18"
    }
  },
  { 
    id: 15, 
    name: "iPhone 16 Pro", 
    price: 1100, 
    image: "/iphone-smartphone.png", 
    category: "iPhone",
    images: ["/iphone-smartphone.png", "/modern-smartphone-display-showcase.jpg"],
    description: "Pro iPhone with A18 Pro and advanced camera system.",
    rating: 4.9,
    specs: {
      display: "6.3-inch Super Retina XDR ProMotion",
      processor: "A18 Pro chip",
      ram: "8GB",
      storage: "256GB",
      camera: "48MP Triple camera system",
      battery: "3582 mAh",
      os: "iOS 18"
    }
  },
  { 
    id: 16, 
    name: "iPhone 16 Pro Max", 
    price: 1250, 
    image: "/products/iphone/iphone-16-pro-max/image-1.png", 
    category: "iPhone",
    images: ["/products/iphone/iphone-16-pro-max/image-1.png", "/products/iphone/iphone-16-pro-max/image-2.png", "/products/iphone/iphone-16-pro-max/image-3.png", "/products/iphone/iphone-16-pro-max/image-4.png", "/products/iphone/iphone-16-pro-max/image-5.png"],
    description: "iPhone 16 Pro Max features the largest 6.9-inch Super Retina XDR display, A18 Pro chip, and advanced camera system with Camera Control.",
    rating: 4.9,
    specs: {
      display: "6.9-inch Super Retina XDR OLED with ProMotion 120Hz",
      processor: "A18 Pro chip with 6-core GPU",
      ram: "8GB",
      storage: "256GB/512GB/1TB",
      camera: "48MP Fusion camera, 48MP Ultra Wide, 12MP Telephoto with 5x zoom",
      battery: "Up to 33 hours video playback",
      os: "iOS 18 with Apple Intelligence"
    }
  },
  // Samsung Products
  { 
    id: 17, 
    name: "Samsung Galaxy S22 Ultra", 
    price: 350, 
    image: "/samsung-galaxy-s24-ultra.png", 
    category: "Samsung",
    images: ["/samsung-galaxy-s24-ultra.png", "/images/products/galaxy-s23.png"],
    description: "S22 Ultra with S Pen and powerful cameras.",
    rating: 4.7,
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 1",
      ram: "12GB",
      storage: "256GB",
      camera: "108MP Quad camera",
      battery: "5000 mAh",
      os: "Android 12"
    }
  },
  { 
    id: 18, 
    name: "Samsung Galaxy Z Flip 3", 
    price: 260, 
    image: "/samsung-galaxy-s21-plus-smartphone.jpg", 
    category: "Samsung",
    images: ["/samsung-galaxy-s21-plus-smartphone.jpg", "/modern-smartphone-display-showcase.jpg"],
    description: "Foldable phone with compact design and premium features.",
    rating: 4.4,
    specs: {
      display: "6.7-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 888",
      ram: "8GB",
      storage: "256GB",
      camera: "12MP Dual camera",
      battery: "3300 mAh",
      os: "Android 11"
    }
  },
  { 
    id: 19, 
    name: "Samsung Galaxy Z Flip 4", 
    price: 300, 
    image: "/samsung-galaxy-s21-plus-smartphone.jpg", 
    category: "Samsung",
    images: ["/samsung-galaxy-s21-plus-smartphone.jpg", "/modern-smartphone-display-showcase.jpg"],
    description: "Improved foldable with better battery and cameras.",
    rating: 4.5,
    specs: {
      display: "6.7-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8+ Gen 1",
      ram: "8GB",
      storage: "256GB",
      camera: "12MP Dual camera",
      battery: "3700 mAh",
      os: "Android 12"
    }
  },
  { 
    id: 20, 
    name: "Samsung Galaxy S21 Ultra", 
    price: 280, 
    image: "/samsung-galaxy-s21-plus-smartphone.jpg", 
    category: "Samsung",
    images: ["/samsung-galaxy-s21-plus-smartphone.jpg", "/modern-smartphone-display-showcase.jpg"],
    description: "S21 Ultra with 108MP camera and S Pen support.",
    rating: 4.6,
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Exynos 2100",
      ram: "12GB",
      storage: "256GB",
      camera: "108MP Quad camera",
      battery: "5000 mAh",
      os: "Android 11"
    }
  },
  { 
    id: 21, 
    name: "Samsung Galaxy A14", 
    price: 110, 
    image: "/samsung-galaxy-a51-smartphone.jpg", 
    category: "Samsung",
    images: ["/samsung-galaxy-a51-smartphone.jpg", "/modern-smartphone-display-showcase-with-multiple-p.jpg"],
    description: "Budget-friendly Samsung with good performance.",
    rating: 4.1,
    specs: {
      display: "6.6-inch PLS LCD",
      processor: "Exynos 850",
      ram: "4GB",
      storage: "128GB",
      camera: "50MP Triple camera",
      battery: "5000 mAh",
      os: "Android 13"
    }
  },
  { 
    id: 22, 
    name: "Samsung Galaxy A31", 
    price: 120, 
    image: "/samsung-galaxy-a51-smartphone.jpg", 
    category: "Samsung",
    images: ["/samsung-galaxy-a51-smartphone.jpg", "/modern-smartphone-display-showcase-with-multiple-p.jpg"],
    description: "Mid-range Samsung with quad camera setup.",
    rating: 4.2,
    specs: {
      display: "6.4-inch Super AMOLED",
      processor: "MediaTek Helio P65",
      ram: "4GB",
      storage: "128GB",
      camera: "48MP Quad camera",
      battery: "5000 mAh",
      os: "Android 10"
    }
  },
  { 
    id: 23, 
    name: "Samsung Galaxy A51", 
    price: 150, 
    image: "/samsung-galaxy-a51-smartphone.jpg", 
    category: "Samsung",
    images: ["/samsung-galaxy-a51-smartphone.jpg", "/modern-smartphone-display-showcase-with-multiple-p.jpg"],
    description: "Popular mid-range with excellent camera performance.",
    rating: 4.3,
    specs: {
      display: "6.5-inch Super AMOLED",
      processor: "Exynos 9611",
      ram: "4GB",
      storage: "128GB",
      camera: "48MP Quad camera",
      battery: "4000 mAh",
      os: "Android 10"
    }
  },
  { 
    id: 24, 
    name: "Samsung Galaxy S21 Plus", 
    price: 240, 
    image: "/samsung-galaxy-s21-plus-smartphone.jpg", 
    category: "Samsung",
    images: ["/samsung-galaxy-s21-plus-smartphone.jpg", "/modern-smartphone-display-showcase.jpg"],
    description: "Premium flagship with pro-grade camera and 5G.",
    rating: 4.6,
    specs: {
      display: "6.7-inch Dynamic AMOLED 2X",
      processor: "Exynos 2100",
      ram: "8GB",
      storage: "256GB",
      camera: "64MP Triple camera",
      battery: "4800 mAh",
      os: "Android 11"
    }
  },
  { 
    id: 25, 
    name: "Samsung Galaxy S23 Ultra", 
    price: 600, 
    image: "/images/products/galaxy-s23.png", 
    category: "Samsung",
    images: ["/images/products/galaxy-s23.png", "/samsung-galaxy-s24-ultra.png"],
    description: "Ultimate flagship with S Pen and 200MP camera.",
    rating: 4.9,
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 2",
      ram: "12GB",
      storage: "512GB",
      camera: "200MP Quad camera",
      battery: "5000 mAh",
      os: "Android 13"
    }
  },
  { 
    id: 26, 
    name: "Samsung Galaxy S24 Ultra", 
    price: 750, 
    image: "/products/samsung/galaxy-s24-ultra/image-1.png", 
    category: "Samsung",
    images: ["/products/samsung/galaxy-s24-ultra/image-1.png", "/products/samsung/galaxy-s24-ultra/image-2.png", "/products/samsung/galaxy-s24-ultra/image-3.png", "/products/samsung/galaxy-s24-ultra/image-4.png", "/products/samsung/galaxy-s24-ultra/image-5.png"],
    description: "Galaxy S24 Ultra features a 6.8-inch Dynamic AMOLED 2X display, Snapdragon 8 Gen 3, AI features, and titanium build with S Pen.",
    rating: 4.9,
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X, 120Hz, 3120x1440, Gorilla Armor",
      processor: "Snapdragon 8 Gen 3 for Galaxy (4nm) Octa-core",
      ram: "12GB LPDDR5X",
      storage: "256GB/512GB/1TB UFS 4.0",
      camera: "200MP Wide + 50MP Periscope + 10MP Telephoto + 12MP Ultra Wide",
      battery: "5000mAh with 45W fast charging",
      os: "Android 14, One UI 6.1 with Galaxy AI"
    }
  },
  { 
    id: 27, 
    name: "Samsung Galaxy Note 10 Plus", 
    price: 220, 
    image: "/samsung-galaxy-note-10-plus-smartphone.jpg", 
    category: "Samsung",
    images: ["/samsung-galaxy-note-10-plus-smartphone.jpg", "/samsung-galaxy-note-20-smartphone.jpg"],
    description: "Productivity powerhouse with S Pen and large display.",
    rating: 4.5,
    specs: {
      display: "6.8-inch Dynamic AMOLED",
      processor: "Exynos 9825",
      ram: "12GB",
      storage: "256GB",
      camera: "12MP Triple camera",
      battery: "4300 mAh",
      os: "Android 9"
    }
  },
  { 
    id: 28, 
    name: "Samsung Galaxy Note 20", 
    price: 250, 
    image: "/samsung-galaxy-note-20-smartphone.jpg", 
    category: "Samsung",
    images: ["/samsung-galaxy-note-20-smartphone.jpg", "/samsung-galaxy-note-20-ultra-smartphone.jpg"],
    description: "Enhanced Note with improved S Pen and 5G support.",
    rating: 4.4,
    specs: {
      display: "6.7-inch Super AMOLED Plus",
      processor: "Exynos 990",
      ram: "8GB",
      storage: "256GB",
      camera: "64MP Triple camera",
      battery: "4300 mAh",
      os: "Android 10"
    }
  },
  { 
    id: 29, 
    name: "Samsung Galaxy Note 20 Ultra", 
    price: 280, 
    image: "/products/samsung/galaxy-note-20-ultra/image-1.png", 
    category: "Samsung",
    images: ["/products/samsung/galaxy-note-20-ultra/image-1.png", "/products/samsung/galaxy-note-20-ultra/image-2.png", "/products/samsung/galaxy-note-20-ultra/image-3.png", "/products/samsung/galaxy-note-20-ultra/image-4.png", "/products/samsung/galaxy-note-20-ultra/image-5.png"],
    description: "Galaxy Note 20 Ultra features a 6.9-inch Dynamic AMOLED 2X display, Exynos 990 processor, and 108MP camera with ultra-responsive S Pen.",
    rating: 4.7,
    specs: {
      display: "6.9-inch Dynamic AMOLED 2X, 120Hz, 3088x1440",
      processor: "Exynos 990 (7nm+) Octa-core",
      ram: "12GB LPDDR5",
      storage: "256GB/512GB UFS 3.1 + microSD",
      camera: "108MP Wide + 12MP Periscope Telephoto + 12MP Ultra Wide",
      battery: "4500mAh with 25W fast charging",
      os: "Android 10, upgradable to Android 13, One UI 5.1"
    }
  },
]

export function ProductGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const categories = ["All", "iPhone", "Samsung"]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">All Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our complete collection of smartphones with competitive prices and quality guarantee.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search phones..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border border-gray-300"
            />
          </div>

          <div className="flex gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                <Filter className="h-4 w-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50 cursor-pointer"
              onClick={() => {
                setSelectedProduct(product)
                setDialogOpen(true)
              }}
            >
              <CardContent className="p-4">
                <div className="relative mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <Badge variant="secondary" className="absolute top-2 right-2">
                    {product.category}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <div className="text-2xl font-bold text-primary">${product.price}</div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProduct(product)
                        setDialogOpen(true)
                      }}
                    >
                      View Details
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found matching your criteria.</p>
          </div>
        )}

        <ProductDetailsDialog
          product={selectedProduct}
          open={dialogOpen}
          onOpenChange={setDialogOpen}
        />
      </div>
    </section>
  )
}
