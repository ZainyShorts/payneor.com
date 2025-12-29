import { ContactForm } from "@/components/contact-form/contact-form"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react" 
import { Navbar } from "@/components/navbar" 
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact Us - PayNeor Payment Solutions",
  description: "Get in touch with PayNeor for payment solutions and support",
}

export default function ContactPage() {
  return ( 
    <> 
    <Navbar/>

    <main style={{ fontFamily: "var(--font-body)" }} className="relative min-h-screen overflow-hidden bg-background">
      
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="py-20 md:py-28 px-4 md:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block mb-6 px-4 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-700">
            Contact PayNeor
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Let’s Build Better Payments
            <br />
            <span className="text-orange-600">Together</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Questions, partnerships, or support — our team is ready to help you
            move money faster, safer, and smarter.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="px-4 md:px-8 mb-24">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {[
            {
              icon: Mail,
              title: "Email Support",
              desc: "Response within 24 hours",
              value: "info@payneor.com",
              href: "mailto:info@payneor.com",
            },
            {
              icon: Phone,
              title: "Call Our Team",
              desc: "Mon–Fri · 9am–6pm EST",
              value: "+1 (234) 567-890",
              href: "tel:+1234567890",
            },
            {
              icon: MapPin,
              title: "Headquarters",
              desc: "San Francisco, CA",
              value: "123 Business St, CA 94105",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-border bg-white/70 backdrop-blur-xl p-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-orange-100 mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-orange-600" />
              </div>

              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>

              {item.href ? (
                <a
                  href={item.href}
                  className="inline-flex items-center font-medium text-orange-600 hover:text-orange-700"
                >
                  {item.value}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              ) : (
                <p className="text-sm">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl border border-border bg-white/80 backdrop-blur-xl shadow-xl p-8 md:p-14">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Fill out the form below and our specialists will contact you
                shortly.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="max-w-5xl mx-auto text-center px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Ready to Power Your Payments?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-3xl mx-auto">
            Join modern businesses using PayNeor for secure, scalable, and
            lightning-fast payment infrastructure.
          </p>

          <button className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-orange-50 hover:scale-105 transition-all">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </main>  
    <Footer/>
     </>
  )
}
