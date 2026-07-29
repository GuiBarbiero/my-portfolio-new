'use client'

import { useLanguage } from '@/components/language-provider'

export function SiteFooter() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">{'>'}</span> {t.footer.built}
        </p>
        <p className="text-xs text-muted-foreground">
          © {year} Guilherme Barbiero dos Santos. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
