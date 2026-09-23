/** Short, plain definitions for jargon on tree leaves. Everyday labels stay quiet. */

const vcisoTip = {
  text: "A virtual chief information security officer: a part-time security chief for the board, the roadmap, and vendors.",
  points: ["Fractional CISO", "Security Roadmap", "Board Reporting", "Vendor Oversight"],
};

export const leafTips = {
  "Threat modeling":
    "Scenarios, abuse cases, trust boundaries, and potential attack paths affecting critical systems and data.",
  "Posture review":
    "Assess controls, configurations, exposures, and weaknesses across critical assets and workloads.",
  "Attack path Analysis":
    "Identify and prioritize exploitable paths that could allow an attacker to reach critical assets or access.",
  "Dark-Web Monitoring": "Monitors criminal sources for exposed information, threats, and illicit activity.",
  "Credential Exposure Monitoring": "Identifies compromised credentials, accounts, and authentication data.",
  "Threat Actor Tracking": "Tracks relevant threat actors, campaigns, targeting patterns, and evolving tactics.",
  "Brand Protection":
    "Detects impersonation, fraudulent domains, phishing sites, fake profiles, and unauthorized use of brand.",
  "Adversary Emulation": "Simulates relevant threat-actor techniques to test defenses.",
  "Purple Teaming": "Combines offensive and defensive expertise to validate detections.",
  "Breach & Attack Simulation": "Executes controlled attack scenarios to validate security controls.",
  "Social Engineering": "Uses controlled human-focused scenarios to assess resilience.",
  "Web & API Testing": "Identifies and validates exploitable vulnerabilities.",
  "Network Penetration Testing": "Tests internal and external network environments to identify exploitable.",
  "Cloud Penetration Testing": "Assesses authorized cloud environments for exploitable weaknesses.",
  "EDR / XDR": "Reviews and optimizes endpoint detection, response, policies, coverage, and security integrations.",
  Firewall: "Reviews and strengthen firewall architecture, policies, rules, and traffic controls.",
  "IDS / IPS": "Reviews and optimize detection and prevention configurations, policies, and coverage.",
  "Cloud Security Posture Mgt": "Identifies misconfigurations, exposures, and security gaps.",
  "Cloud Workload Protection": "Protect workloads against runtime threats.",
  "Container & Kubernetes Security": "Secures containers, clusters, workloads, configurations.",
  "Data Classification": "Identifies and labels sensitive data to apply appropriate.",
  "Data Loss Prevention (DLP)": "How sensitive data is accessed, used, and shared to reduce.",
  Encryption: "Strengthens encryption controls to protect sensitive data at rest and in transit.",
  "Key Management": "Secures the creation, storage, access, rotation, and retirement.",
  "AI Discovery & Inventory": "Identifies AI systems and their access to enterprise data.",
  "AI Security Testing": "Tests for prompt attacks, data leakage, and guardrail bypass.",
  "AI Guardrails & Data Protection": "Controls unsafe AI behavior and sensitive-data exposure.",
  "Shadow AI Discovery": "Identifies unauthorized and unmanaged AI use.",
  "AI Usage Governance": "Defines approved use, access boundaries, and security controls.",
  IAM: "Manages identities, access, roles, and permissions.",
  PAM: "Secures and controls privileged access.",
  "SSO / MFA": "Strengthens authentication and simplifies secure access.",
  "Least Privilege": "Limits access to only what users and systems require.",
  "Asset Inventory": "Identifies and maps industrial assets and systems.",
  "Security Monitoring": "Detects threats and anomalous activity across industrial networks.",
  "Secure Change Management": "Secures changes while protecting operational availability and safety.",
  "Micro-Segmentation": "Restricts communication between systems and critical resources.",
  "Continuous Authentication": "Revalidates access based on identity, device, and risk.",
  "Identity-Centric Access": "Bases access decisions on verified identity and context.",
  "Reference Architecture": "Defines the target Zero Trust architecture and control design.",
  "ISO 27001": "The global standard for running an information security management system.",
  "SOC 2": "An audit of the security controls customers expect to see.",
  GDPR: "Europe's privacy law: lawful use of personal data, people's rights, and breach notice.",
  "PCI / HIPAA": "PCI DSS covers card payments. HIPAA covers US health data.",
  "PCI DSS": "The standard for systems that store, process, or transmit card data.",
  HIPAA: "US rules for protecting patient health information.",
  "Security Policies": "Defines practical policies, standards, and requirements.",
  "Control Framework": "Maps security requirements to applicable controls.",
  "Operating Model": "Defines security roles, responsibilities, and governance structure.",
  "Decision Rights": "Establishes security ownership, authority, and accountability.",
  Register: "Captures and tracks identified cyber risks.",
  Scoring: "Prioritizes risks by likelihood and business impact.",
  Treatment: "Defines appropriate risk response and remediation actions.",
  "Board Report": "Communicates cyber risk and treatment priorities to leadership.",
  "Audit Readiness": "Identifies gaps before formal assessment or audit.",
  "Control Testing": "Validates control design and operating effectiveness.",
  "Evidence Validation": "Reviews evidence for completeness and audit readiness.",
  "Findings Remediation": "Supports closure of identified control gaps.",
  "Fractional CISO": "Part-time chief providing leadership and strategic direction.",
  "Security Roadmap": "Prioritizes security initiatives and investments.",
  "Board Reporting": "Communicates risks, posture, and priorities to leadership.",
  "Vendor Oversight": "Guides security vendors and technology decisions.",
  "Continuous Scanning": "Identifies vulnerabilities across the environment.",
  "Risk-Based Prioritization": "Prioritizes vulnerabilities using CVSS and business context.",
  "Remediation Verification": "Confirms vulnerabilities are resolved after remediation.",
  "Ownership & SLA": "Assigns owners and remediation timelines.",
  SSDLC: "Secure development lifecycle: security checks inside design, coding, and release.",
  "SAST / DAST": "Static testing reads the code. Dynamic testing probes the running app.",
  "API security": "Controls on the interfaces applications use to exchange data.",
  "Threat model": "A map of how a system can be abused, and which paths to fix first.",
  CTEM: "Continuously identifies, prioritizes, and validates exposures.",
  "Attack Surface Mgt": "Discovers and monitors externally exposed assets.",
  "Exposure Validation": "Validates exposure and potential attackability.",
  "Exposure Drift": "Detects new or changed exposures over time.",
  "Ticket Orchestration": "Routing of findings into remediation workflows.",
  "Remediation Retesting": "Verifies that findings have been resolved.",
  "Closure Management": "Tracks findings through formal closure.",
  "IR Retainer": "Provides rapid access to response expertise.",
  Playbooks: "Defines actions for priority incidents.",
  Containment: "Contains threats and limits impact.",
  "Crisis Comm": "Coordinating comm during critical incidents.",
  "Evidence Collection": "Preserves and analyzes digital evidence.",
  "Root Cause Analysis": "Determines how the incident occurred.",
  "Incident Timeline": "Reconstructs key events and attacker activity.",
  "Forensic Reporting": "Documents evidence, analysis, and findings.",
  "Backup Resilience": "Validates backup integrity, protection, and recoverability.",
  "Isolation Readiness": "Defines rapid isolation of affected systems and networks.",
  "Decision Trees": "Establishes actions and escalation paths during an incident.",
  Tabletop: "Guided Rehearses response and recovery through realistic scenarios.",
  "RTO / RPO": "Defines recovery time and data-loss objectives.",
  Alignment: "Aligns IT and security recovery priorities.",
  Runbooks: "Defines actionable steps for service restoration.",
  Drills: "A business-continuity drill for a failed site, system, or supplier.",
  "Impact Analysis": "Identifies critical processes, dependencies, and impacts.",
  Planning: "Defines how critical operations continue during disruption.",
  "Supplier Continuity": "Addresses critical supplier and third-party dependencies.",
  "Contain the Threat": "Isolate threats and limit further impact.",
  "Investigate the Cause": "Determine what happened and identify the root cause.",
  "Restore Priority Services": "Recover critical systems and services in priority order.",
  "vCISO Services": vcisoTip,
  "OT / ICS Security": "Security for the operational technology and control systems that run plants.",
  "Zero Trust Architecture": "A design where every request is verified, instead of trusting the internal network.",
  "NIST AI RMF": "NIST's guide to govern, map, measure, and manage AI risk.",
  "Attack-surface review": "A look at the internet-facing assets an attacker could use.",
  "SOC and SIEM": "The security operations team watches alerts. The SIEM collects logs and joins them.",
  "Identity and Zero Trust": "Access follows who you are and what you need now, not the office network.",
  "Plant visibility": "Identifies and maps industrial assets and communications.",
  "Purdue segmentation": "Splits that follow those plant layers, so office malware stays off the line.",
  "Safe change": "A plant change checked so a security fix does not stop production.",
  "Safety-aware cyber": "Security changes that will not override a plant's safety systems.",
  "API testing": "Probes APIs for broken login, data leaks, and unsafe methods.",
  "Cloud-native protect": "Protection built for containers, Kubernetes, and cloud workloads.",
  "Product-team AppSec": "Application security the product team can run in the delivery pipeline.",
  "OT for critical services": "Security for the industrial systems a public service cannot pause.",
  "SOC 2 evidence": "The records and proof points a SOC 2 audit asks to see.",
  "HIPAA alignment": "Controls and evidence matched to US rules for patient data.",
  CNAPP: "Cloud-native application protection: settings, workloads, and identity in one view.",
  CSPM: "Cloud security posture management: finds unsafe settings in AWS, Azure, and Google Cloud.",
  CWPP: "Cloud workload protection for servers, containers, and functions while they run.",
  Kubernetes: "Runs and scales containers. The cluster needs security of its own.",
  "EU AI Act": "Europe's law that sets duties by how risky an AI system is.",
  DLP: "Data loss prevention: stops sensitive data leaving by the wrong channel.",
  Classification: "Labels such as confidential that decide which controls the data gets.",
  "Purdue model": "Layers of a plant network, from the office down to the machines.",
  "Purdue-model": "Layers of a plant network, from the office down to the machines.",
  vCISO: vcisoTip,
  "vCISO & board advisory": vcisoTip,
  "AI & generative AI security": [
    "AI Discovery & Inventory",
    "AI Security Testing",
    "AI Guardrails & Data Protection",
    "Shadow AI Discovery",
    "AI Usage Governance",
    "EU AI Act",
    "NIST AI RMF",
  ],
  "Threat intelligence & dark web": [
    "Dark-Web Monitoring",
    "Credential Exposure Monitoring",
    "Threat Actor Tracking",
    "Brand Protection",
  ],
  "Ransomware readiness": [
    "Backup Resilience",
    "Isolation Readiness",
    "Decision Trees",
    "Tabletop",
  ],
  "Red & purple teaming": [
    "Adversary Emulation",
    "Purple Teaming",
    "Breach & Attack Simulation",
    "Social Engineering",
  ],
  "EDR/XDR": "Reviews and optimizes endpoint detection, response, policies, coverage, and security integrations.",
  EDR: "Endpoint detection on the device, tied to email, identity, and cloud.",
  "IDS/IPS": "Reviews and optimize detection and prevention configurations, policies, and coverage.",
  SIEM: "The system that collects security logs and joins them so the operations team can watch alerts.",
  AppSec: "Application security the product team can run in the delivery pipeline.",
};

