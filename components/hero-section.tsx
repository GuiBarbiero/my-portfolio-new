'use client'

import { ArrowRight, Code2, Mail } from 'lucide-react'
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from '@/components/brand-icons'
import { useLanguage } from '@/components/language-provider'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden pt-16"
    >
      {/* subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      {/* soft accent glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              {t.hero.availability}
            </span>
          </div>

          <p className="mb-4 font-mono text-sm text-primary">{t.hero.role}</p>

          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {t.hero.headlineLead}
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.hero.tagline}
          </p>

          <div className="mt-6 flex items-center gap-2 font-mono text-sm text-primary">
            <span className="text-muted-foreground">{'>'}</span>
            <span className="text-muted-foreground">_</span>
            <span>{t.hero.terminal}</span>
            <span className="inline-block h-4 w-2 animate-pulse bg-primary" />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.hero.ctaProjects}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              {t.hero.ctaContact}
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            {[
              {
                icon: LinkedinIcon,
                href: 'https://www.linkedin.com/in/guilherme-barbiero-dos-santos/?skipRedirect=true',
                label: 'LinkedIn',
              },
              {
                icon: InstagramIcon,
                href: 'https://instagram.com/GuiBarbiero',
                label: 'Instagram',
              },
              {
                icon: GithubIcon,
                href: 'https://github.com/GuiBarbiero',
                label: 'GitHub',
              },
              { icon: Mail, href: '#contact', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="size-5" />
              </a>
            ))}
            <span className="h-4 w-px bg-border" />
            <Code2 className="size-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
