"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MessageCircle, Filter } from "lucide-react"

const products = [
  { id: 1, name: "iPhone 1", price: 120, image: "/iphone-smartphone.png", category: "iPhone" },
  { id: 2, name: "Samsung A51", price: 150, image: "/samsung-galaxy-a51-smartphone.jpg", category: "Samsung" },
  { id: 3, name: "Samsung S21 Plus", price: 240, image: "/samsung-galaxy-s21-plus-smartphone.jpg", category: "Samsung" },
  { id: 4, name: "Samsung S23 Ultra", price: 600, image: "/images/products/galaxy-s23.png", category: "Samsung" },
  { id: 5, name: "Samsung S24 Ultra", price: 750, image: "/samsung-galaxy-s24-ultra.png", category: "Samsung" },
  { id: 6, name: "Samsung Note 10 Plus", price: 220, image: "/samsung-galaxy-note-10-plus-smartphone.jpg", category: "Samsung" },
  { id: 7, name: "Samsung Note 20", price: 250, image: "/samsung-galaxy-note-20-smartphone.jpg", category: "Samsung" },
  { id: 8, name: "Samsung Note 20 Ultra", price: 280, image: "/samsung-galaxy-note-20-ultra-smartphone.jpg", category: "Samsung" },
]

export function ProductGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

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
                    <Button size="sm" className="flex-1">
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
      </div>
    </section>
  )
}
