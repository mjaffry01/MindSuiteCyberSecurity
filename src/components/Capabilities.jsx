import { capabilities } from "../data/content.js";
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
            <h2>Strategic offers, not footnotes.</h2>
          </div>
          <p>
            Leadership, generative AI risk, intelligence, ransomware rehearsal, and
            offensive testing sit in the first conversation — next to a single SOC story.
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
      </div>
    </section>
  );
}
