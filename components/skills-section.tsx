'use client'

import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import SpotlightCard from '@/components/reactbits/SpotlightCard'

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

      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {t.skills.groups.map((group) => (
          <SpotlightCard
            key={group.category}
            spotlightColor="rgba(74, 222, 128, 0.12)"
            className="w-full rounded-xl border-border bg-card p-6 sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
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
          </SpotlightCard>
        ))}
      </div>
    </section>
  )
}
