"use client"

import { useState } from "react"
import { ChevronDown, MessageCircleQuestion, Search, ArrowRight, Sparkles } from "lucide-react"

const faqCategories = [
  { id: "general", label: "General", count: 4 },
  { id: "payments", label: "Payments", count: 3 },
  { id: "security", label: "Security", count: 3 },
  { id: "support", label: "Support", count: 2 },
]

const faqs = [
  {
    category: "general",
    question: "What is Pay Neor and how does it work?",
    answer:
      "Pay Neor is a cutting-edge payment solution designed for businesses in the Middle East. We provide seamless payment processing, multi-currency support, and state-of-the-art security features to help your business scale effortlessly.",
  },
  {
    category: "general",
    question: "Which countries and currencies do you support?",
    answer:
      "We support all GCC countries including UAE, Saudi Arabia, Kuwait, Bahrain, Qatar, and Oman. Our platform handles over 150+ currencies with real-time exchange rates and competitive fees.",
  },
  {
    category: "general",
    question: "How long does it take to get started?",
    answer:
      "You can create your account in minutes and start accepting payments within 24-48 hours after verification. Our streamlined onboarding process ensures you're up and running quickly.",
  },
  {
    category: "general",
    question: "Do you offer APIs for custom integrations?",
    answer:
      "Yes! We provide comprehensive RESTful APIs, SDKs for major platforms, and detailed documentation. Our developer tools make it easy to integrate Pay Neor into your existing systems.",
  },
  {
    category: "payments",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards (Visa, Mastercard, AMEX), digital wallets (Apple Pay, Google Pay), bank transfers, and local payment methods specific to each region.",
  },
  {
    category: "payments",
    question: "How fast are payment settlements?",
    answer:
      "Standard settlements occur within 1-2 business days. Premium accounts enjoy same-day settlements. We also offer instant payouts for an additional fee when you need funds immediately.",
  },
  {
    category: "payments",
    question: "What are your transaction fees?",
    answer:
      "Our pricing is transparent with no hidden fees. We charge a competitive rate starting at 2.5% + $0.25 per transaction. Volume discounts are available for high-volume merchants.",
  },
  {
    category: "security",
    question: "How secure is my data with Pay Neor?",
    answer:
      "We employ bank-grade 256-bit encryption, are PCI DSS Level 1 certified, and use advanced fraud detection AI. Your data is stored in secure, SOC 2 compliant data centers.",
  },
  {
    category: "security",
    question: "Do you offer fraud protection?",
    answer:
      "Yes, our AI-powered fraud detection system monitors transactions in real-time, blocking suspicious activity before it affects your business. We also offer chargeback protection plans.",
  },
  {
    category: "security",
    question: "Is two-factor authentication available?",
    answer:
      "We support multiple 2FA methods including authenticator apps, SMS verification, and hardware security keys for maximum account protection.",
  },
  {
    category: "support",
    question: "How can I contact customer support?",
    answer:
      "Our support team is available 24/7 via live chat, email (support@payneor.com), and phone. Premium accounts get dedicated account managers and priority support.",
  },
  {
    category: "support",
    question: "Do you provide technical documentation?",
    answer:
      "Yes, we have extensive documentation including API references, integration guides, video tutorials, and code samples in multiple programming languages.",
  },
]

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general")
  const [openItems, setOpenItems] = useState<number[]>([0])
  const [searchQuery, setSearchQuery] = useState("")

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = faq.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <>
      {/* Google Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>

      <section className="relative bg-white py-20" style={{ fontFamily: "'Inter', sans-serif" }}>
        {/* Subtle Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white -z-10" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-6">
              <Sparkles className="h-4 w-4 text-orange-500" />
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">FAQ</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Frequently Asked Questions
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              Everything you need to know about Pay Neor. Can't find what you're looking for?{" "}
              <a href="#contact" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                Contact our support team
              </a>
              .
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                  activeCategory === category.id
                    ? "bg-orange-500 text-white shadow-md"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-orange-300 hover:text-orange-600"
                }`}
              >
                <span className="flex items-center gap-2">
                  {category.label}
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      activeCategory === category.id ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {category.count}
                  </span>
                </span>
              </button>
            ))}
          </div>

          {/* FAQ Grid */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Side - Help Card */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-8 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-orange-100 flex items-center justify-center mb-6">
                  <MessageCircleQuestion className="h-8 w-8 text-orange-600" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">Still have questions?</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Can't find the answer you're looking for? Our support team is here to help you 24/7.
                </p>

                <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-colors shadow-md">
                  Contact Support
                  <ArrowRight className="h-5 w-5" />
                </button>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-200">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-900">{"<"}2min</p>
                    <p className="text-sm text-slate-500">Response time</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-900">24/7</p>
                    <p className="text-sm text-slate-500">Availability</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Accordion */}
            <div className="lg:col-span-8">
              <div className="space-y-3">
                {filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`bg-white border rounded-xl transition-all ${
                      openItems.includes(index)
                        ? "border-orange-300 shadow-md"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                            openItems.includes(index)
                              ? "bg-orange-500 text-white"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <h3
                          className={`text-lg font-semibold transition-colors ${
                            openItems.includes(index) ? "text-slate-900" : "text-slate-700"
                          }`}
                        >
                          {faq.question}
                        </h3>
                      </div>
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                          openItems.includes(index)
                            ? "bg-orange-100 text-orange-600 rotate-180"
                            : "bg-slate-100 text-slate-400"
                        }`}
                      >
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-5">
                        <div className="pl-12">
                          <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredFaqs.length === 0 && (
                  <div className="text-center py-16 bg-slate-50 rounded-xl border border-slate-200">
                    <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                    <p className="text-xl font-bold text-slate-700 mb-2">No results found</p>
                    <p className="text-slate-500">Try adjusting your search or category filter</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile CTA Card */}
          <div className="lg:hidden mt-12 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
                <MessageCircleQuestion className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Need more help?</h3>
                <p className="text-sm text-slate-500">Our team is available 24/7</p>
              </div>
            </div>
            <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-white bg-orange-500 hover:bg-orange-600 transition-colors">
              Contact Support
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}