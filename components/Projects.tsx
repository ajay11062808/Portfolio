import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, Node.js, and MongoDB. Features include user authentication, product management, and secure payment integration.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A React-based task management application with a Node.js backend. Implements drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "A responsive dashboard for social media analytics, built with React and D3.js. Integrates with various social media APIs to provide real-time data visualization.",
      image: "/placeholder.svg?height=200&width=300",
      link: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white fade-in">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Image src={project.image} alt={project.title} width={300} height={200} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-semibold">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
