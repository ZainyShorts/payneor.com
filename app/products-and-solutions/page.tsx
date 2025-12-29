import { Navbar } from "@/components/navbar" 
import { ProductSolutions } from "@/components/product-solutions"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <ProductSolutions />
    </main>
  )
}
