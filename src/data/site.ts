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
  tagline: 'I build the software a business actually runs on.',
  description:
    'Full-stack developer in Kuala Lumpur, available for freelance work. Web applications, internal tools, dashboards and APIs, built end to end on .NET Core and Angular. Award-winning work at the Malaysia Technology Expo.',
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
      code: 'APP',
      title: 'Web applications',
      summary:
        'A complete product, built end to end. Accounts, roles and permissions, the screens your users work in, and the API and database underneath them.',
      includes: ['Full-stack build', 'Authentication and roles', 'Responsive interfaces', 'Deployment and handover'],
    },
    {
      code: 'OPS',
      title: 'Internal tools',
      summary:
        'The admin systems a team actually runs its day on. Replacing the spreadsheet, the shared inbox and the paper form with one place where the record is kept.',
      includes: ['Admin and back-office', 'Workflow and approvals', 'Scheduling and bookings', 'Document generation'],
    },
    {
      code: 'API',
      title: 'APIs and integrations',
      summary:
        'Services other software can rely on, and the work of making two systems that were never designed to talk to each other do it anyway.',
      includes: ['REST API design', 'Third-party integration', 'Data import and migration', 'Documentation'],
    },
    {
      code: 'DAT',
      title: 'Data and reporting',
      summary:
        'A schema that holds up under real use, and the dashboards and exports that turn what it records into something a manager can act on.',
      includes: ['Database design', 'Dashboards', 'Reports and exports', 'Audit trails'],
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
      'I build the software organisations run their day on: web applications, internal tools, dashboards and the APIs behind them. Front end through to database, one person, start to finish.',
      'I led the technical development of a national traceability platform across an Angular front end and a .NET Core API. It has to stay correct under audit years after a record was written, and it took three awards at the Malaysia Technology Expo. Alongside it I have shipped scheduling, reporting and internal operations tools.',
      'I take on a small number of freelance projects at a time, which is deliberate: you deal with me directly from the first call through to handover, and your project is never queued behind five others.',
    ],
    stack: [
      { group: 'Backend', items: ['.NET Core Web API', 'C#', 'Entity Framework', 'SQL Server', 'MySQL'] },
      { group: 'Frontend', items: ['Angular 16', 'TypeScript', 'RxJS', 'Angular Material', 'Bootstrap 5'] },
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
