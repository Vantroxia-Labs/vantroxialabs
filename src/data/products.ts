export interface ProductLink {
  label: string;
  href: string;
  primary?: boolean;
}

export interface Product {
  id: string;
  index: string;
  name: string;
  domain: string;
  url: string;
  category: string;
  status: "Live" | "Beta" | "Internal";
  tagline: string;
  description: string;
  accent: "indigo" | "cyan";
  highlights: string[];
  deploymentModels: string[];
  stack: string[];
  links: ProductLink[];
}

export const PRODUCTS: Product[] = [
  {
    id: "gymmatehub",
    index: "01",
    name: "GymMateHub",
    domain: "gymmatehub.com",
    url: "https://gymmatehub.com",
    category: "Fitness & Club SaaS",
    status: "Live",
    tagline:
      "Gym management software for Nigeria and Africa — track members, payments, classes, and renewals.",
    description:
      "A multi-tenant fitness operations platform combining an owner & staff web dashboard, a modular Spring Boot core, and a dedicated Flutter member app with instant QR door check-in, automated Stripe billing, and an AI workout trainer.",
    accent: "indigo",
    highlights: [
      "Multi-tenant gym & organization management with white-label branding",
      "Automated membership plans, freezes, invoicing, and Stripe billing",
      "Class scheduling, waitlists, QR code check-in & Flutter Member App",
      "AI-powered workout planning, CRM lead tracking, and live analytics",
    ],
    deploymentModels: ["Cloud SaaS", "Web Dashboard", "iOS & Android Member App"],
    stack: ["Java 21 / Spring Modulith", "React 19", "Flutter", "PostgreSQL"],
    links: [
      {
        label: "Visit GymMateHub",
        href: "https://gymmatehub.com",
        primary: true,
      },
    ],
  },
  {
    id: "aegisremit",
    index: "02",
    name: "AegisRemit",
    domain: "aegisremit.ng",
    url: "https://aegisremit.ng",
    category: "FinTech & Tax Compliance",
    status: "Live",
    tagline:
      "Cloud and on-premise electronic invoicing and FIRS tax compliance built for Nigerian enterprises.",
    description:
      "An enterprise-grade e-invoicing platform enabling businesses and ERPs to generate FIRS-compliant Invoice Reference Numbers (IRN), embed verification QR codes, synchronize submissions over OAuth2, and reconcile payments seamlessly.",
    accent: "cyan",
    highlights: [
      "Automated FIRS Invoice Reference Number (IRN) & cryptographic QR generation",
      "Direct OAuth2 FIRS submission, status sync, and invoice import",
      "Three integration channels: REST ERP API, Web Portal, and SFTP Gateway",
      "Multi-tenant business & branch hierarchy with Interswitch reconciliation",
    ],
    deploymentModels: ["Cloud SaaS", "On-Premise", "ERP REST API & SFTP"],
    stack: [".NET 10 / C# 14", "Clean Architecture", "SQL Server & Redis", "OpenTelemetry"],
    links: [
      {
        label: "Visit AegisRemit",
        href: "https://aegisremit.ng",
        primary: true,
      },
    ],
  },
  /*
   * Additional Vantroxia Labs products can be enabled here as they launch publicly:
   * - Bybit Trading Engine (https://trading.vantroxialabs.com)
   * - Aegis Trader (Algorithmic Deriv & MT5 execution engine)
   */
];

