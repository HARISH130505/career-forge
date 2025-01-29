"use client"

import { useState } from "react"
import Link from "next/link"

interface CourseCardProps {
  title: string
  content: string[]
}

function CourseCard({ title, content }: CourseCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`bg-white rounded-lg shadow-md transition-all duration-300 overflow-hidden ${
        isHovered ? "shadow-lg scale-105" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <ul className="list-disc pl-5 space-y-2">
          {content.map((item, index) => (
            <li key={index} className="text-gray-600">
              {item}
            </li>
          ))}
        </ul>
      </div>
     <button className="bg-black text-white text-center w-full p-3">
          Click Here
     </button>
    </div>
  )
}

const cfaCourseInfo = [
  {
    title: "CFA:",
    content: [
      "Why CFA?",
      "Opportunities we get by studying CFA",
      "Advantages of learning CFA with Career Forge",
      "Brochure",
    ],
  },
  {
    title: "IB-OPS:",
    content: [
      "What is IB-OPS course",
      "Opportunities we get by Studying IBOPS",
      "Advantages of learning IB-OPS with Career Forge",
      "Brochure",
    ],
  },
]

export default function CFACourses() {
  return (
    <main className="min-h-screen py-20">
      <div className="bg-white bg-opacity-90 shadow-lg py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Courses</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-evenly gap-8">
            {cfaCourseInfo.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}