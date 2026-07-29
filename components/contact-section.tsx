'use client'

import { ArrowUpRight, Mail } from 'lucide-react'
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from '@/components/brand-icons'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'

const EMAIL = 'emaildogbs@gmail.com'

export function ContactSection() {
  const { t } = useLanguage()

  const socials = [
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      handle: '/guilherme-barbiero-dos-santos',
      href: 'https://www.linkedin.com/in/guilherme-barbiero-dos-santos/?skipRedirect=true',
    },
    {
      icon: InstagramIcon,
      label: 'Instagram',
      handle: '@GuiBarbiero',
      href: 'https://instagram.com/GuiBarbiero',
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      handle: '@GuiBarbiero',
      href: 'https://github.com/GuiBarbiero',
    },
  ]

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-6 sm:py-32"
    >
      <SectionHeading
        label={t.contact.label}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t.contact.emailLabel}
            </span>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 block text-2xl font-semibold tracking-tight text-foreground transition-colors hover:text-primary sm:text-3xl"
            >
              {EMAIL}
            </a>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="group mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" />
            {t.contact.cta}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="rounded-xl border border-border bg-card p-8">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {t.contact.socialsLabel}
          </span>
          <ul className="mt-4 divide-y divide-border">
            {socials.map(({ icon: Icon, label, handle, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group flex items-center justify-between py-4 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      {label}
                    </span>
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    {handle}
                    <ArrowUpRight className="size-4" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
