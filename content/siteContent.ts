export type NavItem = { label: string; href: string };

export const siteContent = {
  site: {
    name: "MEG EcoSolutions",
    domain: "megecosolutions.com",
    primaryEmail: "info@megecosolutions.com",
    partner: {
      name: "WPowertech",
      url: "https://wpowertech.ro/",
      applicationsUrl: "https://wpowertech.ro/applications",
    },
  },

  nav: [
    { label: "Solutions", href: "/solutions" },
    { label: "Applications", href: "/applications" },
    { label: "Markets", href: "/markets" },
    { label: "Investment Model", href: "/investment-model" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],

  home: {
    hero: {
      headline: "We Transform Waste Into Energy, Resources, and Investment Opportunities.",
      subheadline:
        "Advanced circular economy engineering — proven European technology for municipal waste management and energy resilience.",
      regionalRole:
        "Exclusive representative in Bolivia and Latin America for leading technologies that transform waste into energy and valuable resources.",
      supporting:
        "MEG EcoSolutions designs and delivers technical solutions that reduce landfill dependency, improve regulatory performance, and convert suitable waste streams into measurable recovery and usable energy. We operate as a technical authority for public-sector stakeholders, with verifiable parameters, clear documentation, and modular systems designed to integrate into existing municipal logistics.",
      ctas: [
        { label: "Explore Our Solutions", href: "/solutions" },
        { label: "Schedule a Strategic Consultation", href: "/contact" },
      ],
    },
    highlights: [
      {
        title: "Waste diversion & landfill mitigation",
        description:
          "Targeted reduction of residual waste volumes, including hard-to-recycle fractions, aligned with recovery targets and circular economy objectives.",
      },
      {
        title: "Emission control & compliance",
        description:
          "Closed-loop operation and multi-stage treatment strategies designed for traceable compliance and transparent public communication.",
      },
      {
        title: "Decentralized energy resilience",
        description:
          "Waste-derived energy pathways that support predictable local generation strategies and regional resilience planning.",
      },
      {
        title: "Bankable project development",
        description:
          "Technical due diligence, conservative scenarios, and implementation planning designed for institutional decision-making and finance readiness.",
      },
    ],
    partner: {
      title: "Main Technology Partner",
      bodyBefore: "Our primary technology partner is ",
      bodyAfter:
        ", with applications designed for regulatory compliance, risk mitigation, and verifiable recovery targets.",
    },
  },

  about: {
    title: "Purpose-Driven Engineering. Technology With Proven Backing.",
    body: [
      "MEG EcoSolutions supports governments and institutions in the design and implementation of modern waste management and waste-to-value infrastructure.",
      "We are not commercial intermediaries. We act as engineers, technical consultants, and project developers — accompanying each phase from feasibility and conceptual engineering through financial structuring, commissioning, and performance optimization.",
    ],
    pillars: [
      {
        title: "Institutional clarity",
        description:
          "In the public sector, clarity is a responsibility and transparency is a functional requirement — from procurement to operations.",
      },
      {
        title: "Integrated approach",
        description:
          "We design complete solutions tailored to the regulatory, economic, and logistical reality of each municipality — not isolated components.",
      },
      {
        title: "Compliance-driven monitoring",
        description:
          "Operational oversight and KPI frameworks are designed early to support ongoing reporting and audit readiness.",
      },
      {
        title: "Commitment to viability",
        description:
          "Projects are evaluated through rigorous technical and financial models to protect public value and long-term operational sustainability.",
      },
    ],
  },

  solutions: {
    title: "Engineering Solutions for Comprehensive Waste Management",
    intro:
      "We develop and implement state-of-the-art technological infrastructure to convert waste into valuable resources. Each solution undergoes technical and financial evaluation to ensure viability within the specific context of each project.",
    items: [
      {
        slug: "waste-to-energy",
        title: "Waste-to-Energy (W2E) — Energy Recovery From Waste",
        body:
          "We design and develop power generation pathways utilizing municipal solid waste, industrial waste, and biomass. Solutions are structured with emissions control and documented operating parameters appropriate for institutional oversight.",
        bullets: [
          "Electricity generation for self-consumption or grid injection",
          "Industrial steam and heat production (project-dependent)",
          "Significant reduction of waste volume destined for landfill (project-dependent)",
          "Post-process recovery opportunities for metals and secondary materials (configuration-dependent)",
        ],
      },
      {
        slug: "thermochemical",
        title: "Thermochemical Conversion — Pyrolysis & Gasification",
        body:
          "We implement thermochemical systems that transform plastic waste, tires, biomass, and industrial residues into valuable outputs such as synthesis gas (syngas), fuel oils, activated carbon, and carbon black (depending on feedstock and configuration).",
        bullets: [
          "Oxygen-free operation (pyrolysis) or controlled-oxygen environments (gasification)",
          "Feedstock flexibility: plastics, rubber, biomass, pre-sorted MSW fractions",
          "Commercially valuable outputs that can create additional revenue streams",
          "Lower carbon footprint compared to uncontrolled disposal pathways (project-dependent)",
        ],
      },
      {
        slug: "specialized-waste",
        title: "Specialized Waste Treatment",
        body:
          "Tailored solutions for waste streams requiring differentiated handling due to hazardous, infectious, or highly regulated characteristics.",
        bullets: [
          "Hospital & infectious waste: certified treatment pathways (configuration-dependent)",
          "Hazardous industrial waste: stabilization, inertization, and engineered containment",
          "Operational SOPs and documentation designed for inspections and audits",
        ],
      },
      {
        slug: "consulting",
        title: "Project Consulting & Engineering",
        body:
          "Beyond technology, we provide end-to-end consulting and engineering support across the full lifecycle of a waste management project.",
        bullets: [
          "Waste characterization and quantification studies",
          "Conceptual, basic, and detailed engineering coordination",
          "Environmental impact and regulatory processing support",
          "Financial modeling inputs and investment structuring support",
          "Construction supervision, commissioning, and startup support",
          "Operational training and post-startup technical support",
        ],
      },
    ],
  },

  advantage: {
    title: "Why Choose MEG EcoSolutions?",
    intro:
      "In a market where equipment suppliers abound but strategic partners are scarce, MEG EcoSolutions positions itself as the technical-financial ally that governments and institutions need to develop waste projects with clear success conditions.",
    differentiators: [
      {
        title: "Technological due diligence",
        description:
          "Each proposed configuration is evaluated against operational constraints, feedstock reality, and compliance requirements — with conservative assumptions for public decision-making.",
      },
      {
        title: "End-to-end engineering",
        description:
          "From feasibility to commissioning and KPI monitoring, a single accountable technical partner manages continuity across phases.",
      },
      {
        title: "Validated scenarios",
        description:
          "Investment projections and performance scenarios are structured under conservative, base, and optimistic cases to support governance and financing reviews.",
      },
      {
        title: "International compliance mindset",
        description:
          "Design and monitoring principles reflect best-practice environmental management approaches and auditability expectations.",
      },
      {
        title: "Local adaptation",
        description:
          "We design for real logistics, procurement constraints, and public communication requirements — not theoretical models.",
      },
    ],
  },

  applications: {
    title: "Government & Institutional Applications (B2G)",
    intro:
      "Technical solutions for municipal waste management and energy resilience — designed for regulatory compliance, risk mitigation, and verifiable recovery targets.",
    useCases: [
      {
        title: "Strategic Waste Diversion & Landfill Mitigation",
        description:
          "Systematic reduction of municipal waste volumes by addressing hard-to-recycle and contaminated fractions at the chemical level, supporting recovery targets and circular economy integration.",
        metricsNote:
          'Partner reference indicates diversion targets "up to 95%" for processed materials (project- and feedstock-dependent).',
      },
      {
        title: "Emission Control & Regulatory Compliance",
        description:
          "Closed-loop operation with multi-stage gas cleaning designed to prevent uncontrolled atmospheric emissions, with parameters monitored via industrial control systems for traceable compliance documentation.",
        metricsNote:
          "Partner reference mentions PLC/SCADA monitoring and ISO-aligned environmental management practices.",
      },
      {
        title: "Decentralized Energy Resilience",
        description:
          "Conversion of suitable waste fractions into synthesis gas to support localized, predictable energy sources and reduce dependency on external grid volatility.",
        metricsNote:
          "Partner reference includes a municipal project example with stated annual electricity generation figures (see source).",
      },
      {
        title: "Regional Economic Impact & Skill Development",
        description:
          "Each implementation acts as an economic driver, creating specialized roles and supporting local technical skill development through structured training programs.",
        metricsNote:
          "Includes direct roles in operation and indirect jobs in logistics, maintenance, and auxiliary services.",
      },
    ],
    principlesTitle: 'B2G "Refraction" Principles',
    principles: [
      "Institutional principle: operate as a technical authority rather than a commercial vendor; transparency is a functional requirement.",
      "Method over promise: performance supported by verifiable parameters rather than general claims.",
      "Technological and regulatory clarity: controlled thermochemical fragmentation defined distinctly for public understanding.",
      "Risk mitigation through integration: modular, replicable systems optimized for stable integration into municipal logistics chains.",
    ],
  },

  markets: {
    title: "Solutions Tailored to Every Industry",
    highlights: [
      "Exclusive representation of European technologies.",
      "Technical and financial project assessment.",
      "Compliance with international standards.",
      "Full support from engineering to commissioning.",
    ],
    items: [
      {
        title: "Public Sector & Municipal Governments",
        description:
          "Design and implementation of integrated municipal solid waste management systems to meet environmental targets, reduce landfill dependency, and support green job creation.",
      },
      {
        title: "Healthcare & Hospitals",
        description:
          "Certified solutions for treatment and final disposal of bioinfectious and pathological waste, aligned with strict biosafety requirements.",
      },
      {
        title: "Industry & Manufacturing",
        description:
          "Industrial waste management systems that reduce disposal cost, recover secondary materials, and strengthen sustainability performance for investors and markets.",
      },
      {
        title: "Agribusiness",
        description:
          "Transformation of agricultural and agro-industrial waste into thermal/electrical energy, biochar, and value-added byproducts — closing the production cycle profitably.",
      },
      {
        title: "Private Companies & Corporations",
        description:
          "Circular economy solutions supporting ESG commitments, carbon footprint reduction, and value creation from internal waste streams.",
      },
    ],
  },

  investmentModel: {
    title: "Viable Projects. Protected Investments. Demonstrable Returns.",
    body:
      "MEG EcoSolutions structures complete, finance-ready projects designed to minimize risk and maximize long-term performance — from feasibility to operation and monitoring.",
    overview:
      "We develop projects through private investment and strategic partnerships. We prepare technical and financial studies together with investment recovery models to ensure long-term project viability.",
    cta: {
      label: "Request Corporate Presentation",
      href: "/contact",
    },
    phases: [
      {
        title: "Phase 1 — Assessment & Feasibility",
        bullets: [
          "Characterization of available waste streams",
          "Local regulatory framework analysis",
          "Market study for derived products and energy",
          "Preliminary technical and economic feasibility report",
        ],
      },
      {
        title: "Phase 2 — Engineering & Financial Structuring",
        bullets: [
          "Conceptual engineering and technology selection",
          "Financial modeling with 15–25 year projections (scenario-based)",
          "Identification of funding sources: private investment, development banks, climate funds, PPPs",
          "Sensitivity analysis and risk scenarios",
        ],
      },
      {
        title: "Phase 3 — Implementation & Commissioning",
        bullets: [
          "Technology procurement and manufacturing supervision",
          "Civil construction, electromechanical assembly, and commissioning",
          "Performance testing and operational optimization",
        ],
      },
      {
        title: "Phase 4 — Operation & Monitoring",
        bullets: [
          "Technical support and training",
          "Operational and environmental KPI monitoring",
          "Scaling and capacity expansion roadmap",
        ],
      },
    ],
  },

  contact: {
    title: "Start the Conversation. Let’s Develop Your Project Together.",
    body: [
      "Whether you represent a municipal government evaluating alternatives to landfill, an institutional operator planning resilience upgrades, or an investor exploring circular economy opportunities — we are ready to listen, analyze, and propose.",
      "All initial inquiries are treated with absolute confidentiality.",
    ],
    company: {
      name: "MEG QUALITY GROUP AB",
      address: ["ÖSTERVÄGEN 23", "196 41 KUNGSÄNGEN"],
      registrationLabel: "No. de org.",
      registrationNumber: "559587-1467",
    },
    fields: [
      { name: "fullName", label: "Full Name", required: true },
      { name: "organization", label: "Organization / Company", required: true },
      { name: "position", label: "Position / Title", required: true },
      { name: "country", label: "Country", required: true },
      { name: "email", label: "Corporate Email", required: true },
      { name: "phone", label: "Phone (optional)", required: false },
      {
        name: "inquiryType",
        label: "Type of Inquiry",
        required: true,
        options: [
          "Public project",
          "Industrial project",
          "Investment opportunity",
          "Technology partnership",
          "Other",
        ],
      },
      { name: "message", label: "Message", required: true },
      {
        name: "requestPresentation",
        label: "I would like to receive MEG EcoSolutions’ Corporate Presentation",
      },
      {
        name: "requestNda",
        label: "I would like to sign a Non-Disclosure Agreement (NDA) prior to the meeting",
      },
    ],
  },
} as const;

