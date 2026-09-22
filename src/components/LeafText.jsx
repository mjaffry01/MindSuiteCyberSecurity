import { useId } from "react";
import { leafTips } from "../data/leafTips.js";
import { Icon } from "../icons.jsx";
import { useLeafTip } from "./LeafTipContext.jsx";

export function leafTipEntry(label, key, slotId) {
  return { id: key, label, tip: leafTips[label] ?? null, slot: slotId ?? null };
}

/**
 * Whether a group of leaves can ever show a definition. A group where nothing is
 * defined reserves no strip: there is no layout to protect and no hint to give.
 */
export function groupHasTips(labels) {
  return (labels ?? []).some((label) => Boolean(leafTips[label]));
}

function panelIdFor(key) {
  return `leaftip-${key.replace(/[^a-zA-Z0-9_-]+/g, "-")}`;
}

/**
 * Passing `slotId` sends the definition to a reserved detail strip owned by the
 * caller instead of growing the leaf, so hovering never moves a tree row. The
 * caller then owns the pointer/focus handlers for the whole row.
 */
export function LeafText({ label, tipKey, slotId }) {
  const autoId = useId();
  const key = tipKey ?? autoId;
  const tip = leafTips[label];
  const { active, isExpanded, hoverTip, leaveTip, focusTip, blurTip, pinTip } = useLeafTip();

  // A term with no definition is plain text: no control, no listeners, no tip ARIA.
  if (!tip) {
    return <span className="leaf-plain">{label}</span>;
  }

  const inline = !slotId;
  const entry = leafTipEntry(label, key, slotId);
  const pointer = inline
    ? { onMouseOver: () => hoverTip(entry), onMouseLeave: () => leaveTip(key) }
    : {};

  const open = active?.id === key;

  return (
    <span className={`leaf-name${open ? " is-open" : ""}`} {...pointer}>
      <span className="leaf-label">{label}</span>
      <button
        type="button"
        className="leaf-tip-btn"
        aria-label={`What ${label} means`}
        aria-expanded={isExpanded(key)}
        aria-controls={open ? slotId ?? panelIdFor(key) : undefined}
        onFocus={inline ? () => focusTip(entry) : undefined}
        onBlur={inline ? () => blurTip(key) : undefined}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          pinTip(entry);
        }}
      >
        <Icon name="circle-help" size={13} strokeWidth={2.25} aria-hidden="true" />
      </button>
      {inline && open ? (
        <span className="leaf-def" id={panelIdFor(key)} role="note">
          {tip}
        </span>
      ) : null}
    </span>
  );
}

/** Reserved, always-present strip that a tree renders below an open leaf group. */
export function LeafDefSlot({ slotId }) {
  const { active } = useLeafTip();
  const shown = active && active.slot === slotId && active.tip ? active : null;

  return (
    <div className="leaf-def-slot">
      <p className="leaf-def is-slot" id={slotId} role="note" aria-live="polite">
        {shown ? (
          <span className="leaf-def-body" key={shown.id}>
            <span className="leaf-def-term">{shown.label}</span>
            {shown.tip}
          </span>
        ) : (
          <span className="leaf-def-idle">Hover a term for a plain-language definition.</span>
        )}
      </p>
    </div>
  );
}
