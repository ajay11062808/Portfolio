export default function Skills() {
    const skills = [
      "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", 
      "MongoDB", "PostgreSQL", "GraphQL", "REST APIs", "HTML", "CSS", "Tailwind CSS"
    ]
  
    return (
      <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  