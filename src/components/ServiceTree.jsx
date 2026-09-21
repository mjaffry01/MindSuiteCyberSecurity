import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import { pillars } from "../data/content.js";
import { pillarOutcomes, serviceOutcomes } from "../data/offers.js";
import { iconFor } from "../data/leafIcons.js";
import { Icon } from "../icons.jsx";
import { LeafDefSlot, LeafText, leafTipEntry } from "./LeafText.jsx";
import { useLeafTip } from "./LeafTipContext.jsx";
import { OfferingPanel } from "./OfferingPanel.jsx";

const ROOT = "root";

function nodeId(kind, pillarId, extra) {
  return extra ? `${kind}:${pillarId}:${extra}` : `${kind}:${pillarId}`;
}

export function ServiceTree() {
  const shell = useRef(null);
  const [hover, setHover] = useState({ pillarId: pillars[1].id, service: null, chip: null });
  const [pin, setPin] = useState({ pillarId: pillars[1].id, service: null });
  const [focusId, setFocusId] = useState(nodeId("pillar", pillars[1].id));
  const { hoverTip, leaveTip, focusTip, blurTip, clearTips } = useLeafTip();
  const defSlotId = `leafdef${useId().replace(/[^a-zA-Z0-9_-]+/g, "-")}`;

  const view = hover.pillarId || pin.pillarId ? hover : pin;
  const pillar = pillars.find((item) => item.id === (view.pillarId || pin.pillarId)) || pillars[1];
  const service = pillar.services.find((item) => item.name === (view.service || pin.service)) || null;
  const path = ["Coverage", pillar.short, service?.name, view.chip].filter(Boolean);

  const expandedPillar = view.pillarId || pin.pillarId;
  const expandedService = view.service || pin.service;

  // A collapsing branch unmounts its leaves; drop any definition they owned.
  useEffect(() => {
    clearTips();
  }, [expandedPillar, expandedService, clearTips]);

  const visibleIds = useMemo(() => {
    const ids = [ROOT];
    pillars.forEach((item) => {
      ids.push(nodeId("pillar", item.id));
      if (item.id === expandedPillar) {
        item.services.forEach((entry) => {
          ids.push(nodeId("service", item.id, entry.name));
          if (entry.name === expandedService) {
            entry.chips.forEach((chip) => ids.push(nodeId("chip", item.id, `${entry.name}:${chip}`)));
          }
        });
      }
    });
    return ids;
  }, [expandedPillar, expandedService]);

  const offer = service
    ? {
        title: service.name,
        kicker: pillar.short,
        what: service.blurb,
        gets: service.chips,
        outcome: serviceOutcomes[service.name],
        cta: "Request scope",
      }
    : {
        title: pillar.name,
        kicker: "Coverage",
        what: pillar.summary,
        gets: pillar.services.map((entry) => entry.name),
        outcome: pillarOutcomes[pillar.id],
        cta: "Talk to a specialist",
      };

  function activate(next, pinned = false) {
    setHover(next);
    if (pinned) setPin(next);
  }

  function togglePin(next) {
    const same =
      pin.pillarId === next.pillarId && pin.service === next.service && !next.chip && !pin.chip;
    setPin(same ? { pillarId: next.pillarId, service: null } : { pillarId: next.pillarId, service: next.service || null });
    setHover(next);
  }

  function onKeyDown(event) {
    const keys = ["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft", "Enter", " ", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const index = Math.max(0, visibleIds.indexOf(focusId));
    if (event.key === "ArrowDown") {
      const id = visibleIds[Math.min(visibleIds.length - 1, index + 1)];
      setFocusId(id);
      applyId(id);
    } else if (event.key === "ArrowUp") {
      const id = visibleIds[Math.max(0, index - 1)];
      setFocusId(id);
      applyId(id);
    } else if (event.key === "Home") {
      setFocusId(ROOT);
      applyId(ROOT);
    } else if (event.key === "End") {
      const id = visibleIds[visibleIds.length - 1];
      setFocusId(id);
      applyId(id);
    } else if (event.key === "ArrowRight") {
      applyId(focusId, true);
    } else if (event.key === "ArrowLeft") {
      if (focusId.startsWith("chip:")) {
        const [, pillarId, rest] = focusId.split(":");
        const serviceName = rest.split(":")[0];
        activate({ pillarId, service: serviceName, chip: null }, true);
        setFocusId(nodeId("service", pillarId, serviceName));
      } else if (focusId.startsWith("service:")) {
        const pillarId = focusId.split(":")[1];
        activate({ pillarId, service: null, chip: null }, true);
        setFocusId(nodeId("pillar", pillarId));
      } else if (focusId.startsWith("pillar:")) {
        setFocusId(ROOT);
        applyId(ROOT);
      }
    } else if (event.key === "Enter" || event.key === " ") {
      applyId(focusId, true);
    }
  }

  function applyId(id, pinIt = false) {
    if (id === ROOT) {
      activate({ pillarId: pin.pillarId || pillars[1].id, service: null, chip: null }, pinIt);
      return;
    }
    const [kind, pillarId, ...rest] = id.split(":");
    const extra = rest.join(":");
    if (kind === "pillar") activate({ pillarId, service: null, chip: null }, pinIt);
    if (kind === "service") activate({ pillarId, service: extra, chip: null }, pinIt);
    if (kind === "chip") {
      const [serviceName, chip] = extra.split(":");
      activate({ pillarId, service: serviceName, chip }, pinIt);
    }
  }

  useEffect(() => {
    const active = shell.current?.querySelector(`[data-node="${focusId}"]`);
    if (active && document.activeElement?.closest(".vtree")) active.focus();
  }, [focusId]);

  return (
    <div className="tree-shell">
      <div className="vtree" ref={shell} onKeyDown={onKeyDown} role="tree" aria-label="Cybersecurity coverage">
        <div className="tree-path" aria-live="polite">
          {path.map((step) => (
            <span className="on" key={step}>
              {step}
            </span>
          ))}
        </div>
        <p className="tree-hint">Hover a branch to open it. Hover a technical term for a plain-language definition; click its ? to keep it open. Click a branch to pin. Arrow keys move; Enter pins.</p>

        <ul className="vtree-list" role="group">
          <li className={`vtree-node root on-path`}>
            <button
              type="button"
              role="treeitem"
              data-node={ROOT}
              className={`vtree-row hub ${!service ? "live" : ""}`}
              aria-expanded="true"
              aria-selected={focusId === ROOT}
              onMouseEnter={() => activate({ pillarId: expandedPillar, service: null, chip: null })}
              onFocus={() => setFocusId(ROOT)}
              onClick={() => togglePin({ pillarId: expandedPillar, service: null, chip: null })}
            >
              <ChevronRight size={14} className="chev open" />
              <img src={`${import.meta.env.BASE_URL}Mindsuite-logo-white.png`} alt="" className="hub-logo" />
              <span>MindSuite cybersecurity</span>
            </button>
            <ul className="vtree-list" role="group">
              {pillars.map((item) => {
                const open = expandedPillar === item.id;
                const onPath = open;
                return (
                  <li key={item.id} className={`vtree-node ${onPath ? "on-path" : ""}`} style={{ "--accent": item.color }}>
                    <button
                      type="button"
                      role="treeitem"
                      data-node={nodeId("pillar", item.id)}
                      className={`vtree-row ${open && !service ? "live" : ""} ${open ? "open" : ""}`}
                      aria-expanded={open}
                      aria-selected={focusId === nodeId("pillar", item.id)}
                      aria-label={`${item.name}, ${item.services.length} services`}
                      onMouseEnter={() => activate({ pillarId: item.id, service: null, chip: null })}
                      onFocus={() => {
                        setFocusId(nodeId("pillar", item.id));
                        activate({ pillarId: item.id, service: null, chip: null });
                      }}
                      onClick={() => togglePin({ pillarId: item.id, service: null, chip: null })}
                    >
                      <ChevronRight size={14} className={`chev ${open ? "open" : ""}`} />
                      <Icon name={item.icon} size={15} />
                      <span>{item.short}</span>
                      {!open && (
                        <span className="nest-hint">
                          {item.services.length} {item.services.length === 1 ? "service" : "services"}
                        </span>
                      )}
                    </button>
                    {open && (
                      <ul className="vtree-list" role="group">
                        {item.services.map((entry) => {
                          const leafOpen = expandedService === entry.name && item.id === expandedPillar;
                          return (
                            <li key={entry.name} className={`vtree-node ${leafOpen ? "on-path" : ""}`}>
                              <button
                                type="button"
                                role="treeitem"
                                data-node={nodeId("service", item.id, entry.name)}
                                className={`vtree-row ${leafOpen ? "live open" : ""}`}
                                aria-expanded={leafOpen}
                                aria-selected={focusId === nodeId("service", item.id, entry.name)}
                                onMouseEnter={() => activate({ pillarId: item.id, service: entry.name, chip: null })}
                                onFocus={() => {
                                  setFocusId(nodeId("service", item.id, entry.name));
                                  activate({ pillarId: item.id, service: entry.name, chip: null });
                                }}
                                onClick={() => togglePin({ pillarId: item.id, service: entry.name, chip: null })}
                              >
                                <ChevronRight size={14} className={`chev ${leafOpen ? "open" : ""}`} />
                                <Icon name={entry.icon} size={14} />
                                <span>{entry.name}</span>
                              </button>
                              {leafOpen && (
                                <>
                                  <ul className="vtree-list chips" role="group">
                                    {entry.chips.map((chip) => {
                                      const chipId = nodeId("chip", item.id, `${entry.name}:${chip}`);
                                      const tipEntry = leafTipEntry(chip, chipId, defSlotId);
                                      return (
                                        <li key={chip} className={`vtree-node ${view.chip === chip ? "on-path" : ""}`}>
                                          <span
                                            role="treeitem"
                                            tabIndex={-1}
                                            data-node={chipId}
                                            className={`vtree-row chip ${view.chip === chip ? "live" : ""}`}
                                            aria-selected={focusId === chipId}
                                            onMouseEnter={() => activate({ pillarId: item.id, service: entry.name, chip })}
                                            onMouseOver={() => hoverTip(tipEntry)}
                                            onMouseLeave={() => leaveTip(chipId)}
                                            onFocus={(event) => {
                                              focusTip(tipEntry);
                                              // Focus bubbles up from the ? button; only the row itself claims the roving tabindex.
                                              if (event.target !== event.currentTarget) return;
                                              setFocusId(chipId);
                                              activate({ pillarId: item.id, service: entry.name, chip });
                                            }}
                                            onBlur={(event) => {
                                              if (event.currentTarget.contains(event.relatedTarget)) return;
                                              blurTip(chipId);
                                            }}
                                          >
                                            <Icon name={iconFor(chip)} size={14} strokeWidth={2} className="leaf-ico" />
                                            <LeafText label={chip} tipKey={chipId} slotId={defSlotId} />
                                          </span>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                  <LeafDefSlot slotId={defSlotId} />
                                </>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
      <OfferingPanel {...offer} />
    </div>
  );
}
