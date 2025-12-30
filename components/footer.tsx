"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      // { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Blog", href: "/blog" },
    ],
    products: [
      { label: "Payment Gateway", href: "/?scrollTo=solutions" },
      { label: "POS Solutions", href: "/?scrollTo=solutions" },
      { label: "E-commerce", href: "/?scrollTo=solutions" },
      { label: "API Integration", href: "/?scrollTo=solutions" },
    ],
    support: [
      { label: "Help Center", href: "/contact" },
      // { label: "Documentation", href: "/docs" },
      { label: "Contact", href: "/contact" },
      { label: "FAQs", href: "/faqs" },
    ],
  }

  return (
    <footer style={{ fontFamily: "var(--font-body)" }} className="bg-[#fafafa] border-t border-border">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-1 mb-6">
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                PAY
              <span className="text-2xl font-bold tracking-tight text-foreground">NEOR</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-8">
              Powering the future of payments in the Middle East. State-of-the-art payment solutions designed for scale.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="mailto:info@payneor.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                  <Mail className="w-4 h-4 text-orange-500" />
                </span>
                info@payneor.com
              </a>
              <a
                href="tel:+971585768863"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                  <Phone className="w-4 h-4 text-orange-500" />
                </span>
               +971 58 576 8863
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-orange-500" />
                </span>
                Dubai, United Arab Emirates
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-5">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center group"
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-5">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center group"
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-5">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center group"
                  >
                    {link.label}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">© {currentYear} Payneor. All rights reserved.</p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {/* <Link
                href="https://www.termsfeed.com/live/f153b255-e66a-4442-b11d-de7354ac679c"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link> */}
              {/* <span className="w-1 h-1 rounded-full bg-muted-foreground/40" /> */}
              {/* <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link> */}
              {/* <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link> */}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <Link
                href="https://www.termsfeed.com/live/f153b255-e66a-4442-b11d-de7354ac679c"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
