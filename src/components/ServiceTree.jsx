import { useRef, useState } from "react";
import { pillars } from "../data/content.js";
import { Icon } from "../icons.jsx";

export function ServiceTree() {
  const leaveTimer = useRef(null);
  const [open, setOpen] = useState(true);
  const [pillarId, setPillarId] = useState(pillars[1].id);
  const [serviceName, setServiceName] = useState(null);

  const pillar = pillars.find((item) => item.id === pillarId) || null;
  const service = pillar?.services.find((item) => item.name === serviceName) || null;
  const depth = service ? 3 : pillar ? 2 : open ? 1 : 0;

  function stay() {
    clearTimeout(leaveTimer.current);
  }

  function leaveTree() {
    leaveTimer.current = setTimeout(() => {
      setServiceName(null);
    }, 180);
  }

  function openRoot() {
    stay();
    setOpen(true);
    setServiceName(null);
  }

  function openPillar(id) {
    stay();
    setOpen(true);
    setPillarId(id);
    setServiceName(null);
  }

  function openService(id, name) {
    stay();
    setOpen(true);
    setPillarId(id);
    setServiceName(name);
  }

  return (
    <div className={`tree depth-${depth}`} onMouseEnter={stay} onMouseLeave={leaveTree}>
      <div className="tree-meta">
        <p className="tree-hint">
          {depth < 3 && "Hover a pillar, then a service, to open the next layer."}
          {depth === 3 && "Scoped activities for the service you selected."}
        </p>
        <div className="tree-path" aria-live="polite">
          <span className="on">Portfolio</span>
          <span className={depth >= 1 ? "on" : ""}>Pillars</span>
          <span className={depth >= 2 ? "on" : ""}>Services</span>
          <span className={depth >= 3 ? "on" : ""}>Detail</span>
        </div>
      </div>

      <div className="tree-layer" aria-label="Portfolio root">
        <button
          type="button"
          className={`tree-btn hub ${open ? "live" : ""}`}
          aria-expanded={open}
          onMouseEnter={openRoot}
          onFocus={openRoot}
        >
          <img src="/Mindsuite-logo-white.png" alt="MindSuite" className="hub-logo" />
          <span>Explore the portfolio</span>
        </button>
      </div>

      <div className="tree-layer" aria-label="Service pillars">
        {pillars.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`tree-btn pillar ${pillarId === item.id ? "live" : ""}`}
            style={{ "--accent": item.color }}
            aria-label={`${item.name}, ${item.services.length} services`}
            aria-expanded={pillarId === item.id}
            onMouseEnter={() => openPillar(item.id)}
            onFocus={() => openPillar(item.id)}
          >
            <Icon name={item.icon} size={16} />
            {item.short}
            <i className="next-hint">{item.services.length}</i>
          </button>
        ))}
      </div>

      {pillar && (
        <div className="tree-layer services" aria-label={`${pillar.name} services`} style={{ "--accent": pillar.color }}>
          {pillar.services.map((entry) => (
            <button
              key={entry.name}
              type="button"
              className={`tree-btn leaf ${serviceName === entry.name ? "live" : ""}`}
              aria-label={entry.name}
              aria-expanded={serviceName === entry.name}
              onMouseEnter={() => openService(pillar.id, entry.name)}
              onFocus={() => openService(pillar.id, entry.name)}
            >
              <Icon name={entry.icon} size={15} />
              {entry.name}
            </button>
          ))}
        </div>
      )}

      <div className="tree-detail">
        <div>
          <p className="tag">{service ? pillar.short : "Pillar"}</p>
          <h3>{service?.name || pillar?.name}</h3>
          <p>{service?.blurb || pillar?.summary}</p>
        </div>
        {service && (
          <div className="tree-chips" aria-label="Service activities">
            {service.chips.map((chip) => (
              <button key={chip} type="button" className="tree-btn chip">
                {chip}
              </button>
            ))}
            <a className="btn btn-primary" href="#contact">
              Scope this service
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
