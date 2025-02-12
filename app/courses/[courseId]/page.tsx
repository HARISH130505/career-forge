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
  "ibops": {
    title: "IB-OPS",
    icon: Users,
    content: [
      "Investment Banking Operations (IB Ops) plays a crucial role in ensuring the smooth execution of financial transactions.",
      "It handles trade settlement, risk management, regulatory compliance, and reconciliation of trades.",
      "This division ensures that all trades are properly recorded and settled, minimizing financial and operational risks.",
      "IB Ops also works closely with front-office teams to manage client accounts and streamline processes.",
      "Automation and technology are transforming this field, improving efficiency and reducing errors.",
    ],
  },
}
 
export default async function Course({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await params;
  const course = courseContent[courseId as keyof typeof courseContent]
 
  if (!course) {
    notFound()
  }
 
  const Icon = course.icon
 
  return (
    <main className="min-h-screen py-20">
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