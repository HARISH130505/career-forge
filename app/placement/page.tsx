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
]

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gray-100"> 
      <div className="container mx-auto px-4 py-20 md:py-40">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Students Say</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 md:p-10 lg:grid-cols-2 gap-6  md:gap-10"> {/* Improved grid responsiveness */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full"
              >
                <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col"> {/* Added shadow and flex for better card appearance */}
                  <div className="flex items-center space-x-4 mb-4"> {/* Aligned image and text vertically */}
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={80}  
                      height={80} /* Adjusted image size */
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-lg">{testimonial.name}</p> {/* Increased font size */}
                      <p className="text-gray-600 text-sm">{testimonial.role}</p> {/* Decreased font size for role */}
                    </div>
                  </div>
                  <div className="flex-grow"> {/* Makes quote take up available space */}
                    <p className="text-lg mb-4 italic leading-relaxed">"{testimonial.quote}"</p> {/* Improved readability */}
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