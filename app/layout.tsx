import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "BlockchainPro - Leading Blockchain Development Company",
  description:
    "Transform your business with next-gen blockchain solutions. Expert development in Ethereum, Solana, Polygon, DeFi, NFTs, and enterprise blockchain.",
  keywords: "blockchain development, smart contracts, DeFi, NFT, Ethereum, Solana, Polygon, Hyperledger",
  authors: [{ name: "BlockchainPro" }],
  generator: "Next.js",
  openGraph: {
    title: "BlockchainPro - Leading Blockchain Development Company",
    description: "Transform your business with next-gen blockchain solutions",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
