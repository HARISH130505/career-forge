"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What courses does CareerForge offer?",
    answer:
      "CareerForge offers a variety of courses including Web Development, Data Science, Digital Marketing, UX/UI Design, Cybersecurity, and Cloud Computing. Each course is designed to provide you with industry-relevant skills and knowledge.",
  },
  {
    question: "How long are the courses?",
    answer:
      "Course durations vary depending on the subject matter. Most of our courses range from 8 to 16 weeks. You can find specific course durations on our Courses page.",
  },
  {
    question: "Are the courses online or in-person?",
    answer:
      "We offer both online and in-person options for most of our courses. Online courses provide flexibility, while in-person courses offer more direct interaction. Check the specific course details for available options.",
  },
  {
    question: "What are the prerequisites for enrolling in a course?",
    answer:
      "Prerequisites vary by course. Some courses are suitable for beginners, while others may require basic knowledge in related fields. You can find prerequisite information on each course's description page.",
  },
  {
    question: "Do you offer job placement assistance?",
    answer:
      "Yes, we provide career support services including resume reviews, interview preparation, and job search assistance. We also have partnerships with various companies for potential job placements.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen py-20">
      <div className="bg-white bg-opacity-90 shadow-lg py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h1>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button className="w-full text-left p-4 focus:outline-none" onClick={() => toggleQuestion(index)}>
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">{faq.question}</h2>
                    {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="p-4 bg-gray-50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}