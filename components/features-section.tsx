"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Heart, AlertCircle, Mic2, BellIcon } from "lucide-react"
import { BsMagic } from "react-icons/bs"
import ring from "@/assets/hero/ring.png"
import Image from "next/image"

const features = [
  {
    title: "Pulse & Stress Monitoring",
    description: "Detects abnormal heart rate and stress conditions.",
    icon: Heart,
    color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-bold",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "AI Distress Detection",
    description: "Differentiates workouts from real distress situations.",
    icon: AlertCircle,
    color: "bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 font-bold",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "GPS & Live Tracking",
    description: "Sends real-time location to emergency contacts.",
    icon: MapPin,
    color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "Microphone Activation",
    description: "Records and transmits audio in emergencies.",
    icon: Mic2,
    color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-bold",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "Automated Alerts",
    description: "Sends SOS messages without manual input.",
    icon: BellIcon,
    color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 font-bold",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "Compact & Stylish",
    description: "A discrete, everyday wearable ring.",
    icon: BsMagic,
    color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 font-bold",
    image: "/placeholder.svg?height=300&width=300",
  }
]

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed for Safety, Crafted for Confidence</h2>
          <p className="text-lg text-muted-foreground">
            GuardianRing combines cutting-edge technology with elegant design to provide comprehensive safety features
            that empower women in their daily lives.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
              {/* <div className="relative h-48 overflow-hidden">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div> */}
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-r from-purple-600 to-teal-500 rounded-2xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-2 items-center justify-center">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">How GuardianRing Works</h3>
                <ul className="space-y-4 text-white">
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-purple-600 text-sm font-bold">
                        1
                      </span>
                    </div>
                    <p>Press the button on your GuardianRing to activate an emergency alert</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-purple-600 text-sm font-bold">
                        2
                      </span>
                    </div>
                    <p>Your top 5 emergency contacts receive instant notifications with your location</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-purple-600 text-sm font-bold">
                        3
                      </span>
                    </div>
                    <p>Real-time location tracking allows your contacts to find you quickly</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-white/20 rounded-full p-1 mt-1">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-purple-600 text-sm font-bold">
                        4
                      </span>
                    </div>
                    <p>Optional audio recording captures environmental sounds for evidence</p>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                    src={ring}
                    width={500}
                    height={500}
                    alt="product"
                    className="object-fit"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

