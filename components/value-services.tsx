"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Calendar, CreditCard, Smartphone, Shield } from "lucide-react" 
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Buy Now Pay Later",
    description: "Allows customers to purchase online or in-store and pay for it at a future date.",
    icon: Calendar,
    image: "https://images.unsplash.com/photo-1674515489647-fd8f76b86f65?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1eSUyMG5vdyUyMHBheSUyMGxhdGVyfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Digital Wallets",
    description: "Seamless integration with popular digital wallets for instant payments anywhere.",
    icon: Smartphone,
    image: "https://www.telefonica.com/en/wp-content/uploads/sites/5/2022/06/Imagen1-1.jpg?w=1224&h=673&crop=1",
  },
  {
    id: 3,
    title: "Installment Plans",
    description: "Flexible payment options allowing customers to split purchases into easy monthly payments.",
    icon: CreditCard,
    image: "https://img.freepik.com/free-photo/table-desk-with-credit-approved-request_23-2147764199.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    id: 4,
    title: "Fraud Protection",
    description: "Advanced security measures to protect your business and customers from fraudulent transactions.",
    icon: Shield,
    image: "https://thumbs.dreamstime.com/b/abstract-lock-design-data-privacy-fraud-protection-digital-padlock-glows-brightly-against-circuit-board-texture-403731657.jpg",
  },
]

export function ValueServices() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  const currentService = services[currentIndex]
  const IconComponent = currentService.icon

  return (
    <section
      className="relative w-full py-12 md:py-20 lg:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #102a4c 50%, #1a3a5c 100%)",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Subtle gradient overlay for depth */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 80% 20%, rgba(30, 64, 110, 0.4) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Content - Mobile: Top, Desktop: Left */}
          <div className="order-1 lg:order-1 space-y-4 md:space-y-6 text-center lg:text-left w-full">
            <span
              className="inline-block text-orange-500 text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Value added services
            </span>

            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-snug sm:leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              New trends that impact
              <br />
              your business
            </h2>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Reliable solutions which provide unique and enhanced value to increase sales and convenience to customers.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
  href="/products-and-solutions"
  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 hover:scale-105 active:scale-95"
  style={{ fontFamily: "var(--font-heading)" }}
>
  View all services
  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
</Link>
              
              {/* Mobile indicators - only show on mobile */}
              <div className="sm:hidden flex items-center justify-center gap-2 mt-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-8 bg-orange-500" : "w-2 bg-gray-500 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Slider - Mobile: Bottom, Desktop: Right */}
          <div className="order-2 lg:order-2 flex flex-col md:flex-row items-center gap-6 lg:gap-10 w-full">
            {/* Image Card */}
            <div className="relative w-full md:w-auto">
              <div className="relative w-full sm:w-64 md:w-72 lg:w-80 h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl shadow-black/30 transition-transform duration-500 mx-auto">
                <Image
                  src={currentService.image || "/placeholder.svg"}
                  alt={currentService.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                  priority
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                
                {/* Mobile service title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent sm:hidden">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full border-2 border-orange-500 text-orange-500 bg-black/50">
                      <IconComponent className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                      {currentService.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Info Card - Hidden on mobile, shown on tablet and up */}
            <div className="hidden sm:block flex-1 space-y-4 md:space-y-6">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-orange-500 text-orange-500 transition-all duration-300 hover:bg-orange-500 hover:text-white">
                <IconComponent className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                {currentService.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">{currentService.description}</p>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6">
                <button
                  onClick={prevSlide}
                  className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-500 text-gray-400 transition-all duration-300 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10"
                  aria-label="Previous service"
                >
                  <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-500 text-gray-400 transition-all duration-300 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10"
                  aria-label="Next service"
                >
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>

                {/* Slide indicators */}
                <div className="flex items-center gap-2 ml-3 md:ml-4">
                  {services.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? "w-6 md:w-8 bg-orange-500" : "w-2 bg-gray-500 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile navigation - only for mobile */}
            <div className="sm:hidden w-full mt-4">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{currentService.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={prevSlide}
                      className="group flex items-center justify-center w-10 h-10 rounded-full border border-gray-500 text-gray-400 transition-all duration-300 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10"
                      aria-label="Previous service"
                    >
                      <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="group flex items-center justify-center w-10 h-10 rounded-full border border-gray-500 text-gray-400 transition-all duration-300 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-500/10"
                      aria-label="Next service"
                    >
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                  <span className="text-xs text-gray-400 font-medium">
                    {currentIndex + 1} / {services.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services grid for tablet - hidden on mobile and desktop */}
        <div className="hidden sm:block lg:hidden mt-12">
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => {
              const ServiceIcon = service.icon
              return (
                <button
                  key={service.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                    index === currentIndex
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-gray-700 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      index === currentIndex ? "border-orange-500 text-orange-500" : "border-gray-600 text-gray-400"
                    }`}>
                      <ServiceIcon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h4 className={`text-sm font-semibold ${
                      index === currentIndex ? "text-white" : "text-gray-300"
                    }`}>
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-2">
                    {service.description}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
    </section>
  )
}