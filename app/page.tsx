'use client'
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero" 
import PaymentSolutionsWithBlogs from "@/components/solutions"
import { ValueServices } from "@/components/value-services"
import { Suspense } from "react"
import { PaymentSolutions } from "@/components/payment-solutions"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero /> 
      <PaymentSolutions/>
      <Suspense fallback={<div>Loading...</div>}>
      <PaymentSolutionsWithBlogs/> 
      </Suspense>
      <ValueServices />
    </main>
  )
}
