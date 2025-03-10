"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"
import Sayan from "@/assets/team/Sayan.jpg"

const team = [
  {
    name: "Sayan Dutta",
    role: "Co-founder",
    bio: "Former security expert with 15+ years of experience in personal safety technology.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Srajan Kumar Gupta",
    role: "Co-founder",
    bio: "Hardware engineer specializing in wearable technology and IoT devices.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Shreyansh Agrawal",
    role: "Co-founder",
    bio: "Award-winning jewelry designer focused on combining aesthetics with functionality.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team Behind GuardianRing</h2>
          <p className="text-lg text-muted-foreground">
            Our diverse team of experts is united by a shared mission: to create innovative safety solutions that
            empower women worldwide.
          </p>
        </div>

        <div className="flex justify-center items-center">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-[450px] mx-2"
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={Sayan} alt={member.name} className="object-fit" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-[#92457f] dark:text-[#92457f] font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-[#92457f] transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-[#92457f] transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-[#92457f] transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-[#92457f]dark:bg-[#92457f]/10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Mission</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We are always looking for passionate individuals who share our commitment to creating innovative safety
                solutions. Check out our open positions and become part of a team thats making a difference.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#92457f] to-[#EC74AF] hover:from-[#92457f] hover:to-[#eb75ae] text-white px-6 py-3 rounded-lg font-medium"
              >
                View Open Positions
              </motion.button>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src=""
                alt="Team working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

