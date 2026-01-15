import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next" 
import { Footer } from "@/components/footer"
import "./globals.css"

// const spaceGrotesk = Space_Grotesk({
//   subsets: ["latin"],
//   variable: "--font-heading",
//   weight: ["400", "500", "600", "700"],
// })

// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-body",
// })

import { Poppins } from "next/font/google"

const spaceGrotesk = Poppins({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-pay",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-neor",
})

// export const metadata: Metadata = {
//   title: "PAYNEOR - Future of Payments",
//   description: "Powering the future of payments in the Middle East with state-of-the-art payment solutions.",
//   generator: "v0.app",
//   icons: {
//     icon: [
//       {
//         url: "/icon-light-32x32.png",
//         media: "(prefers-color-scheme: light)",
//       },
//       {
//         url: "/icon-dark-32x32.png",
//         media: "(prefers-color-scheme: dark)",
//       },
//       {
//         url: "/icon.svg",
//         type: "image/svg+xml",
//       },
//     ],
//     apple: "/apple-icon.png",
//   },
// }

export const metadata: Metadata = {
  title: "PAYNEOR - Future of Payments",
  description: "Powering the future of payments in the Middle East with state-of-the-art payment solutions.",
  generator: "v0.app",
  other: {
    "facebook-domain-verification": "txx1l6aidgfgjdc172iwov9jh9yr11",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics /> 
        <Footer/>
      </body> 
    </html>
  )
}
