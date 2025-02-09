"use client"

import { motion } from "framer-motion"

const ExperienceItem = ({
  experience,
  index,
}: { experience: { company: string; position: string; period: string; description: string }; index: number }) => (
  <motion.div
    className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{experience.position}</h3>
    <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">{experience.company}</h4>
    <p className="text-gray-500 dark:text-gray-400 mb-4">{experience.period}</p>
    <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
  </motion.div>
)

export default function Experience() {
  const experiences = [
    {
      company: "TechInnovate Solutions",
      position: "Senior Full Stack Developer",
      period: "Jan 2020 - Present",
      description:
        "Lead developer for multiple high-traffic web applications. Implemented microservices architecture, reducing server load by 40%. Mentored junior developers and introduced best practices in code reviews.",
    },
    {
      company: "DataDriven Corp",
      position: "Full Stack Developer",
      period: "Jun 2018 - Dec 2019",
      description:
        "Developed and maintained data visualization dashboards using React and D3.js. Optimized database queries, improving application performance by 30%. Collaborated with UX team to enhance user interface designs.",
    },
    {
      company: "WebCraft Studios",
      position: "Junior Web Developer",
      period: "Jan 2017 - May 2018",
      description:
        "Assisted in the development of responsive websites for various clients. Gained proficiency in HTML5, CSS3, and JavaScript. Participated in daily stand-ups and sprint planning meetings.",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

