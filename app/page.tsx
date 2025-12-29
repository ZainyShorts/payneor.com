import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero" 
import PaymentSolutionsWithBlogs from "@/components/solutions"
import { ValueServices } from "@/components/value-services"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero /> 
      <PaymentSolutionsWithBlogs/> 
      <ValueServices />
    </main>
  )
}
