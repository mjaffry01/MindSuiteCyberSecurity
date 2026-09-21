import { iconFor } from "../data/leafIcons.js";
import { Icon } from "../icons.jsx";

export function OfferingPanel({ title, kicker, what, gets, outcome, cta = "Request scope", href = "#contact" }) {
  return (
    <article className="offer-panel">
      {kicker ? <p className="tag">{kicker}</p> : null}
      <h3>{title}</h3>
      <p className="offer-what">{what}</p>
      {gets?.length ? (
        <div>
          <p className="offer-label">What you get</p>
          <ul className="offer-gets">
            {gets.map((item) => (
              <li key={item}>
                <Icon name={iconFor(item)} size={14} strokeWidth={2} className="leaf-ico" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
