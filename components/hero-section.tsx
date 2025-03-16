"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Shield, MapPin, Bell, Smartphone } from "lucide-react"
import ring from "@/assets/hero/ring.png"
import video from "@/assets/hero/ring_black.gif"

export default function HeroSection() {
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ringRef.current) return

      const { left, top, width, height } = ringRef.current.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2

      const moveX = (e.clientX - centerX) / 25
      const moveY = (e.clientY - centerY) / 25

      ringRef.current.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX}deg)`
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden lg:h-[80vh] flex justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-teal-50 dark:from-purple-950/20 dark:to-teal-950/20 -z-10" />

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-4 py-1 rounded-full text-sm font-medium">
                Introducing GuardianRing
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Safety at Your{" "}
                <span className="bg-gradient-to-r from-purple-600 to-teal-400 bg-clip-text text-transparent">
                  Fingertips
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                A smart ring that empowers women with instant emergency alerts,
                GPS tracking, and health monitoring in an elegant, discreet
                design.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600"
                >
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <span className="text-sm">Emergency Alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-teal-500" />
                  <span className="text-sm">GPS Tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-purple-600" />
                  <span className="text-sm">SOS Button</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-teal-500" />
                  <span className="text-sm">App Integration</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse" />
              {/* <div
              ref={ringRef}
              className="relative bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl transition-transform duration-200"
            >
              <Image
                src="/placeholder.svg?height=500&width=500"
                width={500}
                height={500}
                alt="GuardianRing smart safety ring"
                className="w-full h-auto rounded-lg"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-teal-500 text-white px-4 py-2 rounded-lg shadow-lg">
                One-touch SOS
              </div>
            </div> */}
              <Image
                src={ring}
                width={500}
                height={500}
                alt="GuardianRing smart safety ring"
                className="w-full h-auto rounded-lg"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>
      <div className="py-10 bg-gradient-to-br from-purple-50 to-teal-50 dark:from-purple-950/20 dark:to-teal-950/20 -z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <Image
            src={video}
            width={500}
            height={500}
            alt="GuardianRing smart safety ring"
            className="mx-auto w-[60%] h-auto rounded-3xl shadow-2xl"
            priority
          />
        </motion.div>
      </div>
    </>
  );
}

