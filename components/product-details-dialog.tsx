"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MessageCircle, ChevronLeft, ChevronRight, Star } from "lucide-react"

interface ProductDetailsDialogProps {
  product: {
    id: number
    name: string
    price: number
    image: string
    category: string
    images?: string[]
    specs?: {
      display: string
      processor: string
      ram: string
      storage: string
      camera: string
      battery: string
      os: string
    }
    description?: string
    rating?: number
  } | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProductDetailsDialog({ product, open, onOpenChange }: ProductDetailsDialogProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!product) return null

  const allImages = product.images || [product.image]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto" style={{ width: '6xl', maxWidth: '72rem' }}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-4">
            {product.name}
            <span className="text-2xl font-bold text-primary">(${product.price})</span>
            {product.rating && (
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-muted-foreground">{product.rating}</span>
              </div>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Image Section */}
          <div className="flex justify-center">
            <div className="space-y-4 max-w-md">
              <div className="relative">
                <img
                  src={allImages[currentImageIndex] || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
                {allImages.length > 1 && (
                  <>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-md"
                      onClick={prevImage}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-md"
                      onClick={nextImage}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </>
                )}
                <Badge variant="secondary" className="absolute top-3 left-3 bg-black/70 text-white">
                  {product.category}
                </Badge>
              </div>

              {/* Thumbnail Images */}
              {allImages.length > 1 && (
                <div className="flex gap-3 justify-center overflow-x-auto pb-2">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden transition-all ${
                        index === currentImageIndex ? "border-primary shadow-md" : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Specifications Section */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-inner">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">Technical Specifications</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <p className="text-gray-600 leading-relaxed"><span className="font-semibold text-gray-800">Available Versions:</span> SM-G991B, SM-G991B/DS (International); SM-G991U (USA); SM-G991U1 (USA unlocked); SM-G991W (Canada); SM-G991N (Korea); SM-G9910 (China)</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold mb-4 text-gray-800 border-b border-primary/20 pb-2">📡 Network</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">Technology:</span><span className="text-gray-800 text-right">GSM / CDMA / HSPA / EVDO / LTE / 5G</span></div>
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">Announced:</span><span className="text-gray-800 text-right">2021, January 14</span></div>
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">Status:</span><span className="text-gray-800 text-right">Available. Released 2021, January 29</span></div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold mb-4 text-gray-800 border-b border-primary/20 pb-2">📱 Body</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">Dimensions:</span><span className="text-gray-800 text-right">151.7 x 71.2 x 7.9 mm</span></div>
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">Weight:</span><span className="text-gray-800 text-right">169 g (Sub6), 171 g (mmWave)</span></div>
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">Build:</span><span className="text-gray-800 text-right">Glass front, plastic back, aluminum frame</span></div>
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">SIM:</span><span className="text-gray-800 text-right">Nano-SIM + eSIM</span></div>
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">Features:</span><span className="text-gray-800 text-right">IP68 dust/water resistant</span></div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold mb-4 text-gray-800 border-b border-primary/20 pb-2">🖥️ Display</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">Type:</span><span className="text-gray-800 text-right">Dynamic AMOLED 2X, 120Hz</span></div>
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">Size:</span><span className="text-gray-800 text-right">6.2 inches, 94.1 cm²</span></div>
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">Resolution:</span><span className="text-gray-800 text-right">1080 x 2400 pixels</span></div>
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">Protection:</span><span className="text-gray-800 text-right">Corning Gorilla Glass Victus</span></div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold mb-4 text-gray-800 border-b border-primary/20 pb-2">⚡ Platform</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">OS:</span><span className="text-gray-800 text-right">Android 11, One UI 6.1</span></div>
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">Chipset:</span><span className="text-gray-800 text-right">Exynos 2100 / Snapdragon 888</span></div>
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">CPU:</span><span className="text-gray-800 text-right">Octa-core</span></div>
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">GPU:</span><span className="text-gray-800 text-right">Mali-G78 MP14 / Adreno 660</span></div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold mb-4 text-gray-800 border-b border-primary/20 pb-2">💾 Memory</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">Card slot:</span><span className="text-gray-800 text-right">No</span></div>
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">Internal:</span><span className="text-gray-800 text-right">128GB 6GB RAM, 256GB 8GB RAM</span></div>
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">UFS:</span><span className="text-gray-800 text-right">3.1</span></div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold mb-4 text-gray-800 border-b border-primary/20 pb-2">📸 Main Camera</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">Triple:</span><span className="text-gray-800 text-right">12MP + 64MP + 12MP</span></div>
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">Features:</span><span className="text-gray-800 text-right">LED flash, auto-HDR, panorama</span></div>
                    <div className="flex justify-between items-start"><span className="font-medium text-gray-600 min-w-fit">Video:</span><span className="text-gray-800 text-right">8K@24fps, 4K@30/60fps</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}