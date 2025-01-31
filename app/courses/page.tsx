import Link from "next/link"
import { ArrowRight } from "lucide-react"
 
const cfaCourses = [
  {
    id: "why-cfa",
    title: "Why CFA?",
    description: "Discover the global recognition and comprehensive skills offered by the CFA program",
  },
  {
    id: "cfa-opportunities",
    title: "Opportunities with CFA",
    description: "Explore the diverse career paths and networking possibilities for CFA charterholders",
  },
  {
    id: "ibops",
    title: "IB-OPS",
    description: "As financial markets evolve, IB Ops continues to be a vital backbone of investment banking institutions",
  },
]
 
export default function Courses() {
  return (
    <main className="min-h-screen py-20 bg-white bg-opacity-60">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          CFA Program
        </h1>
        <p className="text-4xl font-bold text-center mb-12">
          Elevate Your Financial Career with CareerForge
        </p>
        <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {cfaCourses.map((course, index) => (
            <Link href={`/courses/${course.id}`} key={course.id} className="group">
              <div className="bg-white rounded-lg shadow-md transition-all duration-300 overflow-hidden hover:shadow-xl group-hover:scale-105 border border-gray-100">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors duration-300">
                      {course.title}
                    </h2>
                    <p className="text-gray-600 mb-4 font-light">{course.description}</p>
                  </div>
                  <div className="flex items-center text-secondary group-hover:text-primary transition-colors duration-300">
                    <span className="text-sm font-semibold mr-2">Learn More</span>
                    <ArrowRight
                      size={16}
                      className="transform group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="bg-gradient-to-r from-primary to-secondary h-1 w-0 group-hover:w-full transition-all duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
 
 

// export default function CFACourses() {
//   return (
//     <main className="min-h-screen py-20">
//       <div className="bg-white bg-opacity-90 shadow-lg py-12">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-8 text-center">Our Courses</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:flex justify-evenly gap-8">
//             {cfaCourseInfo.map((course, index) => (
//               <CourseCard key={index} {...course} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }