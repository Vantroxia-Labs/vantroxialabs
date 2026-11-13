export interface EngineeringPillar {
  title: string;
  code: string;
  description: string;
  specs: string[];
}

export const COMPANY = {
  legalName: "Vantroxia Labs LTD",
  shortName: "Vantroxia Labs",
  domain: "vantroxialabs.com",
  email: "hello@vantroxialabs.com",
  tagline: "Software built for regulated markets and real-world scale.",
  copyrightYear: 2026,
};

export const ENGINEERING_PILLARS: EngineeringPillar[] = [
  {
    code: "MOD-01",
    title: "Clean & Modular Architecture",
    description:
      "We structure systems around strict domain boundaries — whether Spring Modulith or .NET Clean Architecture + CQRS — so products stay maintainable as requirements evolve.",
    specs: ["Domain-Driven Design", "Enforced Module Boundaries", "Automated CI/CD"],
  },
  {
    code: "SEC-02",
    title: "Multi-Tenant Security & Compliance",
    description:
      "Tenant isolation, cryptographic signatures, idempotency, rate limiting, and audit-grade logging are built into the foundation from day one.",
    specs: ["Tenant Context Isolation", "JWT & OAuth2 Flows", "Idempotent APIs"],
  },
  {
    code: "INF-03",
    title: "Cloud & On-Premise Delivery",
    description:
      "Containerized services designed to run reliably in our managed European cloud or inside private enterprise environments with predictable resource footprints.",
    specs: ["Docker & Traefik TLS", "PostgreSQL & SQL Server", "Redis & RabbitMQ"],
  },
  {
    code: "OBS-04",
    title: "Full-Stack Observability",
    description:
      "Every backend emits structured logs, health checks, and OpenTelemetry traces so operators diagnose bottlenecks before customers ever feel them.",
    specs: ["OpenTelemetry (OTLP)", "Structured Telemetry", "Zero-Downtime Deploys"],
  },
];

export const STUDIO_STATS = [
  { label: "Flagship Products", value: "2 Live Platforms" },
  { label: "Deployment Models", value: "Cloud SaaS & On-Prem" },
  { label: "Core Verticals", value: "FinTech & Fitness Ops" },
  { label: "Architecture", value: "Multi-Tenant & API-First" },
];

