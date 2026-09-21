import { ServiceTree } from "./ServiceTree.jsx";
import { useInView } from "../hooks.js";

export function Services() {
  const [ref, visible] = useInView();

  return (
    <section className="section" id="services" ref={ref}>
      <div className="wrap">
        <div className={`section-head ${visible ? "in" : ""}`}>
          <div>
            <p className="eyebrow">What we cover</p>
            <h2>From board strategy to 24/7 response.</h2>
          </div>
          <p>
            Open a path to see the work, the deliverables, and the outcome.
          </p>
        </div>
        <ServiceTree />
      </div>
    </section>
  );
}
