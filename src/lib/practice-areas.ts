export type FAQ = { q: string; a: string };

export type PracticeArea = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  services: string[];
  approach: string;
  longContent: string[];
  faqs: FAQ[];
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
    longContent: [
      "Our commercial and corporate practice is the engine of the firm. We act as outside general counsel to closely held companies, family enterprises and venture-backed start-ups, and as deal counsel to overseas investors entering Sri Lanka. The work spans the entire arc of a business — from the first share allotment, through funding rounds and joint ventures, to acquisitions, divestments and orderly wind-downs.",
      "Sri Lankan corporate law sits at an interesting intersection. The Companies Act No. 7 of 2007 is principles-based and modern, but it operates alongside sector regulators, exchange-control rules administered by the Central Bank, and the Board of Investment regime for foreign capital. We translate that landscape for clients in commercial language — what you can do, what it will cost in time, and where the regulatory risk really sits — so directors can make decisions without wading through statutes themselves.",
      "On transactions, we run process the way a sophisticated in-house team would. Diligence is risk-ranked and reported in a register, not a 200-page memo. Transaction documents are drafted with the post-closing relationship in mind: the shareholders' agreement that survives a falling-out, the SPA that allocates tax and regulatory risk fairly, the employment contract that protects confidential information without making senior hires unenforceable. We also handle the unglamorous follow-through — board resolutions, statutory filings, share registers — that keeps a deal clean five years later.",
      "For ongoing advisory work, we are deliberately accessible. Founders and CFOs reach a partner directly, often the same day, for the short calls that prevent long disputes. We document those calls in writing where it matters, and we are honest when a question is outside our experience or better answered by a sector specialist.",
    ],
    faqs: [
      {
        q: "Can a foreign national or foreign company own 100% of a Sri Lankan company?",
        a: "Yes, in most sectors. Sri Lanka permits 100% foreign ownership in a wide range of industries, subject to sector-specific restrictions (e.g. retail trade below a threshold, coastal fishing, education). We confirm the position for your specific activity, recommend whether to incorporate locally or register a branch, and where appropriate apply to the Board of Investment for additional incentives.",
      },
      {
        q: "Do you assist with mergers and acquisitions involving overseas parties?",
        a: "Regularly. We advise both Sri Lankan targets being acquired by overseas buyers and Sri Lankan groups acquiring assets abroad. Our role typically includes structuring, due diligence, exchange-control approvals, transaction documents, and post-closing integration. For multi-jurisdiction deals we coordinate with counsel in the buyer's home jurisdiction.",
      },
      {
        q: "How long does it take to incorporate a company in Sri Lanka?",
        a: "A straightforward private limited company can usually be incorporated within five to ten working days once name approval is obtained. Companies with foreign shareholders, BOI status, or regulated activities take longer because of additional approvals.",
      },
      {
        q: "Do you draft shareholders' agreements for early-stage companies?",
        a: "Yes — and we strongly recommend it. A short, clear founders' agreement at incorporation prevents most of the disputes we see five years later. We use a tested template and tailor it to the cap table, decision rights, and exit expectations of each company.",
      },
    ],
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
    longContent: [
      "Our civil litigation practice represents clients across the full hierarchy of Sri Lankan courts — Magistrates' Courts, District Courts, the Commercial High Court, the Court of Appeal and the Supreme Court — as well as before arbitral tribunals constituted under the Arbitration Act No. 11 of 1995. We appear for plaintiffs and defendants in roughly equal measure, which keeps our perspective balanced when advising on prospects.",
      "Most disputes that come to us are commercial in nature: breach of contract, recovery of debt, shareholder oppression, breach of confidence, and post-acquisition disputes. We also have a long-standing practice in land and partition actions, testamentary and intestate matters, fundamental-rights applications, and writ jurisdiction. Where the facts allow, we push hard for early resolution — through negotiation, structured mediation, or a without-prejudice meeting between principals — because the clients who litigate well are usually the ones who treat the courtroom as a last resort, not a first option.",
      "When matters do proceed, our preparation is detailed and the pleadings are deliberately tight. We invest heavily in the chronology and the documentary record before the first hearing, because a clean factual case wins more often than a clever legal one. Witnesses are prepared properly, expert evidence is sourced where it strengthens the case, and our cross-examination is focused on the two or three points that actually move the judgment.",
      "We are conservative with predictions. Sri Lankan civil litigation can be slow, and outcomes depend on facts that often emerge only at trial. Clients receive a written assessment of merits, costs and likely timeline at the outset, refreshed at each major step. We would rather lose a brief by being honest than win a client who later feels misled about prospects.",
    ],
    faqs: [
      {
        q: "How long does a civil case typically take in Sri Lanka?",
        a: "Timelines vary widely. A defended commercial action in the District Court typically takes two to four years to reach judgment at first instance, with appeals adding further time. Summary procedures (e.g. on liquid claims, mortgage actions) and arbitrations can be considerably faster. We give a candid timeline estimate for your specific matter at the outset.",
      },
      {
        q: "Can disputes be resolved without going to court?",
        a: "Often, yes. Many of our matters settle through direct negotiation, mediation, or arbitration. We assess the appropriate forum at the outset — sometimes a well-pitched lawyer's letter and a meeting between principals achieves more, and faster, than a writ.",
      },
      {
        q: "Do you handle appeals to the Court of Appeal and Supreme Court?",
        a: "Yes. We regularly appear in appellate matters, including civil appeals, leave-to-appeal applications, writs and fundamental-rights petitions. Where helpful we instruct senior counsel from the unofficial Bar in collaboration with our litigation team.",
      },
      {
        q: "Will I always meet a partner on my matter?",
        a: "Yes. Every contentious file is supervised by a partner who attends the principal hearings and signs off on the strategy. Day-to-day work is shared with associates so the file is properly resourced and costs remain proportionate.",
      },
    ],
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
    longContent: [
      "Sri Lanka's land law is layered. Common law principles inherited from Roman-Dutch sources sit alongside statutory regimes for partition, prescription, condominium ownership, and the Land (Restrictions on Alienation) Act that governs ownership by foreign nationals. Our real estate practice exists to translate that complexity into practical certainty for owners, developers, lenders and overseas buyers.",
      "Diligence is the heart of the work. Before any transaction we trace title back at least thirty years, examine the encumbrance certificate, walk the survey plan against the deed, confirm planning and zoning status, and check for partition decrees, mortgages, easements and statutory restrictions. Where we cannot get to clean title within a reasonable risk envelope, we say so — even if it costs the deal — because property defects in Sri Lanka are usually expensive to cure later.",
      "On transactions we act for purchasers, vendors and gift donors, and prepare the full conveyancing chain: notarial deed, transfer documents, stamp duty and registration. For lessors and lessees we draft commercial leases that allocate maintenance, escalation, exit and dispute resolution clearly. For developers we handle land aggregation, joint-venture structures with landowners, condominium declarations under the Apartment Ownership Law, and the regulatory approvals required from local authorities and the UDA.",
      "For overseas clients, we structure ownership in compliance with the restrictions on direct land ownership by non-citizens — typically through a long lease, a Sri Lankan-incorporated holding company with permitted foreign shareholding, or condominium ownership above the qualifying floor. We also handle the long tail of ownership: rental management arrangements, tenancy disputes, repatriation of sale proceeds, and succession planning for property held in Sri Lanka by overseas families.",
    ],
    faqs: [
      {
        q: "Can a foreign national buy land in Sri Lanka?",
        a: "Direct freehold purchase of land by foreign nationals is restricted under the Land (Restrictions on Alienation) Act. Foreigners can, however, hold land on long leases (up to 99 years), own condominium apartments above the qualifying floor, and hold property through Sri Lankan-incorporated companies subject to the foreign-shareholding rules. We advise on the most efficient structure for your circumstances.",
      },
      {
        q: "What does title investigation involve?",
        a: "We trace ownership back at least thirty years through the relevant Land Registry, examine the deed chain, encumbrance certificates, partition decrees, mortgages and notarial records. We then issue a written title report identifying defects, if any, and recommending remediation before signing.",
      },
      {
        q: "Can you act for overseas buyers who cannot travel to Sri Lanka?",
        a: "Yes. We frequently act for clients in the United Kingdom, Australia, the Middle East, Singapore and North America. Documents can be executed under power of attorney with appropriate consular authentication, and all communications can be handled remotely.",
      },
      {
        q: "Do you handle disputes between co-owners and heirs?",
        a: "Yes. Partition actions, testamentary disputes and ouster claims are a regular part of our litigation practice, with strong support from our real estate team on title and survey questions.",
      },
    ],
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
    longContent: [
      "Cross-border investment into and out of Sri Lanka is governed by an interlocking framework of company law, exchange control under the Foreign Exchange Act No. 12 of 2017, the Board of Investment regime, and a tax code that has been substantially rewritten in recent years. Our practice exists to make that framework legible — and to make sure structuring decisions taken at the start of a transaction do not become tax or repatriation problems years later.",
      "On the inbound side, we advise foreign investors on entry structure (company, branch, BOI enterprise, or contractual arrangement), the permitted percentage of foreign shareholding for the relevant activity, capital infusion through the Inward Investment Account, and exit planning for eventual divestment. Where applicable we secure BOI agreements with tax holidays and import concessions, and coordinate with the Central Bank on the approvals required to repatriate dividends, capital and sale proceeds.",
      "On the outbound side, we work with Sri Lankan groups acquiring overseas assets or establishing offshore holding structures, navigating the outward investment limits and approvals required under the exchange-control regime. For banks and non-bank lenders we draft and negotiate loan, security and inter-creditor documentation under Sri Lankan law, and provide enforceability opinions on cross-border facilities.",
      "Tax advice runs alongside the structuring work — never as an afterthought. We advise on income tax (corporate and personal), VAT, withholding taxes on cross-border payments, stamp duty on documents, and the application of double-tax treaties. For high-net-worth families we advise on succession-aware structuring of personal and investment assets, including coordination with overseas advisers on residency and reporting obligations.",
    ],
    faqs: [
      {
        q: "Which jurisdictions do you cover beyond Sri Lanka?",
        a: "Our advice is on Sri Lankan law, but we regularly handle matters with connections to the United Kingdom, the United Arab Emirates, Singapore, Australia, India, the United States and Canada. For substantive advice on foreign law we coordinate with established correspondent counsel in those jurisdictions.",
      },
      {
        q: "Can profits be repatriated from Sri Lanka?",
        a: "Yes — dividends, interest, capital gains and proceeds of share sales can be repatriated, provided the original investment was routed through an Inward Investment Account and the relevant tax obligations have been discharged. We design the inflow structure with the eventual outflow in mind.",
      },
      {
        q: "Do you advise on BOI agreements?",
        a: "Yes. We assess eligibility, prepare the application, negotiate the agreement (including tax holidays, import duty concessions and minimum-investment thresholds), and advise on ongoing compliance obligations during the life of the BOI status.",
      },
      {
        q: "Can you act for overseas banks lending to Sri Lankan borrowers?",
        a: "Yes. We act for international lenders on cross-border facilities into Sri Lanka, handling Sri Lankan-law security documentation, registration of mortgages and floating charges, perfection opinions, and exchange-control approvals for offshore borrowing.",
      },
    ],
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
    longContent: [
      "Immigration matters cut closer to home than most legal work. A visa application is also a family timeline, a school enrolment, a job offer that will not wait. Our immigration practice is built around that reality — disciplined on documentation, fast in response, and discreet about the personal information families share with us.",
      "Inbound to Sri Lanka, we advise on the full menu of visa categories administered by the Department of Immigration and Emigration: business visas for investors and senior managers, employment visas sponsored by Sri Lankan employers, dependent visas for accompanying family, the resident-guest scheme, retirement residency, and the various visa pathways linked to property ownership. For BOI enterprises we coordinate with the BOI on multi-employee visa approvals as part of the broader investment package.",
      "We also assist returning Sri Lankans and the overseas Sri Lankan diaspora with dual citizenship applications under the Citizenship Act, including documentation of descent, renunciation requirements where relevant, and the careful coordination of timing where dual citizenship affects property ownership, taxation or inheritance. For families planning emigration, we prepare the underlying Sri Lankan documentation — civil-status records, asset schedules, powers of attorney, succession plans — that overseas immigration counsel will rely on.",
      "Our practice extends to representations and appeals where applications are refused or delayed. We have appeared in writ applications challenging immigration decisions and in fundamental-rights petitions where appropriate. We are honest at intake about the prospects of any application: immigration outcomes ultimately rest with the regulator, and credibility with that regulator is built file by file.",
    ],
    faqs: [
      {
        q: "Do you handle dual citizenship applications for Sri Lankans abroad?",
        a: "Yes. We regularly act for clients in the United Kingdom, Australia, Canada, the United States, the EU and the Middle East on dual citizenship applications, including cases involving children born overseas to former Sri Lankan citizens. The work is handled remotely with documents executed locally where required.",
      },
      {
        q: "Can a foreign investor obtain residency by investing in Sri Lanka?",
        a: "Yes. Several pathways exist, including business visas tied to BOI enterprises, the resident-guest scheme for self-funded individuals, and residency linked to qualifying property investments. We advise on the most appropriate pathway based on your investment horizon, family circumstances and tax position.",
      },
      {
        q: "How long does a typical visa application take?",
        a: "Processing times vary by category. A straightforward employment visa renewal can be completed within a few weeks; first-time business visas, dependent visas and residency applications generally take longer, especially when supporting documents must be sourced from overseas. We build realistic timelines into the engagement letter and chase actively.",
      },
      {
        q: "Do you assist employers hiring foreign nationals into Sri Lanka?",
        a: "Yes. We advise employers on sponsorship eligibility, draft and review employment contracts compliant with Sri Lankan law, prepare visa applications, and handle renewals and exits. For groups hiring at scale we set up a process that the in-house HR team can run, with our involvement only on edge cases.",
      },
    ],
  },
];

export const getPracticeArea = (slug: string) =>
  practiceAreas.find((p) => p.slug === slug);
