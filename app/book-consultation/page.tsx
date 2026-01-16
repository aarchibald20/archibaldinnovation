"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function BookConsultation() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-24 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">Book a Free Consultation</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 border rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="p-4 border rounded-lg"
          />
          <Button type="submit" className="mt-4 rounded-2xl px-6 py-5 text-base">
            Send Message
          </Button>
        </form>
      ) : (
        <p className="text-green-600 font-semibold mt-8 text-center">Thank you! Your message has been sent.</p>
      )}
    </div>
  );
}
