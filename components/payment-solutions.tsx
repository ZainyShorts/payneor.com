"use client"

import { CreditCard, Smartphone, LinkIcon, Zap, DollarSign, Shield } from "lucide-react"

const solutions = [
  {
    id: 1,
    title: "POS Machine",
    description: "Modern POS machines for fast and secure card payments",
    features: ["Debit & credit cards", "Contactless payments", "Reliable devices"],
    icon: CreditCard,
    color: "bg-[#1d7dd1]",
  },
  {
    id: 2,
    title: "Payment Gateway",
    description: "Accept online payments securely for web and mobile apps",
    features: ["Website integration", "Encrypted transactions", "Multiple methods"],
    icon: Shield,
    color: "bg-[#1d7dd1]",
  },
  {
    id: 3,
    title: "Payment Link",
    description: "Send payment links via WhatsApp, SMS, or email",
    features: ["Invoice payments", "Remote transactions", "Quick setup"],
    icon: LinkIcon,
    color: "bg-[#89e897]",
  },
  {
    id: 4,
    title: "Soft POS",
    description: "Use your smartphone as a POS terminal",
    features: ["Contactless payments", "Low cost", "Quick setup"],
    icon: Smartphone,
    color: "bg-[#89e897]",
  },
  {
    id: 5,
    title: "Mini POS",
    description: "Compact, mobile POS solution for any business",
    features: ["All major cards", "Long battery", "Portable"],
    icon: Zap,
    color: "bg-[#1d7dd1]",
  },
  {
    id: 6,
    title: "Tabby Buy Now, Pay Later",
    description: "Offer Tabby to increase sales and flexibility",
    features: ["Payment flexibility", "Higher conversion", "Simple integration"],
    icon: DollarSign,
    color: "bg-[#89e897]",
  },
]

export function PaymentSolutions() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white" />
        <div
          className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(29,125,209,0.12) 0%, rgba(137,232,151,0.08) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span
            className="inline-block text-sm font-bold text-[#1d7dd1] uppercase tracking-widest mb-3"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Our Payment Solutions
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Complete Payment
            <span className="block">Ecosystem</span>
          </h2>
          <p
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
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
                className="group relative bg-white rounded-2xl border border-[#1d7dd1]/10 shadow-lg shadow-[#1d7dd1]/10 hover:shadow-xl hover:shadow-[#1d7dd1]/20 transition-all duration-500 hover:border-[#1d7dd1]/30 overflow-hidden"
              >
                {/* Background accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-500 -z-10`}
                  style={{
                    background: `linear-gradient(135deg, rgb(29 125 209 / 0.3), rgb(137 232 151 / 0.2))`,
                  }}
                />

                <div className="p-8">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${solution.color} text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#1d7dd1] transition-colors duration-300"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-medium mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1d7dd1] mt-2 flex-shrink-0" />
                        <p className="text-gray-600 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="mt-8 pt-6 border-t border-[#1d7dd1]/10 ">
                    <button
                      onClick={()=> window.location.href='/contact'}
                      className="inline-flex items-center gap-2 text-[#1d7dd1] cursor-pointer font-semibold hover:text-[#89e897] group/link transition-colors duration-300"
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
          <p className="text-gray-600 text-lg mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Ready to get started?
          </p>
          <button
            className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white rounded-2xl overflow-hidden shadow-xl shadow-[#1d7dd1]/30 hover:shadow-[#1d7dd1]/50 transition-all duration-500 hover:scale-105 bg-[#1d7dd1]"
          >
            Get Started Free
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}