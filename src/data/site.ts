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
  role: 'Full-Stack Engineer',
  tagline: 'I build the systems that track, move and account for things.',
  description:
    'Full-stack engineer in Kuala Lumpur. I build traceability, stock, transaction and booking systems on .NET Core and Angular. Technical lead on MSNR Trace, winner of Best Innovation and Gold at the Malaysia Technology Expo.',
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
  responseTime: 'Replies within 1 business day',

  /* ------------------------------------------------------------------- proof */
  stats: [
    { value: '03', label: 'Malaysia Technology Expo awards' },
    { value: '02', label: 'Production systems shipped' },
    { value: '2+', label: 'Years building for production' },
    { value: '3.72', label: 'CGPA, seven consecutive Dean’s Lists' },
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
      project: 'MSNR Trace',
      tier: 'top',
    },
    {
      title: 'Gold Award',
      programme: 'International Innovation Awards',
      event: 'Malaysia Technology Expo',
      project: 'MSNR Trace',
      tier: 'gold',
    },
    {
      title: 'Gold Award',
      programme: 'Public Service Innovation Asia',
      event: 'Malaysia Technology Expo',
      project: 'MSNR Trace',
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
  /** The four problem shapes I actually build. Everything else is a variation. */
  services: [
    {
      code: 'TRC',
      title: 'Traceability',
      summary:
        'Chain of custody across a supply chain. Every movement recorded with its source, quantity and compliance status, so any unit of output can be walked back to the inputs that made it.',
      includes: ['Chain of custody', 'Compliance status', 'Audit trails', 'Due diligence reporting'],
    },
    {
      code: 'STK',
      title: 'Stock',
      summary:
        'Bins, lots and balances that stay correct under concurrent movement. FIFO consumption where units are fungible, exact batch identity where they are not.',
      includes: ['Bin and lot structure', 'FIFO consumption', 'Batch identity', 'Balance reconciliation'],
    },
    {
      code: 'TRX',
      title: 'Transactions',
      summary:
        'Purchase, processing and sale as one connected ledger. Documents generated from the record rather than typed twice, and numbering the server owns.',
      includes: ['Purchase and sales flows', 'Processing and yield', 'Official documents', 'Declarations'],
    },
    {
      code: 'BKG',
      title: 'Booking',
      summary:
        'Scheduling with real conflict prevention, participants, QR check-in and attendance that becomes a report instead of a paper sheet.',
      includes: ['Availability and conflicts', 'Participants', 'QR check-in', 'Utilisation reporting'],
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
    /** REVIEW: drop a photo at public/portrait.jpg (4:5) and set this to it. */
    portrait: '',
    body: [
      'I build line-of-business systems: the software an organisation runs its operations on, where the data has to be right because somebody downstream is accountable for it.',
      'Most of my work has been on MSNR Trace, a rubber traceability platform where I led the technical development across an Angular front end and a .NET Core API. It threads compliance status through purchase, processing and sale, generates the official documents at the end of each flow, and has to survive an audit years after a record was written.',
      'Alongside it I built Space, a booking and attendance system, and I take on a small number of freelance projects at a time. You deal with me directly, from the first call through to handover.',
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
