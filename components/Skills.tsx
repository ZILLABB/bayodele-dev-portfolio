import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Vibe Stack',
    items: [
      { name: 'AI-Powered IDEs', level: 98, icon: '🤖' },
      { name: 'Cursor AI', level: 95, icon: '⌨️' },
      { name: 'GitHub Copilot', level: 94, icon: '👨‍💻' },
      { name: 'Augment Code', level: 92, icon: '✨' },
      { name: 'Windsurf', level: 90, icon: '🏄' },
    ],
  },
  {
    category: 'Languages',
    items: [
      { name: 'TypeScript', level: 95, icon: 'TS' },
      { name: 'JavaScript', level: 94, icon: 'JS' },
      { name: 'Python', level: 90, icon: '🐍' },
      { name: 'SQL', level: 88, icon: '🗃️' },
      { name: 'Bash/Shell', level: 85, icon: '💻' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 96, icon: '⚛️' },
      { name: 'Next.js', level: 94, icon: '⏭️' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨' },
      { name: 'Three.js', level: 82, icon: '📊' },
      { name: 'Framer Motion', level: 88, icon: '🎬' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 93, icon: '🟢' },
      { name: 'Express', level: 90, icon: '🚀' },
      { name: 'FastAPI', level: 85, icon: '🐍' },
      { name: 'Prisma', level: 88, icon: '🔌' },
      { name: 'REST/GraphQL', level: 91, icon: '🌐' },
    ],
  },
  {
    category: 'AI/ML',
    items: [
      { name: 'OpenAI API', level: 92, icon: '🧠' },
      { name: 'LangChain', level: 88, icon: '⛓️' },
      { name: 'Vector DBs', level: 85, icon: '🗄️' },
      { name: 'NLP', level: 87, icon: '💬' },
      { name: 'LLM Tooling', level: 89, icon: '🤖' },
    ],
  },
  {
    category: 'Infrastructure',
    items: [
      { name: 'Docker', level: 90, icon: '🐳' },
      { name: 'Railway', level: 88, icon: '🛤️' },
      { name: 'Vercel', level: 94, icon: '▲' },
      { name: 'Supabase', level: 85, icon: '🔌' },
      { name: 'Redis', level: 83, icon: '🔴' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-bg-light dark:bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
              Tools & Tech That Power My Flow
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
            <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto">
              A curated selection of technologies I use to build exceptional digital experiences.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-bg-light-hover dark:bg-bg-dark-hover rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-6 pb-2 border-b border-border-light dark:border-border-dark">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark flex items-center">
                        <span className="inline-block w-6 text-left mr-1">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-xs font-medium text-text-tertiary-light dark:text-text-tertiary-dark">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-bg-light-accent dark:bg-bg-dark-accent rounded-full h-2">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + categoryIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-r from-bg-light-accent to-bg-light-hover dark:from-bg-dark-accent dark:to-bg-dark-hover rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            Always Learning, Always Growing
          </h3>
          <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-3xl mx-auto mb-6">
            I'm constantly exploring new technologies and frameworks to stay at the cutting edge of web development and AI.
            Currently diving deeper into cloud architecture and advanced machine learning techniques.
          </p>
          <a
            href="#contact"
            className="btn btn-primary"
          >
            Let's Build Something Amazing
          </a>
        </motion.div>
      </div>
    </section>
  );
}
