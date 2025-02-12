"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const testimonials = [
  {
    name: "Ramkrishnan L",
    role: "CFA Trainee",
    quote: "CareerForge helped me transition into a new career. The CFA course was comprehensive and practical.",
    image: "/cl1.jpg",
  },
  {
    name: "Gajalakshmi",
    role: "IB-OPS Trainee",
    quote:
      "The IB-OPS course at CareerForge was exactly what I needed to advance in my career. Highly recommended!",
    image: "/cl2.jpg",
  },
  {
    name: "Siddharth",
    role: "CFA Trainee",
    quote:
      "CareerForge Institute provided exceptional coaching for my CFA, ensuring a first-class learning experience with expert guidance and unwavering support.",
    image: "/cl3.jpg",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
      <div className="container mx-auto px-4 mt-10">
        <h2 className="text-4xl font-bold mb-8 text-center">What Our Students Say</h2>
        <div className="relative h-64">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={600}
                  height={600}
                  className="rounded-3xl mb-4"
                />
                <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}
