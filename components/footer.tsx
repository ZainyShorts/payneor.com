"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
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
              {/* <Image src='/payneor2.png' alt="PayNeor" width={50} height={50}  /> */}
              {/* <span className="text-2xl  tracking-tight bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                PAY
              <span className="text-2xl font-bold tracking-tight text-foreground">NEOR</span>
              </span> */}
              <span className="text-2xl tracking-tight">
                <span className="font-pay italic bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  PAY
                </span>
                <span className="font-neor italic font-bold text-foreground">NEOR</span>
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
                <span className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors flex-shrink-0">
                  <Mail className="w-4 h-4 text-orange-500" />
                </span>
                info@payneor.com
              </a>
              <a
                href="tel:+971585768863"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors flex-shrink-0">
                  <Phone className="w-4 h-4 text-orange-500" />
                </span>
                +971 58 576 8863
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright - aligned left on desktop, center on mobile */}
            <p className="text-sm text-muted-foreground md:order-1 order-2">
              © {currentYear} Payneor. All rights reserved.
            </p>

            {/* Payment Methods - centered */}
            <div className="flex items-center gap-4 md:order-2 order-1 flex-wrap justify-center">
              <Image src="/payments/visa.svg" alt="Visa" width={40} height={24} />
              <Image src="/payments/mastercard.svg" alt="Mastercard" width={40} height={24} />
              <Image src="/payments/apple-pay.png" alt="Apple Pay" width={40} height={24} />
              <Image src="/payments/g-pay.png" alt="Google Pay" width={40} height={24} />
            </div>

            {/* Privacy Policy - aligned right on desktop, center on mobile */}
            <Link
              href="https://www.termsfeed.com/live/f153b255-e66a-4442-b11d-de7354ac679c"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors md:order-3 order-3"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
