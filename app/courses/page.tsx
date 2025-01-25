import CourseCard from "./course-card"

const courses = [
  {
    title: "Web Development",
    description: "Learn to build modern, responsive websites",
    duration: "12 weeks",
    fees: "$999",
    prerequisites: "Basic HTML, CSS, JavaScript",
  },
  {
    title: "Data Science",
    description: "Master the art of data analysis and machine learning",
    duration: "16 weeks",
    fees: "$1299",
    prerequisites: "Basic Python, Statistics",
  },
  {
    title: "Digital Marketing",
    description: "Develop skills to excel in the digital marketing landscape",
    duration: "8 weeks",
    fees: "$799",
    prerequisites: "None",
  },
  {
    title: "UX/UI Design",
    description: "Create user-centric designs for web and mobile applications",
    duration: "10 weeks",
    fees: "$899",
    prerequisites: "Basic design principles",
  },
  {
    title: "Cybersecurity",
    description: "Learn to protect systems and networks from cyber threats",
    duration: "14 weeks",
    fees: "$1199",
    prerequisites: "Basic networking knowledge",
  },
  {
    title: "Cloud Computing",
    description: "Master cloud technologies and architectures",
    duration: "12 weeks",
    fees: "$999",
    prerequisites: "Basic IT knowledge",
  },
]

export default function Courses() {
  return (
    <main className="min-h-screen py-20">
      <div className="bg-white bg-opacity-90 shadow-lg py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Courses</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}