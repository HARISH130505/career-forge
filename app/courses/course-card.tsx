"use client"

import { useState } from "react"
import Link from "next/link"

interface CourseCardProps {
  title: string
  description: string
  duration: string
  fees: string
  prerequisites: string
}

export default function CourseCard({ title, description, duration, fees, prerequisites }: CourseCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`bg-white rounded-lg shadow-md transition-all duration-300 overflow-hidden ${isHovered ? "shadow-lg scale-105" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          <p>
            <strong>Duration:</strong> {duration}
          </p>
          <p>
            <strong>Fees:</strong> {fees}
          </p>
          <p>
            <strong>Prerequisites:</strong> {prerequisites}
          </p>
        </div>
      </div>
      <div className="bg-secondary p-4">
        <Link href={`/courses/${title.toLowerCase().replace(/\s+/g, "-")}`} className="text-white hover:underline">
          Learn More
        </Link>
      </div>
    </div>
  )
}