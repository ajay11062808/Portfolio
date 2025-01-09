export default function Experience() {
    const experiences = [
      {
        company: "TechInnovate Solutions",
        position: "Senior Full Stack Developer",
        period: "Jan 2020 - Present",
        description: "Lead developer for multiple high-traffic web applications. Implemented microservices architecture, reducing server load by 40%. Mentored junior developers and introduced best practices in code reviews."
      },
      {
        company: "DataDriven Corp",
        position: "Full Stack Developer",
        period: "Jun 2018 - Dec 2019",
        description: "Developed and maintained data visualization dashboards using React and D3.js. Optimized database queries, improving application performance by 30%. Collaborated with UX team to enhance user interface designs."
      },
      {
        company: "WebCraft Studios",
        position: "Junior Web Developer",
        period: "Jan 2017 - May 2018",
        description: "Assisted in the development of responsive websites for various clients. Gained proficiency in HTML5, CSS3, and JavaScript. Participated in daily stand-ups and sprint planning meetings."
      }
    ];
  
    return (
      <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 
            className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white animate-fade-in"
          >
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow 
                transform opacity-0 translate-y-10 delay-${index * 100}`}
                style={{ animation: `fade-in-slide-up 0.5s ease-out forwards ${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{exp.position}</h3>
                <h4 className="text-lg text-blue-600 dark:text-blue-400 mb-2">{exp.company}</h4>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  