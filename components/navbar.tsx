"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/70 backdrop-blur-lg shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-[#5C1749] to-[#E23288] bg-clip-text text-transparent"
          >
            GuardianRing
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-foreground/80 hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link href="/#team" className="text-foreground/80 hover:text-foreground transition-colors">
              Our Team
            </Link>
            <Link className="p-2 rounded-lg bg-[#4F143F] hover:bg-[#61174c] text-white font-semibold" href={"/login"}>Login/Register</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 bg-background/95 backdrop-blur-lg">
            <nav className="flex flex-col space-y-4 px-2 pb-4">
              <Link
                href="#features"
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#team"
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Our Team
              </Link>
              <Link
                href="#testimonials"
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Button className="w-full">Pre-order Now</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

