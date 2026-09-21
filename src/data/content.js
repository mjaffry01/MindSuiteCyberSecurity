export const navItems = [
  { id: "services", label: "Services" },
  { id: "capabilities", label: "Capabilities" },
  { id: "approach", label: "Approach" },
  { id: "industries", label: "Industries" },
  { id: "contact", label: "Contact" },
];

export const heroStats = [
  { value: "24", suffix: "/7", label: "SOC monitoring", icon: "radar" },
  { value: "5", suffix: "", label: "Areas of coverage", icon: "layers" },
  { value: "26", suffix: "+", label: "Security services", icon: "boxes" },
  { value: "6", suffix: "", label: "Core frameworks", icon: "file-badge" },
];

export const pillars = [
  {
    id: "threat",
    name: "Cyber Risk & Threat Assessment",
    short: "Assess",
    color: "#DD8FBD",
    icon: "crosshair",
    summary:
      "Know what can hurt you before an attacker does. Threat assessments, intelligence, red teaming, and scoped penetration testing.",
    services: [
      {
        name: "Threat Assessments",
        icon: "clipboard",
        blurb: "Structured threat modeling and posture reviews for critical assets, workloads, and access paths.",
        chips: ["Threat modeling", "Posture review", "Critical-asset map", "Board brief"],
      },
      {
        name: "Threat Intelligence",
        icon: "radar",
        blurb: "Dark-web monitoring, credential exposure, actor tracking, and executive briefings.",
        chips: ["Dark web", "Credential watch", "Actor tracking", "Exec briefing"],
      },
      {
        name: "Red Team Simulation",
        icon: "swords",
        blurb: "Adversary emulation, purple teaming, and breach-and-attack simulation beyond a standard pen test.",
        chips: ["Adversary emulate", "Purple team", "BAS", "Social engineering"],
      },
      {
        name: "Penetration Testing",
        icon: "terminal",
        blurb: "Scoped ethical hacking with a clear boundary against red-team and vulnerability-scan work.",
        chips: ["Web & API", "Network", "Cloud", "Scoped report"],
      },
    ],
  },
  {
    id: "secops",
    name: "Security Operations & Protection",
    short: "Protect",
    color: "#785DA8",
    icon: "shield",
    summary:
      "Networks, endpoints, identity, cloud, data, OT, and Zero Trust — protection of the running estate, kept separate from scanning.",
    services: [
      {
        name: "Network & Endpoint Security",
        icon: "monitor",
        blurb: "EDR/XDR, firewalls, IDS/IPS, and segmentation. Protection of devices and traffic.",
        chips: ["EDR / XDR", "Firewall", "IDS / IPS", "Segmentation"],
      },
      {
        name: "Cloud Native Security",
        icon: "cloud",
        blurb: "CNAPP, CSPM, and CWPP across AWS, Azure, and GCP, including containers and Kubernetes.",
        chips: ["CNAPP", "CSPM", "CWPP", "Kubernetes"],
      },
      {
        name: "Data Protection",
        icon: "lock",
        blurb: "Classification, DLP, encryption, and key management as one data-security program.",
        chips: ["Classification", "DLP", "Encryption", "Key management"],
      },
      {
        name: "AI Security",
        icon: "spark",
        blurb: "Model guardrails, data-leakage controls, and shadow-AI discovery for Copilot and custom LLMs.",
        chips: ["Model inventory", "Prompt test", "Shadow AI", "EU AI Act"],
      },
      {
        name: "Identity & Access Management",
        icon: "key",
        blurb: "IAM, PAM, SSO, MFA, and least privilege — the control plane for Zero Trust.",
        chips: ["IAM", "PAM", "SSO / MFA", "Least privilege"],
      },
      {
        name: "OT / ICS Security",
        icon: "cpu",
        blurb: "Industrial asset inventory, Purdue-model segmentation, and monitoring for plants.",
        chips: ["Asset inventory", "Purdue model", "Plant monitor", "Safe change"],
      },
      {
        name: "Zero Trust Architecture",
        icon: "hexagon",
        blurb: "Never trust, always verify: micro-segmentation, continuous authentication, identity-centric access.",
        chips: ["Micro-segment", "Continuous auth", "Identity-first", "Reference design"],
      },
      {
        name: "Security Awareness & Training",
        icon: "users",
        blurb: "Role-based training and phishing simulations for the human layer of protection.",
        chips: ["Role training", "Phishing sims", "Human risk", "Metrics"],
      },
    ],
  },
  {
    id: "grc",
    name: "Governance, Risk & Compliance",
    short: "Govern",
    color: "#5650A2",
    icon: "scale",
    summary:
      "Strategy, risk, audit, privacy, and a vCISO the board can hire — one GRC program.",
    services: [
      {
        name: "Compliance Services",
        icon: "badge",
        blurb: "ISO 27001, SOC 2, GDPR, PCI DSS, HIPAA — one mapped program with evidence.",
        chips: ["ISO 27001", "SOC 2", "GDPR", "PCI / HIPAA"],
      },
      {
        name: "Security Governance",
        icon: "building",
        blurb: "Policies, control frameworks, and the operating model that tells the enterprise how security decides.",
        chips: ["Policy set", "Control map", "Operating model", "Decision rights"],
      },
      {
        name: "Risk Management",
        icon: "gauge",
        blurb: "Enterprise cyber-risk register, scoring, and treatment plans directors can use.",
        chips: ["Risk register", "Scoring", "Treatment", "Board pack"],
      },
      {
        name: "Audit & Assurance",
        icon: "clipboard",
        blurb: "Readiness, control testing, and evidence collection for the auditor and the board.",
        chips: ["Readiness", "Control test", "Evidence", "Findings close"],
      },
      {
        name: "vCISO Services",
        icon: "crown",
        blurb: "Fractional CISO, board reporting, security roadmaps, and vendor arbitration.",
        chips: ["Fractional CISO", "Roadmap", "Board report", "Vendor lead"],
      },
    ],
  },
  {
    id: "exposure",
    name: "Vulnerability & Exposure Management",
    short: "Expose",
    color: "#54C9EB",
    icon: "scan",
    summary:
      "Find what is open, prioritize what matters, and close it — including application security.",
    services: [
      {
        name: "Vulnerability Management",
        icon: "bug",
        blurb: "Continuous scan, contextual prioritization, and verified patching.",
        chips: ["Continuous scan", "CVSS + context", "Patch verify", "Owner SLA"],
      },
      {
        name: "Application Security",
        icon: "code",
        blurb: "SSDLC, threat modeling, SAST/DAST, and API security for DevSecOps teams.",
        chips: ["SSDLC", "SAST / DAST", "API security", "Threat model"],
      },
      {
        name: "Exposure Management",
        icon: "globe",
        blurb: "CTEM and attack-surface visibility for internet-facing assets, not just CVE lists.",
        chips: ["CTEM", "Attack surface", "Internet assets", "Drift watch"],
      },
      {
        name: "Remediation Management",
        icon: "wrench",
        blurb: "Ticket orchestration, owner SLAs, and retest so findings actually close.",
        chips: ["Ticket flow", "Owner SLA", "Retest", "Close loop"],
      },
    ],
  },
  {
    id: "resilience",
    name: "Cyber Resilience & Incident Response",
    short: "Recover",
    color: "#9D8BC9",
    icon: "pulse",
    summary:
      "Operate through an attack. Incident response, forensics, ransomware readiness, and business continuity.",
    services: [
      {
        name: "Incident Response",
        icon: "siren",
        blurb: "Retainer, playbooks, and 24/7 containment when minutes matter.",
        chips: ["Retainer", "Playbooks", "Containment", "Crisis comms"],
      },
      {
        name: "Digital Forensics",
        icon: "search",
        blurb: "Evidence handling and root-cause analysis after an incident, separate from the SOC watch.",
        chips: ["Evidence", "Root cause", "Timeline", "Legal-ready"],
      },
      {
        name: "Ransomware Readiness",
        icon: "lock",
        blurb: "Backup integrity, isolation paths, and decision trees before the extortion note.",
        chips: ["Backup integrity", "Isolation", "Decision tree", "Tabletop"],
      },
      {
        name: "Recovery Planning",
        icon: "rotate",
        blurb: "Disaster-recovery strategy and restore objectives that security and IT share.",
        chips: ["RTO / RPO", "Restore test", "IT + security", "Runbooks"],
      },
      {
        name: "Business Continuity",
        icon: "workflow",
        blurb: "BCP that keeps critical processes alive when systems, sites, or suppliers fail.",
        chips: ["Critical process", "Site fail", "Supplier fail", "BCP drill"],
      },
    ],
  },
];

