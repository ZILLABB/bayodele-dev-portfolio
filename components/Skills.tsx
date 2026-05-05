'use client';

import { motion } from 'framer-motion';
// import AIToolsVisualization from './three/AIToolsVisualization';

const skillCategories = [
	{
		category: 'Languages',
		items: [
			{ name: 'TypeScript', level: 95, icon: '🔷' },
			{ name: 'Python', level: 90, icon: '🐍' },
			{ name: 'JavaScript', level: 95, icon: '💛' },
			{ name: 'Solidity', level: 80, icon: '⛓️' },
		],
	},
	{
		category: 'Frontend',
		items: [
			{ name: 'React', level: 95, icon: '⚛️' },
			{ name: 'Next.js', level: 90, icon: '⏭️' },
			{ name: 'Tailwind CSS', level: 90, icon: '🎨' },
			{ name: 'Framer Motion', level: 80, icon: '🎬' },
		],
	},
	{
		category: 'Backend & APIs',
		items: [
			{ name: 'Node.js', level: 90, icon: '🟢' },
			{ name: 'Express', level: 90, icon: '🚀' },
			{ name: 'FastAPI', level: 80, icon: '🐍' },
			{ name: 'Prisma', level: 85, icon: '🔌' },
			{ name: 'REST & GraphQL', level: 90, icon: '🌐' },
		],
	},
	{
		category: 'Blockchain & Web3',
		items: [
			{ name: 'Smart Contracts', level: 80, icon: '📜' },
			{ name: 'Hardhat', level: 80, icon: '⚒️' },
			{ name: 'Ethereum/BSC/Polygon', level: 75, icon: '🔗' },
			{ name: 'DeFi Protocols', level: 75, icon: '💰' },
		],
	},
	{
		category: 'AI & Machine Learning',
		items: [
			{ name: 'OpenAI API', level: 85, icon: '🧠' },
			{ name: 'NLP & Sentiment Analysis', level: 80, icon: '💬' },
			{ name: 'ML Model Integration', level: 75, icon: '📊' },
			{ name: 'AI Dev Tools (Cursor, etc.)', level: 90, icon: '🤖' },
		],
	},
	{
		category: 'DevOps & Infrastructure',
		items: [
			{ name: 'Docker', level: 85, icon: '🐳' },
			{ name: 'Vercel / Netlify', level: 90, icon: '▲' },
			{ name: 'GitHub Actions', level: 85, icon: '⚙️' },
			{ name: 'PostgreSQL / Redis', level: 80, icon: '🔴' },
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
							Technical Skills
						</h2>
						<div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-primary to-secondary" />
						<p className="mx-auto max-w-3xl text-xl text-text-secondary-light dark:text-text-secondary-dark">
							The technologies I work with daily to build, ship, and scale applications.
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


				<motion.div          className="mt-16 rounded-2xl bg-gradient-to-r from-muted to-accent/20 p-8 text-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<h3 className="mb-4 text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
						Open to Opportunities
					</h3>
					<p className="mx-auto mb-6 max-w-3xl text-text-secondary-light dark:text-text-secondary-dark">
						I&apos;m available for full-time roles, contract work, and technical co-founder opportunities.
						Currently deepening my expertise in cloud architecture, Web3 protocols, and production ML systems.
					</p>
					<a href="#contact" className="btn-primary">
						Let&apos;s Talk
					</a>
				</motion.div>
			</div>
		</section>
	);
}
