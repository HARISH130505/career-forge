"use client"
import Image from "next/image"

const testimonials = [
  {
    name: "Aravind JV",
    role: "Research Analyst - Crisil Ltd",
    quote: "Mr. Subramanian has been an excellent trainer and a great friend who has helped me in various facets of my career, and has recently helped me get placed in CRISIL as a research analyst. He provided me with excellent training and also encouraged me to think critically, which I believe is an essential quality for anyone wanting to succeed in their career. I am grateful to have learned from him and look forward to applying his teachings in all my endeavors.",
    image: "/Arvind.jpg",
  },
  {
    name: "Ramakrishnan L",
    role: "Wealth Manager - Nuvama Wealth and Investments Ltd",
    quote:
      "Careerforge’s candidate-focused placement style was outstanding. Their strong industry network and deep insights matched my profile with opportunities that reflected my ambitions. Thanks to their efforts, I not only secured a role at Nuvama but also received a competitive salary package.What I value most is Careerforge’s genuine investment in each candidate. They don’t just push placements but ensure a mutually beneficial match for both candidate and employer.",
    image: "/Ramkrishna.jpg",
  },
  {
    name: "Lakshmi Narayanan",
    role: "Research Analyst - KSEMA Wealth",
    quote:
      "Finding a job in equity research is tough due to high competition and difficult entry requirements. I struggled until I found Subramanian, who mentored me and equipped me with the necessary skills, from basic Excel to interview preparation. Beyond the technical skills, he instilled the confidence I needed to succeed.  His continuous support was instrumental in my job search, and I was finally able to secure a placement in equity research.  Mr. Subramanian's guidance made all the difference.",
    image: "/Lakshmi.jpg",
  },
  {
    name: "Nisanth Raj",
    role: "Manager(P&L) - Casagrand",
    quote:
      "I'm extremely grateful to Mr. Subramanian for his exceptional guidance during my CFA Level 1 preparation. His clear explanations, structured approach, and real-world insights made complex financial concepts easy to understand. Beyond just training, he also played a crucial role in preparing for the interview and helping me secure a finance role at Casagrand Builders. His mentorship has been invaluable in shaping my career. Thank you for your unwavering support!",
    image: "/Nisanth.jpg",
  },
  {
    name: "Siddarth",
    role: "Junior Financial Analyst - Vittae Financial Services Private Ltd",
    quote:
      "I met Subramanian sir when I attended Investment Banking Certification Program. I was very passionate about financial markets wanting to make a career in Capital Markets -Core Equity. Seeing my Passion & Knowledge, sir helped to secure an equity research role for me even when I didn't have an active degree, but had a good amount of interest in Finance. Thanks and forever grateful for CareerForge.",
    image: "/Siddarth.jpg",
  },
  {
    name: "Manikandan M",
    role: "Associate Analyst - Finalyst Research LLP",
    quote:
     "Thanks to CareerForge, I'm now working in my dream role. Their student-oriented approach, combined with excellent interview preparation and training, made all the difference. CareerForge truly understands what students seek in a job and provides tailored mentorship throughout the process. A special thanks to Subramanian Sir for his unwavering support from the very beginning.",
    image: "/Manikandan.jpg",
  },
  {
    name: "Monisha Shri",
    role: "Virtual Relationship Manager(Asst. Mgr) - ICICI Prudential Asset Management.",
    quote:
     "Working with Career Forge was an absolute game-changer for my job search. Subramaniam sir's guidance helped me not only refine my resume but also boosted my confidence in interviews. He personally took the time to understand my career goals and provided personalized strategies that truly resonated with me. With his support, I was able to land a opportunity that aligns perfectly with my skills and ambitions. I highly recommend their services to anyone looking to navigate and elevate their career journey.",
    image: "/Monisha.jpg",
  },
  {
    name: "Baalajee R K",
    role: "Placed at Barclays Bank as Analyst - Treasury PC",
    quote:
     "I am a qualified CA with 4 years of experience in IT and Real Estate. After discussing my interest in investment banking with Subramanian Sir, he encouraged me to pursue the CFA course, which I registered for. During my CFA journey, my passion for investment banking grew, and I sought Subramanian Sir's help again for placement in the sector. He identified my strengths, provided focused training, and helped me gain a solid understanding of technical concepts, which ultimately led to my successful placement at Barclays. I sincerely thank him for his time and efforts.",
    image: "/Baalajee.jpg",
  },
  {
    name: "Vengatesh A",
    role: "Barclays Bank Analyst - Internal Reporting",
    quote: "Everyone knows that securing a good job in today’s competitive environment is quite challenging. Even with all the necessary knowledge & skills, many still struggle to land the right opportunity. That’s exactly where Mr. Subramanian made a difference. He is truly a gem among the crowd, someone who pursues placement training out of passion. He not only helped secure a job but also ensured it was in a company that was specifically desired. The package offered was beyond expectations (13 LPA) — something that would have typically taken 3 to 5 years to achieve.",
    image: "/Vengatesh.jpg",
  },

]

export default function Testimonials() {
  return (
    <div className="min-h-screen"> 
      <div className="container mx-auto px-4 py-20 md:py-40">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Students Say</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 md:p-10 lg:grid-cols-2 gap-6  md:gap-10">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full"
              >
                <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}  
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-lg">{testimonial.name}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="text-lg mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}