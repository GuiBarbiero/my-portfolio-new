import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { ExperienceSection } from '@/components/experience-section'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import FadeContent from '@/components/reactbits/FadeContent'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { SkillsSection } from '@/components/skills-section'

const reveal = (children: React.ReactNode) => (
  <FadeContent blur duration={800} threshold={0.12} initialOpacity={0}>
    {children}
  </FadeContent>
)

export default function Page() {
  return (
    <div className="min-h-svh bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        {reveal(<AboutSection />)}
        {reveal(<ProjectsSection />)}
        {reveal(<SkillsSection />)}
        {reveal(<ExperienceSection />)}
        {reveal(<ContactSection />)}
      </main>
      <SiteFooter />
    </div>
  )
}
