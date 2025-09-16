"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MessageCircle } from "lucide-react"
import { ProductDetailsDialog } from "@/components/product-details-dialog"

const featuredProducts = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    price: 1250,
    image: "/products/iphone/iphone-16-pro-max/image-1.png",
    badge: "Latest",
    rating: 5,
    features: ["A18 Pro Chip", "48MP Triple Camera", "6.9-inch Display"],
    category: "iPhone",
  },
  {
    id: 2,
    name: "Samsung Galaxy Note 20 Ultra",
    price: 280,
    image: "/products/samsung/galaxy-note-20-ultra/image-1.png",
    badge: "S Pen",
    rating: 5,
    features: ["108MP Camera", "S Pen Included", "6.9-inch Display"],
    category: "Samsung",
  },
]

export function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<typeof featuredProducts[0] | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleProductClick = (product: typeof featuredProducts[0]) => {
    setSelectedProduct(product)
    setIsDialogOpen(true)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">On Promotion</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our top-selling premium smartphones with cutting-edge technology and unbeatable prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-card cursor-pointer"
              onClick={() => handleProductClick(product)}
            >
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-xl bg-muted"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">{product.badge}</Badge>
                  <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">Best Deal</Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-card-foreground">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>

                  <div className="text-2xl font-bold text-primary">${product.price}</div>

                  <ul className="space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleProductClick(product)
                      }}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
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
      </div>
      
      <ProductDetailsDialog
        product={selectedProduct}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </section>
  )
}
