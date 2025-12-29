"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Monitor,
  ShoppingCart,
  Smartphone,
  CheckCircle2,
  CreditCard,
  Shield,
  Zap,
  Wallet,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Globe,
  Star,
} from "lucide-react"

const products = [
  {
    id: "pos",
    icon: Monitor,
    badge: "Most Popular",
    name: "N-Genius Point-of-Sale (POS) Device",
    tagline: "Accept all major payment schemes, popular mobile wallets, BNPL, loyalty and more on a single POS device",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    color: "from-orange-500 to-orange-600",
    features: [
      "All major payment schemes (Visa, Mastercard, Amex, UnionPay)",
      "Mobile wallets (Apple Pay, Google Pay, Samsung Pay)",
      "BNPL options integrated",
      "Loyalty program support",
      "EMV chip & contactless NFC",
      "Cloud-based transaction history",
    ],
    stats: [
      { label: "Processing Speed", value: "<2s", icon: Zap },
      { label: "Uptime", value: "99.9%", icon: TrendingUp },
      { label: "Payment Methods", value: "20+", icon: Wallet },
    ],
  },
  {
    id: "softpos",
    icon: Smartphone,
    badge: "New",
    name: "N-Genius One SoftPOS",
    tagline: "Turn your smartphone into a payment genius. (Available on Android and iOS)",
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80",
    color: "from-blue-500 to-blue-600",
    features: [
      "No additional hardware required",
      "Tap-to-pay on Android & iOS devices",
      "Bank-grade security with tokenization",
      "Real-time transaction notifications",
      "Instant settlement options",
      "Multi-currency support",
    ],
    stats: [
      { label: "Setup Time", value: "5min", icon: Zap },
      { label: "App Rating", value: "4.9/5", icon: Star },
      { label: "Downloads", value: "50K+", icon: TrendingUp },
    ],
  },
  {
    id: "gateway",
    icon: Globe,
    badge: "Enterprise",
    name: "N-Genius Online Payment Gateway",
    tagline: "Accept online payments seamlessly. All major schemes, wallets, plugins, BNPL payments and more available",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    color: "from-purple-500 to-purple-600",
    features: [
      "100+ payment methods & currencies",
      "Major eCommerce platform plugins",
      "Advanced fraud detection AI",
      "Customizable checkout experience",
      "Recurring billing & subscriptions",
      "Developer-friendly APIs",
    ],
    stats: [
      { label: "API Uptime", value: "99.99%", icon: TrendingUp },
      { label: "Global Reach", value: "150+", icon: Globe },
      { label: "Transactions/sec", value: "1000+", icon: Zap },
    ],
  },
]

