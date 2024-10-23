import { motion } from 'framer-motion';
import { Building2, Calendar, ExternalLink } from 'lucide-react';

const experiences = [
  {
    company: "Tech Giant Corp",
    position: "Senior Software Engineer",
    period: "2022 - Present",
    description: "Led development of cloud-native applications serving millions of users. Implemented microservices architecture reducing system latency by 40%.",
    technologies: ["React", "Node.js", "AWS", "Kubernetes"],
    logo: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?auto=format&fit=crop&q=80&w=100&h=100",
    website: "https://techgiantcorp.com"
  },
  {
    company: "Innovation Labs",
    position: "Full Stack Developer",
    period: "2020 - 2022",
    description: "Architected and built scalable e-commerce platforms. Mentored junior developers and implemented CI/CD pipelines.",
    technologies: ["Vue.js", "Python", "Docker", "PostgreSQL"],
    logo: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=100&h=100",
    website: "https://innovationlabs.com"
  },
  {
    company: "Digital Solutions Inc",
    position: "Software Developer",
    period: "2018 - 2020",
    description: "Developed and maintained multiple client-facing web applications. Reduced load times by 60% through optimization.",
    technologies: ["Angular", "Java", "Spring Boot", "MongoDB"],
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=100&h=100",
    website: "https://digitalsolutions.com"
  },
  {
    company: "StartUp Ventures",
    position: "Frontend Developer",
    period: "2017 - 2018",
    description: "Built responsive web applications from scratch. Implemented modern UI/UX practices increasing user engagement by 45%.",
    technologies: ["React", "Redux", "SASS", "Firebase"],
    logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=100&h=100",
    website: "https://startupventures.com"
  },
  {
    company: "Tech Solutions Ltd",
    position: "Junior Developer",
    period: "2016 - 2017",
    description: "Developed and maintained company website and internal tools. Collaborated with design team on UI improvements.",
    technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap"],
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=100&h=100",
    website: "https://techsolutions.com"
  }
];

export const Experience = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Over 7 years of experience in building exceptional digital experiences
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8"
            >
              <div className="md:flex items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex-shrink-0">
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative group"
                  >
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-16 h-16 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-6 h-6 text-white" />
                    </div>
                  </a>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <div className="flex items-center space-x-4">
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        <Building2 className="w-4 h-4 mr-1" />
                        <span>{exp.company}</span>
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};