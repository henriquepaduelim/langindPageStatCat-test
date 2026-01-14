export const content = {
  brand: {
    name: "StatCat Sports",
    logoText: "StatCat Sports",
    logoMark: "SC",
    tagline:
      "Proudly Canadian development and communication platform for football programs.",
  },
  header: {
    openLabel: "Open navigation menu",
    closeLabel: "Close navigation menu",
    mobileTitle: "Navigation",
    primaryNavLabel: "Primary",
    mobileNavLabel: "Mobile navigation",
    mobileNavMenuLabel: "Mobile",
  },
  nav: [
    { label: "Features", href: "features" },
    { label: "How It Works", href: "how-it-works" },
    { label: "Use Cases", href: "use-cases" },
    { label: "Pricing", href: "pricing" },
    { label: "Testimonials", href: "testimonials" },
    { label: "FAQ", href: "faq" },
  ],
  hero: {
    trustLine:
      "Proudly Canadian. Built for football programs that want professional standards.",
    headline:
      "White-label your club with a development platform that tracks athletes over time.",
    subheadline:
      "StatCat is a development and communication platform for football programs. Branded as your own app, it documents evaluations, report cards, schedules, and family updates from sessions to seasons.",
    primaryCta: "Book a demo",
    secondaryCta: "See how it works",
    highlights: [
      "White-label ready",
      "Athlete development focus",
      "Clear communication",
      "Proudly Canadian",
    ],
    preview: {
      label: "StatCat club app",
      tag: "App Preview",
      video: {
        src: "/media/EliteOneGoalkeepers.png",
        label: "Club app preview image",
      },
      cards: ["Development", "Report Cards", "Scheduling"],
    },
  },
  socialProof: {
    eyebrow: "Why StatCat",
    title: "Built for Canadian football programs",
    subtitle:
      "A professional interface between club, athlete, and family with white-label branding and structured development data.",
    metrics: [
      { label: "Your club, your brand", value: "White-label" },
      { label: "Professional feedback", value: "Report cards" },
      { label: "Long-term tracking", value: "Sessions to seasons" },
      { label: "Local onboarding", value: "Canadian support" },
    ],
  },
  features: {
    eyebrow: "Features",
    title: "The development and communication stack for football programs",
    subtitle:
      "Run a branded app, track athlete progress, and keep families aligned with professional reporting.",
    highlight: {
      eyebrow: "Development tracking spotlight",
      title: "Turn evaluations into long-term development data",
      description:
        "Capture combine results, session ratings, and coach notes in one timeline, then share progress in professional report cards.",
      bullets: [
        "Track speed, agility, and technical metrics across seasons",
        "Compare athletes against their own baselines, not just peers",
        "Export charts and summaries for meetings and parent updates",
      ],
      video: {
        src: "/media/combineChart.webm",
        label: "Development tracking preview",
        caption: "Combine and evaluation tracking preview",
        ariaLabel: "Development tracking preview",
      },
    },
    items: [
      {
        title: "Athlete development tracking",
        description:
          "Document sessions, combines, and evaluations so progress is measured beyond the scoreboard.",
        icon: "timeline",
      },
      {
        title: "Report cards and evaluations",
        description:
          "Create clear performance summaries that parents and athletes can understand.",
        icon: "assignment",
      },
      {
        title: "Communication hub",
        description:
          "Centralize updates, approvals, and feedback to replace scattered messaging.",
        icon: "forum",
      },
      {
        title: "Scheduling and events",
        description:
          "One calendar for training, evaluations, and events so nothing gets missed.",
        icon: "event_available",
      },
      {
        title: "White-label branding",
        description:
          "Your club name, logo, and colors make the app feel proprietary and professional.",
        icon: "palette",
      },
      {
        title: "Digital presence and club website",
        description:
          "Optional website creation and maintenance aligned to your app branding.",
        icon: "language",
      },
    ],
  },
  howItWorks: {
    eyebrow: "Process",
    title: "From white-label setup to visible progress",
    stepLabel: "Step",
    steps: [
      {
        title: "Set up your club and brand",
        description:
          "Apply your name, logo, and colors for a white-label experience.",
        icon: "palette",
      },
      {
        title: "Add teams and athletes",
        description:
          "Invite staff, coaches, athletes, and families with role-based access.",
        icon: "group_add",
      },
      {
        title: "Track sessions and evaluations",
        description:
          "Log training, combines, and assessments in a consistent timeline.",
        icon: "timeline",
      },
      {
        title: "Share reports and updates",
        description:
          "Publish report cards and summaries that families can understand.",
        icon: "assignment_turned_in",
      },
      {
        title: "Strengthen digital presence",
        description:
          "Extend your brand with an optional club website aligned to the app.",
        icon: "public",
      },
    ],
  },
  useCases: {
    eyebrow: "Use cases",
    title: "Built for every stakeholder",
    items: [
      {
        title: "Club Directors",
        description:
          "Lead with a professional brand and a clear digital presence.",
        bullets: [
          "White-label app that looks and feels like your club",
          "Development records and report cards you can stand behind",
          "Website creation and maintenance to boost credibility",
        ],
        icon: "verified_user",
      },
      {
        title: "Coaches",
        description:
          "Spend more time developing athletes with structured feedback.",
        bullets: [
          "Track evaluations and combine data over time",
          "Publish report cards after sessions or seasons",
          "One schedule for training, testing, and events",
        ],
        icon: "sports",
      },
      {
        title: "Athletes and Parents",
        description:
          "Know what is happening and why, with transparent feedback.",
        bullets: [
          "Clear schedules and event updates",
          "Shared report cards that explain progress",
          "Single source of truth for communication",
        ],
        icon: "family_restroom",
      },
      {
        title: "Academies and Goalkeeping Programs",
        description:
          "Run specialized programs with measurable development and consistent branding.",
        bullets: [
          "Program-specific testing and evaluation templates",
          "White-label experience for each academy or camp",
          "Professional web presence to attract new families",
        ],
        icon: "sports_football",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Transparent pricing for white-label football programs",
    subtitle:
      "Monthly billing is CAD $1.20 per athlete. Annual contracts start at CAD $1.00 per athlete and decrease with volume. White-label branding is included, with website creation and maintenance available as an add-on.",
    toggle: {
      monthly: "Monthly",
      annual: "Annual",
    },
    calculator: {
      label: "Calculator",
      heading: "Estimate your annual contract cost",
      contractBadge: "Annual contract pricing",
      athleteCountLabel: "Athlete count",
      athleteInputLabel: "Edit",
      athleteRangeLabel: "Athlete count",
      perAthleteLabel: "Per athlete / month (annual contract)",
      perAthleteAnnualSuffix: "",
      estimatedTotalLabel: "Estimated total",
      estimatedMonthlySuffix: " / month",
      estimatedAnnualSuffix: " / year",
      monthlyNote:
        "Monthly plan is CAD $1.20 per athlete. Annual contract pricing is shown below.",
      annualNote: "Pricing shown reflects an annual contract.",
      contactNote: "Over 500 athletes? Contact us to confirm the best option.",
      contactLabel: "Contact us",
    },
    setupFee: {
      eyebrow: "Setup",
      label: "One-time setup fee",
      amount: 1500,
      description: "Includes white-label setup, onboarding, and configuration.",
    },
    tiers: [
      { min: 1, max: 100, rate: 1.0 },
      { min: 101, max: 300, rate: 0.95 },
      { min: 301, max: 500, rate: 0.9 },
    ],
    minAthletes: 25,
    maxAthletes: 800,
    defaultAthletes: 120,
    monthlyRate: 1.2,
    contactThreshold: 500,
    volumeNote: "White-label branding is included with every plan.",
    disclaimer:
      "Final pricing may vary by club needs, onboarding scope, and optional website services.",
    addonsLabel: "Add-ons and premium services",
    addons: [
      "Club website creation and ongoing maintenance (optional)",
      "Dedicated launch support for multi-club organizations",
      "Custom reporting dashboards and data exports",
      "White-label asset design assistance",
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Trusted by program leaders",
    items: [
      {
        quote:
          "The white-label app makes our club look professional, and the development history keeps everyone aligned.",
        name: "Jordan Lee",
        role: "Club Operations Director",
        location: "Ontario",
      },
      {
        quote:
          "Report cards and scheduling in one place reduced messaging chaos for our families.",
        name: "Avery Chen",
        role: "Head Coach",
        location: "British Columbia",
      },
      {
        quote:
          "Parents appreciate clear progress summaries, and coaches value the evaluation timeline.",
        name: "Morgan Patel",
        role: "Program Administrator",
        location: "Alberta",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    items: [
      {
        question: "Do athletes and parents see our club branding?",
        answer:
          "Yes. The app is branded with your club name, logo, and colors so families see your club, not a generic platform.",
      },
      {
        question: "Is StatCat white-labeled?",
        answer:
          "Yes. Every club gets a white-label experience including app naming, visual identity, and branded communications.",
      },
      {
        question: "Do you also build and maintain club websites?",
        answer:
          "Yes. We offer website creation and ongoing maintenance as an optional service aligned to your app branding.",
      },
      {
        question: "Who owns the data?",
        answer:
          "Your club owns its data. We provide secure access controls and export options for administrators.",
      },
      {
        question: "How fast can we get set up?",
        answer:
          "Most clubs are live within a few weeks depending on data readiness and onboarding scope.",
      },
    ],
  },
  cta: {
    eyebrow: "Demo",
    title: "Give your club its own white-label development platform",
    subtitle:
      "Book a demo to see how StatCat tracks athlete progress, streamlines communication, and supports your club's digital presence with an optional website.",
    highlights: [
      "White-label app branded to your club",
      "Report cards and development summaries built in",
      "Optional club website creation and maintenance",
      "Proudly Canadian support and onboarding",
    ],
    form: {
      nameLabel: "Full name",
      emailLabel: "Work email",
      submitLabel: "Book a demo",
    },
    validation: {
      nameRequired: "Please enter your full name.",
      emailInvalid: "Please enter a valid email address.",
    },
    consent: "By submitting, you agree to receive demo communications from StatCat.",
    toast: "Thanks for your request. Our team will follow up shortly.",
  },
  footer: {
    line:
      "White-label development and communication for football programs across Canada.",
    contactEmail: "hello@statcatsports.ca",
    linksHeading: "Links",
    contactHeading: "Contact",
    contactLabel: "Email",
    copyright: "All rights reserved.",
    copyrightTemplate: "(c) {year} {brand}. {rights}",
    proudBadge: "Proudly Canadian",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Contact", href: "#cta" },
    ],
  },
};
