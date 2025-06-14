'use client';

import { motion } from 'framer-motion';
// import AIToolsVisualization from './three/AIToolsVisualization';

const skillCategories = [
	{
		category: 'AI Development Tools',
		items: [
			{ name: 'Cursor', level: 98, icon: '🤖' },
			{ name: 'Augment', level: 95, icon: '🚀' },
			{ name: 'Windsurf', level: 92, icon: '🌊' },
			{ name: 'AI Prompting', level: 99, icon: '💬' },
		],
	},
	{
		category: 'Core Languages',
		items: [
			{ name: 'TypeScript', level: 95, icon: '🔷' },
			{ name: 'Python', level: 92, icon: '🐍' },
			{ name: 'Solidity', level: 88, icon: '⛓️' },
			{ name: 'JavaScript', level: 90, icon: '💛' },
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
		category: 'AI/ML & Blockchain',
		items: [
			{ name: 'Smart Contracts', level: 90, icon: '📜' },
			{ name: 'OpenAI API', level: 92, icon: '🧠' },
			{ name: 'Hardhat', level: 88, icon: '⚒️' },
			{ name: 'NLP', level: 87, icon: '💬' },
			{ name: 'Multi-chain', level: 85, icon: '🔗' },
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
		<section id="skills" className="bg-bg-light py-20 dark:bg-bg-dark">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center"
				>
					<div className="mb-12 text-center">
						<h2 className="mb-4 text-4xl font-bold text-text-primary-light dark:text-text-primary-dark">
							Tools & Tech That Power My Flow
						</h2>
						<div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-primary to-secondary" />
						<p className="mx-auto max-w-3xl text-xl text-text-secondary-light dark:text-text-secondary-dark">
							A curated selection of technologies I use to build exceptional digital
							experiences.
						</p>
					</div>
				</motion.div>        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="rounded-2xl p-6 transition-shadow duration-300 hover:shadow-xl glassmorphism"
            >
              <h3 className="mb-6 text-xl font-semibold text-foreground">
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.items.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center text-base font-medium text-foreground/80">
                        <span className="mr-3 inline-block w-6 text-center">
                          {skill.icon}
                        </span>
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-foreground/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Tools Visualization - Coming Soon */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              AI Development Tools Mastery
            </h3>
            <p className="text-foreground/80 max-w-2xl mx-auto mb-6">
              Leveraging cutting-edge AI tools for rapid, production-ready development
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Cursor (98%)', 'Augment (95%)', 'Windsurf (92%)', 'AI Prompting (99%)'].map((tool, index) => (
                <span key={index} className="px-4 py-2 bg-primary/20 rounded-full text-primary font-medium">
                  🤖 {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

				<motion.div          className="mt-16 rounded-2xl bg-gradient-to-r from-muted to-accent/20 p-8 text-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<h3 className="mb-4 text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
						Always Learning, Always Growing
					</h3>
					<p className="mx-auto mb-6 max-w-3xl text-text-secondary-light dark:text-text-secondary-dark">
						I&apos;m constantly exploring new technologies and frameworks to stay at
						the cutting edge of web development and AI. Currently diving deeper into
						cloud architecture and advanced machine learning techniques.
					</p>
					<a href="#contact" className="btn-primary">
						Let&apos;s Build Something Amazing
					</a>
				</motion.div>
			</div>
		</section>
	);
}
