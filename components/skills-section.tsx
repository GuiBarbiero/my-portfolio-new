'use client'

import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-6 sm:py-32"
    >
      <SectionHeading
        label={t.skills.label}
        title={t.skills.title}
        subtitle={t.skills.subtitle}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.skills.groups.map((group) => (
          <div
            key={group.category}
            className="rounded-xl border border-border bg-card p-6"
          >
            <h3 className="font-mono text-sm uppercase tracking-widest text-primary">
              {group.category}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <span className="size-1.5 rounded-full bg-primary/70" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
