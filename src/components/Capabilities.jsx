import { capabilities, frameworks } from "../data/content.js";
import { iconFor } from "../data/leafIcons.js";
import { useInView } from "../hooks.js";
import { Icon } from "../icons.jsx";

export function Capabilities() {
  const [ref, visible] = useInView();
  const [lead, ...rest] = capabilities;

  return (
    <section className="section" id="capabilities" ref={ref}>
      <div className="wrap">
        <div className={`section-head ${visible ? "in" : ""}`}>
          <div>
            <p className="eyebrow">What the board asks for</p>
            <h2>Leadership and detection in the first conversation.</h2>
          </div>
          <p>
            Fractional CISO, generative AI risk, ransomware rehearsal, and red
            teaming belong in the opening meeting — not a later annex.
          </p>
        </div>
        <div className={`cap-layout ${visible ? "in" : ""}`}>
          <article className="cap-lead">
            <div className="cap-top">
              <span className="icon-blob">
                <Icon name={lead.icon} />
              </span>
              <span className="tag">{lead.tag}</span>
            </div>
            <h3>{lead.title}</h3>
            <p>{lead.text}</p>
          </article>
          <div className="cap-compact">
            {rest.map((item) => (
              <article className="cap-row" key={item.id}>
                <span className="icon-blob sm">
                  <Icon name={item.icon} size={16} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <ul className="frame-pills" aria-label="Core frameworks">
          {frameworks.map((item) => (
            <li key={item.name}>
              <Icon name={iconFor(item.name)} size={14} strokeWidth={2} className="leaf-ico" />
              <strong>{item.name}</strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
