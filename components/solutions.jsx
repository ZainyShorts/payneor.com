'use client'
import { useState } from "react" 
import Link from "next/link"
import { ArrowLeft, ArrowRight, Code, Shield, BarChart3, Lock, Sparkles, Calendar, Clock, User, CheckCircle2 } from "lucide-react"

const solutions = [
  {
    id: 1,
    title: "Powerful APIs",
    description: "Integrate our plug and play APIs for best-in-class payment solutions. Agile and seamless to deploy.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    color: "blue",
  },
  {
    id: 2,
    title: "Integrated Fraud Detection",
    description: "Protect your business with advanced machine learning algorithms deeply integrated into all solutions.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
    color: "red",
  },
  {
    id: 3,
    title: "Interactive Dashboards",
    description: "Make data-driven decisions with dashboards that monitor transactions in real-time and analyze performance.",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    color: "green",
  },
  {
    id: 4,
    title: "PCI Security Certification",
    description: "Allow customers to complete secure payments without ever leaving your platform with PCI DSS Level 1 compliance.",
    icon: Lock,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    color: "purple",
  },
]

const blogContent = {
  1: {
    title: "Building Scalable Payment Systems with Modern APIs",
    subtitle: "A comprehensive guide to integrating powerful payment APIs",
    category: "Technical Integration",
    date: "December 15, 2024",
    readTime: "8 min read",
    author: "Sarah Chen",
    authorRole: "Lead API Architect",
    heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80",
    sections: [
      {
        heading: "Why API-First Architecture Matters",
        content: "Modern payment infrastructure demands flexibility, speed, and reliability. Our API-first approach enables developers to integrate payment capabilities in hours, not weeks. With RESTful endpoints, comprehensive documentation, and SDKs in every major programming language, you can focus on building great products while we handle the complexity of payments."
      },
      {
        heading: "Key Features That Set Us Apart",
        points: [
          "Lightning-fast response times under 200ms globally",
          "Automatic retry logic with exponential backoff",
          "Webhooks for real-time transaction updates",
          "Comprehensive error handling and status codes",
          "Version management with backwards compatibility"
        ]
      },
      {
        heading: "Real-World Integration",
        content: "Our customers report an average integration time of just 4 hours. The API design follows industry best practices with clear, predictable endpoints. Whether you're processing single payments, managing subscriptions, or handling complex marketplace transactions, our API scales effortlessly with your business needs."
      },
      {
        heading: "Developer Experience First",
        content: "We've invested heavily in developer tools including interactive API documentation, sandbox environments, and debugging tools. Our API Explorer lets you test endpoints directly in the browser, while our comprehensive logging gives you complete visibility into every transaction."
      }
    ]
  },
  2: {
    title: "The Future of Fraud Prevention: AI-Powered Security",
    subtitle: "How machine learning is revolutionizing payment security",
    category: "Security & Compliance",
    date: "December 12, 2024",
    readTime: "6 min read",
    author: "Michael Rodriguez",
    authorRole: "Head of Security",
    heroImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&q=80",
    sections: [
      {
        heading: "The Evolution of Fraud Detection",
        content: "Traditional rule-based fraud detection is no longer sufficient in today's sophisticated threat landscape. Our machine learning models analyze over 200 data points per transaction, learning from billions of transactions to identify patterns invisible to human analysts. The system adapts in real-time, staying ahead of emerging fraud tactics."
      },
      {
        heading: "Multi-Layer Protection",
        points: [
          "Real-time risk scoring with machine learning",
          "Behavioral biometrics and device fingerprinting",
          "Velocity checks and pattern analysis",
          "3D Secure 2.0 authentication",
          "Continuous model training and optimization"
        ]
      },
      {
        heading: "Balancing Security and User Experience",
        content: "The best fraud prevention is invisible to legitimate customers. Our intelligent system approves 99.7% of genuine transactions instantly while flagging suspicious activity with 95% accuracy. Dynamic friction applies additional verification only when needed, maintaining conversion rates while blocking fraud."
      },
      {
        heading: "Industry-Leading Results",
        content: "Our clients see an average 67% reduction in fraud losses within the first three months. The system has blocked over $340M in fraudulent transactions this year alone, while false positive rates remain under 0.3%. With continuous learning, the models become more accurate over time."
      }
    ]
  },
  3: {
    title: "Data-Driven Decisions: Mastering Payment Analytics",
    subtitle: "Transform raw transaction data into actionable business intelligence",
    category: "Analytics & Insights",
    date: "December 10, 2024",
    readTime: "7 min read",
    author: "Emma Thompson",
    authorRole: "Analytics Director",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    sections: [
      {
        heading: "Beyond Basic Reporting",
        content: "Payment data contains powerful insights about your business, customers, and growth opportunities. Our interactive dashboards transform complex transaction data into clear, actionable intelligence. Monitor everything from authorization rates to customer lifetime value, all in real-time with customizable views for every stakeholder."
      },
      {
        heading: "Essential Metrics at Your Fingertips",
        points: [
          "Real-time transaction monitoring and alerts",
          "Authorization and conversion rate tracking",
          "Payment method performance analysis",
          "Geographic and temporal trend visualization",
          "Customer segmentation and cohort analysis"
        ]
      },
      {
        heading: "Predictive Analytics for Growth",
        content: "Our advanced analytics go beyond historical reporting. Predictive models forecast transaction volumes, identify at-risk customers, and recommend optimal payment routing strategies. Machine learning algorithms detect subtle patterns that indicate opportunities for revenue optimization and cost reduction."
      },
      {
        heading: "Custom Reports for Every Need",
        content: "Build custom dashboards tailored to your specific KPIs. Export data in any format, schedule automated reports, and integrate with your existing business intelligence tools. Whether you need executive summaries or detailed operational metrics, our platform adapts to your workflow."
      }
    ]
  },
  4: {
    title: "PCI Compliance Made Simple: Security Without Complexity",
    subtitle: "Understanding and maintaining the highest security standards",
    category: "Compliance & Standards",
    date: "December 8, 2024",
    readTime: "6 min read",
    author: "David Park",
    authorRole: "Compliance Officer",
    heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
    sections: [
      {
        heading: "PCI DSS Level 1: The Gold Standard",
        content: "Achieving and maintaining PCI DSS Level 1 compliance is a significant undertaking requiring rigorous security controls and annual assessments. As a Level 1 certified provider, we handle the complexity of compliance so you don't have to. Our infrastructure undergoes continuous monitoring and regular third-party audits to ensure the highest security standards."
      },
      {
        heading: "Comprehensive Security Controls",
        points: [
          "End-to-end encryption for all payment data",
          "Tokenization to eliminate sensitive data storage",
          "Regular penetration testing and vulnerability scans",
          "24/7 security operations center monitoring",
          "Incident response and disaster recovery procedures"
        ]
      },
      {
        heading: "Simplified Compliance for Your Business",
        content: "When you use our platform, your PCI compliance burden is dramatically reduced. Sensitive payment data never touches your servers, keeping you out of scope for most PCI requirements. Our hosted payment pages and secure APIs mean you can accept payments without the cost and complexity of maintaining your own PCI compliance."
      },
      {
        heading: "Trust Through Transparency",
        content: "We maintain certifications including SOC 2 Type II, ISO 27001, and regional standards like GDPR compliance. Our security documentation is available to all customers, and we provide detailed attestations of compliance (AOC) for your auditors. Regular security updates keep you informed of our ongoing commitment to protection."
      }
    ]
  }
}

