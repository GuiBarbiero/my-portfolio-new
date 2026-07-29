'use client'

import { useState } from 'react'
import { ArrowUpRight, Mail, X } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import SpotlightCard from '@/components/reactbits/SpotlightCard'

const EMAIL = 'emaildogbs@gmail.com'

export function ProjectsSection() {
  const { t } = useLanguage()
  const [activeNotice, setActiveNotice] = useState<string | null>(null)

  return (
    <section
      id="projects"
      className="scroll-mt-16 border-y border-border bg-card/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label={t.projects.label}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {t.projects.items.map((project) => (
            <SpotlightCard
              key={project.title}
              spotlightColor="rgba(74, 222, 128, 0.15)"
              className="group flex flex-col rounded-xl border-border bg-card p-0 transition-colors hover:border-primary/40"
            >
              <div
                role="button"
                tabIndex={0}
                aria-label={t.projects.photoNotice}
                onClick={() =>
                  setActiveNotice((cur) =>
                    cur === project.title ? null : project.title,
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveNotice((cur) =>
                      cur === project.title ? null : project.title,
                    )
                  }
                }}
                className="relative aspect-[16/10] cursor-pointer overflow-hidden border-b border-border"
              >
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {activeNotice === project.title && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-background/92 p-6 text-center backdrop-blur-sm">
                    <button
                      type="button"
                      aria-label="Fechar"
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveNotice(null)
                      }}
                      className="absolute right-2 top-2 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <X className="size-4" />
                    </button>
                    <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
                      {t.projects.photoNotice}
                    </p>
                    <a
                      href={`mailto:${EMAIL}`}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      <Mail className="size-4" />
                      {t.projects.photoNoticeCta}
                    </a>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {t.projects.live}
                    <ArrowUpRight className="size-4" />
                  </a>
                  <a
                    href={project.repoUrl}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <GithubIcon className="size-4" />
                    {t.projects.code}
                  </a>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  )
}
