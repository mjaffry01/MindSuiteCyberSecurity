import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { iconFor } from "../data/leafIcons.js";
import { Icon } from "../icons.jsx";
import { LeafText } from "./LeafText.jsx";
import { OfferingPanel } from "./OfferingPanel.jsx";

export function NestedTree({ rootLabel, nodes, ariaLabel }) {
  const [openId, setOpenId] = useState(nodes[0]?.id);
  const [hoverId, setHoverId] = useState(nodes[0]?.id);
  const [pinId, setPinId] = useState(nodes[0]?.id);
  const activeId = hoverId || pinId || openId;
  const active = nodes.find((node) => node.id === activeId) || nodes[0];

  function open(id, pin = false) {
    setHoverId(id);
    setOpenId(id);
    if (pin) setPinId((current) => (current === id ? current : id));
  }

  return (
    <div className="tree-shell compact">
      <div className="vtree" role="tree" aria-label={ariaLabel}>
        <ul className="vtree-list">
          <li className="vtree-node root on-path">
            <div className="vtree-row hub static">
              <ChevronRight size={14} className="chev open" />
              <span>{rootLabel}</span>
            </div>
            <ul className="vtree-list">
              {nodes.map((node) => {
                const openNode = openId === node.id;
                return (
                  <li key={node.id} className={`vtree-node ${openNode ? "on-path" : ""}`} style={{ "--accent": node.color }}>
                    <button
                      type="button"
                      role="treeitem"
                      className={`vtree-row ${openNode ? "live open" : ""}`}
                      aria-expanded={openNode}
                      onMouseEnter={() => open(node.id)}
                      onFocus={() => open(node.id)}
                      onClick={() => {
                        setPinId(node.id);
                        setOpenId(node.id);
                      }}
                    >
                      <ChevronRight size={14} className={`chev ${openNode ? "open" : ""}`} />
                      {node.icon ? <Icon name={node.icon} size={15} /> : null}
                      <span>{node.title}</span>
                      {!openNode && node.gets?.length ? (
                        <span className="nest-hint">{node.gets.length} included</span>
                      ) : null}
                    </button>
                    {openNode && (
                      <ul className="vtree-list chips" role="group">
                        {node.gets.map((item) => (
                          <li key={item} className="vtree-node">
                            <span className="vtree-row chip static" role="treeitem">
                              <Icon name={iconFor(item)} size={14} strokeWidth={2} className="leaf-ico" />
                              <LeafText label={item} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
      <OfferingPanel
        title={active.title}
        kicker={active.kicker}
        what={active.what}
        gets={active.gets}
        outcome={active.outcome}
        cta={active.cta || "Talk to a specialist"}
      />
    </div>
  );
}
