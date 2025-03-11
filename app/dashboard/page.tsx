"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Battery, Phone, Users, Bell, Settings, User, LogOut, Heart, Shield, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [batteryLevel] = useState(78)
  const [ringConnected] = useState(true)
  const [lastSyncTime] = useState("11:45 AM")

  const emergencyContacts = [
    { name: "Mom", phone: "+91 98861 62812", primary: true },
    { name: "Dad", phone: "+91 98861 62812", primary: false },
    { name: "Sister", phone: "+91 98861 62812", primary: true },
    { name: "Best Friend", phone: "+91 98861 62812", primary: true },
    { name: "Local Police", phone: "100", primary: false },
  ]

  const recentActivities = [
    { type: "location", message: "Location shared with Mom", time: "Today, 10:23 AM" },
    { type: "battery", message: "Low battery alert (20%)", time: "Yesterday, 9:15 PM" },
    { type: "alert", message: "Test alert sent", time: "Yesterday, 3:30 PM" },
    { type: "system", message: "Ring firmware updated", time: "Mar 10, 2:45 PM" },
  ]

  const activityIcons: Record<string, React.ReactNode> = {
    location: <MapPin className="h-4 w-4 text-teal-500" />,
    battery: <Battery className="h-4 w-4 text-amber-500" />,
    alert: <Bell className="h-4 w-4 text-red-500" />,
    system: <Settings className="h-4 w-4 text-blue-500" />,
  }

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile sidebar toggle */}
      <button
        className="lg:hidden fixed z-50 bottom-4 right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 ease-in-out bg-white dark:bg-gray-800 shadow-lg lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 px-4 border-b dark:border-gray-700">
            <Link href={"/"} className="text-xl font-bold bg-gradient-to-r from-purple-600 to-teal-400 bg-clip-text text-transparent">
              GuardianRing
            </Link>
          </div>

          <div className="flex flex-col items-center py-6 border-b dark:border-gray-700">
            <Avatar className="h-20 w-20 mb-2 ring-2 ring-purple-500 ring-offset-2 dark:ring-offset-gray-800">
              <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User" />
              <AvatarFallback className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                R
              </AvatarFallback>
            </Avatar>
            <h2 className="text-lg font-semibold">Raksha</h2>
            <p className="text-sm text-muted-foreground">Premium Member</p>
            <div className="mt-2 flex items-center">
              <Badge
                variant="outline"
                className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-300"
              >
                Active
              </Badge>
            </div>
          </div>

          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            <Button variant="ghost" className="w-full justify-start">
              <User className="mr-3 h-5 w-5 text-purple-600" />
              Profile
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Shield className="mr-3 h-5 w-5 text-purple-600" />
              Safety Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="mr-3 h-5 w-5 text-purple-600" />
              Manage Contacts
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Bell className="mr-3 h-5 w-5 text-purple-600" />
              Notifications
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Heart className="mr-3 h-5 w-5 text-purple-600" />
              Health Data
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="mr-3 h-5 w-5 text-purple-600" />
              Settings
            </Button>
          </nav>

          <div className="p-4 border-t dark:border-gray-700">
            <Button
              variant="outline"
              className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? "lg:ml-64" : "ml-0 lg:ml-64"}`}>
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm border-b dark:border-gray-700">
          <div className="flex items-center justify-between h-16 px-4 md:px-6">
            <h1 className="text-xl font-bold lg:hidden bg-gradient-to-r from-purple-600 to-teal-400 bg-clip-text text-transparent">
              GuardianRing
            </h1>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <div className={`h-2.5 w-2.5 rounded-full ${ringConnected ? "bg-green-500" : "bg-red-500"}`}></div>
                <span className="text-sm font-medium">{ringConnected ? "Ring Connected" : "Ring Disconnected"}</span>
                <span className="text-xs text-muted-foreground">Last sync: {lastSyncTime}</span>
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                <AvatarFallback className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                  R
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-4 md:p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Battery Status */}
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-purple-600/10 to-teal-500/10 pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Battery className="mr-2 h-5 w-5 text-purple-600" />
                  Battery Status
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-teal-500/20"></div>
                    <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-2xl font-bold">{batteryLevel}%</span>
                    </div>
                  </div>
                  <Progress value={batteryLevel} className="h-2 w-full" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    {batteryLevel > 50
                      ? "Good battery level"
                      : batteryLevel > 20
                        ? "Consider charging soon"
                        : "Low battery! Please charge"}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contacts */}
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-purple-600/10 to-teal-500/10 pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Users className="mr-2 h-5 w-5 text-purple-600" />
                  Emergency Contacts
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3 max-h-[180px] overflow-y-auto pr-2">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarFallback className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
                            {contact.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{contact.name}</p>
                          <p className="text-xs text-muted-foreground">{contact.phone}</p>
                        </div>
                      </div>
                      {contact.primary && (
                        <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 border-purple-300">
                          Primary
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Women Helpline */}
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-purple-600/10 to-teal-500/10 pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Phone className="mr-2 h-5 w-5 text-purple-600" />
                  Women Helpline
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                    <p className="font-semibold">National Emergency</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xl font-bold">100</p>
                      <Button size="sm" variant="outline" className="h-8 gap-1">
                        <Phone className="h-4 w-4" /> Call
                      </Button>
                    </div>
                  </div>
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-3 rounded-lg">
                    <p className="font-semibold">Women Safety Hotline</p>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xl font-bold">1091</p>
                      <Button size="sm" variant="outline" className="h-8 gap-1">
                        <Phone className="h-4 w-4" /> Call
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-purple-600/10 to-teal-500/10 pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Bell className="mr-2 h-5 w-5 text-purple-600" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3 max-h-[180px] overflow-y-auto pr-2">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-0.5 bg-gray-100 dark:bg-gray-700 p-1.5 rounded-full">
                        {activityIcons[activity.type]}
                      </div>
                      <div>
                        <p className="text-sm">{activity.message}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Section */}
          <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-purple-600/10 to-teal-500/10 pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center text-lg">
                  <MapPin className="mr-2 h-5 w-5 text-purple-600" />
                  Live Location
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-300"
                  >
                    Live
                  </Badge>
                  <Button size="sm" variant="outline">
                    Share Location
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative w-full h-[400px] bg-gray-100 dark:bg-gray-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59049.593390905735!2d87.22129933300036!3d22.330978289399802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d44143b5c99a1%3A0xf37ae5b844180ec4!2sKharagpur%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1741719191853!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-b-lg"
                ></iframe>
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 bg-purple-600 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Your Location</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Health and Safety Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-purple-600/10 to-teal-500/10 pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Heart className="mr-2 h-5 w-5 text-purple-600" />
                  Health Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Heart Rate</span>
                      <span className="text-sm font-medium">72 bpm</span>
                    </div>
                    <Progress value={72} max={200} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Steps Today</span>
                      <span className="text-sm font-medium">6,542</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Sleep</span>
                      <span className="text-sm font-medium">7.5 hrs</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-purple-600/10 to-teal-500/10 pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Shield className="mr-2 h-5 w-5 text-purple-600" />
                  Safety Score
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-teal-500/20"></div>
                    <div className="absolute inset-2 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-3xl font-bold">92</span>
                        <span className="text-sm block text-muted-foreground">/ 100</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-center text-muted-foreground">
                    Your safety score is excellent! All systems are functioning properly.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-purple-600/10 to-teal-500/10 pb-2">
                <CardTitle className="flex items-center text-lg">
                  <Settings className="mr-2 h-5 w-5 text-purple-600" />
                  Device Status
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm font-medium">Ring Connected</span>
                    </div>
                    <span className="text-xs text-muted-foreground">v2.1.4</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm font-medium">App Updated</span>
                    </div>
                    <span className="text-xs text-muted-foreground">v3.0.2</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm font-medium">GPS Signal</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Strong</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-500 mr-2"></div>
                      <span className="text-sm font-medium">Bluetooth</span>
                    </div>
                    <span className="text-xs text-muted-foreground">Connected</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

