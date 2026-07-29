'use client'

import { useLanguage } from '@/components/language-provider'
import { SectionHeading } from '@/components/section-heading'
import CountUp from '@/components/reactbits/CountUp'

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section
      id="about"
      className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-6 sm:py-32"
    >
      <SectionHeading label={t.about.label} title={t.about.title} />

      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          {t.about.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-pretty text-lg leading-relaxed text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 lg:grid-cols-1">
          {t.about.stats.map((stat) => {
            const target = parseInt(stat.value, 10)
            const suffix = stat.value.replace(/[0-9]/g, '')
            return (
              <div
                key={stat.label}
                className="rounded-lg border border-border bg-card p-5"
              >
                <div className="font-mono text-3xl font-semibold text-primary">
                  {Number.isNaN(target) ? (
                    stat.value
                  ) : (
                    <>
                      <CountUp to={target} duration={2} />
                      {suffix}
                    </>
                  )}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
