import { useId } from "react";
import { leafTips } from "../data/leafTips.js";
import { Icon } from "../icons.jsx";
import { useLeafTip } from "./LeafTipContext.jsx";

export function LeafText({ label }) {
  const tip = leafTips[label];
  const id = useId();
  const { openId, openTip, noticeLeaf } = useLeafTip();
  const open = openId === id;

  if (!tip) {
    return (
      <span className="leaf-plain" onMouseEnter={() => noticeLeaf(null)}>
        {label}
      </span>
    );
  }

  const tipDomId = `${id}-def`;

  return (
    <span
      className={`leaf-name${open ? " is-open" : ""}`}
      onMouseEnter={() => noticeLeaf(id)}
    >
      <span className="leaf-label">{label}</span>
      <button
        type="button"
        className="leaf-tip-btn"
        aria-label={`What ${label} means`}
        aria-expanded={open}
        aria-controls={open ? tipDomId : undefined}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          openTip(id);
        }}
      >
        <Icon name="circle-help" size={13} strokeWidth={2.25} aria-hidden="true" />
      </button>
      {open ? (
        <span className="leaf-def" id={tipDomId} role="note">
          {tip}
        </span>
      ) : null}
    </span>
  );
}
