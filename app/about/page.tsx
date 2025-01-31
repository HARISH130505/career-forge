import Image from "next/image"

export default function About() {
  return (
    <main className="min-h-screen">
      <div className="bg-white bg-opacity-80 shadow-lg py-14 px-6">
        <section>
          <div className="container max-w-6xl mx-auto px-10 sm:px-4 md:px-10">
            <h1 className="text-4xl font-bold mb-8 text-center">About CareerForge</h1>
            <div className="flex flex-col-reverse md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl font-semibold my-4">Our Mission</h2>
                <p className="mb-4 text-lg">
                  At CareerForge, we are dedicated to shaping the future of students and professionals by providing 
                  personalized coaching and career placement services. Our mission is to empower individuals with the 
                  tools, knowledge, and guidance needed to navigate their career journeys with confidence.
                  Whether you're a student taking your first steps into the professional world or a seasoned professional 
                  seeking a new opportunity, CareerForge is here to help you succeed. Through tailored coaching, 
                  skill-building workshops, and strategic career placements, we aim to unlock your full potential and 
                  ensure you're well-equipped for a thriving career.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-lg">
                  We envision a world where every individual has the opportunity to unlock their full potential and
                  build a rewarding career. Through innovative learning experiences and industry partnerships, we aim to
                  be the catalyst for professional growth and success.
                </p>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src="/cl3.jpg"
                  alt="CareerForge team working together"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
