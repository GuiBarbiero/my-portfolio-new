'use client'

import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section
      id="experience"
      className="scroll-mt-16 border-t border-border bg-card/30 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label={t.experience.label}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <ol className="mt-12 border-l border-border">
          {t.experience.items.map((item) => (
            <li
              key={`${item.company}-${item.period}`}
              className="relative pb-10 pl-8 last:pb-0"
            >
              <span className="absolute -left-[6.5px] top-1.5 size-3 rounded-full border-2 border-primary bg-background" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold tracking-tight">
                  {item.role}
                  <span className="text-primary"> @ {item.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
              </div>
              <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
