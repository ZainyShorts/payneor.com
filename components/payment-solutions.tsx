"use client"

import { CreditCard, Smartphone, LinkIcon, Zap, DollarSign, Shield } from "lucide-react"

const solutions = [
  {
    id: 1,
    title: "POS Machine",
    description: "Modern POS machines for fast and secure card payments",
    features: ["Debit & credit cards", "Contactless payments", "Reliable devices"],
    icon: CreditCard,
    gradient: "from-orange-500 to-orange-600",
  },
  {
    id: 2,
    title: "Payment Gateway",
    description: "Accept online payments securely for web and mobile apps",
    features: ["Website integration", "Encrypted transactions", "Multiple methods"],
    icon: Shield,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    id: 3,
    title: "Payment Link",
    description: "Send payment links via WhatsApp, SMS, or email",
    features: ["Invoice payments", "Remote transactions", "Quick setup"],
    icon: LinkIcon,
    gradient: "from-orange-400 to-amber-500",
  },
  {
    id: 4,
    title: "Soft POS",
    description: "Use your smartphone as a POS terminal",
    features: ["Contactless payments", "Low cost", "Quick setup"],
    icon: Smartphone,
    gradient: "from-amber-500 to-orange-400",
  },
  {
    id: 5,
    title: "Mini POS",
    description: "Compact, mobile POS solution for any business",
    features: ["All major cards", "Long battery", "Portable"],
    icon: Zap,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: 6,
    title: "Tabby Buy Now, Pay Later",
    description: "Offer Tabby to increase sales and flexibility",
    features: ["Payment flexibility", "Higher conversion", "Simple integration"],
    icon: DollarSign,
    gradient: "from-amber-500 to-orange-600",
  },
]

export function PaymentSolutions() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-white to-amber-50/30" />
        <div
          className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(251,146,60,0.12) 0%, rgba(251,191,36,0.08) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span
            className="inline-block text-sm font-bold text-orange-600 uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Our Payment Solutions
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Complete Payment
            <span className="block">Ecosystem</span>
          </h2>
          <p
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Fast setup • Secure payments • Trusted solutions • No monthly charges • No sales targets • No hidden fees
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution) => {
            const IconComponent = solution.icon
            return (
              <div
                key={solution.id}
                className="group relative bg-white rounded-2xl border border-orange-100 shadow-lg shadow-orange-100/30 hover:shadow-xl hover:shadow-orange-200/40 transition-all duration-500 hover:border-orange-200 overflow-hidden"
              >
                {/* Gradient background accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500 -z-10`}
                  style={{
                    background: `linear-gradient(135deg, rgb(251 146 60 / 0.3), rgb(251 191 36 / 0.2))`,
                  }}
                />

                <div className="p-8">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.gradient} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors duration-300"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 font-medium mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0" />
                        <p className="text-slate-600 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-8 pt-6 border-t border-orange-100 ">
                    <button
                      onClick={()=> window.location.href='/contact'}
                      className="inline-flex items-center gap-2 text-orange-600 cursor-pointer font-semibold hover:text-orange-700 group/link transition-colors duration-300"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      Contact us for more info
                      <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-slate-600 text-lg mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Ready to get started?
          </p>
          <button
            className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white rounded-2xl overflow-hidden shadow-xl shadow-orange-300/40 hover:shadow-orange-400/50 transition-all duration-500 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #ea580c 0%, #f97316 50%, #f59e0b 100%)",
              backgroundSize: "200% 200%",
              animation: "shimmer 3s ease infinite",
            }}
          >
            Get Started Free
            <span>→</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  )
}
