"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MessageCircle, Filter } from "lucide-react"
import { ProductDetailsDialog } from "@/components/product-details-dialog"

const products = [
  { 
    id: 1, 
    name: "iPhone 14", 
    price: 120, 
    image: "/iphone-smartphone.png", 
    category: "iPhone",
    images: ["/iphone-smartphone.png", "/modern-smartphone-display-showcase.jpg"],
    description: "Experience the power of iPhone 14 with advanced camera system and A15 Bionic chip.",
    rating: 4.8,
    specs: {
      display: "6.1-inch Super Retina XDR",
      processor: "A15 Bionic chip",
      ram: "6GB",
      storage: "128GB",
      camera: "12MP Dual camera system",
      battery: "3279 mAh",
      os: "iOS 16"
    }
  },
  { 
    id: 2, 
    name: "Samsung Galaxy A51", 
    price: 150, 
    image: "/samsung-galaxy-a51-smartphone.jpg", 
    category: "Samsung",
    images: ["/samsung-galaxy-a51-smartphone.jpg", "/modern-smartphone-display-showcase-with-multiple-p.jpg"],
    description: "Mid-range smartphone with excellent camera performance and long-lasting battery.",
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
    id: 3, 
    name: "Samsung Galaxy S21 Plus", 
    price: 240, 
    image: "/samsung-galaxy-s21-plus-smartphone.jpg", 
    category: "Samsung",
    images: ["/samsung-galaxy-s21-plus-smartphone.jpg", "/modern-smartphone-display-showcase.jpg"],
    description: "Premium flagship with pro-grade camera and 5G connectivity.",
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
    id: 4, 
    name: "Samsung Galaxy S23 Ultra", 
    price: 600, 
    image: "/images/products/galaxy-s23.png", 
    category: "Samsung",
    images: ["/images/products/galaxy-s23.png", "/samsung-galaxy-s24-ultra.png"],
    description: "Ultimate flagship with S Pen, 200MP camera, and premium design.",
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
    id: 5, 
    name: "Samsung Galaxy S24 Ultra", 
    price: 750, 
    image: "/samsung-galaxy-s24-ultra.png", 
    category: "Samsung",
    images: ["/samsung-galaxy-s24-ultra.png", "/images/products/galaxy-s23.png"],
    description: "Latest flagship with AI features, titanium build, and enhanced S Pen.",
    rating: 4.9,
    specs: {
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "512GB",
      camera: "200MP Quad camera with AI",
      battery: "5000 mAh",
      os: "Android 14"
    }
  },
  { 
    id: 6, 
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
    id: 7, 
    name: "Samsung Galaxy Note 20", 
    price: 250, 
    image: "/samsung-galaxy-note-20-smartphone.jpg", 
    category: "Samsung",
    images: ["/samsung-galaxy-note-20-smartphone.jpg", "/samsung-galaxy-note-20-ultra-smartphone.jpg"],
    description: "Enhanced Note experience with improved S Pen and 5G support.",
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
    id: 8, 
    name: "Samsung Galaxy Note 20 Ultra", 
    price: 280, 
    image: "/samsung-galaxy-note-20-ultra-smartphone.jpg", 
    category: "Samsung",
    images: ["/samsung-galaxy-note-20-ultra-smartphone.jpg", "/samsung-galaxy-note-20-smartphone.jpg"],
    description: "Premium Note with 108MP camera and ultra-responsive S Pen.",
    rating: 4.7,
    specs: {
      display: "6.9-inch Dynamic AMOLED 2X",
      processor: "Exynos 990",
      ram: "12GB",
      storage: "512GB",
      camera: "108MP Triple camera",
      battery: "4500 mAh",
      os: "Android 10"
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
              className="pl-10"
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
              className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50"
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
                      onClick={() => {
                        setSelectedProduct(product)
                        setDialogOpen(true)
                      }}
                    >
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
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
