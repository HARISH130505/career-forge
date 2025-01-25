import { Calendar } from "lucide-react"

const events = [
  { title: "Introduction to Web Development", date: "June 15, 2023", time: "2:00 PM - 4:00 PM EST", type: "Webinar" },
  { title: "Data Science Workshop", date: "June 22, 2023", time: "10:00 AM - 12:00 PM EST", type: "Workshop" },
  { title: "Digital Marketing Trends 2023", date: "July 5, 2023", time: "1:00 PM - 3:00 PM EST", type: "Webinar" },
  {
    title: "Career Fair: Tech Industry",
    date: "July 15, 2023",
    time: "9:00 AM - 5:00 PM EST",
    type: "In-person Event",
  },
]

export default function Events() {
  return (
    <main className="min-h-screen py-20">
      <div className="bg-white bg-opacity-90 shadow-lg py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">Events and Webinars</h1>

          <div className="space-y-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-in-bottom"
                style={{ animationDelay:`${index * 0.1}s` }}>
                <div className="flex items-start">
                  <Calendar className="text-secondary mr-4 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                    <p className="text-gray-600 mb-1">
                      {event.date} | {event.time}
                    </p>
                    <p className="text-gray-600 mb-4">{event.type}</p>
                    <button className="bg-primary text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}