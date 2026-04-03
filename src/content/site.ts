export type Product = {
  title: string;
  desc: string;
  points: string[];
};

export type ProcessStep = {
  no: string;
  title: string;
  text: string;
};

export type SolutionItem = {
  title: string;
  text: string;
};

export const brand = {
  name: "CASTECH",
  tagline: "Casino Technology Systems",
} as const;

export const heroContent = {
  eyebrow: "AI Vision for Casino Operations",
  /** Full headline (Hero applies accent styling to key phrases). */
  title:
    "Intelligent casino systems engineered for accuracy, control and premium table experience.",
  description:
    "CasTech develops AI-powered table technologies for blackjack, roulette and next-generation casino operations. We combine computer vision, real-time analytics, smart lighting and custom digital interfaces into a single integrated system.",
  ctaPrimary: "Explore Products",
  ctaSecondary: "Request Demo",
  ctaPrimaryHref: "#products",
  ctaSecondaryHref: "#contact",
  rightCard: {
    eyebrow: "Live Concept",
    title: "CasTech Control Layer",
    badge: "Real-Time",
    gameModule: {
      label: "Game Module",
      value: "BlackJack / Roulette / Poker",
    },
    detection: {
      label: "AI Detection",
      value: "Seat • Bet • Card • Chip",
    },
    warnings: {
      label: "Warnings",
      value: "Error • Payout • Alert",
    },
    focus: {
      label: "System Focus",
      value:
        "Reduce human error, improve control and elevate premium casino table operations.",
    },
  },
} as const;

export const heroHighlights: [string, string][] = [
  ["AI Camera Logic", "Table analytics"],
  ["Custom Integration", "Hardware + software"],
  ["Casino-Focused", "Built for operators"],
];

export const solutionsIntro = {
  eyebrow: "Solutions",
  title: "Built for modern casino operations",
  description:
    "CasTech is designed for casinos that demand higher operational control, reduced dealer-side errors and a premium digital table environment.",
};

export const solutionItems: SolutionItem[] = [
  {
    title: "AI-powered table analytics",
    text: "Real-time understanding of table activity through advanced computer vision.",
  },
  {
    title: "Multi-camera monitoring system",
    text: "Synchronized camera architecture for full table and wheel visibility.",
  },
  {
    title: "Real-time error detection",
    text: "Instant detection of dealer mistakes and operational inconsistencies.",
  },
  {
    title: "Chip recognition & payout logic",
    text: "Accurate chip tracking and payout verification support.",
  },
  {
    title: "Smart table lighting integration",
    text: "Dynamic LED feedback integrated directly into the table surface.",
  },
  {
    title: "Custom hardware & software systems",
    text: "End-to-end development tailored for casino environments.",
  },
];

export const productsIntro = {
  eyebrow: "Products",
  title: "Core CasTech product lines",
  description:
    "From AI table analysis to LED-based casino display systems, CasTech delivers focused products for high-value gaming environments.",
};

export const products: Product[] = [
  {
    title: "CasTech AI BlackJack",
    desc: "AI-powered blackjack table system that monitors player activity, detects game states and supports dealer operations in real time.",
    points: [
      "Seat & bet detection",
      "Bust / 21 alerts",
      "Dealer error detection",
    ],
  },
  {
    title: "CasTech AI Roulette",
    desc: "Multi-camera roulette system that verifies winning numbers, analyzes chip distribution and controls smart table lighting.",
    points: [
      "Winning number verification",
      "Chip color analytics",
      "Table lighting automation",
    ],
  },
  {
    title: "Casino Display Systems",
    desc: "Professional LED and digital display solutions for casino environments including jackpots, table displays and custom visual systems.",
    points: [
      "LED jackpot systems",
      "Custom digital displays",
      "Operational interface screens",
    ],
  },
];

export const processIntro = {
  eyebrow: "Process",
  title: "How we work",
};

export const processSteps: ProcessStep[] = [
  {
    no: "01",
    title: "Analyze",
    text: "We analyze table structure, operational flow and optimal camera positioning.",
  },
  {
    no: "02",
    title: "Design",
    text: "We design a complete system including hardware, software and visual integration.",
  },
  {
    no: "03",
    title: "Deploy",
    text: "The system is installed, tested and integrated into live casino operations.",
  },
  {
    no: "04",
    title: "Scale",
    text: "After validation, the system expands across multiple tables and game types.",
  },
];

export const aboutContent = {
  eyebrow: "About CasTech",
  title: "Technology built specifically for casino tables",
  paragraphs: [
    "CasTech develops intelligent systems for modern casino environments by combining AI vision, operational analytics and smart table interaction.",
    "Our systems go beyond display solutions. We verify game actions, assist dealers and pit managers, and enhance control across the entire table operation while delivering a premium player experience.",
  ],
  focusHeading: "Focus Areas",
  focusAreas: [
    "AI casino tables",
    "Computer vision systems",
    "Dealer assistance technology",
    "Premium gaming experience",
    "LED and digital integration",
  ],
};

export const contactContent = {
  eyebrow: "Contact",
  title: "Request a Demo or Equipment Offer",
  description:
    "Tell us what you need — AI systems, tables or slot machines.",
  email: "info@castech.ge",
  websiteLabel: "www.castech.ge",
  websiteHref: "https://castech.ge",
  location: "Georgia",
  formTitle: "Your inquiry",
  formNote:
    "Form is for sales inquiries only. No submission backend yet — connect when ready.",
  fields: {
    name: "Name",
    company: "Company",
    email: "Email",
    message: "Tell us about your project",
  },
  submit: "Send Request",
};

export const footerContent = {
  copyright: "© 2026 CasTech. All rights reserved.",
  tagline: "AI Casino Systems • Smart Table Technology • LED Integration",
  brandLine: "CasTech AI — Intelligent Casino Systems",
  poweredBy: "Powered by Virexa",
};
