import { useId } from "react";
import { iconFor } from "../data/leafIcons.js";
import { Icon } from "../icons.jsx";
import { DefinedText, LeafDefSlot, LeafText, groupHasTips, leafTipEntry } from "./LeafText.jsx";
import { useLeafTip } from "./LeafTipContext.jsx";

export function OfferingPanel({
  title,
  kicker,
  what,
  gets,
  outcome,
  cta = "Request scope",
  href = "#contact",
  defineWhat = true,
}) {
  const { hoverTip, clearHover, focusTip, clearFocus } = useLeafTip();
  const slotId = `offerdef${useId().replace(/[^a-zA-Z0-9_-]+/g, "-")}`;
  const showSlot = groupHasTips(gets, title);

  return (
    <article className="offer-panel">
      {kicker ? <p className="tag">{kicker}</p> : null}
      <h3>{title}</h3>
      <p className="offer-what">{defineWhat ? <DefinedText text={what} /> : what}</p>
      {gets?.length ? (
        <div>
          <p className="offer-label">What you get</p>
          <ul
            className="offer-gets"
            onMouseLeave={clearHover}
            onBlur={(event) => {
              if (event.currentTarget.contains(event.relatedTarget)) return;
              clearFocus();
            }}
          >
            {gets.map((item) => {
              const key = `${title}:${item}`;
              const tipEntry = leafTipEntry(item, key, showSlot ? slotId : null, title);
              return (
                <li
                  key={item}
                  onMouseOver={() => (tipEntry.tip ? hoverTip(tipEntry) : clearHover())}
                  onFocus={() => (tipEntry.tip ? focusTip(tipEntry) : clearFocus())}
                >
                  <Icon name={iconFor(item)} size={14} strokeWidth={2} className="leaf-ico" />
                  <LeafText label={item} scope={title} tipKey={key} slotId={showSlot ? slotId : undefined} />
                </li>
              );
            })}
          </ul>
          {showSlot ? <LeafDefSlot slotId={slotId} /> : null}
        </div>
      ) : null}
      {outcome ? (
        <p className="offer-outcome">
          <Icon name="target" size={16} className="leaf-ico" />
          <span>
            <strong>Outcome.</strong> {outcome}
          </span>
        </p>
      ) : null}
      <a className="btn btn-primary" href={href}>
        {cta}
      </a>
    </article>
  );
}
