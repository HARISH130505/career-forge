import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen py-20">
      <div className="bg-white bg-opacity-90 shadow-lg py-12">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">About CareerForge</h1>
            <div className="flex items-center space-x-8">
              <div className="w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="mb-4">
                  At CareerForge, we are dedicated to shaping the future of students and professionals by providing personalized coaching and career placement services. Our mission is to empower individuals with the tools, knowledge, and guidance needed to navigate their career journeys with confidence. Whether you're a student taking your first steps into the professional world or a seasoned professional seeking a new opportunity, CareerForge is here to help you succeed. Through tailored coaching, skill-building workshops, and strategic career placements, we aim to unlock your full potential and ensure you're well-equipped for a thriving career. Join us at CareerForge, where your professional growth is our top priority.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p>
                  We envision a world where every individual has the opportunity to unlock their full potential and
                  build a rewarding career. Through innovative learning experiences and industry partnerships, we aim to
                  be the catalyst for professional growth and success.
                </p>
              </div>
              <div className="w-1/2">
                <Image
                  src="/placeholder.svg"
                  alt="CareerForge team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-3 gap-8">
              {[
                { name: "Jane Doe", role: "Founder & CEO", image: "/placeholder.svg" },
                { name: "John Smith", role: "CTO", image: "/placeholder.svg" },
                { name: "Emily Brown", role: "Head of Education", image: "/placeholder.svg" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                  <p className="text-center text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}