import { frameworks, steps } from "../data/content.js";
import { useInView } from "../hooks.js";
import { Icon } from "../icons.jsx";

export function Approach() {
  const [ref, visible] = useInView();

  return (
    <section className="section band" id="approach" ref={ref}>
      <div className="wrap">
        <div className={`section-head ${visible ? "in" : ""}`}>
          <div>
            <p className="eyebrow">How we work</p>
            <h2>From first risk picture to a practiced recovery.</h2>
          </div>
          <p>
            Five motions. Each one is a buyable program — named by the work, not by a
            sequence on a slide.
          </p>
        </div>
        <div className={`motion-band ${visible ? "in" : ""}`}>
          {steps.map((step) => (
            <article className="motion-item" key={step.title}>
              <span className="icon-blob">
                <Icon name={step.icon} />
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <ul className={`frame-pills ${visible ? "in" : ""}`} aria-label="Frameworks">
          {frameworks.map((item) => (
            <li key={item.name}>
              <strong>{item.name}</strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
