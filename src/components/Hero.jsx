import { ArrowRight, Play } from "lucide-react";
import { heroStats } from "../data/content.js";
import { useInView } from "../hooks.js";
import { Icon } from "../icons.jsx";

const orbitNodes = [
  { icon: "crown", label: "vCISO", className: "sat-1" },
  { icon: "spark", label: "AI security", className: "sat-2" },
  { icon: "radar", label: "Threat intel", className: "sat-3" },
  { icon: "pulse", label: "Resilience", className: "sat-4" },
  { icon: "swords", label: "Red team", className: "sat-5" },
];

function Stat({ value, suffix, label }) {
  return (
    <div className="stat">
      <strong>
        {value}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

export function Hero() {
  const [ref, visible] = useInView({ threshold: 0.18 });

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="wrap">
        <div className="hero-grid">
          <div className={`hero-copy-wrap ${visible ? "in" : ""}`}>
            <p className="eyebrow">Enterprise cybersecurity</p>
            <h1>
              One portfolio.
              <span>Board to SOC.</span>
            </h1>
            <p className="hero-copy">
              MindSuite protects, governs, and recovers the enterprise as a single
              practice — vCISO, AI security, threat intelligence, and 24/7 operations
              under one map. No duplicate cards. No buried AppSec.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#services">
                Explore services <ArrowRight size={18} />
              </a>
              <a className="btn btn-ghost" href="#approach">
                See the approach <Play size={16} />
              </a>
            </div>
          </div>
          <div className="hero-orbit" aria-hidden="true">
            <div className="orbit-ring" />
            <div className="orbit-ring mid" />
            <div className="orbit-ring inner" />
            <div className="orbit-pulse" />
            <div className="orbit-core">
              <img src={`${import.meta.env.BASE_URL}Mindsuite-logo-white.png`} alt="MindSuite" className="orbit-logo" />
              <span>Unified cybersecurity</span>
            </div>
            {orbitNodes.map((node) => (
              <div className={`sat ${node.className}`} key={node.label}>
                <span className="sat-icon">
                  <Icon name={node.icon} size={16} />
                </span>
                {node.label}
              </div>
            ))}
          </div>
        </div>
        <div className="stats">
          {heroStats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
