"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Globe, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="px-6 py-6 max-w-6xl mx-auto flex items-center">
        <Image
          src="/logo.png"
          alt="Archibald Innovations logo"
          width={180}
          height={60}
          priority
        />
      </header>

      {/* Hero Section */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Websites & Apps Built to <span className="text-indigo-600">Grow Your Business</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Archibald Innovations is a personal-brand digital studio helping local businesses
            turn ideas into high-performing websites and applications.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/book-consultation">
              <Button className="rounded-2xl px-6 py-5 text-base">
                Book Free Consultation
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="rounded-2xl px-6 py-5 text-base">
                View Pricing
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <Globe className="w-8 h-8 text-indigo-600" />
                <h3 className="mt-4 text-xl font-medium">Website Design & Development</h3>
                <p className="mt-2 text-gray-600">
                  Fast, modern, SEO-friendly websites designed to convert visitors into customers.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <Smartphone className="w-8 h-8 text-indigo-600" />
                <h3 className="mt-4 text-xl font-medium">Web & Mobile Apps</h3>
                <p className="mt-2 text-gray-600">
                  Custom applications built to streamline operations and scale with your business.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <Code className="w-8 h-8 text-indigo-600" />
                <h3 className="mt-4 text-xl font-medium">Maintenance & Support</h3>
                <p className="mt-2 text-gray-600">
                  Ongoing updates, hosting support, and improvements so you can focus on your business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Why Archibald Innovations?</h2>
            <p className="mt-4 text-gray-600">
                Hi, I’m Ashley Archibald. I partner with small and local businesses to create websites and 
                apps that are not only visually appealing but built to perform. Together, 
                we’ll turn your ideas into real digital solutions from the first concept to launch, with speed, clarity, and quality every step of the way.
            </p>
            <p className="mt-4 text-gray-600">
              You work directly with me from idea to launch, ensuring clarity, speed,
              and quality at every step.
            </p>
          </div>
          <div className="bg-indigo-50 rounded-2xl p-8">
            <ul className="space-y-4 text-gray-700">
              <li>✔ Direct access to your developer</li>
              <li>✔ Built for performance & growth</li>
              <li>✔ Local-business focused solutions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Calendar className="w-10 h-10 mx-auto" />
          <h2 className="text-3xl font-semibold mt-6">Ready to Build Something Great?</h2>
          <p className="mt-4 text-indigo-100">
            Let’s talk about your project and see how we can bring your vision to life.
          </p>
          <Link href="/book-consultation">
            <Button className="mt-8 bg-white text-indigo-600 rounded-2xl px-6 py-5 text-base">
              Schedule a Call
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Archibald Innovations.
      </footer>
    </div>
  );
}
