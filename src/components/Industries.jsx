import { industries, reasons } from "../data/content.js";
import { useInView } from "../hooks.js";
import { Icon } from "../icons.jsx";

export function Industries() {
  const [ref, visible] = useInView();
  const featured = industries.slice(0, 2);
  const rest = industries.slice(2);

  return (
    <section className="section" id="industries" ref={ref}>
      <div className="wrap">
        <div className={`section-head ${visible ? "in" : ""}`}>
          <div>
            <p className="eyebrow">Industries</p>
            <h2>Built for regulated, digital, and industrial estates.</h2>
          </div>
          <p>
            Same taxonomy, sector-specific risk. From payment rails and patient data
            to plant floors and product pipelines.
          </p>
        </div>
        <div className={`industry-split ${visible ? "in" : ""}`}>
          <div className="industry-feature">
            {featured.map((item) => (
              <article className="industry-lead" key={item.id}>
                <span className="icon-blob">
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <ul className="industry-list">
            {rest.map((item) => (
              <li key={item.id}>
                <span className="icon-blob sm">
                  <Icon name={item.icon} size={16} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="reason-row">
          {reasons.map((item) => (
            <article className="reason-item" key={item.title}>
              <Icon name={item.icon} size={18} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
