import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Guilherme Barbiero dos Santos — Engenheiro de Software',
  description:
    'Portfólio de Guilherme Barbiero dos Santos, engenheiro de software. Projetos, habilidades e experiência em desenvolvimento web moderno.',
  generator: 'v0.app',
  keywords: [
    'engenheiro de software',
    'software',
    'portfólio',
    'React',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: 'Guilherme Barbiero dos Santos' }],
  openGraph: {
    title: 'Guilherme Barbiero dos Santos — Engenheiro de Software',
    description:
      'Portfólio de Guilherme Barbiero dos Santos, engenheiro de software.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt"
      className={`dark bg-background ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