export function ProductSolutions() {
  const [activeProduct, setActiveProduct] = useState(0)
  const product = products[activeProduct]
  const Icon = product.icon

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white via-orange-50/20 to-white">
        {/* Elegant Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.06),transparent_50%)]" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(251 146 60 / 0.1) 1px, transparent 0)`,
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 shadow-sm mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">Our Solutions</span>
            </div>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ea580c 0%, #f97316 50%, #f59e0b 100%)",
                  backgroundSize: "200% auto",
                  animation: "shimmer 3s linear infinite",
                  WebkitBackgroundClip: "text",
                }}
              >
                Select from a wide range
              </span>
            </h2>
            <p
              className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              of payment solutions that fit your business needs
            </p>
          </div>

          {/* Product Navigation Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {products.map((prod, index) => {
              const ProdIcon = prod.icon
              const isActive = activeProduct === index
              return (
                <button
                  key={prod.id}
                  onClick={() => setActiveProduct(index)}
                  className={`
                    group relative text-left p-8 rounded-3xl border-2 transition-all duration-500
                    ${
                      isActive
                        ? "bg-white border-orange-300 shadow-2xl shadow-orange-200/50 scale-105"
                        : "bg-white/60 border-slate-200 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/30"
                    }
                  `}
                  style={{ animation: isActive ? "slideIn 0.5s ease-out" : "none" }}
                >
                  {/* Badge */}
                  {prod.badge && (
                    <div
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white ${isActive ? "bg-gradient-to-r " + prod.color : "bg-slate-400"}`}
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {prod.badge}
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-500 ${
                      isActive
                        ? `bg-gradient-to-br ${prod.color} shadow-lg`
                        : "bg-gradient-to-br from-slate-100 to-slate-200"
                    }`}
                  >
                    <ProdIcon className={`w-8 h-8 ${isActive ? "text-white" : "text-slate-600"}`} />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-xl font-bold mb-2 transition-colors ${isActive ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"}`}
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {prod.name}
                  </h3>

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-b-3xl" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Main Product Showcase */}
          <div className="relative">
            {/* Glow Effect */}
            <div
              className="absolute -inset-8 rounded-[48px] blur-3xl opacity-60"
              style={{
                background: `linear-gradient(135deg, rgba(251,146,60,0.3) 0%, rgba(251,191,36,0.2) 100%)`,
                animation: "glow 4s ease-in-out infinite",
              }}
            />

            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[32px] overflow-hidden shadow-2xl border border-slate-700">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-8 md:p-12 lg:p-16 order-2 lg:order-1 relative z-10">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />

                  <div className="relative z-10">
                    {/* Icon & Badge */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      {product.badge && (
                        <span
                          className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${product.color} text-white text-xs font-bold uppercase tracking-wider`}
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {product.badge}
                        </span>
                      )}
                    </div>

                    {/* Product Name */}
                    <h3
                      className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {product.name}
                    </h3>

                    {/* Tagline */}
                    <p
                      className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {product.tagline}
                    </p>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 group">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-orange-400" />
                          </div>
                          <p
                            className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700 mb-10">
                      {product.stats.map((stat, idx) => {
                        const StatIcon = stat.icon
                        return (
                          <div key={idx} className="text-center group cursor-pointer">
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 group-hover:border-orange-500/50 transition-colors mb-3">
                              <StatIcon className="w-6 h-6 text-orange-400" />
                            </div>
                            <p
                              className="text-2xl font-black text-white mb-1"
                              style={{ fontFamily: "'Outfit', sans-serif" }}
                            >
                              {stat.value}
                            </p>
                            <p
                              className="text-xs text-slate-500 font-medium"
                              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                            >
                              {stat.label}
                            </p>
                          </div>
                        )
                      })}
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r ${product.color} text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Image Side */}
                <div className="relative h-[400px] lg:h-full min-h-[600px] order-1 lg:order-2">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-900/50 to-slate-900 z-10" />

                  {/* Image */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />

                  {/* Floating Card */}
                  <div
                    className="absolute top-8 right-8 z-20 bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20 hidden md:block"
                    style={{ animation: "float 3s ease-in-out infinite" }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center shadow-lg`}>
                        <Shield className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p
                          className="text-3xl font-black bg-clip-text text-transparent"
                          style={{
                            backgroundImage: `linear-gradient(135deg, ${product.color.replace('from-', 'rgb(').replace(' to-', ', ')})`,
                            WebkitBackgroundClip: "text",
                            fontFamily: "'Outfit', sans-serif",
                          }}
                        >
                          Secure
                        </p>
                        <p
                          className="text-sm text-slate-600 font-semibold"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          PCI DSS Certified
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Stats Card */}
                  <div
                    className="absolute bottom-8 left-8 z-20 bg-slate-900/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-slate-700 hidden md:block"
                    style={{ animation: "float 3s ease-in-out infinite 1s" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                        <Zap className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <p className="text-2xl font-black text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
                          Real-time
                        </p>
                        <p
                          className="text-xs text-slate-400 font-medium"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          Processing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Section */}
          <div className="mt-20 text-center">
            <p
              className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Trusted by 10,000+ businesses
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {["Visa", "Mastercard", "Apple Pay", "Google Pay", "Amex"].map((brand) => (
                <div
                  key={brand}
                  className="text-2xl font-black text-slate-300 hover:text-orange-500 transition-all duration-300 cursor-pointer hover:scale-110"
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