export const capabilities = [
  {
    id: "vciso",
    icon: "crown",
    tag: "Leadership",
    title: "vCISO & board advisory",
    text: "Fractional security leadership, risk narratives for directors, and a roadmap tied to maturity.",
  },
  {
    id: "ai",
    icon: "spark",
    tag: "GenAI",
    title: "AI & generative AI security",
    text: "Governance, Copilot and LLM reviews, prompt-injection testing, and readiness for the EU AI Act and NIST AI RMF.",
  },
  {
    id: "intel",
    icon: "radar",
    tag: "Intelligence",
    title: "Threat intelligence & dark web",
    text: "Credential-exposure watch, actor tracking, and executive briefings that feed the SOC and the board.",
  },
  {
    id: "ready",
    icon: "pulse",
    tag: "Resilience",
    title: "Ransomware readiness",
    text: "Tabletop exercises, backup integrity, isolation paths, and continuity planning — not only incident response.",
  },
  {
    id: "red",
    icon: "swords",
    tag: "Offense",
    title: "Red & purple teaming",
    text: "Objective-based adversary emulation and breach-and-attack simulation — separate from a scoped pen test.",
  },
  {
    id: "soc",
    icon: "monitor",
    tag: "Detect",
    title: "One 24/7 SOC",
    text: "SIEM and SOC monitoring in one place. The board and operations see the same picture.",
  },
];

