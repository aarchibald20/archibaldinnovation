"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$1,500 - $2,500",
      description: "Perfect for small businesses or personal sites",
      features: [
        "3–5 pages website",
        "Responsive design",
        "Basic SEO setup",
        "2 rounds of revisions",
      ],
    },
    {
      name: "Business",
      price: "$3,500 - $5,000",
      description: "Medium websites or web apps with analytics and support",
      features: [
        "All Starter features",
        "Web app functionality",
        "Analytics integration",
        "1 month support",
        "Up to 10 pages",
      ],
    },
    {
      name: "Premium",
      price: "$6,000 - $10,000",
      description: "Advanced websites or apps with custom integrations and extended support",
      features: [
        "All Business features",
        "Custom integrations",
        "3 months support",
        "Priority updates",
        "Unlimited pages",
      ],
    },
  ];

  const addOns = [
    "SEO optimization: +$300–$500",
    "Additional pages: +$100/page",
    "Ongoing maintenance: $200–$500/month",
    "Custom integrations: +$500–$1,000+",
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-24">
      <h1 className="text-4xl font-bold text-center mb-6">Pricing & Packages</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Flexible packages designed to suit your business needs while keeping projects manageable. Each plan includes clear deliverables and support to help your business grow.
      </p>

      {/* Packages */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
        {plans.map((plan) => (
          <Card key={plan.name} className="rounded-2xl shadow-md hover:shadow-lg transition flex flex-col">
            <CardContent className="p-6 flex flex-col gap-4 text-center flex-grow">
              <h2 className="text-2xl font-semibold">{plan.name}</h2>
              <p className="text-indigo-600 text-xl font-bold">{plan.price}</p>
              <p className="text-gray-600 mt-1">{plan.description}</p>
              <ul className="mt-4 space-y-2 text-gray-600 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
              <Link href="/book-consultation" className="mt-6">
                <Button className="rounded-2xl px-6 py-5 text-base w-full">
                  Book Free Consultation
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Optional Add-Ons */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Optional Add-Ons</h2>
        <ul className="space-y-2 text-gray-700">
          {addOns.map((item, i) => (
            <li key={i}>✔ {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
