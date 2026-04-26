export type PracticeArea = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  services: string[];
  approach: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "commercial-corporate",
    title: "Commercial & Corporate",
    short:
      "Advising founders, boards and investors on the full lifecycle of a business — from incorporation to exit.",
    intro:
      "From day-one structuring decisions to complex transactions, we act as long-term counsel to companies operating in and from Sri Lanka. Our work is grounded in commercial pragmatism: we help boards weigh trade-offs, document them clearly, and move forward with confidence.",
    services: [
      "Company incorporation, restructuring and dissolution",
      "Shareholder, joint venture and founders' agreements",
      "Mergers, acquisitions and private investments",
      "Commercial contracts, distribution and licensing",
      "Corporate governance and regulatory compliance",
      "Employment law and senior executive arrangements",
    ],
    approach:
      "We sit on the same side of the table as our clients. That means understanding the deal before we draft it, flagging risk plainly, and protecting the relationship as carefully as the contract.",
  },
  {
    slug: "civil",
    title: "Civil Litigation",
    short:
      "Considered representation in the District Courts, Court of Appeal and Supreme Court of Sri Lanka.",
    intro:
      "We act for individuals, families and businesses in civil disputes that matter — contract claims, partition actions, testamentary cases, and constitutional petitions. Our litigators are known for clear pleadings, disciplined preparation and steady advocacy.",
    services: [
      "Contract and commercial disputes",
      "Partition, land and possessory actions",
      "Testamentary and intestate matters",
      "Writ applications and fundamental rights petitions",
      "Debt recovery and enforcement",
      "Arbitration and mediation",
    ],
    approach:
      "Litigation is rarely the goal — resolution is. We are candid about prospects, conservative with promises, and relentless once a matter is filed.",
  },
  {
    slug: "real-estate",
    title: "Real Estate Management",
    short:
      "End-to-end counsel on property acquisitions, development, and the long tail of ownership.",
    intro:
      "Property in Sri Lanka rewards careful diligence. We guide local and overseas clients through title investigation, regulatory approvals, structuring of holdings, and the documentation that protects an investment for the long term.",
    services: [
      "Title investigation and due diligence",
      "Sale, purchase and gift conveyancing",
      "Lease and tenancy arrangements",
      "Real estate development and approvals",
      "Property holding structures for non-citizens",
      "Disputes between co-owners and heirs",
    ],
    approach:
      "We treat every transaction as if we were buying the property ourselves — slow on diligence, fast on execution.",
  },
  {
    slug: "finance-tax",
    title: "Finance, Tax & Foreign Investment",
    short:
      "Inbound investment, cross-border structuring and Sri Lankan tax — handled together, not in silos.",
    intro:
      "We advise foreign investors entering Sri Lanka, Sri Lankan groups going abroad, and the financial institutions that fund them. Our integrated approach pairs commercial structuring with tax and exchange control advice from the start.",
    services: [
      "Foreign direct investment and BOI approvals",
      "Cross-border structuring and repatriation",
      "Banking, lending and security documentation",
      "Income tax, VAT and stamp duty advice",
      "Tax planning for high-net-worth individuals",
      "Exchange control and Central Bank compliance",
    ],
    approach:
      "Tax and finance decisions made early are cheaper to live with. We prefer to be in the room when the deal is being shaped — not after it has closed.",
  },
  {
    slug: "immigration",
    title: "Immigration & Emigration",
    short:
      "Visas, residency and citizenship matters for individuals, families and employers.",
    intro:
      "Whether you are relocating to Sri Lanka, hiring international talent, or planning life abroad, immigration work is intensely personal. We handle each file with discretion, attention to deadlines, and an eye on the family's wider plans.",
    services: [
      "Resident visas and entry permits",
      "Dual citizenship applications",
      "Investor and retirement residency programmes",
      "Work visas and employer sponsorship",
      "Emigration documentation and asset planning",
      "Appeals and representations to Immigration",
    ],
    approach:
      "Immigration is a deadline-driven practice. We over-document, over-communicate, and never let a file go quiet.",
  },
];

export const getPracticeArea = (slug: string) =>
  practiceAreas.find((p) => p.slug === slug);
