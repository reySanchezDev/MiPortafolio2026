import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    id: 'quantix-multi-company-core',
    featured: true,
    categories: ['backend'],
    title: {
      en: 'Quantix | Multi-Company Inventory and Billing Core',
      es: 'Quantix | Core Multiempresa para Inventario y Facturacion',
    },
    oneLiner: {
      en: 'C# and .NET system on Azure SQL for operating multiple companies and branches from one shared platform.',
      es: 'Sistema en C# y .NET sobre Azure SQL para operar multiples empresas y sucursales desde una sola plataforma.',
    },
    problem: {
      en: 'Organizations with multiple companies and branches needed inventory, billing, reporting, and configuration under one operational core without fragmenting data or setup.',
      es: 'Empresas con varias razones sociales y sucursales necesitaban inventario, facturacion, reporteria y configuracion dentro de un mismo nucleo operativo, sin fragmentar datos ni administracion.',
    },
    roles: [
      { en: 'Solution architecture', es: 'Arquitectura de solucion' },
      { en: 'C# / .NET implementation', es: 'Implementacion C# / .NET' },
      { en: 'Multi-company model', es: 'Modelo multiempresa' },
    ],
    stack: ['C#', '.NET', 'Azure SQL Database'],
    architecture: [
      {
        en: 'Clean Architecture core for inventory, billing, reporting, catalogs, and configuration.',
        es: 'Nucleo en Clean Architecture para inventario, facturacion, reporteria, catalogos y configuracion.',
      },
      {
        en: 'Multi-company and multi-branch model with isolated operational context inside one shared platform.',
        es: 'Modelo multiempresa y multisucursal con contexto operativo aislado dentro de una sola plataforma.',
      },
      {
        en: 'Centralized persistence on Azure SQL Database for transactional consistency and consolidated visibility.',
        es: 'Persistencia centralizada en Azure SQL Database para consistencia transaccional y visibilidad consolidada.',
      },
    ],
    impact: [
      {
        en: 'One installation can manage from one to many companies and their branches.',
        es: 'Una sola instalacion puede administrar desde una hasta N empresas y sus sucursales.',
      },
      {
        en: 'Inventory, billing, and reporting now run through a clearer shared daily workflow.',
        es: 'Inventario, facturacion y reporteria ahora conviven en un flujo diario mucho mas claro.',
      },
      {
        en: 'Operational support becomes simpler by sharing catalogs, configuration, and company-aware rules.',
        es: 'El soporte operativo se simplifica al compartir catalogos, configuracion y reglas por empresa.',
      },
    ],
    caseStudy: {
      context: {
        en: 'Quantix was built as a production system for businesses that need inventory and billing control across multiple companies and branches without duplicating platforms.',
        es: 'Quantix se construyo como un sistema productivo para empresas que necesitan controlar inventario y facturacion en multiples companias y sucursales sin duplicar plataforma.',
      },
      constraints: [
        {
          en: 'Each company had to coexist in the same system with its own rules, catalogs, and configuration.',
          es: 'Cada empresa debia convivir en el mismo sistema con sus propias reglas, catalogos y configuracion.',
        },
        {
          en: 'Inventory and billing required consistent data and reliable responsiveness in daily operations.',
          es: 'Inventario y facturacion exigian consistencia de datos y respuesta confiable en la operacion diaria.',
        },
        {
          en: 'The platform had to grow by modules without turning the user experience into a fragmented system.',
          es: 'La plataforma debia crecer por modulos sin convertir la experiencia en un sistema fragmentado.',
        },
      ],
      solution: [
        {
          en: 'The platform was organized into inventory, billing, reporting, catalog, and configuration modules on top of a .NET backend.',
          es: 'La plataforma se organizo en modulos de inventario, facturacion, reporteria, catalogos y configuracion sobre un backend .NET.',
        },
        {
          en: 'The C# client was shaped around company and branch context so teams could navigate the same core without duplicated flows.',
          es: 'La interfaz en C# se diseno alrededor del contexto por empresa y sucursal para recorrer el mismo nucleo sin duplicar flujos.',
        },
        {
          en: 'The data layer was centralized on Azure SQL Database to preserve traceability, consistency, and consolidated reporting.',
          es: 'La capa de datos se centralizo en Azure SQL Database para preservar trazabilidad, consistencia y reporteria consolidada.',
        },
      ],
      decisions: [
        {
          en: 'A shared multi-company core was prioritized over isolated customer-specific deployments.',
          es: 'Se priorizo un nucleo compartido multiempresa sobre despliegues aislados por cliente.',
        },
        {
          en: 'Company separation lived in the data and configuration model, not in separate application instances.',
          es: 'La separacion por empresa se resolvio en el modelo de datos y configuracion, no en instancias separadas del sistema.',
        },
        {
          en: 'Azure SQL Database was chosen to support transactional consistency and cloud-based operational scale.',
          es: 'Se eligio Azure SQL Database para sostener consistencia transaccional y escalabilidad operativa en la nube.',
        },
      ],
      outcomes: [
        {
          en: 'Multiple companies now operate on one platform with branch-level control.',
          es: 'Multiples empresas operan hoy sobre una misma plataforma con control por sucursal.',
        },
        {
          en: 'Critical modules share one source of data for inventory, billing, and lookup workflows.',
          es: 'Los modulos criticos comparten una sola fuente de datos para inventario, facturacion y consulta.',
        },
        {
          en: 'The system can expand with new catalogs, reports, and settings without breaking the operational core.',
          es: 'El sistema puede crecer con nuevos catalogos, reportes y configuraciones sin romper el nucleo operativo.',
        },
      ],
      lessons: [
        {
          en: 'In multi-company systems, getting context and configuration right matters more than piling on screens.',
          es: 'En sistemas multiempresa, modelar bien el contexto y la configuracion vale mas que acumular pantallas.',
        },
      ],
    },
    video: {
      title: {
        en: 'Quantix in production',
        es: 'Quantix en produccion',
      },
      caption: {
        en: 'A real walkthrough of the system showing the multi-company operational core, billing flows, and daily management context.',
        es: 'Recorrido real del sistema mostrando el nucleo operativo multiempresa, los flujos de facturacion y el contexto de gestion diaria.',
      },
      embedUrl: 'https://www.youtube-nocookie.com/embed/FL7aUb48rls?start=10&rel=0&modestbranding=1',
    },
    links: {
      caseStudyAnchor: 'quantix-multi-company-core',
    },
  },
  {
    id: 'ls-central-statement-insufficiency-control',
    featured: true,
    categories: ['backend'],
    title: {
      en: 'LS Central Statement Insufficiency Control',
      es: 'Control de Insuficiencias para Open Statement en LS Central',
    },
    oneLiner: {
      en: 'AL extension for Business Central + LS Central that surfaces statement shortages and blocks dirty posting with configurable rules.',
      es: 'Extension en AL para Business Central + LS Central que muestra insuficiencias por statement y bloquea el posteo con reglas configurables.',
    },
    problem: {
      en: 'LS only stopped Post Statement with a generic negative-inventory alert, leaving operations without the exact items and quantities needed to correct the statement before posting.',
      es: 'LS solo detenia el Post Statement con una alerta generica de inventario negativo, dejando a operacion sin el detalle de items y cantidades necesario para corregir el statement antes de postear.',
    },
    roles: [
      { en: 'Functional analysis', es: 'Analisis funcional' },
      { en: 'AL architecture', es: 'Arquitectura AL' },
      { en: 'Page extensions + post guard', es: 'Page extensions + guard de posteo' },
    ],
    stack: ['AL', 'Dynamics 365 Business Central', 'LS Central', 'Page Extensions', 'Codeunits'],
    architecture: [
      {
        en: 'Two page extensions: one on Open Statement for the operational entry point, another on setup to control insufficiency behavior and feature flags.',
        es: 'Dos page extensions: una sobre Open Statement para el punto de entrada operativo y otra sobre setup para controlar el comportamiento de insuficiencias y los feature flags.',
      },
      {
        en: 'Dedicated calculation and guard codeunits separate UI, business rules, and posting protection inside the LS flow.',
        es: 'Codeunits dedicadas de calculo y guard separan UI, reglas de negocio y proteccion del posteo dentro del flujo de LS.',
      },
      {
        en: 'Statement-aware list, drilldown trace, and export actions turn a blocking event into actionable inventory work.',
        es: 'Lista contextual por statement, drilldown de trace y acciones de exportacion convierten un bloqueo en trabajo operativo accionable.',
      },
    ],
    impact: [
      {
        en: 'Operations moved from a generic stop message to an exact insufficiency list for the selected statement and date.',
        es: 'Operacion paso de un mensaje generico de bloqueo a una lista exacta de insuficiencias para el statement y fecha seleccionados.',
      },
      {
        en: 'Teams can adjust inventory or execute corrective movements before posting, keeping statements and inventory cleaner.',
        es: 'Los equipos pueden ajustar inventario o ejecutar movimientos correctivos antes de postear, manteniendo mas limpios los statements y el inventario.',
      },
      {
        en: 'Posting control became configurable and safer through setup flags and pre-post validation.',
        es: 'El control de posteo se volvio configurable y mas seguro mediante setup y validacion antes del posteo.',
      },
    ],
    caseStudy: {
      context: {
        en: 'Built for a Nicaraguan company running Dynamics 365 Business Central with LS Central BackOffice and POS, where nightly statement closure needed more than a blocking alert.',
        es: 'Disenado para una empresa en Nicaragua que operaba Dynamics 365 Business Central con LS Central BackOffice y POS, donde el cierre nocturno de statements necesitaba mucho mas que una alerta de bloqueo.',
      },
      constraints: [
        {
          en: 'The feature had to live inside Open Statement so the nightly operation would not depend on external screens or manual workarounds.',
          es: 'La funcionalidad debia vivir dentro de Open Statement para que la operacion nocturna no dependiera de pantallas externas ni de workarounds manuales.',
        },
        {
          en: 'The solution had to explain the exact insufficiencies for that specific statement and date, not just signal that something was wrong.',
          es: 'La solucion tenia que explicar las insuficiencias exactas para ese statement y fecha concretos, no solo indicar que algo estaba mal.',
        },
        {
          en: 'Business rules had to remain configurable through setup, including posting block behavior and deeper calculation logic.',
          es: 'Las reglas de negocio debian seguir siendo configurables desde setup, incluyendo el bloqueo del posteo y la logica de calculo mas profunda.',
        },
      ],
      solution: [
        {
          en: 'Added an Insufficiencies action through a page extension on Open Statement to open a statement-scoped list of insufficient items.',
          es: 'Se agrego una accion Insufficiencies mediante una page extension sobre Open Statement para abrir una lista acotada al statement con todos los items insuficientes.',
        },
        {
          en: 'Built a second page extension on the existing setup so the company could enable or disable posting block and complementary insufficiency logic.',
          es: 'Se construyo una segunda page extension sobre el setup existente para que la empresa pudiera activar o desactivar el bloqueo de posteo y la logica complementaria de insuficiencias.',
        },
        {
          en: 'Implemented dedicated AL codeunits for calculation and post guard, including the validation that stops Post Statement when insufficiencies still exist.',
          es: 'Se implementaron codeunits dedicadas en AL para calculo y guard de posteo, incluyendo la validacion que detiene Post Statement cuando las insuficiencias siguen existiendo.',
        },
        {
          en: 'Added operational trace and export capabilities so users could move from alert to correction with concrete evidence per item.',
          es: 'Se anadieron capacidades de trace y exportacion operativa para que el usuario pasara de la alerta a la correccion con evidencia concreta por item.',
        },
      ],
      decisions: [
        {
          en: 'The feature was embedded in the LS BackOffice page instead of a detached process, maximizing adoption in the real nightly workflow.',
          es: 'La funcionalidad se incrusto en la pagina de LS BackOffice en vez de crear un proceso aislado, maximizando adopcion dentro del flujo nocturno real.',
        },
        {
          en: 'Setup, UI entry point, calculation engine, and posting guard were separated to keep business rules maintainable and auditable.',
          es: 'Setup, punto de entrada UI, motor de calculo y guard de posteo se separaron para mantener las reglas de negocio mantenibles y auditables.',
        },
        {
          en: 'Actionable evidence per statement was prioritized over the generic native message because operations needed to fix inventory before closing.',
          es: 'Se priorizo evidencia accionable por statement sobre el mensaje generico nativo, porque operacion necesitaba corregir inventario antes del cierre.',
        },
      ],
      outcomes: [
        {
          en: 'Users can now see every insufficient product tied to the current statement before attempting posting.',
          es: 'Ahora los usuarios pueden ver cada producto insuficiente asociado al statement actual antes de intentar el posteo.',
        },
        {
          en: 'Inventory adjustments and corrective movements happen with real statement-level evidence instead of guesswork.',
          es: 'Los ajustes de inventario y movimientos correctivos se realizan con evidencia real a nivel de statement en lugar de suposiciones.',
        },
        {
          en: 'Nightly closing became cleaner because posting is stopped only after presenting actionable insufficiency detail.',
          es: 'El cierre nocturno se volvio mas limpio porque el posteo se detiene solo despues de presentar detalle accionable de insuficiencias.',
        },
      ],
      lessons: [
        {
          en: 'In retail backoffice flows, blocking alone is not enough; the system must explain the problem exactly where the user can resolve it.',
          es: 'En flujos de backoffice retail, bloquear no basta; el sistema debe explicar el problema exactamente donde el usuario puede resolverlo.',
        },
      ],
    },
    video: {
      title: {
        en: 'Temporary reference video',
        es: 'Video de referencia temporal',
      },
      caption: {
        en: 'Temporary placeholder while the dedicated walkthrough for the LS Central insufficiency module is prepared.',
        es: 'Placeholder temporal mientras sustituimos este bloque por el walkthrough especifico del modulo de insuficiencias en LS Central.',
      },
      embedUrl: 'https://www.youtube-nocookie.com/embed/FL7aUb48rls?start=10&rel=0&modestbranding=1',
    },
    links: {
      caseStudyAnchor: 'ls-central-statement-insufficiency-control',
    },
  },
  {
    id: 'qa-release-control-plane',
    featured: true,
    categories: ['backend', 'automation'],
    title: {
      en: 'QA and Release Control Plane',
      es: 'Plano de Control para QA y Releases',
    },
    oneLiner: {
      en: 'Operational quality workflow that connects evidence, approvals, and release readiness.',
      es: 'Flujo de calidad que conecta evidencia, aprobaciones y readiness de release.',
    },
    problem: {
      en: 'Quality signals were scattered across manual notes, chats, and disconnected reports.',
      es: 'Las senales de calidad estaban dispersas entre notas manuales, chats y reportes desconectados.',
    },
    roles: [
      { en: 'QA process design', es: 'Diseno de proceso QA' },
      { en: 'Automation workflows', es: 'Flujos de automatizacion' },
      { en: 'Release governance', es: 'Gobernanza de release' },
    ],
    stack: ['ASP.NET Core', 'SQL Server', 'n8n', 'Power BI', 'Teams'],
    architecture: [
      {
        en: 'Unified release checklist and evidence capture by environment.',
        es: 'Checklist unificado de release y captura de evidencia por ambiente.',
      },
      {
        en: 'Automated alerts for pending approvals, blocked defects, and retests.',
        es: 'Alertas automaticas para aprobaciones pendientes, defectos y re-pruebas.',
      },
      {
        en: 'Audit trail for defects, fixes, and go-live decisions.',
        es: 'Traza auditable para defectos, correcciones y decisiones de salida.',
      },
    ],
    impact: [
      {
        en: 'Higher release confidence with clearer go/no-go visibility.',
        es: 'Mayor confianza en releases con visibilidad clara para go/no-go.',
      },
      {
        en: 'Faster coordination between QA, development, and operations.',
        es: 'Coordinacion mas rapida entre QA, desarrollo y operaciones.',
      },
      {
        en: 'Reduced avoidable regressions through explicit quality gates.',
        es: 'Reduccion de regresiones evitables mediante gates explicitos de calidad.',
      },
    ],
    caseStudy: {
      context: {
        en: 'Created for teams delivering frequent changes with strict continuity expectations.',
        es: 'Creado para equipos con cambios frecuentes y exigencia alta de continuidad.',
      },
      constraints: [
        {
          en: 'Needed immediate adoption without forcing heavy enterprise tooling.',
          es: 'Se requeria adopcion inmediata sin imponer tooling enterprise pesado.',
        },
        {
          en: 'Mixed technical profiles across stakeholders.',
          es: 'Perfiles tecnicos mixtos entre stakeholders.',
        },
      ],
      solution: [
        {
          en: 'Built lightweight governance with automation-first reminders and escalations.',
          es: 'Se construyo gobernanza ligera con recordatorios y escalaciones automatizadas.',
        },
        {
          en: 'Standardized release evidence and linked it to approval checkpoints.',
          es: 'Se estandarizo evidencia de release y se vinculo a checkpoints de aprobacion.',
        },
      ],
      decisions: [
        {
          en: 'Enforced quality by sensible defaults, not process bureaucracy.',
          es: 'Se reforzo calidad con defaults utiles, no con burocracia.',
        },
        {
          en: 'Made release status visible for both technical and business teams.',
          es: 'Se hizo visible el estado de release para negocio y equipo tecnico.',
        },
      ],
      outcomes: [
        {
          en: 'Release readiness became measurable before production deployment.',
          es: 'La readiness de release se volvio medible antes de produccion.',
        },
      ],
      lessons: [
        {
          en: 'Simple and clear workflows outperform complex ones under delivery pressure.',
          es: 'Flujos simples y claros superan a los complejos bajo presion de entrega.',
        },
      ],
    },
    links: {
      caseStudyAnchor: 'qa-release-control-plane',
      demo: 'https://github.com/',
    },
  },
  {
    id: 'enterprise-integration-hub',
    featured: false,
    categories: ['backend', 'integrations', 'automation'],
    title: {
      en: 'Enterprise Integration Hub',
      es: 'Hub Empresarial de Integraciones',
    },
    oneLiner: {
      en: 'Integration layer connecting ERP, POS, messaging channels, and automation bots.',
      es: 'Capa de integracion que conecta ERP, POS, canales de mensajeria y bots de automatizacion.',
    },
    problem: {
      en: 'Transactional and operational signals lived in isolated systems with manual coordination.',
      es: 'Senales transaccionales y operativas vivian en sistemas aislados con coordinacion manual.',
    },
    roles: [
      { en: 'Integration architecture', es: 'Arquitectura de integraciones' },
      { en: 'Automation design', es: 'Diseno de automatizacion' },
      { en: 'Operational support model', es: 'Modelo de soporte operativo' },
    ],
    stack: ['ASP.NET Core', 'Business Central', 'LS Central', 'n8n', 'OpenAI API', 'Teams'],
    architecture: [
      {
        en: 'Event-driven integration flows with safe retries and delivery tracking.',
        es: 'Flujos orientados a eventos con reintentos seguros y trazabilidad de entrega.',
      },
      {
        en: 'Notification routing by severity and business context.',
        es: 'Enrutamiento de notificaciones por severidad y contexto de negocio.',
      },
      {
        en: 'Automation bots for repetitive triage and escalations.',
        es: 'Bots de automatizacion para triage repetitivo y escalaciones.',
      },
    ],
    impact: [
      {
        en: 'Lower manual coordination load across technical and business teams.',
        es: 'Menor carga de coordinacion manual entre equipos tecnicos y de negocio.',
      },
      {
        en: 'Faster reaction time to operational incidents.',
        es: 'Menor tiempo de reaccion ante incidentes operativos.',
      },
      {
        en: 'Clearer traceability from event origin to final action.',
        es: 'Trazabilidad mas clara desde origen del evento hasta accion final.',
      },
    ],
    caseStudy: {
      context: {
        en: 'Designed for operations where speed and traceability are both critical.',
        es: 'Disenado para operaciones donde velocidad y trazabilidad son criticas.',
      },
      constraints: [
        {
          en: 'Different vendors and protocols with uneven reliability assumptions.',
          es: 'Proveedores y protocolos distintos con supuestos desiguales de confiabilidad.',
        },
        {
          en: 'Needed low-friction adoption by non-technical users as well.',
          es: 'Se necesitaba adopcion de baja friccion incluso para usuarios no tecnicos.',
        },
      ],
      solution: [
        {
          en: 'Created normalization and validation layer before cross-system dispatch.',
          es: 'Se creo una capa de normalizacion y validacion antes del despacho cross-system.',
        },
        {
          en: 'Linked bot actions with trace IDs for operational auditing.',
          es: 'Se enlazaron acciones de bots con trace IDs para auditoria operativa.',
        },
      ],
      decisions: [
        {
          en: 'Mandatory idempotency and traceability from first release.',
          es: 'Idempotencia y trazabilidad obligatorias desde la primera version.',
        },
      ],
      outcomes: [
        {
          en: 'Cross-system visibility enabled faster and safer daily decisions.',
          es: 'La visibilidad cross-system permitio decisiones diarias mas rapidas y seguras.',
        },
      ],
      lessons: [
        {
          en: 'Integration quality is defined by failure handling, not only happy paths.',
          es: 'La calidad de integracion se define por el manejo de fallos, no solo por happy paths.',
        },
      ],
    },
    links: {
      caseStudyAnchor: 'enterprise-integration-hub',
      demo: 'https://github.com/',
      repo: 'https://github.com/',
    },
  },
];