export default function PaymentSolutionsWithBlogs() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [currentBlog, setCurrentBlog] = useState(null)

  // Blog Article View
  if (currentBlog !== null) {
    const post = blogContent[currentBlog]
    const solution = solutions.find(s => s.id === currentBlog)
    const Icon = solution.icon

    return (
      <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        `}</style>

        {/* Header */}
        <header className="border-b border-slate-200 bg-white sticky top-0 z-50 shadow-sm">
          <div className="max-w-5xl mx-auto px-6 py-5">
            <button
              onClick={() => setCurrentBlog(null)}
              className="inline-flex items-center gap-2 text-slate-600 hover:text-orange-600 transition-colors duration-300 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Solutions
            </button>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative h-[500px] overflow-hidden bg-slate-900">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto px-6 pb-16 w-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                <Icon className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-semibold text-white uppercase tracking-wide">
                  {post.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-slate-200 mb-8 max-w-3xl">
                {post.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{post.author}</p>
                    <p className="text-sm text-slate-300">{post.authorRole}</p>
                  </div>
                </div>
                <div className="h-8 w-px bg-slate-600" />
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 py-16">
          {post.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full" />
                {section.heading}
              </h2>
              
              {section.content && (
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  {section.content}
                </p>
              )}

              {section.points && (
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                  <ul className="space-y-4">
                    {section.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-slate-700 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Experience the power of enterprise-grade payment infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-colors duration-300">
                Contact Sales
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-16 border-t border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Explore More Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solutions
                .filter(s => s.id !== currentBlog)
                .slice(0, 3)
                .map((relatedSolution) => (
                  <button
                    key={relatedSolution.id}
                    onClick={() => setCurrentBlog(relatedSolution.id)}
                    className="text-left bg-slate-50 rounded-xl p-6 hover:bg-slate-100 transition-colors duration-300 border border-slate-200 hover:border-orange-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white shadow-md flex items-center justify-center mb-4">
                      {(() => {
                        const RelatedIcon = relatedSolution.icon
                        return <RelatedIcon className="w-5 h-5 text-orange-500" />
                      })()}
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                      {relatedSolution.title}
                    </h4>
                    <p className="text-sm text-slate-600 line-clamp-2">{relatedSolution.description}</p>
                  </button>
                ))}
            </div>
          </div>
        </article>
      </div>
    )
  }

  // Solutions Grid View
  return (
    <section className="py-24 bg-slate-50" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Enterprise-Grade Payment Infrastructure
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Built for scale, security, and seamless integration
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => {
            const Icon = solution.icon
            const isHovered = hoveredCard === solution.id
            return (
              <div
                key={solution.id}
                className="group h-full"
                onMouseEnter={() => setHoveredCard(solution.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative h-full bg-white rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col ${
                    isHovered
                      ? "border-orange-300 shadow-xl shadow-orange-100/50 -translate-y-1"
                      : "border-slate-200 shadow-md"
                  }`}
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        isHovered ? "scale-105" : "scale-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center transition-transform duration-300 ${
                          isHovered ? "scale-110" : "scale-100"
                        }`}
                      >
                        <Icon className="w-6 h-6 text-orange-500" strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 flex flex-col p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">
                      {solution.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                      {solution.description}
                    </p>

                    {/* CTA Link */}
                    <button
                      onClick={() => setCurrentBlog(solution.id)}
                      className={`group/btn inline-flex items-center gap-2 text-sm cursor-pointer font-semibold transition-colors duration-300 ${
                        isHovered ? "text-orange-600" : "text-slate-700"
                      }`}
                    >
                      Learn more
                      <ArrowRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isHovered ? "translate-x-1" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Top Border Accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-orange-500 transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="px-8 py-12 md:px-12 md:py-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Payment Infrastructure?
            </h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Join thousands of businesses already using our enterprise-grade payment solutions
            </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
  {/* Primary CTA */}
  <Link
    href="/contact"
    className="px-8 py-4 rounded-xl bg-orange-500 text-white font-semibold text-center hover:bg-orange-600 transition-colors duration-300 shadow-lg hover:shadow-xl"
  >
    Get Started Free
  </Link>

  {/* Secondary CTA */}
  <Link
    href="/contact"
    className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-center hover:bg-white/20 transition-colors duration-300"
  >
    Schedule Demo
  </Link>
</div>

            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-slate-700">
              <div className="text-center">
                <p className="text-3xl font-bold text-white mb-1">99.99%</p>
                <p className="text-sm text-slate-400">Uptime</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white mb-1">10K+</p>
                <p className="text-sm text-slate-400">Businesses</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-white mb-1">$2.4B+</p>
                <p className="text-sm text-slate-400">Monthly Volume</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}