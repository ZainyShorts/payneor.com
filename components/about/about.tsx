"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Shield, Zap, Globe, TrendingUp, Sparkles, Lock, BarChart3 } from "lucide-react"

const features = [
  "SME merchants & large department stores",
  "Restaurants & hospitality",
  "Government & real estate",
  "Home delivery services",
]

const capabilities = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-second transaction processing",
  },
  {
    icon: Globe,
    title: "Multi-Currency",
    description: "Accept payments globally",
  },
  {
    icon: TrendingUp,
    title: "Analytics",
    description: "Real-time business insights",
  },
]

export function AboutSection() {
  return (
    <section style={{ fontFamily: "var(--font-body)" }} className="relative py-28 md:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
        
        {/* Animated grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-indigo-400 rounded-full blur-sm animate-pulse" />
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-cyan-400 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1 group">
            {/* Main Image Container */}
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-[3rem] blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
              
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-indigo-500/20 transform group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="/about.webp"
                  alt="Person using contactless payment terminal"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-indigo-900/30 to-transparent" />
                
                {/* Overlay shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>

            {/* Floating Stats Card - Enhanced */}
            <div className="absolute -bottom-10 -right-6 sm:-right-10 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-7 sm:p-9 max-w-[300px] border border-indigo-100/50 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-5 mb-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl shadow-indigo-500/40 animate-pulse">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">99.9%</p>
                  <p className="text-sm text-slate-600 font-medium">Uptime SLA</p>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-200 to-purple-300 ring-3 ring-white shadow-sm"
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-600 font-semibold">+10k merchants</span>
              </div>
            </div>

            {/* Floating Badge - Enhanced */}
            <div className="absolute -top-6 -left-6 sm:top-10 sm:-left-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 text-white rounded-2xl px-6 py-4 shadow-2xl shadow-indigo-500/40 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4" />
                <p className="text-base font-bold">Since 2015</p>
              </div>
              <p className="text-sm opacity-90">Trusted Partner</p>
            </div>

            {/* Additional floating element */}
            <div className="absolute top-1/2 -right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-indigo-100/50 hidden lg:block">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-indigo-600" />
                <div>
                  <p className="text-xs text-slate-500">Secured by</p>
                  <p className="text-sm font-bold text-slate-900">256-bit SSL</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-10 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
              </span>
              <span className="text-sm font-bold text-indigo-400 uppercase tracking-wider">Who we are</span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.05] mb-8">
              <span className="block mb-2">Give your business a</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 animate-gradient">
                competitive edge
              </span>
              <span className="block mt-2">with PAYNEOR</span>
            </h2>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-2xl">
              Our products and solutions support a wide range of industries. With state-of-the-art technology,
              innovation capabilities, and data insights, we provide seamless, cost-effective payment experiences.
            </p>

            {/* Features List - Enhanced */}
            <div className="grid sm:grid-cols-2 gap-5 mb-12">
              {features.map((feature, index) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-4 group bg-white/5 backdrop-blur-sm rounded-xl px-4 py-3 hover:bg-white/10 transition-all duration-300 border border-white/5 hover:border-indigo-500/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center shrink-0 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all">
                    <CheckCircle2 className="w-4.5 h-4.5 text-indigo-400" />
                  </div>
                  <span className="text-base text-slate-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:via-purple-500 hover:to-indigo-500 text-white px-10 py-7 rounded-2xl text-lg font-bold shadow-2xl shadow-indigo-500/40 hover:shadow-indigo-500/60 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-10 py-7 rounded-2xl text-lg font-bold border-2 border-indigo-500/30 text-white hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300 bg-white/5 backdrop-blur-sm"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>

        {/* Capabilities Grid - Enhanced */}
        <div className="mt-32 md:mt-40">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <BarChart3 className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-400 uppercase tracking-wider">Our Capabilities</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Built for Scale & Performance
            </h3>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Enterprise-grade infrastructure powering millions of transactions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-600/10 flex items-center justify-center mb-6 group-hover:from-indigo-500/30 group-hover:to-purple-600/20 transition-all duration-300 shadow-lg shadow-indigo-500/20">
                    <item.icon className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">{item.title}</h4>
                  <p className="text-base text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Description Cards - Enhanced */}
        <div className="mt-20 md:mt-28 grid md:grid-cols-2 gap-8">
          <div className="group relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
            
            <div className="relative">
              <div className="flex items-center gap-5 mb-7">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <Zap className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Technology Platform
                </h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                With our state-of-the-art technology platform, innovation capabilities, and data insights, we aim to
                provide a seamless, strong, cost-effective, efficient, and streamlined payment experience to all our
                merchants.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-white/10 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
            
            <div className="relative">
              <div className="flex items-center gap-5 mb-7">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <Globe className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Customized Solutions
                </h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                A combination of in-house processing capabilities and multiple merchant front ends allows us to build
                customized product offerings with quick go-to-market solutions for any merchant and financial institution.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}