"use client"

import { useEffect, useState, useRef } from "react"
import { CreditCard, Store, MapPin, Smartphone, Shield, Lock, Zap } from "lucide-react"

const stats = [
  {
    icon: CreditCard,
    value: 400,
    suffix: "M+",
    label: "Transactions in UAE",
    description: "Processed securely",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Store,
    value: 10000,
    suffix: "+",
    label: "Active Merchants",
    description: "Trust our platform",
    color: "from-orange-600 to-red-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: MapPin,
    value: 25000,
    suffix: "+",
    label: "Locations",
    description: "Across the region",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-amber-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Smartphone,
    value: 60000,
    suffix: "+",
    label: "Terminals",
    description: "Deployed & active",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-amber-600",
  },
]

const badges = [
  {
    icon: Shield,
    label: "PCI DSS Certified",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Lock,
    label: "Bank-Level Security",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: Zap,
    label: "99.9% Uptime",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="flex items-baseline gap-1.5">
      <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
        {count.toLocaleString()}
      </span>
      <span className="text-2xl md:text-3xl font-bold text-slate-600">
        {suffix}
      </span>
    </div>
  )
}

export function StatsSection() {
  return (
    <section style={{ fontFamily: "var(--font-body)" }} className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stats-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#ea580c" opacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-grid)" />
        </svg>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            <span className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Trusted Worldwide</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-5 leading-tight">
            Powering Payments{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600">
              Across the Region
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Industry-leading payment infrastructure serving businesses of all sizes with PAYNEOR
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} rounded-t-2xl`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${stat.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-7 h-7 ${stat.iconColor}`} strokeWidth={2} />
              </div>

              {/* Counter */}
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />

              {/* Label */}
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="mt-1.5 text-sm text-slate-500">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className={`w-10 h-10 rounded-lg ${badge.bg} flex items-center justify-center`}>
                <badge.icon className={`w-5 h-5 ${badge.color}`} strokeWidth={2} />
              </div>
              <span className="text-sm font-semibold text-slate-700">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-200">
            <p className="text-lg font-semibold">
              Join 10,000+ merchants processing payments with confidence
            </p>
            <span className="text-2xl">→</span>
          </div>
        </div>
      </div>
    </section>
  )
}