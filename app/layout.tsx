import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Samuel Gomes | Portfolio",
  description: "Computer Science Student at Instituto Superior Técnico",
  icons: {
    icon: {
      url: '/first.jpeg',
      type: 'image/jpeg',
      sizes: '32x32',
      href: '/first.jpeg',
    },
    apple: {
      url: '/first.jpeg',
      type: 'image/jpeg',
      sizes: '180x180',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
