import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen">
      <div className="shadow-lg py-14 px-6">
        <section>
          <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
            <h1 className="text-4xl font-bold mb-8 text-center">About CareerForge</h1>
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
              <div>
                <div className="flex flex-col-reverse md:flex-row items-center md:px-6">
                  <div className="md:w-1/2 my-6">
                    <p className="mb-4 text-lg">
                      Welcome to Career Forge, your trusted partner in shaping a successful career and building a
                      brighter professional future. Officially founded in 2025, Career Forge is a premier training and
                      career placement venture based in Koyambedu, Chennai. As a GST-registered sole proprietorship
                      (GST number: 33BOSPP4396B1ZM), we provide personalized training programs and placement services
                      meticulously designed to meet the ever-evolving demands of today's competitive job market. Whether
                      you're seeking to enhance your skills, switch careers, or land your dream job, Career Forge is here
                      to help you forge a path to success.
                      <br />
                      At Career Forge, we understand that every individual has unique potential. Our expert team of
                      trainers and career consultants work closely with students to craft tailored training solutions,
                      providing both foundational knowledge and advanced industry skills. We bridge the gap between
                      talent and opportunity by providing strategic career placement services. Through our vast network
                      of industry connections, we help job seekers connect with top employers and seize meaningful
                      opportunities. At Career Forge, your career growth is our mission. We're dedicated to empowering
                      professionals with the tools, knowledge, and opportunities they need to thrive. Let us help you
                      forge your future!
                    </p>
                  </div>
                  <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
                    <Image
                      src="/cl3.jpg"
                      alt="CareerForge team working together"
                      width={600}
                      height={600}
                      className="rounded-lg shadow-md object-contain"
                    />
                  </div>
                </div>

                <h2 className="text-2xl text-center font-semibold mt-8">Our Mission</h2>
                <p className="my-4 text-lg md:px-6">
                  At Career Forge, our mission is to empower individuals with the specialized knowledge and skills
                  needed to succeed in the financial markets and investment industries. Through our expert-led coaching
                  in the Financial Markets Operations Specialist (FMOS) and US Chartered Financial Analyst (CFA)
                  programs, we aim to provide students with a strong foundation in both technical domain expertise and
                  effective communication. Our commitment is to equip each student with the tools they need to thrive,
                  offering personalized training that bridges the gap between education and career success.
                </p>

                <h2 className="text-2xl text-center font-semibold mt-6">Our Vision</h2>
                <p className="my-4 text-lg md:px-6">
                  Our vision is to be a leading catalyst for transforming aspiring professionals into proficient
                  financial market experts and highly sought-after industry leaders. We aspire to create a world where
                  individuals are not only highly skilled but also confident in their ability to navigate the
                  ever-evolving financial landscape, contributing meaningfully to their organizations and communities.
                  At Career Forge, we strive to cultivate a culture of excellence, innovation, and lifelong learning,
                  empowering the next generation of finance professionals to make an impact globally.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}