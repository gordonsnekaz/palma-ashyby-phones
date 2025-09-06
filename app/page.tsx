import { Hero } from "@/components/hero"
import { FeaturedProducts } from "@/components/featured-products"
import { ProductGrid } from "@/components/product-grid"
import { ContactSection } from "@/components/contact-section"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <ProductGrid />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
