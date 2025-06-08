import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, PhoneIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

const contactMethods = [
	{
		title: 'Email',
		value: 'shedubayode@gmail.com',
		icon: <EnvelopeIcon className="size-6 text-primary" />,
		href: 'mailto:shedubayode@gmail.com',
	},
	{
		title: 'Location',
		value: 'Lagos, Nigeria',
		icon: <MapPinIcon className="size-6 text-primary" />,
		href: '#',
	},
	{
		title: 'Phone',
		value: '+234 806 8383 9018',
		icon: <PhoneIcon className="size-6 text-primary" />,
		href: 'tel:+2348068383901',
	},
];

const socialLinks = [
	{ name: 'GitHub', icon: 'github', url: 'https://github.com/ZILLABB' },
	{ name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/bayodele-shedu/' }
];

export default function Contact() {
	return (
		<section id="contact" className="bg-background py-20">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center"
				>
					<h2 className="text-4xl font-bold text-foreground">
						Get In Touch
					</h2>
					<div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-secondary" />
					<p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/80">
						Having a project in mind or want to discuss potential opportunities? Feel free to reach out!
					</p>
				</motion.div>

				<div className="grid gap-12 lg:grid-cols-2">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-8"
					>
						<div>
							<h3 className="mb-6 text-2xl font-semibold text-foreground">
								Let&apos;s work together
							</h3>
							<p className="mb-8 text-foreground/80">
								I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to get in touch with me using the contact information or the form.
							</p>
						</div>

						<div className="space-y-6">
							{contactMethods.map((method, index) => (
								<motion.a
									key={index}
									href={method.href}
									target={method.href.startsWith('http') ? '_blank' : undefined}
									rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
									className="group flex items-center rounded-xl bg-card p-4 transition-all duration-300 hover:shadow-md"
									whileHover={{ x: 5 }}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: index * 0.1 }}
								>
									<div className="rounded-lg bg-primary/10 p-2 text-primary">
										{method.icon}
									</div>
									<div className="ml-4">
										<p className="text-sm font-medium text-muted-foreground">{method.title}</p>
										<p className="font-medium text-foreground">{method.value}</p>
									</div>
									<ArrowUpRightIcon className="ml-auto size-5 text-muted-foreground transition-colors group-hover:text-primary" />
								</motion.a>
							))}
						</div>

						<div className="flex space-x-4">
							{socialLinks.map((social, index) => (
								<motion.a
									key={index}
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									className="glassmorphism group rounded-full p-2 text-muted-foreground transition-colors hover:text-primary"
									whileHover={{ y: -3 }}
									whileTap={{ scale: 0.95 }}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
								>
									<span className="sr-only">{social.name}</span>
									<svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
										{social.icon === 'github' && (
											<path
												fillRule="evenodd"
												d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
												clipRule="evenodd"
											/>
										)}
										{social.icon === 'linkedin' && (
											<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
										)}
										{social.icon === 'twitter' && (
											<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
										)}
									</svg>
								</motion.a>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}            className="rounded-xl border border-muted bg-card p-8 shadow-sm"
					>
						<form className="space-y-4">
							<div className="grid gap-4 sm:grid-cols-2">
								<div>
									<label htmlFor="name" className="mb-1 block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										required
										className="input w-full"
										placeholder="Your name"
									/>
								</div>
								<div>
									<label htmlFor="email" className="mb-1 block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										required
										className="input w-full"
										placeholder="you@example.com"
									/>
								</div>
							</div>
							<div>
								<label htmlFor="subject" className="mb-1 block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									required
									className="input w-full"
									placeholder="How can I help you?"
								/>
							</div>
							<div>
								<label htmlFor="message" className="mb-1 block text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={5}
									required
									className="input w-full resize-none"
									placeholder="Tell me about your project..."
								/>
							</div>
							<motion.button
								type="submit"
								className="btn-primary w-full"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Send Message
								<svg
									className="ml-2 size-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" />
								</svg>
							</motion.button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
