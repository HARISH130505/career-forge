import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import Testimonials from "./components/testimonials"

export default function Home() {
  // ... (previous code remains the same)

  return (
    <main className="min-h-screen">
      <div className="bg-white bg-opacity-90 shadow-lg">
        {/* ... (previous sections remain the same) */}

        <Testimonials />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Courses</h2>
            <div className="grid grid-cols-3 gap-8">
              {["Web Development", "Data Science", "Digital Marketing"].map((course, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{course}</h3>
                  <p className="mb-4">
                    Learn the latest skills in {course.toLowerCase()} and boost your career prospects.
                  </p>
                  <Link href="/courses" className="text-secondary hover:underline">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-primary text-white py-8">{/* ... (footer content remains the same) */}</footer>
      </div>
    </main>
  )
}