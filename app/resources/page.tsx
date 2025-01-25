import Link from "next/link"
import { BookOpen, FileText, LinkIcon } from "lucide-react"

const blogPosts = [
  { title: "Top 10 Programming Languages to Learn in 2023", date: "May 15, 2023" },
  { title: "How to Ace Your Technical Interview", date: "April 28, 2023" },
  { title: "The Future of AI in Web Development", date: "April 10, 2023" },
]

const downloadables = [
  { title: "Web Development Cheat Sheet", type: "PDF" },
  { title: "Data Science Toolkit Guide", type: "PDF" },
  { title: "Digital Marketing Strategy Template", type: "DOCX" },
]

const externalResources = [
  { title: "MDN Web Docs", url: "https://developer.mozilla.org" },
  { title: "Kaggle", url: "https://www.kaggle.com" },
  { title: "Google Digital Garage", url: "https://learndigital.withgoogle.com" },
]

export default function Resources() {
  return (
    <main className="min-h-screen py-20">
      <div className="bg-white bg-opacity-90 shadow-lg py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">Resources</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <BookOpen className="mr-2" /> Blog Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600">{post.date}</p>
                  <Link
                    href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-secondary hover:underline mt-2 inline-block"
                  >
                    Read More
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <FileText className="mr-2" /> Downloadable Materials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {downloadables.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-2">{item.type}</p>
                  <button className="bg-secondary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <LinkIcon className="mr-2" /> External Resources
            </h2>
            <ul className="space-y-4">
              {externalResources.map((resource, index) => (
                <li key={index}>
                  <Link
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    {resource.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}