/** Same label, different meaning, depending on which service it sits under. */
export const scopedTips = {
  "Network & Endpoint Security": {
    "Network Segmentation":
      "Designs and assesses segmentation to isolate critical assets and reduce attack paths.",
  },
  "OT / ICS Security": {
    "Network Segmentation": "Segments IT and industrial networks using Purdue-aligned architecture.",
  },
  "Recovery Planning": {
    Testing: "Validates restoration and recovery capabilities.",
  },
  "Business Continuity": {
    Testing: "Exercises continuity plans against realistic scenarios.",
  },
};

export function resolveTip(label, scope) {
  if (scope && scopedTips[scope]?.[label]) return scopedTips[scope][label];
  return leafTips[label] ?? null;
}

/** Points of a multi-part definition. A string definition has none. */
export function tipPoints(value) {
  const raw = Array.isArray(value) ? value : value?.points;
  if (!Array.isArray(raw)) return null;
  return raw.filter((item) => {
    if (typeof item === "string") return item.length > 0;
    return Boolean(item && typeof item.label === "string" && item.label.length > 0);
  });
}

export function pointLabel(point) {
  return typeof point === "string" ? point : point.label;
}

/** A point uses its own tip when one is written on it, otherwise the glossary. */
export function pointTip(point, scope) {
  if (point && typeof point === "object" && point.tip != null) return point.tip;
  return resolveTip(pointLabel(point), scope);
}

export function tipText(value) {
  if (typeof value === "string") return value;
  if (value && typeof value.text === "string" && value.text.length > 0) return value.text;
  return null;
}

export function hasTip(value) {
  if (tipText(value)) return true;
  return (tipPoints(value)?.length ?? 0) > 0;
}
