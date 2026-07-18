export type NavItem = { label: string; href: string };

export const siteContentEs = {
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

  meta: {
    titleTemplate: "%s | MEG EcoSolutions",
    defaultTitle: "MEG EcoSolutions",
    description:
      "Soluciones técnicas para la gestión municipal de residuos y la resiliencia energética — diseñadas para el desempeño B2G, el cumplimiento normativo y la recuperación medible.",
    openGraphLocale: "es_LA",
  },

  ui: {
    skipToContent: "Saltar al contenido",
    menu: "Menú",
    closeMenu: "Cerrar",
    scheduleConsultation: "Agendar una consulta",
    language: "Idioma",
    pages: "Páginas",
    partner: "Socio",
    mainPartner: "Socio principal:",
    viewB2gApplications: "Ver aplicaciones B2G",
    allRightsReserved: "Todos los derechos reservados.",
    sitemap: "Mapa del sitio",
    robots: "Robots",
    homeEyebrow: "Gestión municipal de residuos • Resiliencia energética",
    homeHighlightsTitle: "Diseñado para el desempeño y la rendición de cuentas B2G",
    homeHighlightsIntro:
      "Claridad regulatoria, resultados medibles e integración en la logística municipal existente — ingeniería para la operación en el mundo real.",
    aboutPillarsTitle: "Pilares institucionales",
    marketsIntro:
      "Modelos de colaboración para B2G, operadores institucionales y actores estratégicos a lo largo de la cadena de valor de los residuos.",
    contactAsideTitle: "Contacto directo",
    contactAsideIntro: "¿Prefiere el correo electrónico? Respondemos desde una bandeja institucional monitoreada.",
    contactEmailLabel: "Correo electrónico",
    contactTeamLabel: "Equipo",
    contactCompanyLabel: "Empresa",
    formRequired: "Obligatorio",
    formInvalidEmail: "Ingrese un correo electrónico válido",
    formSending: "Enviando…",
    formSubmit: "Enviar consulta",
    formSuccessTitle: "Gracias — hemos recibido su consulta.",
    formSuccessBody:
      "Nuestro equipo revisará su mensaje y responderá a la brevedad. Todas las consultas se tratan con absoluta confidencialidad.",
    formErrorGeneric: "Algo salió mal. Por favor escriba directamente a {email}.",
    formErrorNetwork: "No fue posible conectar con el servidor. Por favor escriba directamente a {email}.",
    formSelectPlaceholder: "Seleccione un tipo de consulta",
    formConfidentiality: "Todas las consultas iniciales se tratan con absoluta confidencialidad.",
  },

  pages: {
    about: {
      title: "Nosotros",
      description: "Ingeniería con propósito y entrega transparente para infraestructura de residuos B2G.",
    },
    solutions: {
      title: "Soluciones",
      description:
        "Soluciones de ingeniería para la gestión integral de residuos municipales, la recuperación y la resiliencia energética.",
    },
    applications: {
      title: "Aplicaciones (B2G)",
      description:
        "Aplicaciones gubernamentales e institucionales para la desviación de residuos, el control de emisiones y la resiliencia energética.",
    },
    markets: {
      title: "Mercados",
      description: "Soluciones adaptadas a las necesidades del sector público, la salud, la industria y las empresas.",
    },
    investmentModel: {
      title: "Modelo de Inversión",
      description:
        "Un modelo de desarrollo estructurado desde la factibilidad hasta la operación — diseñado para minimizar el riesgo y respaldar el desempeño a largo plazo.",
    },
    contact: {
      title: "Contacto",
      description:
        "Inicie la conversación. Consulta confidencial y estructurada para proyectos B2G e institucionales.",
    },
  },

  nav: [
    { label: "Soluciones", href: "/solutions" },
    { label: "Aplicaciones", href: "/applications" },
    { label: "Mercados", href: "/markets" },
    { label: "Modelo de Inversión", href: "/investment-model" },
    { label: "Nosotros", href: "/about" },
    { label: "Contacto", href: "/contact" },
  ] satisfies NavItem[],

  home: {
    hero: {
      headline: "Transformamos Residuos en Energía, Recursos y Oportunidades de Inversión.",
      subheadline:
        "Ingeniería avanzada de economía circular — tecnología europea comprobada para la gestión municipal de residuos y la resiliencia energética.",
      regionalRole:
        "Representante exclusivo en Bolivia y América Latina de tecnologías líderes que transforman residuos en energía y recursos valiosos.",
      supporting:
        "MEG EcoSolutions diseña y entrega soluciones técnicas que reducen la dependencia de los rellenos sanitarios, mejoran el desempeño regulatorio y convierten flujos de residuos aptos en recuperación medible y energía utilizable. Operamos como autoridad técnica para actores del sector público, con parámetros verificables, documentación clara y sistemas modulares diseñados para integrarse en la logística municipal existente.",
      ctas: [
        { label: "Explorar Nuestras Soluciones", href: "/solutions" },
        { label: "Agendar una Consulta Estratégica", href: "/contact" },
      ],
    },
    highlights: [
      {
        title: "Desviación de residuos y mitigación de rellenos sanitarios",
        description:
          "Reducción orientada de volúmenes de residuos residuales, incluidas fracciones de difícil reciclaje, alineada con metas de recuperación y objetivos de economía circular.",
      },
      {
        title: "Control de emisiones y cumplimiento normativo",
        description:
          "Operación en circuito cerrado y estrategias de tratamiento en múltiples etapas diseñadas para un cumplimiento trazable y una comunicación pública transparente.",
      },
      {
        title: "Resiliencia energética descentralizada",
        description:
          "Vías de energía derivada de residuos que respaldan estrategias de generación local predecible y la planificación de resiliencia regional.",
      },
      {
        title: "Desarrollo de proyectos financiables",
        description:
          "Debida diligencia técnica, escenarios conservadores y planificación de implementación diseñados para la toma de decisiones institucionales y la preparación financiera.",
      },
    ],
    partner: {
      title: "Socio Tecnológico Principal",
      bodyBefore: "Nuestro socio tecnológico principal es ",
      bodyAfter:
        ", con aplicaciones diseñadas para el cumplimiento regulatorio, la mitigación de riesgos y metas de recuperación verificables.",
    },
  },

  about: {
    title: "Ingeniería con Propósito. Tecnología con Respaldo Comprobado.",
    body: [
      "MEG EcoSolutions apoya a gobiernos e instituciones en el diseño e implementación de infraestructura moderna de gestión de residuos y de valorización de residuos.",
      "No somos intermediarios comerciales. Actuamos como ingenieros, consultores técnicos y desarrolladores de proyectos — acompañando cada fase desde la factibilidad y la ingeniería conceptual hasta la estructuración financiera, la puesta en marcha y la optimización del desempeño.",
    ],
    pillars: [
      {
        title: "Claridad institucional",
        description:
          "En el sector público, la claridad es una responsabilidad y la transparencia es un requisito funcional — desde la contratación hasta las operaciones.",
      },
      {
        title: "Enfoque integrado",
        description:
          "Diseñamos soluciones completas adaptadas a la realidad regulatoria, económica y logística de cada municipio — no componentes aislados.",
      },
      {
        title: "Monitoreo orientado al cumplimiento",
        description:
          "La supervisión operativa y los marcos de KPI se diseñan desde etapas tempranas para respaldar el reporte continuo y la preparación para auditorías.",
      },
      {
        title: "Compromiso con la viabilidad",
        description:
          "Los proyectos se evalúan mediante modelos técnicos y financieros rigurosos para proteger el valor público y la sostenibilidad operativa a largo plazo.",
      },
    ],
  },

  solutions: {
    title: "Soluciones de Ingeniería para la Gestión Integral de Residuos",
    intro:
      "Desarrollamos e implementamos infraestructura tecnológica de vanguardia para convertir residuos en recursos valiosos. Cada solución se somete a evaluación técnica y financiera para asegurar su viabilidad en el contexto específico de cada proyecto.",
    items: [
      {
        slug: "waste-to-energy",
        title: "Waste-to-Energy (W2E) — Recuperación Energética a Partir de Residuos",
        body:
          "Diseñamos y desarrollamos vías de generación de energía utilizando residuos sólidos municipales, residuos industriales y biomasa. Las soluciones se estructuran con control de emisiones y parámetros de operación documentados, adecuados para la supervisión institucional.",
        bullets: [
          "Generación de electricidad para autoconsumo o inyección a la red",
          "Producción de vapor industrial y calor (según el proyecto)",
          "Reducción significativa del volumen de residuos destinados a relleno sanitario (según el proyecto)",
          "Oportunidades de recuperación posterior de metales y materiales secundarios (según la configuración)",
        ],
      },
      {
        slug: "thermochemical",
        title: "Conversión Termoquímica — Pirólisis y Gasificación",
        body:
          "Implementamos sistemas termoquímicos que transforman residuos plásticos, neumáticos, biomasa y residuos industriales en productos valiosos como gas de síntesis (syngas), aceites combustibles, carbón activado y negro de humo (según la materia prima y la configuración).",
        bullets: [
          "Operación sin oxígeno (pirólisis) o en entornos de oxígeno controlado (gasificación)",
          "Flexibilidad de materia prima: plásticos, caucho, biomasa, fracciones de RSU preseleccionadas",
          "Productos de valor comercial que pueden generar flujos de ingresos adicionales",
          "Menor huella de carbono en comparación con vías de disposición no controlada (según el proyecto)",
        ],
      },
      {
        slug: "specialized-waste",
        title: "Tratamiento Especializado de Residuos",
        body:
          "Soluciones a medida para flujos de residuos que requieren un manejo diferenciado por sus características peligrosas, infecciosas o altamente reguladas.",
        bullets: [
          "Residuos hospitalarios e infecciosos: vías de tratamiento certificadas (según la configuración)",
          "Residuos industriales peligrosos: estabilización, inertización y contención ingenierizada",
          "POE operativos y documentación diseñados para inspecciones y auditorías",
        ],
      },
      {
        slug: "consulting",
        title: "Consultoría e Ingeniería de Proyectos",
        body:
          "Más allá de la tecnología, brindamos consultoría e ingeniería de extremo a extremo a lo largo de todo el ciclo de vida de un proyecto de gestión de residuos.",
        bullets: [
          "Estudios de caracterización y cuantificación de residuos",
          "Coordinación de ingeniería conceptual, básica y de detalle",
          "Apoyo en impacto ambiental y tramitación regulatoria",
          "Insumos para modelado financiero y apoyo en estructuración de inversión",
          "Supervisión de obra, puesta en marcha y apoyo al arranque",
          "Capacitación operativa y soporte técnico posterior al arranque",
        ],
      },
    ],
  },

  advantage: {
    title: "¿Por Qué Elegir MEG EcoSolutions?",
    intro:
      "En un mercado donde abundan los proveedores de equipos pero escasean los socios estratégicos, MEG EcoSolutions se posiciona como el aliado técnico-financiero que gobiernos e instituciones necesitan para desarrollar proyectos de residuos con condiciones claras de éxito.",
    differentiators: [
      {
        title: "Debida diligencia tecnológica",
        description:
          "Cada configuración propuesta se evalúa frente a restricciones operativas, la realidad de la materia prima y los requisitos de cumplimiento — con supuestos conservadores para la toma de decisiones públicas.",
      },
      {
        title: "Ingeniería de extremo a extremo",
        description:
          "Desde la factibilidad hasta la puesta en marcha y el monitoreo de KPI, un único socio técnico responsable gestiona la continuidad entre fases.",
      },
      {
        title: "Escenarios validados",
        description:
          "Las proyecciones de inversión y los escenarios de desempeño se estructuran bajo casos conservador, base y optimista para respaldar revisiones de gobernanza y financiamiento.",
      },
      {
        title: "Enfoque de cumplimiento internacional",
        description:
          "Los principios de diseño y monitoreo reflejan enfoques de mejores prácticas en gestión ambiental y expectativas de auditabilidad.",
      },
      {
        title: "Adaptación local",
        description:
          "Diseñamos para la logística real, las restricciones de contratación y los requisitos de comunicación pública — no para modelos teóricos.",
      },
    ],
  },

  applications: {
    title: "Aplicaciones Gubernamentales e Institucionales (B2G)",
    intro:
      "Soluciones técnicas para la gestión municipal de residuos y la resiliencia energética — diseñadas para el cumplimiento regulatorio, la mitigación de riesgos y metas de recuperación verificables.",
    useCases: [
      {
        title: "Desviación Estratégica de Residuos y Mitigación de Rellenos Sanitarios",
        description:
          "Reducción sistemática de volúmenes de residuos municipales al abordar fracciones de difícil reciclaje y contaminadas a nivel químico, respaldando metas de recuperación e integración de economía circular.",
        metricsNote:
          'La referencia del socio indica metas de desviación "de hasta el 95%" para materiales procesados (dependientes del proyecto y de la materia prima).',
      },
      {
        title: "Control de Emisiones y Cumplimiento Regulatorio",
        description:
          "Operación en circuito cerrado con limpieza de gases en múltiples etapas, diseñada para prevenir emisiones atmosféricas no controladas, con parámetros monitoreados mediante sistemas de control industrial para documentación de cumplimiento trazable.",
        metricsNote:
          "La referencia del socio menciona monitoreo PLC/SCADA y prácticas de gestión ambiental alineadas con ISO.",
      },
      {
        title: "Resiliencia Energética Descentralizada",
        description:
          "Conversión de fracciones de residuos aptas en gas de síntesis para respaldar fuentes de energía localizadas y predecibles, y reducir la dependencia de la volatilidad de la red externa.",
        metricsNote:
          "La referencia del socio incluye un ejemplo de proyecto municipal con cifras anuales de generación eléctrica indicadas (ver fuente).",
      },
      {
        title: "Impacto Económico Regional y Desarrollo de Capacidades",
        description:
          "Cada implementación actúa como motor económico, creando roles especializados y respaldando el desarrollo de capacidades técnicas locales mediante programas de capacitación estructurados.",
        metricsNote:
          "Incluye roles directos en operación y empleos indirectos en logística, mantenimiento y servicios auxiliares.",
      },
    ],
    principlesTitle: 'Principios de "Refracción" B2G',
    principles: [
      "Principio institucional: operar como autoridad técnica más que como proveedor comercial; la transparencia es un requisito funcional.",
      "Método sobre promesa: desempeño respaldado por parámetros verificables más que por afirmaciones generales.",
      "Claridad tecnológica y regulatoria: fragmentación termoquímica controlada definida de forma distinta para la comprensión pública.",
      "Mitigación de riesgos mediante la integración: sistemas modulares y replicables, optimizados para una integración estable en las cadenas logísticas municipales.",
    ],
  },

  markets: {
    title: "Soluciones Adaptadas a Cada Sector",
    highlights: [
      "Representación exclusiva de tecnologías europeas.",
      "Evaluación técnica y financiera de proyectos.",
      "Cumplimiento de estándares internacionales.",
      "Soporte integral desde la ingeniería hasta la puesta en marcha.",
    ],
    items: [
      {
        title: "Sector Público y Gobiernos Municipales",
        description:
          "Diseño e implementación de sistemas integrados de gestión de residuos sólidos municipales para cumplir metas ambientales, reducir la dependencia de rellenos sanitarios y respaldar la creación de empleos verdes.",
      },
      {
        title: "Salud y Hospitales",
        description:
          "Soluciones certificadas para el tratamiento y disposición final de residuos bioinfecciosos y patológicos, alineadas con requisitos estrictos de bioseguridad.",
      },
      {
        title: "Industria y Manufactura",
        description:
          "Sistemas de gestión de residuos industriales que reducen el costo de disposición, recuperan materiales secundarios y fortalecen el desempeño en sostenibilidad ante inversionistas y mercados.",
      },
      {
        title: "Agroindustria",
        description:
          "Transformación de residuos agrícolas y agroindustriales en energía térmica/eléctrica, biochar y subproductos de valor agregado — cerrando el ciclo productivo de forma rentable.",
      },
      {
        title: "Empresas Privadas y Corporaciones",
        description:
          "Soluciones de economía circular que respaldan compromisos ESG, la reducción de la huella de carbono y la creación de valor a partir de flujos internos de residuos.",
      },
    ],
  },

  investmentModel: {
    title: "Proyectos Viables. Inversiones Protegidas. Retornos Demostrables.",
    body:
      "MEG EcoSolutions estructura proyectos completos y listos para financiamiento, diseñados para minimizar el riesgo y maximizar el desempeño a largo plazo — desde la factibilidad hasta la operación y el monitoreo.",
    overview:
      "Desarrollamos proyectos mediante inversión privada y alianzas estratégicas. Preparamos estudios técnicos y financieros junto con modelos de recuperación de la inversión para asegurar la viabilidad del proyecto a largo plazo.",
    cta: {
      label: "Solicitar Presentación Corporativa",
      href: "/contact",
    },
    phases: [
      {
        title: "Fase 1 — Evaluación y Factibilidad",
        bullets: [
          "Caracterización de los flujos de residuos disponibles",
          "Análisis del marco regulatorio local",
          "Estudio de mercado de productos derivados y energía",
          "Informe preliminar de factibilidad técnica y económica",
        ],
      },
      {
        title: "Fase 2 — Ingeniería y Estructuración Financiera",
        bullets: [
          "Ingeniería conceptual y selección de tecnología",
          "Modelado financiero con proyecciones a 15–25 años (basado en escenarios)",
          "Identificación de fuentes de financiamiento: inversión privada, bancos de desarrollo, fondos climáticos, APP",
          "Análisis de sensibilidad y escenarios de riesgo",
        ],
      },
      {
        title: "Fase 3 — Implementación y Puesta en Marcha",
        bullets: [
          "Adquisición de tecnología y supervisión de fabricación",
          "Construcción civil, montaje electromecánico y puesta en marcha",
          "Pruebas de desempeño y optimización operativa",
        ],
      },
      {
        title: "Fase 4 — Operación y Monitoreo",
        bullets: [
          "Soporte técnico y capacitación",
          "Monitoreo de KPI operativos y ambientales",
          "Hoja de ruta de escalamiento y ampliación de capacidad",
        ],
      },
    ],
  },

  contact: {
    title: "Inicie la Conversación. Desarrollaremos Su Proyecto Juntos.",
    body: [
      "Ya sea que represente a un gobierno municipal que evalúa alternativas al relleno sanitario, a un operador institucional que planifica mejoras de resiliencia, o a un inversionista que explora oportunidades de economía circular — estamos listos para escuchar, analizar y proponer.",
      "Todas las consultas iniciales se tratan con absoluta confidencialidad.",
    ],
    company: {
      name: "MEG QUALITY GROUP AB",
      address: ["ÖSTERVÄGEN 23", "196 41 KUNGSÄNGEN", "Noruega"],
      registrationLabel: "No. de org.",
      registrationNumber: "559587-1467",
    },
    people: [
      {
        name: "Marius-Constantin Giuvelic",
        role: "Representante Global",
        phone: "+46 73 598 74 03",
        phoneHref: "tel:+46735987403",
      },
      {
        name: "Daniel Luis Aguirre Tellez",
        role: "Representante para América Latina",
        phone: "+46 73 543 27 11",
        phoneHref: "tel:+46735432711",
      },
      {
        name: "Miguel Fernando Calvo Mercado",
        role: "Representante para América Latina",
        phone: "+591 718 78205",
        phoneHref: "tel:+59171878205",
      },
    ],
    fields: [
      { name: "fullName", label: "Nombre completo", required: true },
      { name: "organization", label: "Organización / Empresa (opcional)", required: false },
      { name: "position", label: "Cargo / Título (opcional)", required: false },
      { name: "country", label: "País", required: true },
      { name: "email", label: "Correo electrónico corporativo", required: true },
      { name: "phone", label: "Teléfono (opcional)", required: false },
      {
        name: "inquiryType",
        label: "Tipo de consulta",
        required: true,
        options: [
          "Proyecto público",
          "Proyecto industrial",
          "Oportunidad de inversión",
          "Alianza tecnológica",
          "Otro",
        ],
      },
      { name: "message", label: "Mensaje", required: true },
      {
        name: "requestPresentation",
        label: "Deseo recibir la Presentación Corporativa de MEG EcoSolutions",
      },
      {
        name: "requestNda",
        label: "Deseo firmar un Acuerdo de Confidencialidad (NDA) antes de la reunión",
      },
    ],
  },
} as const;
