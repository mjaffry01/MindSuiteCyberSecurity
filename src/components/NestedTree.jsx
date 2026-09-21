import { useEffect, useId, useState } from "react";
import { ChevronRight } from "lucide-react";
import { iconFor } from "../data/leafIcons.js";
import { Icon } from "../icons.jsx";
import { LeafDefSlot, LeafText, leafTipEntry } from "./LeafText.jsx";
import { useLeafTip } from "./LeafTipContext.jsx";
import { OfferingPanel } from "./OfferingPanel.jsx";

export function NestedTree({ rootLabel, nodes, ariaLabel }) {
  const [openId, setOpenId] = useState(nodes[0]?.id);
  const [hoverId, setHoverId] = useState(nodes[0]?.id);
  const [pinId, setPinId] = useState(nodes[0]?.id);
  const activeId = hoverId || pinId || openId;
  const active = nodes.find((node) => node.id === activeId) || nodes[0];
  const { hoverTip, focusTip, clearHover, clearFocus, clearTips } = useLeafTip();
  const defSlotId = `leafdef${useId().replace(/[^a-zA-Z0-9_-]+/g, "-")}`;

  // A collapsing branch unmounts its leaves; drop any definition they owned.
  useEffect(() => {
    clearTips();
  }, [openId, clearTips]);

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
                      <>
                        <ul
                          className="vtree-list chips"
                          role="group"
                          onMouseLeave={clearHover}
                          onBlur={(event) => {
                            if (event.currentTarget.contains(event.relatedTarget)) return;
                            clearFocus();
                          }}
                        >
                          {node.gets.map((item) => {
                            const chipId = `${node.id}:${item}`;
                            const tipEntry = leafTipEntry(item, chipId, defSlotId);
                            return (
                              <li key={item} className="vtree-node">
                                <span
                                  className="vtree-row chip static"
                                  role="treeitem"
                                  onMouseOver={tipEntry.tip ? () => hoverTip(tipEntry) : undefined}
                                  onFocus={tipEntry.tip ? () => focusTip(tipEntry) : undefined}
                                >
                                  <Icon name={iconFor(item)} size={14} strokeWidth={2} className="leaf-ico" />
                                  <LeafText label={item} tipKey={chipId} slotId={defSlotId} />
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
