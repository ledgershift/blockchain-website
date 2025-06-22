"use client"

import type React from "react"

import { useState } from "react"
import {
  ArrowRight,
  Shield,
  Zap,
  Users,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Globe,
  Lock,
  Star,
  TrendingUp,
  Award,
  Rocket,
  ChevronDown,
  ExternalLink,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

export default function HomePage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "Smart Contract Development",
    message: "",
  })

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Message Sent Successfully! 🚀",
        description: "Our blockchain experts will contact you within 24 hours.",
      })

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        projectType: "Smart Contract Development",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Handle CTA actions
  const handleStartProject = () => {
    scrollToSection("contact")
    toast({
      title: "Ready to Start? 🎯",
      description: "Fill out the form below to get your free consultation!",
    })
  }

  const handleViewCaseStudies = () => {
    scrollToSection("portfolio")
    toast({
      title: "Explore Our Work 📊",
      description: "Check out our successful blockchain projects below!",
    })
  }

  const handleScheduleConsultation = () => {
    // In a real app, this would open a calendar booking system
    toast({
      title: "Schedule Consultation 📅",
      description: "Redirecting to our calendar booking system...",
    })
    // Simulate redirect
    setTimeout(() => {
      window.open("https://calendly.com/blockchainpro-consultation", "_blank")
    }, 1000)
  }

  const handleDownloadWhitepaper = () => {
    toast({
      title: "Downloading Whitepaper 📄",
      description: "Your blockchain development guide is being downloaded...",
    })
    // Simulate file download
    const link = document.createElement("a")
    link.href = "/placeholder.pdf"
    link.download = "BlockchainPro-Development-Guide.pdf"
    link.click()
  }

  const handleContactMethod = (method: string, value: string) => {
    if (method === "email") {
      window.location.href = `mailto:${value}?subject=Blockchain Project Inquiry`
    } else if (method === "phone") {
      window.location.href = `tel:${value}`
    } else if (method === "address") {
      window.open(`https://maps.google.com?q=${encodeURIComponent(value)}`, "_blank")
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-center cursor-pointer" onClick={() => scrollToSection("hero")}>
          <div className="relative">
            <Shield className="h-8 w-8 text-blue-500" />
            <div className="absolute inset-0 h-8 w-8 text-blue-500 animate-pulse opacity-50" />
          </div>
          <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            BlockchainPro
          </span>
        </div>
        <nav className="ml-auto flex gap-6 sm:gap-8">
          <button
            className="text-sm font-medium hover:text-blue-400 transition-colors duration-200"
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>
          <button
            className="text-sm font-medium hover:text-blue-400 transition-colors duration-200"
            onClick={() => scrollToSection("technologies")}
          >
            Technologies
          </button>
          <button
            className="text-sm font-medium hover:text-blue-400 transition-colors duration-200"
            onClick={() => scrollToSection("portfolio")}
          >
            Portfolio
          </button>
          <button
            className="text-sm font-medium hover:text-blue-400 transition-colors duration-200"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="hero" className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-2">
                🚀 Leading Blockchain Development Company
              </Badge>
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Transform Your Business with
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent block mt-2">
                    Next-Gen Blockchain Solutions
                  </span>
                </h1>
                <p className="mx-auto max-w-[800px] text-gray-300 text-lg md:text-xl leading-relaxed">
                  We deliver enterprise-grade blockchain solutions across Ethereum, Polygon, Solana, Hyperledger Fabric,
                  and R3 Corda. From smart contracts to complete DeFi ecosystems, we build the future of decentralized
                  technology.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
                  onClick={handleStartProject}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg"
                  onClick={handleViewCaseStudies}
                >
                  View Case Studies
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">500+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <Separator orientation="vertical" className="h-12 bg-gray-700" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">50+</div>
                  <div className="text-sm text-gray-400">Enterprise Clients</div>
                </div>
                <Separator orientation="vertical" className="h-12 bg-gray-700" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button onClick={() => scrollToSection("technologies")}>
              <ChevronDown className="h-6 w-6 text-gray-400 hover:text-blue-400 transition-colors" />
            </button>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="w-full py-20 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Blockchain Technologies We Master
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                We work with cutting-edge blockchain platforms and programming languages to deliver robust, scalable
                solutions
              </p>
            </div>

            {/* Public Blockchains */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 text-blue-400">Public Blockchains</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card
                  className="bg-gray-900/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => {
                    toast({
                      title: "Ethereum Development 🔷",
                      description: "We specialize in Ethereum smart contracts and DApps. Contact us to learn more!",
                    })
                    scrollToSection("contact")
                  }}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-white">Ethereum</CardTitle>
                    <CardDescription className="text-gray-400">
                      The world's leading smart contract platform with robust DeFi ecosystem
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card
                  className="bg-gray-900/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => {
                    toast({
                      title: "Polygon Development 🟣",
                      description: "Fast and cost-effective Layer 2 solutions. Let's discuss your project!",
                    })
                    scrollToSection("contact")
                  }}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-white">Polygon</CardTitle>
                    <CardDescription className="text-gray-400">
                      High-speed, low-cost Layer 2 scaling solution for Ethereum
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card
                  className="bg-gray-900/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => {
                    toast({
                      title: "Solana Development ⚡",
                      description: "Ultra-fast blockchain solutions with Rust. Ready to build?",
                    })
                    scrollToSection("contact")
                  }}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Rocket className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-white">Solana</CardTitle>
                    <CardDescription className="text-gray-400">
                      Ultra-fast blockchain with sub-second finality and low fees
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Private/Enterprise Blockchains */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 text-purple-400">Enterprise Blockchains</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card
                  className="bg-gray-900/50 border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => {
                    toast({
                      title: "Hyperledger Fabric 🏢",
                      description: "Enterprise blockchain solutions for your business network. Let's connect!",
                    })
                    scrollToSection("contact")
                  }}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <Lock className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-white">Hyperledger Fabric</CardTitle>
                    <CardDescription className="text-gray-400">
                      Enterprise-grade permissioned blockchain framework for business networks
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card
                  className="bg-gray-900/50 border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => {
                    toast({
                      title: "R3 Corda 🏦",
                      description: "Financial services blockchain platform. Perfect for regulated industries!",
                    })
                    scrollToSection("contact")
                  }}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                      <Database className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-white">R3 Corda</CardTitle>
                    <CardDescription className="text-gray-400">
                      Distributed ledger platform designed for financial services and regulated industries
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Programming Languages */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">
                Programming Languages & Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { name: "Solidity", color: "from-blue-500 to-blue-600", description: "Ethereum smart contracts" },
                  { name: "Rust", color: "from-orange-500 to-red-600", description: "Solana & high-performance apps" },
                  { name: "Java", color: "from-red-500 to-pink-600", description: "Enterprise blockchain solutions" },
                  { name: "Golang", color: "from-cyan-500 to-blue-600", description: "Hyperledger Fabric development" },
                  { name: "Node.js", color: "from-green-500 to-emerald-600", description: "Backend & API development" },
                ].map((lang, index) => (
                  <Card
                    key={index}
                    className="bg-gray-900/50 border-gray-700 hover:border-gray-500 transition-all duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => {
                      toast({
                        title: `${lang.name} Development 💻`,
                        description: `We excel in ${lang.description}. Let's build something amazing!`,
                      })
                      scrollToSection("contact")
                    }}
                  >
                    <CardContent className="p-4 text-center">
                      <div
                        className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${lang.color} rounded-lg flex items-center justify-center`}
                      >
                        <Code className="h-6 w-6 text-white" />
                      </div>
                      <p className="font-semibold text-white">{lang.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Comprehensive Blockchain Services
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                From concept to deployment, we provide end-to-end blockchain solutions that drive innovation and growth
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Smart Contract Development</CardTitle>
                  <CardDescription className="text-gray-400">
                    Secure, audited smart contracts built with industry best practices using Solidity, Rust, and more.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm mb-6">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Multi-signature wallets & governance
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Gas optimization & security audits
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Cross-chain compatibility
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Automated testing & deployment
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => {
                      toast({
                        title: "Smart Contract Services 📝",
                        description: "Let's discuss your smart contract requirements!",
                      })
                      scrollToSection("contact")
                    }}
                  >
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">DeFi Platform Development</CardTitle>
                  <CardDescription className="text-gray-400">
                    Complete DeFi ecosystems including DEXs, lending protocols, yield farming, and staking platforms.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm mb-6">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Automated Market Makers (AMM)
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Liquidity mining & yield optimization
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Flash loans & arbitrage bots
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      DAO governance systems
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => {
                      toast({
                        title: "DeFi Development 🏦",
                        description: "Ready to build the next big DeFi protocol?",
                      })
                      scrollToSection("contact")
                    }}
                  >
                    Start DeFi Project
                    <TrendingUp className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">NFT Ecosystem Development</CardTitle>
                  <CardDescription className="text-gray-400">
                    Full-stack NFT solutions including marketplaces, minting platforms, and gaming integrations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm mb-6">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Custom NFT marketplaces
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Dynamic & generative NFTs
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Royalty & revenue sharing
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      IPFS & decentralized storage
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-cyan-600 hover:bg-cyan-700"
                    onClick={() => {
                      toast({
                        title: "NFT Development 🎨",
                        description: "Let's create your NFT marketplace or collection!",
                      })
                      scrollToSection("contact")
                    }}
                  >
                    Launch NFT Project
                    <Award className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Additional Services Row */}
            <div className="grid gap-8 lg:grid-cols-2 mt-12">
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Enterprise Blockchain Solutions</CardTitle>
                  <CardDescription className="text-gray-400">
                    Private blockchain networks using Hyperledger Fabric and R3 Corda for enterprise applications.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm mb-6">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Supply chain transparency
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Identity management systems
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Trade finance & settlements
                    </li>
                  </ul>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700" onClick={handleScheduleConsultation}>
                      Schedule Consultation
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-600 text-white hover:bg-gray-800"
                      onClick={handleDownloadWhitepaper}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Blockchain Consulting & Strategy</CardTitle>
                  <CardDescription className="text-gray-400">
                    Strategic guidance for blockchain adoption, tokenomics design, and digital transformation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm mb-6">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Blockchain feasibility analysis
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Tokenomics & economic modeling
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      Regulatory compliance guidance
                    </li>
                  </ul>
                  <Button
                    className="w-full bg-orange-600 hover:bg-orange-700"
                    onClick={() => {
                      toast({
                        title: "Blockchain Consulting 🎯",
                        description: "Let's strategize your blockchain transformation!",
                      })
                      scrollToSection("contact")
                    }}
                  >
                    Book Strategy Session
                    <Users className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio/Case Studies Section */}
        <section id="portfolio" className="w-full py-20 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Success Stories & Case Studies
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Discover how we've helped businesses transform their operations with cutting-edge blockchain solutions
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <Card className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-400/30 hover:border-blue-300/60 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/20">
                <CardHeader>
                  <Badge className="w-fit bg-blue-500/10 text-blue-400 border-blue-500/20">DeFi Platform</Badge>
                  <CardTitle className="text-white">$50M+ TVL DeFi Protocol</CardTitle>
                  <CardDescription className="text-gray-400">
                    Built a complete DeFi ecosystem on Ethereum with automated yield farming and governance features.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-gray-400">Technology:</span>
                    <span className="text-blue-400">Solidity, React, Node.js</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-4">
                    <span className="text-gray-400">Timeline:</span>
                    <span className="text-green-400">6 months</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-blue-500/20 text-blue-400 hover:bg-blue-500/10"
                    onClick={() => {
                      toast({
                        title: "DeFi Case Study 📊",
                        description: "Interested in building a similar DeFi protocol? Let's discuss!",
                      })
                      scrollToSection("contact")
                    }}
                  >
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-900/30 to-indigo-900/30 border-purple-400/30 hover:border-purple-300/60 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/20">
                <CardHeader>
                  <Badge className="w-fit bg-purple-500/10 text-purple-400 border-purple-500/20">Enterprise</Badge>
                  <CardTitle className="text-white">Supply Chain Transparency</CardTitle>
                  <CardDescription className="text-gray-400">
                    Hyperledger Fabric solution tracking $100M+ in goods across global supply chains.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-gray-400">Technology:</span>
                    <span className="text-purple-400">Hyperledger, Java, Docker</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-4">
                    <span className="text-gray-400">Timeline:</span>
                    <span className="text-green-400">8 months</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-purple-500/20 text-purple-400 hover:bg-purple-500/10"
                    onClick={() => {
                      toast({
                        title: "Enterprise Case Study 🏢",
                        description: "Need enterprise blockchain solutions? We can help!",
                      })
                      scrollToSection("contact")
                    }}
                  >
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border-emerald-400/30 hover:border-emerald-300/60 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/20">
                <CardHeader>
                  <Badge className="w-fit bg-cyan-500/10 text-cyan-400 border-cyan-500/20">NFT Platform</Badge>
                  <CardTitle className="text-white">Gaming NFT Marketplace</CardTitle>
                  <CardDescription className="text-gray-400">
                    High-performance NFT marketplace on Solana with 10,000+ daily active users.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-gray-400">Technology:</span>
                    <span className="text-cyan-400">Rust, Solana, React</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mb-4">
                    <span className="text-gray-400">Timeline:</span>
                    <span className="text-green-400">4 months</span>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/10"
                    onClick={() => {
                      toast({
                        title: "NFT Case Study 🎮",
                        description: "Want to build an NFT marketplace? Let's make it happen!",
                      })
                      scrollToSection("contact")
                    }}
                  >
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  What Our Clients Say
                </span>
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CTO, FinTech Innovations",
                  content:
                    "BlockchainPro delivered our DeFi platform ahead of schedule. Their expertise in Solidity and smart contract security is unmatched.",
                  rating: 5,
                  company: "FinTech Innovations",
                },
                {
                  name: "Michael Chen",
                  role: "CEO, Supply Chain Solutions",
                  content:
                    "The Hyperledger Fabric solution they built transformed our supply chain visibility. ROI was achieved within 6 months.",
                  rating: 5,
                  company: "Supply Chain Solutions",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Founder, NFT Gaming Studio",
                  content:
                    "Their Solana-based NFT marketplace handles thousands of transactions daily with zero downtime. Exceptional work!",
                  rating: 5,
                  company: "NFT Gaming Studio",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-600 text-gray-400 hover:bg-gray-800"
                        onClick={() => {
                          toast({
                            title: `Reference from ${testimonial.company} ⭐`,
                            description: "Want to speak with our clients? We can arrange a reference call!",
                          })
                          scrollToSection("contact")
                        }}
                      >
                        Contact Reference
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-20 bg-gradient-to-b from-gray-900/50 to-black">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  Ready to Build the Future?
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Let's discuss your blockchain project. Get a free consultation and project estimate within 24 hours.
              </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Start Your Project Today</CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form and our blockchain experts will contact you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-gray-300">
                          First name *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          className="bg-gray-800 border-gray-600 text-white"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-gray-300">
                          Last name *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          className="bg-gray-800 border-gray-600 text-white"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        placeholder="john@company.com"
                        type="email"
                        className="bg-gray-800 border-gray-600 text-white"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="text-sm font-medium text-gray-300">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-white"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="Smart Contract Development">Smart Contract Development</option>
                        <option value="DeFi Platform">DeFi Platform</option>
                        <option value="NFT Marketplace">NFT Marketplace</option>
                        <option value="Enterprise Blockchain">Enterprise Blockchain</option>
                        <option value="Blockchain Consulting">Blockchain Consulting</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-300">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your blockchain project requirements, timeline, and budget..."
                        className="min-h-[120px] bg-gray-800 border-gray-600 text-white"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Get Free Consultation"}
                      {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                  <div className="space-y-6">
                    <button
                      className="flex items-center space-x-4 w-full text-left hover:bg-gray-800/50 p-3 rounded-lg transition-colors"
                      onClick={() => handleContactMethod("email", "contact@blockchainpro.com")}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <p className="text-gray-400">contact@blockchainpro.com</p>
                      </div>
                    </button>
                    <button
                      className="flex items-center space-x-4 w-full text-left hover:bg-gray-800/50 p-3 rounded-lg transition-colors"
                      onClick={() => handleContactMethod("phone", "+1-555-123-4567")}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Phone</p>
                        <p className="text-gray-400">+1 (555) 123-4567</p>
                      </div>
                    </button>
                    <button
                      className="flex items-center space-x-4 w-full text-left hover:bg-gray-800/50 p-3 rounded-lg transition-colors"
                      onClick={() => handleContactMethod("address", "123 Blockchain Street, Tech City, TC 12345")}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Office</p>
                        <p className="text-gray-400">123 Blockchain Street, Tech City, TC 12345</p>
                      </div>
                    </button>
                  </div>
                </div>

                <Card className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-indigo-400/30 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                      <h4 className="font-bold text-white text-lg">Why Choose BlockchainPro?</h4>
                    </div>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center text-gray-200">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-3 flex-shrink-0" />
                        500+ successful blockchain projects delivered
                      </li>
                      <li className="flex items-center text-gray-200">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-3 flex-shrink-0" />
                        Expert team of 50+ certified blockchain developers
                      </li>
                      <li className="flex items-center text-gray-200">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-3 flex-shrink-0" />
                        24/7 dedicated support and maintenance
                      </li>
                      <li className="flex items-center text-gray-200">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-3 flex-shrink-0" />
                        99.9% uptime guarantee with enterprise SLA
                      </li>
                      <li className="flex items-center text-gray-200">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-3 flex-shrink-0" />
                        Security-first development with comprehensive audits
                      </li>
                      <li className="flex items-center text-gray-200">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-3 flex-shrink-0" />
                        Proven track record with Fortune 500 companies
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-400/20">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-indigo-300 font-medium">Client Satisfaction</span>
                        <span className="text-emerald-400 font-bold">98.5%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                          style={{ width: "98.5%" }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="container px-4 md:px-6 mx-auto py-12">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <button className="flex items-center" onClick={() => scrollToSection("hero")}>
                <Shield className="h-8 w-8 text-blue-500" />
                <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  BlockchainPro
                </span>
              </button>
              <p className="text-gray-400 text-sm">
                Leading blockchain development company delivering enterprise-grade solutions across all major blockchain
                platforms.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button className="hover:text-blue-400 transition-colors" onClick={() => scrollToSection("services")}>
                    Smart Contracts
                  </button>
                </li>
                <li>
                  <button className="hover:text-blue-400 transition-colors" onClick={() => scrollToSection("services")}>
                    DeFi Development
                  </button>
                </li>
                <li>
                  <button className="hover:text-blue-400 transition-colors" onClick={() => scrollToSection("services")}>
                    NFT Platforms
                  </button>
                </li>
                <li>
                  <button className="hover:text-blue-400 transition-colors" onClick={() => scrollToSection("services")}>
                    Enterprise Solutions
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Technologies</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button
                    className="hover:text-blue-400 transition-colors"
                    onClick={() => scrollToSection("technologies")}
                  >
                    Ethereum
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-blue-400 transition-colors"
                    onClick={() => scrollToSection("technologies")}
                  >
                    Solana
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-blue-400 transition-colors"
                    onClick={() => scrollToSection("technologies")}
                  >
                    Polygon
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-blue-400 transition-colors"
                    onClick={() => scrollToSection("technologies")}
                  >
                    Hyperledger
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button
                    className="hover:text-blue-400 transition-colors"
                    onClick={() => {
                      toast({
                        title: "About Us 🏢",
                        description: "Learn more about our blockchain expertise and team!",
                      })
                    }}
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-blue-400 transition-colors"
                    onClick={() => scrollToSection("portfolio")}
                  >
                    Case Studies
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-blue-400 transition-colors"
                    onClick={() => {
                      toast({
                        title: "Join Our Team! 🚀",
                        description: "We're hiring blockchain developers! Contact us for opportunities.",
                      })
                      scrollToSection("contact")
                    }}
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button className="hover:text-blue-400 transition-colors" onClick={() => scrollToSection("contact")}>
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">© 2024 BlockchainPro. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <button
                className="text-xs hover:text-blue-400 transition-colors"
                onClick={() => {
                  toast({
                    title: "Privacy Policy 🔒",
                    description: "Your privacy is important to us. View our privacy policy.",
                  })
                }}
              >
                Privacy Policy
              </button>
              <button
                className="text-xs hover:text-blue-400 transition-colors"
                onClick={() => {
                  toast({
                    title: "Terms of Service 📋",
                    description: "View our terms and conditions for services.",
                  })
                }}
              >
                Terms of Service
              </button>
              <button
                className="text-xs hover:text-blue-400 transition-colors"
                onClick={() => {
                  toast({
                    title: "Cookie Policy 🍪",
                    description: "Learn about how we use cookies on our website.",
                  })
                }}
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
