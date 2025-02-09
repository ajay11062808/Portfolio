import { FaJs, FaReact, FaNode, FaHtml5, FaCss3Alt, FaPython, FaJava, FaAws, FaMicrosoft, FaGit, FaGithub, FaJenkins } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiGraphql, SiTailwindcss,SiApachekafka, SiRedis, SiDocker, SiKubernetes } from 'react-icons/si';

export default function Skills() {
  const skills = [
    {name:"Java", icon: <FaJava />},
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNode /> },
    { name: "Express", icon: <FaNode /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "GraphQL", icon: <SiGraphql /> },
    { name: "DevOps"},
    { name: "CI/CD"},
    { name:"Docker", icon: <SiDocker />},
    { name:"Kubernetes", icon: <SiKubernetes />},
    { name:"AWS", icon: <FaAws />},
    { name:"Azure", icon: <FaMicrosoft />},
    { name:"Git", icon: <FaGit />},
    { name:"GitHub", icon: <FaGithub />},
    { name:"Jenkins", icon: <FaJenkins />},
    { name:"Redis", icon: <SiRedis />},
    { name:"Kafka", icon: <SiApachekafka />},
    { name: "REST APIs", icon: <FaJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
              <span className="mr-2">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}