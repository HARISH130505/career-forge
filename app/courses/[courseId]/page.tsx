import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, BookOpen, TrendingUp, Users } from "lucide-react"
 
const courseContent = {
  "why-cfa": {
    title: "Why CFA?",
    icon: BookOpen,
    content: [
      "Global Recognition and Credibility: The CFA designation is internationally recognized and respected in the finance industry.",
      "Enhanced Analytical Skills: Preparing for the CFA exams develops a deep understanding of complex financial concepts and analytical skills, improving critical thinking and problem-solving abilities.",
      "Professional Expertise: It signals a high level of expertise in financial analysis, portfolio management, and investment decision-making to employers, clients, and peers.",
      "Comprehensive Curriculum: The CFA program covers a broad range of topics including financial reporting and analysis, economics, corporate finance, equity investments, fixed income, portfolio management, ethics, and professional standards.",
      "Career Versatility: This well-rounded education prepares you for various roles in finance and investment, offering flexibility in your career path.",
    ],
  },
  "cfa-opportunities": {
    title: "Opportunities with CFA",
    icon: TrendingUp,
    content: [
      "Career Advancement: Earning the CFA charter can open doors to new career opportunities, promotions, and salary increases. It's particularly valuable for roles like portfolio managers, research analysts, investment bankers, and financial consultants.",
      "Global Networking: The CFA Institute provides access to a global network of professionals, including events, conferences, and local chapters. This can help you connect with other professionals in the industry and expand your career prospects.",
      "Long-term Career Benefits: Many CFA charterholders report significant career growth and job satisfaction. It can provide long-term benefits in terms of job security, earning potential, and professional prestige.",
      "Competitive Edge: In a competitive job market, having a CFA can make you stand out to employers who value the rigor and dedication required to complete the program.",
    ],
  },
  "cfa-at-careerforge": {
    title: "CFA at CareerForge",
    icon: Users,
    content: [
      "Structured Learning Path: We offer comprehensive study plans, detailed lecture notes, practice mock exams, and access to instructors for questions and clarifications.",
      "Expert Guidance: Our faculty consists of reputable and experienced professionals who are well-versed in CFA exam topics and can offer in-depth guidance, answer questions, and explain core concepts thoroughly.",
      "Motivation & Accountability: Studying for the CFA exams can be intense. Our set schedule with classes and deadlines helps keep you motivated and on track throughout your preparation.",
      "Improved Pass Rates: CareerForge boasts high pass rates because our programs are tailored specifically to tackle the exam's challenges. Our study materials are meticulously aligned with the CFA Institute's curriculum.",
      "Support Beyond Exams: We provide career counseling, interview preparation, and other support services that benefit you even after obtaining your CFA charter, ensuring long-term career success.",
    ],
  },
}
 
export default function Course({ params }: { params: { courseId: string } }) {
  const course = courseContent[params.courseId as keyof typeof courseContent]
 
  if (!course) {
    notFound()
  }
 
  const Icon = course.icon
 
  return (
    <main className="min-h-screen py-20 bg-white bg-opacity-60">
      <div className="container mx-auto px-4">
        <Link
          href="/courses"
          className="inline-flex items-center text-primary hover:text-secondary transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          <span className="font-semibold">Back to Courses</span>
        </Link>
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Icon size={40} className="text-primary mr-4" />
            <h1 className="text-4xl font-bold text-gray-800">{course.title}</h1>
          </div>
          <div className="space-y-6">
            {course.content.map((paragraph, index) => (
              <div key={index} className="flex items-start">
                <div className="mt-1 mr-4 bg-primary rounded-full p-1">
                  <div className="bg-white rounded-full w-2 h-2"></div>
                </div>
                <p className="text-gray-700 leading-relaxed flex-1">{paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}