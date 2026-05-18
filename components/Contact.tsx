'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

// ─── Setup ────────────────────────────────────────────────────────────────────
// 1. Go to https://formspree.io → New Form → copy your form ID
// 2. Replace the placeholder below with your actual ID, e.g. "xpzgkrby"
const FORMSPREE_ID = 'YOUR_FORM_ID';
const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;
// ─────────────────────────────────────────────────────────────────────────────

type Status = 'idle' | 'loading' | 'success' | 'error';

const contactItems = [
  {
    label: 'Email',
    value: 'shedubayode@gmail.com',
    href:  'mailto:shedubayode@gmail.com',
    icon:  <EnvelopeIcon className="size-4" />,
  },
  {
    label: 'Location',
    value: 'Lagos, Nigeria',
    href:  null,
    icon:  <MapPinIcon className="size-4" />,
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    url:  'https://github.com/ZILLABB',
    icon: (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    url:  'https://www.linkedin.com/in/bayodele-shedu/',
    icon: (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Contact() {
  const [status, setStatus]   = useState<Status>('idle');
  const [errorMsg, setError]  = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Guard: remind dev to set a real form ID
    if (FORMSPREE_ID === 'YOUR_FORM_ID') {
      setError('Form not configured yet. Set FORMSPREE_ID in components/Contact.tsx.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setError('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  'POST',
        body:    data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setError(
          (json as { error?: string }).error ||
          'Something went wrong. Please email me directly at shedubayode@gmail.com.'
        );
        setStatus('error');
      }
    } catch {
      setError('Network error. Please email me directly at shedubayode@gmail.com.');
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="section-label mb-3">Contact</p>
          <h2 className="section-heading mb-4">Let&apos;s work together</h2>
          <p className="max-w-xl text-base text-muted-foreground">
            Available for full-time roles, contract work, and technical
            co-founder conversations. If you have a specific project or problem
            in mind, tell me about it — I reply to everything.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left — contact info */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8"
          >
            <div className="space-y-4">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 text-primary">{item.icon}</div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-0.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                Find me online
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex size-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Trust note */}
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm text-muted-foreground">
                I typically respond within 24 hours. If you have an urgent
                project, mention that in your message and I&apos;ll prioritise it.
              </p>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                /* ── Success state ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full min-h-[360px] flex-col items-center justify-center gap-4 border border-border p-10 text-center"
                >
                  <CheckCircleIcon className="size-10 text-emerald-500" />
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Message sent!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary mt-2 px-4 py-2 text-xs"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                /* ── Form ── */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs text-muted-foreground">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={status === 'loading'}
                        placeholder="Your name"
                        className="input disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs text-muted-foreground">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={status === 'loading'}
                        placeholder="you@company.com"
                        className="input disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-1.5 block text-xs text-muted-foreground">
                      What&apos;s this about?
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      disabled={status === 'loading'}
                      placeholder="Full-time role / Contract / Collaboration / Other"
                      className="input disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-xs text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      disabled={status === 'loading'}
                      placeholder="Tell me about the project, the problem, or the role. The more context the better."
                      className="input resize-none disabled:opacity-50"
                    />
                  </div>

                  {/* Error banner */}
                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-start gap-2 border border-red-500/30 bg-red-500/5 p-3 text-xs text-red-400"
                      >
                        <ExclamationCircleIcon className="mt-0.5 size-4 flex-shrink-0" />
                        {errorMsg}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full disabled:opacity-60"
                    whileHover={{ opacity: 0.92 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      'Send message'
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
