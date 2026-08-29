/**
 * SINGLE SOURCE OF TRUTH FOR EVERYTHING PERSONAL.
 *
 * Personal brand site, not an employee page. No organisation is named.
 * Projects are described by what the software does.
 */

export const site = {
  /* ---------------------------------------------------------------- identity */
  name: 'Mohamad Azim',
  fullName: 'Mohamad Azim bin Hasnul Azlan',
  role: 'Full-Stack Developer',
  tagline: 'Software built for what comes next.',
  description:
    'Full-stack developer in Kuala Lumpur, available for freelance work. Web platforms, mobile apps, e-commerce and the API integrations behind them, built end to end. Award-winning work at the Malaysia Technology Expo.',
  location: 'Kuala Lumpur, Malaysia',

  /* ---------------------------------------------------------------- contact */
  email: 'mohamadazimemp@gmail.com',
  whatsapp: '60195751604',
  phoneDisplay: '+60 19-575 1604',
  whatsappMessage: "Hi Azim, I saw your portfolio and I'd like to talk about a project.",

  /** REVIEW: add real profile URLs, or delete the entries you do not use. */
  socials: [
    { label: 'GitHub', href: 'https://github.com/your-username' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/your-username' },
  ],

  /* ------------------------------------------------------------ availability */
  available: true,
  availableFrom: 'Open to new projects',


  /* ------------------------------------------------------------------- proof */
  stats: [
    { value: '03', label: 'Malaysia Technology Expo awards' },
    { value: '02', label: 'Production systems shipped' },
    { value: '3+', label: 'Years building for production' },
    /* Not a number, and that is deliberate: the fourth cell carries currency
       of skills rather than an academic score, which is the thing a client is
       actually deciding about. */
    { value: 'LATEST', label: 'Frameworks and tooling, kept current' },
  ],

  /**
   * MTE is the Malaysia Technology Expo, the leading international innovation
   * event in Asia. IIA (International Innovation Awards) and PSIA (Public
   * Service Innovation Asia) are both MTE award tracks.
   */
  awards: [
    {
      title: 'Best Innovation Award',
      programme: 'International Innovation Awards',
      event: 'Malaysia Technology Expo',
      project: 'Traceability platform',
      tier: 'top',
    },
    {
      title: 'Gold Award',
      programme: 'International Innovation Awards',
      event: 'Malaysia Technology Expo',
      project: 'Traceability platform',
      tier: 'gold',
    },
    {
      title: 'Gold Award',
      programme: 'Public Service Innovation Asia',
      event: 'Malaysia Technology Expo',
      project: 'Traceability platform',
      tier: 'gold',
    },
    {
      title: 'Vice Chancellor Award',
      programme: 'Universiti Teknologi MARA',
      event: 'Academic',
      project: 'BSc Computer Science (Hons)',
      tier: 'academic',
    },
  ],

  /* ------------------------------------------------------------ capabilities */
  /**
   * The four shapes of work I take on. Written broadly on purpose: these are
   * the kinds of project I can be hired for, not a description of any one
   * system I have already built. The case studies below carry the specifics.
   */
  services: [
    {
      code: 'WEB',
      title: 'Web platforms',
      summary:
        'A complete product, built end to end. Accounts, roles and permissions, the screens your users work in, and the API and database underneath them.',
      includes: ['Full-stack build', 'Authentication and roles', 'Responsive interfaces', 'Deployment and support'],
    },
    {
      code: 'APP',
      title: 'Mobile apps',
      summary:
        'The same product, in the pocket of every customer. Built to feel native on the phone and to share one source of truth with everything else you run.',
      includes: ['Cross-platform builds', 'Offline and sync', 'Push notifications', 'Store submission'],
    },
    {
      code: 'SHOP',
      title: 'E-commerce',
      summary:
        'Storefronts that take money reliably. Catalogue, cart and checkout wired to real payment and delivery providers, with the back office to run it.',
      includes: ['Catalogue and checkout', 'Payment gateways', 'Order management', 'Stock and fulfilment'],
    },
    {
      code: 'API',
      title: 'Integrations',
      summary:
        'Services other software can rely on, and the work of making two systems that were never designed to talk to each other do it anyway.',
      includes: ['REST API design', 'Third-party integration', 'Data import and migration', 'Documentation'],
    },
  ],

  /* ----------------------------------------------------------------- process */
  process: [
    {
      title: 'Model first',
      body: 'The data model is agreed before any screen is drawn. In systems that carry compliance weight, a wrong schema is expensive in a way a wrong layout never is.',
    },
    {
      title: 'Thin slice',
      body: 'One flow built end to end, from the API through to the printed document, before breadth. It proves the architecture against reality rather than against a diagram.',
    },
    {
      title: 'Build in blocks',
      body: 'Two-week blocks with something working at the end of each one. You see progress continuously instead of waiting in silence.',
    },
    {
      title: 'Handover',
      body: 'Deployed, documented, and yours. I walk your team through it and stay available for a support window afterwards.',
    },
  ],

  /* ------------------------------------------------------------------- about */
  about: {
    /* The portrait is imported directly in About.astro so the build can
       optimise it; it is not a path in here. */
    body: [
      'Three years building production systems that organisations depend on every day: web platforms, mobile applications, e-commerce, and the integrations behind them. Front end through to database, delivered end to end.',
      'As technical lead on a national traceability platform, I delivered an Angular front end and a .NET Core API built to stay accurate under audit years after a record is written. The project won three awards at the Malaysia Technology Expo. Scheduling, reporting and operations systems have followed for other organisations since.',
      'Every project runs the same way: direct contact with the person building it, from the first call through to final delivery. No account managers, no handovers between teams, and never more than a few clients at a time.',
    ],
    stack: [
      { group: 'Backend', items: ['.NET Core Web API', 'C#', 'Entity Framework', 'SQL Server', 'MySQL'] },
      { group: 'Frontend', items: ['Angular ', 'TypeScript', 'RxJS', 'Angular Material', 'Bootstrap 5'] },
      { group: 'Patterns', items: ['JWT and claims auth', 'HTTP interceptors', 'Route guards', 'Role-scoped UI'] },
      { group: 'Practice', items: ['Git and GitHub', 'Code review', 'API integration', 'Database design'] },
    ],
  },

  /* -------------------------------------------------------------------- meta */
  /** REVIEW: must match `site` in astro.config.mjs. */
  url: 'https://azim-portfolio.vercel.app',
} as const;

export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent('Project enquiry')}`;
