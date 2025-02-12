"use client"

import { useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <main className="min-h-screen py-20">
      <div className="py-12 px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300  rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-6">
                  We'd love to hear from you. Please fill out the form or contact us using the information below.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-secondary" />
                <span>5/9b, Srinivasa Nagar 2nd Street Annex, Koyambedu, Chennai-107</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-secondary" />
                <span>+91 6379304297, +91 8610417075</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-secondary" />
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTtXwVKvnmWWnQJWdwvClPXPdDGDqmmnCTPLjZJrpSBPCGMVXdJdLVkBttKMsSBTCBCnGX">careerforge2024@gmail.com</a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}