export const steps = [
  {
    icon: "clipboard",
    title: "Assess",
    text: "Threat modeling, attack-surface review, and a risk picture the board can fund.",
  },
  {
    icon: "hexagon",
    title: "Architect",
    text: "Zero Trust, identity, cloud, and OT designs that match how the estate actually runs.",
  },
  {
    icon: "shield",
    title: "Protect",
    text: "Controls on networks, endpoints, data, and models — with scanning kept in its own program.",
  },
  {
    icon: "radar",
    title: "Detect",
    text: "24/7 SOC, SIEM, and intelligence together so signals become decisions.",
  },
  {
    icon: "siren",
    title: "Recover",
    text: "Contain, investigate, restore, and rehearse so the first incident is not the first practice.",
  },
];

export const industries = [
  {
    id: "bfsi",
    icon: "landmark",
    title: "Banking & financial services",
    text: "PCI DSS, SOC 2, fraud-adjacent controls, and board-ready risk reporting.",
  },
  {
    id: "health",
    icon: "heart",
    title: "Healthcare & life sciences",
    text: "HIPAA, clinical-system resilience, and privacy that survives an audit.",
  },
  {
    id: "ot",
    icon: "factory",
    title: "Manufacturing & OT",
    text: "Purdue-model segmentation, plant visibility, and safety-aware cyber programs.",
  },
  {
    id: "tech",
    icon: "code",
    title: "Software & digital products",
    text: "AppSec, SSDLC, API testing, and cloud-native protection for product teams.",
  },
  {
    id: "retail",
    icon: "cart",
    title: "Retail & consumer",
    text: "Payment security, customer-data protection, and incident readiness at peak season.",
  },
  {
    id: "public",
    icon: "building",
    title: "Public sector & critical infrastructure",
    text: "Governance, OT security, and continuity for services citizens cannot pause.",
  },
];

export const frameworks = [
  { name: "ISO 27001", detail: "ISMS" },
  { name: "SOC 2", detail: "Trust services" },
  { name: "GDPR", detail: "Privacy" },
  { name: "PCI DSS", detail: "Payments" },
  { name: "HIPAA", detail: "Health data" },
  { name: "NIST AI RMF", detail: "AI risk" },
];

export const reasons = [
  {
    icon: "layers",
    title: "One practice, not competing teams",
    text: "Assessment, protection, governance, exposure, and recovery sit together. You do not pay twice for the same work.",
  },
  {
    icon: "crown",
    title: "Strategy beside operations",
    text: "vCISO and board advisory sit next to EDR, AppSec, and the SOC — one conversation from directors to the floor.",
  },
  {
    icon: "badge",
    title: "Words that match the work",
    text: "Endpoint protection is not a scan. Vulnerability management finds what is open. Encryption is a control, not a product name.",
  },
];

export const contact = {
  email: "info@mindsuite.in",
  phone: "+91 9100 00 5500",
  address: "8-1-299/A/108, Shaikpet, Hyderabad 500 096, TS, India",
  site: "https://mindsuite.in",
};
