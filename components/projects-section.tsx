'use client'

import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'

export function ProjectsSection() {
  const { t } = useLanguage()

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
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
