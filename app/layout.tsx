import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio",
  description: "Frontend developer with 4 years of experience in React, React Native, Flutter, Next.js, and NestJS",
  icons: {
    icon: [
      {
          url: "/kadiri3.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/kadiri3.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
      {
          url: "/kadiri3.jpeg",
        type: "image/svg+xml",
      },
    ],
    apple: "/kadiri3.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased dark`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
