import { useId, useState } from "react";
import { iconFor } from "../data/leafIcons.js";
import { hasTip, leafTips, pointLabel, pointTip, resolveTip, tipPoints, tipText } from "../data/leafTips.js";
import { Icon } from "../icons.jsx";
import { useLeafTip } from "./LeafTipContext.jsx";

export function leafTipEntry(label, key, slotId, scope) {
  return { id: key, label, tip: resolveTip(label, scope), slot: slotId ?? null, scope: scope ?? null };
}

/**
 * Whether a group of leaves can ever show a definition. A group where nothing is
 * defined reserves no strip: there is no layout to protect and no hint to give.
 */
export function groupHasTips(labels, scope) {
  return (labels ?? []).some((label) => hasTip(resolveTip(label, scope)));
}

function panelIdFor(key) {
  return `leaftip-${key.replace(/[^a-zA-Z0-9_-]+/g, "-")}`;
}

/**
 * Passing `slotId` sends the definition to a reserved detail strip owned by the
 * caller instead of growing the leaf, so hovering never moves a tree row. The
 * caller then owns the pointer/focus handlers for the whole row.
 */
export function LeafText({ label, tipKey, slotId, scope }) {
  const autoId = useId();
  const key = tipKey ?? autoId;
  const tip = resolveTip(label, scope);
  const { active, isExpanded, hoverTip, leaveTip, focusTip, blurTip, pinTip } = useLeafTip();

  // A term with no definition is plain text: no control, no listeners, no tip ARIA.
  if (!tip) {
    return <span className="leaf-plain">{label}</span>;
  }

  const inline = !slotId;
  const entry = leafTipEntry(label, key, slotId, scope);
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
          <TipBody tip={tip} scope={scope} />
        </span>
      ) : null}
    </span>
  );
}

/**
 * Reserved strip that a tree renders below a leaf group holding at least one
 * definition. It stays empty and unpainted until a definition is active; the height
 * it reserves is what stops chips shifting under the pointer.
 */
export function LeafDefSlot({ slotId }) {
  const { active } = useLeafTip();
  const shown = active && active.slot === slotId && active.tip ? active : null;

  return (
    <div className="leaf-def-slot">
      <div
        className={`leaf-def is-slot${shown ? "" : " is-empty"}`}
        id={slotId}
        role="note"
        aria-live="polite"
      >
        {shown ? (
          <div className="leaf-def-body" key={shown.id}>
            <span className="leaf-def-term">{shown.label}</span>
            <TipBody tip={shown.tip} scope={shown.scope} />
          </div>
        ) : null}
      </div>
    </div>
  );
}

/**
 * A one-line definition stays a sentence. Several points keep that sentence and
 * cycle the points in a carousel, so opening them does not grow the page.
 * A point that itself has several points becomes the carousel on its slide.
 */
export function TipBody({ tip, scope }) {
  const points = tipPoints(tip);
  const text = tipText(tip);
  if (points && points.length > 1) {
    return (
      <span className="def-multi">
        {text ? <span className="def-lead">{text}</span> : null}
        <DefCarousel points={points} scope={scope} />
      </span>
    );
  }
  if (text) return text;
  if (points?.length === 1) {
    const child = pointTip(points[0], scope);
    return <TipBody tip={child} scope={scope} />;
  }
  return null;
}

function DefCarousel({ points, scope }) {
  const [index, setIndex] = useState(0);
  const count = points.length;
  const safeIndex = ((index % count) + count) % count;
  const point = points[safeIndex];
  const label = pointLabel(point);
  const child = pointTip(point, scope);
  const nested = tipPoints(child);
  const sentence = tipText(child);

  function step(direction, event) {
    event.preventDefault();
    event.stopPropagation();
    setIndex((current) => (current + direction + count) % count);
  }

  return (
    <span className="def-carousel">
      <span className="def-carousel-slide">
        <span className="def-tree-row">
          <Icon name={iconFor(label)} size={13} strokeWidth={2} className="leaf-ico" aria-hidden="true" />
          <span className="def-tree-label">{label}</span>
        </span>
        {nested && nested.length > 1 ? (
          <DefCarousel key={label} points={nested} scope={scope} />
        ) : sentence ? (
          <span className="def-tree-note">{sentence}</span>
        ) : null}
      </span>
      <span className="def-carousel-nav">
        <button type="button" className="def-carousel-btn" aria-label="Previous point" onClick={(event) => step(-1, event)}>
          ‹
        </button>
        <span className="def-carousel-count">
          {safeIndex + 1} / {count}
        </span>
        <button type="button" className="def-carousel-btn" aria-label="Next point" onClick={(event) => step(1, event)}>
          ›
        </button>
      </span>
    </span>
  );
}

const proseTerms = Object.keys(leafTips).sort((a, b) => b.length - a.length);
const prosePattern = new RegExp(
  `(?<![A-Za-z0-9])(${proseTerms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})(?![A-Za-z0-9])`,
  "g",
);

/** Wraps glossary terms inside a sentence so each one can open its definition. */
export function DefinedText({ text }) {
  if (!text) return null;
  const nodes = [];
  const pattern = new RegExp(prosePattern.source, "g");
  let last = 0;
  for (const match of text.matchAll(pattern)) {
    const label = match[1];
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    nodes.push(<LeafText key={`${label}-${index}`} label={label} />);
    last = index + label.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}
