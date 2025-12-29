"use client"

import Image from "next/image" 
import Link from "next/link"
import { ArrowRight, Shield, TrendingUp, Zap, CheckCircle2, Star, Sparkles } from "lucide-react"
import { useState } from "react"

export function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <>
      {/* Google Font Import & CSS Animations */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
        {/* Elegant Light Background */}
        <div className="absolute inset-0 -z-10">
          {/* Soft warm gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-amber-50/50" />

          {/* Animated gradient orbs */}
          <div
            className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-60"
            style={{
              background:
                "radial-gradient(circle, rgba(251,146,60,0.15) 0%, rgba(251,191,36,0.1) 50%, transparent 70%)",
              animation: "pulse 8s ease-in-out infinite",
            }}
          />
          <div
            className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-50"
            style={{
              background:
                "radial-gradient(circle, rgba(251,146,60,0.12) 0%, rgba(254,215,170,0.1) 50%, transparent 70%)",
              animation: "pulse 10s ease-in-out infinite 2s",
            }}
          />

          {/* Subtle mesh pattern */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(251 146 60 / 0.15) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Premium Badge */}
              <div
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 shadow-lg shadow-orange-100/50 hover:shadow-orange-200/60 hover:border-orange-300 transition-all duration-500 cursor-pointer group"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <div className="relative flex h-2.5 w-2.5">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"
                    style={{ animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite" }}
                  />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
                </div>
                <span className="text-sm font-bold tracking-widest text-orange-600 uppercase">Who we are</span>
                <Sparkles className="h-4 w-4 text-orange-500 group-hover:rotate-12 transition-transform duration-300" />
              </div>

              {/* Main Heading - Sexy Typography */}
              <div className="space-y-3">
                <h1
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-tight"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #ea580c 0%, #f97316 25%, #fb923c 50%, #f59e0b 75%, #ea580c 100%)",
                      backgroundSize: "200% auto",
                      animation: "shimmer 3s linear infinite",
                      WebkitBackgroundClip: "text",
                    }}
                  >
                    Seamless
                  </span>
                </h1>
                <p
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 leading-tight tracking-tight"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  payment solutions
                </p>
                <p
                  className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-400 tracking-tight"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  for your business
                </p>
              </div>

              {/* Description */}
              <p
                className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl font-medium"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Whether you are looking to innovate, optimize your operations, or require assistance with our products and services,
                <span className="text-orange-600 font-bold"> we are here to guide you every step of the way</span>.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4"> 
                                  <Link href="/contact">

                <button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white rounded-2xl overflow-hidden shadow-xl shadow-orange-300/40 hover:shadow-orange-400/50 transition-all duration-500 hover:scale-105"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {/* Gradient background */} 
                  <div
                    className="absolute cursor-pointer inset-0"
                    style={{
                      background: "linear-gradient(135deg, #ea580c 0%, #f97316 50%, #f59e0b 100%)",
                      backgroundSize: "200% 200%",
                      animation: "shimmer 3s ease infinite",
                    }}
                  />
                  <span className="relative z-10 tracking-wide">Get Started Free</span>
                  <ArrowRight
                    className={`relative z-10 h-5 w-5 transition-all duration-300 ${isHovered ? "translate-x-1.5 scale-110" : ""}`}
                  />
                </button> 
                </Link>

              
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100">
                <div className="group cursor-pointer">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-50 border border-orange-200 group-hover:border-orange-300 group-hover:shadow-lg group-hover:shadow-orange-100 group-hover:scale-110 transition-all duration-500 mb-3">
                    <Shield className="h-7 w-7 text-orange-500 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <p
                    className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Bank-Grade
                  </p>
                  <p
                    className="text-sm text-slate-400 font-medium"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Security
                  </p>
                </div>
                <div className="group cursor-pointer">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-50 border border-amber-200 group-hover:border-amber-300 group-hover:shadow-lg group-hover:shadow-amber-100 group-hover:scale-110 transition-all duration-500 mb-3">
                    <Zap className="h-7 w-7 text-amber-500 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <p
                    className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Instant
                  </p>
                  <p
                    className="text-sm text-slate-400 font-medium"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Processing
                  </p>
                </div>
                <div className="group cursor-pointer">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-50 border border-orange-200 group-hover:border-orange-300 group-hover:shadow-lg group-hover:shadow-orange-100 group-hover:scale-110 transition-all duration-500 mb-3">
                    <TrendingUp className="h-7 w-7 text-orange-500 group-hover:text-orange-600 transition-colors" />
                  </div>
                  <p
                    className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    99.9%
                  </p>
                  <p
                    className="text-sm text-slate-400 font-medium"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Uptime
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Image & Cards */}
            <div className="relative lg:order-last">
              {/* Dramatic glow effect */}
              <div
                className="absolute -inset-8 rounded-[48px] blur-3xl opacity-70"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(251,146,60,0.25) 0%, rgba(251,191,36,0.2) 50%, rgba(254,215,170,0.25) 100%)",
                  animation: "pulse 6s ease-in-out infinite",
                }}
              />

              {/* Main Image Container */}
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[32px] border border-orange-100 shadow-2xl shadow-orange-200/30 bg-white">
                  <Image
                    src="https://homesourcesystems.com/wp-content/uploads/2025/08/Tap-vs-Swipe.jpg"
                    alt="Modern payment terminal with contactless transaction"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Elegant overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5" />
                </div>
              </div>

              {/* Floating Stats Card - Top Right */}
              <div
                className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8 bg-white/95 backdrop-blur-2xl border border-orange-100 rounded-3xl p-6 shadow-2xl shadow-orange-200/20 hidden md:block"
                style={{ animation: "float 5s ease-in-out infinite" }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-50 border border-orange-200">
                    <TrendingUp className="h-8 w-8 text-orange-500" />
                  </div>
                  <div>
                    <p
                      className="text-4xl font-black bg-clip-text text-transparent"
                      style={{
                        backgroundImage: "linear-gradient(90deg, #ea580c, #f59e0b)",
                        WebkitBackgroundClip: "text",
                        fontFamily: "'Outfit', sans-serif",
                      }}
                    >
                      $2.4B+
                    </p>
                    <p
                      className="text-sm text-slate-500 font-semibold"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Processed Monthly
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card - Bottom Left */}
              <div
                className="absolute -bottom-8 -left-8 lg:-bottom-10 lg:-left-10 bg-white/95 backdrop-blur-2xl border border-orange-100 rounded-3xl p-6 shadow-2xl shadow-orange-200/20 max-w-xs hidden md:block"
                style={{ animation: "float 5s ease-in-out infinite 1.5s" }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-50 border border-amber-200">
                    <Star className="h-7 w-7 text-amber-500" fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-3xl font-black text-slate-800" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      4.9<span className="text-orange-500">/5</span>
                    </p>
                    <p
                      className="text-sm text-slate-500 font-medium"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Customer Rating
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  {["Instant transfers", "24/7 Support", "Multi-currency"].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 group/item cursor-pointer">
                      <CheckCircle2 className="h-5 w-5 text-orange-500 group-hover/item:scale-110 transition-transform" />
                      <span
                        className="text-sm text-slate-600 font-semibold group-hover/item:text-orange-600 transition-colors"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div
                className="absolute top-1/2 -right-16 w-32 h-32 border-2 border-orange-200/50 rounded-full hidden xl:block"
                style={{ animation: "spin 25s linear infinite" }}
              />
              <div className="absolute top-1/3 -right-20 w-40 h-40 border border-orange-100 rounded-full hidden xl:block" />
            </div>
          </div>

          {/* Bottom Logos Section */}
          <div className="mt-20 pt-12 border-t border-slate-100">
            <p
              className="text-center text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-10"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
              {["Visa", "Mastercard", "Apple Pay", "Google Pay", "PayPal"].map((brand) => (
                <div
                  key={brand}
                  className="text-2xl font-black text-slate-300 tracking-wide hover:text-orange-500 transition-all duration-500 cursor-pointer hover:scale-110"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}