export type Language = 'pt' | 'en'

export type Project = {
  title: string
  description: string
  tags: string[]
  image: string
  liveUrl: string
  repoUrl: string
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string
}

export type SkillGroup = {
  category: string
  items: string[]
}

type Dictionary = {
  nav: {
    about: string
    projects: string
    skills: string
    experience: string
    contact: string
  }
  hero: {
    availability: string
    role: string
    headlineLead: string
    tagline: string
    terminal: string
    ctaProjects: string
    ctaContact: string
  }
  about: {
    label: string
    title: string
    paragraphs: string[]
    stats: { value: string; label: string }[]
  }
  skills: {
    label: string
    title: string
    subtitle: string
    groups: SkillGroup[]
  }
  projects: {
    label: string
    title: string
    subtitle: string
    live: string
    code: string
    items: Project[]
  }
  experience: {
    label: string
    title: string
    subtitle: string
    items: ExperienceItem[]
  }
  contact: {
    label: string
    title: string
    subtitle: string
    emailLabel: string
    socialsLabel: string
    cta: string
  }
  footer: {
    built: string
    rights: string
  }
}

export const translations: Record<Language, Dictionary> = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      skills: 'Habilidades',
      experience: 'Experiência',
      contact: 'Contato',
    },
    hero: {
      availability: 'Disponível para novos projetos',
      role: 'Engenheiro de Software',
      headlineLead: 'Construo experiências digitais',
      tagline:
        'rápidas, acessíveis e feitas com atenção aos detalhes. Foco em produtos web que unem código limpo e design cuidadoso.',
      terminal: 'construindo para a web',
      ctaProjects: 'Ver projetos',
      ctaContact: 'Entrar em contato',
    },
    about: {
      label: 'Sobre mim',
      title: 'Código com propósito e obsessão por detalhes',
      paragraphs: [
        'Sou engenheiro de software com foco em aplicações web modernas. Gosto de transformar problemas complexos em interfaces simples e agradáveis de usar.',
        'Trabalho no dia a dia com o ecossistema JavaScript/TypeScript, sempre buscando escrever código sustentável, testável e performático. Acredito que os melhores produtos nascem da combinação entre boa engenharia e empatia com quem usa.',
      ],
      stats: [
        { value: '5+', label: 'Anos de experiência' },
        { value: '40+', label: 'Projetos entregues' },
        { value: '15+', label: 'Clientes atendidos' },
      ],
    },
    skills: {
      label: 'Habilidades',
      title: 'Tecnologias com que trabalho',
      subtitle:
        'Ferramentas e linguagens que uso para levar ideias da concepção à produção.',
      groups: [
        {
          category: 'Frontend',
          items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
        },
        {
          category: 'Backend',
          items: ['Node.js', 'PostgreSQL', 'Prisma', 'GraphQL', 'Redis'],
        },
        {
          category: 'DevOps & Ferramentas',
          items: ['Docker', 'AWS', 'Vercel', 'Git', 'CI/CD'],
        },
        {
          category: 'Design & Outros',
          items: ['Figma', 'Testes', 'Acessibilidade', 'Performance'],
        },
      ],
    },
    projects: {
      label: 'Projetos',
      title: 'Trabalhos selecionados',
      subtitle:
        'Uma seleção de projetos que representam o tipo de trabalho que gosto de fazer.',
      live: 'Ver online',
      code: 'Código',
      items: [
        {
          title: 'ERP Champs Law',
          description:
            'Sistema ERP completo com controle financeiro (contas a pagar e receber, fluxo de caixa), emissão automática de notas fiscais direto na prefeitura, controle de comissões e apurações por área, despesas, timesheet de colaboradores, aba de marketing para gerar criativos, pipeline de negócios com controle de oportunidades e GED completo e organizado.',
          tags: ['Next.js', 'TypeScript', 'ERP', 'Financeiro'],
          image: '/projects/erp-financeiro.png',
          liveUrl: '#',
          repoUrl: 'https://github.com/GuiBarbiero',
        },
        {
          title: 'Controle de Clientes',
          description:
            'Plataforma web para controle de clientes ativos e inativos, análise de áreas em destaque e envio de mensagens para manter a base ativa ou reconquistar clientes.',
          tags: ['Next.js', 'TypeScript', 'Dashboard'],
          image: '/projects/controle-clientes.png',
          liveUrl: '#',
          repoUrl: 'https://github.com/GuiBarbiero',
        },
        {
          title: 'Portal do Cliente — Advocacia',
          description:
            'Portal para clientes de escritório de advocacia: acompanhamento em tempo real do consumo de contrato, abertura de tickets e demandas jurídicas, e árvore societária para consultar em quais contratos sociais uma pessoa participa e quem são os sócios envolvidos.',
          tags: ['Next.js', 'TypeScript', 'Estrutura Societária'],
          image: '/projects/portal-advocacia.png',
          liveUrl: '#',
          repoUrl: 'https://github.com/GuiBarbiero',
        },
        {
          title: 'Space Code',
          description:
            'Projeto institucional para a NASA voltado ao envio de sondas equipadas com sensores sísmicos e ultrassonografia terrestre, capazes de detectar lagos e rios subterrâneos em outros planetas. Inclui site institucional da software house responsável pela missão.',
          tags: ['Institucional', 'NASA', 'Sensores', 'Web'],
          image: '/projects/space-code.png',
          liveUrl: '#',
          repoUrl: 'https://github.com/GuiBarbiero',
        },
        {
          title: 'Tributando',
          description:
            'Calculadora de tributação sobre notas fiscais que apura automaticamente todos os impostos e retenções — IRRF, CSLL, COFINS, PIS e carga tributária aproximada (IBPT) — independentemente de o prestador ser Pessoa Física ou Pessoa Jurídica, gerando os dados prontos para o portal da NFS-e.',
          tags: ['Next.js', 'TypeScript', 'Tributário', 'NFS-e'],
          image: '/projects/tributando.png',
          liveUrl: '#',
          repoUrl: 'https://github.com/GuiBarbiero',
        },
        {
          title: 'deconst',
          description:
            'Site institucional para empresa de construção especializada em geossintéticos — revestimento e contenção de aterros, reservatórios, canais e lagoas. Landing page com apresentação de serviços, portfólio de obras, depoimentos e formulário para solicitação de orçamento.',
          tags: ['Next.js', 'TypeScript', 'Landing Page', 'Institucional'],
          image: '/projects/deconst.png',
          liveUrl: 'https://deconst.vercel.app',
          repoUrl: 'https://github.com/GuiBarbiero',
        },
      ],
    },
    experience: {
      label: 'Experiência',
      title: 'Trajetória profissional',
      subtitle: 'Onde trabalhei e o que construí ao longo do caminho.',
      items: [
        {
          role: 'Engenheiro de Software',
          company: 'Champs Law',
          period: 'mai 2026 — Presente',
          description:
            'Desenvolvimento de plataformas SaaS para escritórios de advocacia, liderando o ciclo completo de produto — da arquitetura à implantação. CRM jurídico, gestão financeira e de fluxo de caixa, emissão de NFS-e, automação de contratos e integração de IA/LLMs. Arquitetura de microsserviços com TypeScript, React, Node.js, Docker, AWS e Cloudflare.',
        },
        {
          role: 'Analista Júnior II',
          company: 'RE9 Tecnologia da Informação',
          period: 'mar 2026 — mai 2026',
          description:
            'Business Intelligence e análise de dados financeiros. Desenvolvimento end-to-end de dashboards gerenciais e financeiros (KPIs, controle de carteira e gestão de Aging) e automações de processos com N8N, Power Automate e VBA para as áreas Financeira, RH e Societária.',
        },
        {
          role: 'Analista de TI Júnior I',
          company: 'RE9 Tecnologia da Informação',
          period: 'set 2025 — mar 2026',
          description:
            'Automação de processos, desenvolvimento de dashboards gerenciais e suporte estratégico às áreas de negócio. Otimização de fluxos de RH, Societário e Financeiro, gestão da operação de TI para escritórios de advocacia e controle de ativos e CAPEX.',
        },
      ],
    },
    contact: {
      label: 'Contato',
      title: 'Vamos construir algo juntos',
      subtitle:
        'Estou sempre aberto a conversar sobre novos projetos, oportunidades ou apenas trocar ideias.',
      emailLabel: 'E-mail',
      socialsLabel: 'Redes',
      cta: 'Enviar e-mail',
    },
    footer: {
      built: 'Desenvolvido com Next.js e Tailwind CSS',
      rights: 'Todos os direitos reservados.',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      availability: 'Available for new projects',
      role: 'Software Engineer',
      headlineLead: 'I build digital experiences',
      tagline:
        'that are fast, accessible and crafted with attention to detail. Focused on web products that blend clean code and thoughtful design.',
      terminal: 'building for the web',
      ctaProjects: 'View projects',
      ctaContact: 'Get in touch',
    },
    about: {
      label: 'About me',
      title: 'Code with purpose and an obsession for detail',
      paragraphs: [
        'I am a software engineer focused on modern web applications. I enjoy turning complex problems into simple, pleasant-to-use interfaces.',
        'I work daily with the JavaScript/TypeScript ecosystem, always aiming to write sustainable, testable and performant code. I believe the best products come from combining solid engineering with empathy for the people who use them.',
      ],
      stats: [
        { value: '5+', label: 'Years of experience' },
        { value: '40+', label: 'Projects delivered' },
        { value: '15+', label: 'Clients served' },
      ],
    },
    skills: {
      label: 'Skills',
      title: 'Technologies I work with',
      subtitle:
        'Tools and languages I use to take ideas from concept to production.',
      groups: [
        {
          category: 'Frontend',
          items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
        },
        {
          category: 'Backend',
          items: ['Node.js', 'PostgreSQL', 'Prisma', 'GraphQL', 'Redis'],
        },
        {
          category: 'DevOps & Tools',
          items: ['Docker', 'AWS', 'Vercel', 'Git', 'CI/CD'],
        },
        {
          category: 'Design & More',
          items: ['Figma', 'Testing', 'Accessibility', 'Performance'],
        },
      ],
    },
    projects: {
      label: 'Projects',
      title: 'Selected work',
      subtitle:
        'A selection of projects that represent the kind of work I love to do.',
      live: 'Live site',
      code: 'Code',
      items: [
        {
          title: 'Champs Law ERP',
          description:
            'Full ERP system with financial control (accounts payable and receivable, cash flow), automatic invoice issuing directly with the city hall, commission control and margin analysis per area, expenses, employee timesheets, a marketing tab to generate creatives, a sales pipeline with opportunity tracking and a complete, organized document management system.',
          tags: ['Next.js', 'TypeScript', 'ERP', 'Finance'],
          image: '/projects/erp-financeiro.png',
          liveUrl: '#',
          repoUrl: 'https://github.com/GuiBarbiero',
        },
        {
          title: 'Client Management',
          description:
            'Web platform to track active and inactive clients, analyze standout areas and send messages to keep the client base engaged or win clients back.',
          tags: ['Next.js', 'TypeScript', 'Dashboard'],
          image: '/projects/controle-clientes.png',
          liveUrl: '#',
          repoUrl: 'https://github.com/GuiBarbiero',
        },
        {
          title: 'Client Portal — Law Firm',
          description:
            'Client portal for a law firm: real-time contract usage tracking, ticket and legal request management, and a corporate ownership tree to check which company agreements a person takes part in and who the involved partners are.',
          tags: ['Next.js', 'TypeScript', 'Corporate Structure'],
          image: '/projects/portal-advocacia.png',
          liveUrl: '#',
          repoUrl: 'https://github.com/GuiBarbiero',
        },
        {
          title: 'Space Code',
          description:
            'Institutional project for NASA focused on deploying probes equipped with seismic sensors and terrestrial ultrasound, able to detect underground lakes and rivers on other planets. Includes the institutional website of the software house behind the mission.',
          tags: ['Institutional', 'NASA', 'Sensors', 'Web'],
          image: '/projects/space-code.png',
          liveUrl: '#',
          repoUrl: 'https://github.com/GuiBarbiero',
        },
        {
          title: 'Tributando',
          description:
            'Invoice tax calculator that automatically computes all taxes and withholdings — IRRF, CSLL, COFINS, PIS and the approximate tax burden (IBPT) — regardless of whether the provider is an individual or a company, generating data ready for the NFS-e portal.',
          tags: ['Next.js', 'TypeScript', 'Tax', 'NFS-e'],
          image: '/projects/tributando.png',
          liveUrl: '#',
          repoUrl: 'https://github.com/GuiBarbiero',
        },
        {
          title: 'deconst',
          description:
            'Institutional website for a construction company specialized in geosynthetics — lining and containment of landfills, reservoirs, canals and ponds. Landing page with service overview, project portfolio, testimonials and a quote request form.',
          tags: ['Next.js', 'TypeScript', 'Landing Page', 'Institutional'],
          image: '/projects/deconst.png',
          liveUrl: 'https://deconst.vercel.app',
          repoUrl: 'https://github.com/GuiBarbiero',
        },
      ],
    },
    experience: {
      label: 'Experience',
      title: 'Professional journey',
      subtitle: 'Where I have worked and what I built along the way.',
      items: [
        {
          role: 'Software Engineer',
          company: 'Champs Law',
          period: 'May 2026 — Present',
          description:
            'Building SaaS platforms for law firms, leading the full product cycle — from architecture to deployment. Legal CRM, financial and cash flow management, e-invoice (NFS-e) issuing, contract automation and AI/LLM integration. Microservices architecture with TypeScript, React, Node.js, Docker, AWS and Cloudflare.',
        },
        {
          role: 'Junior Analyst II',
          company: 'RE9 Tecnologia da Informação',
          period: 'Mar 2026 — May 2026',
          description:
            'Business Intelligence and financial data analysis. End-to-end development of management and financial dashboards (KPIs, portfolio control and Aging management) and process automation with N8N, Power Automate and VBA for the Finance, HR and Corporate areas.',
        },
        {
          role: 'Junior IT Analyst I',
          company: 'RE9 Tecnologia da Informação',
          period: 'Sep 2025 — Mar 2026',
          description:
            'Process automation, management dashboard development and strategic support to business areas. Optimization of HR, Corporate and Finance workflows, IT operations management for law firms, and asset and CAPEX control.',
        },
      ],
    },
    contact: {
      label: 'Contact',
      title: "Let's build something together",
      subtitle:
        'I am always open to talking about new projects, opportunities or just exchanging ideas.',
      emailLabel: 'Email',
      socialsLabel: 'Socials',
      cta: 'Send email',
    },
    footer: {
      built: 'Built with Next.js and Tailwind CSS',
      rights: 'All rights reserved.',
    },
  },
}
