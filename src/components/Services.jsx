import { ServiceTree } from "./ServiceTree.jsx";
import { useInView } from "../hooks.js";

export function Services() {
  const [ref, visible] = useInView();

  return (
    <section className="section" id="services" ref={ref}>
      <div className="wrap">
        <div className={`section-head reveal ${visible ? "in" : ""}`}>
          <div>
            <p className="eyebrow">Service portfolio</p>
            <h2>Explore the cybersecurity portfolio.</h2>
          </div>
          <p>
            Hover the MindSuite mark to open five pillars. Hover a pillar to reveal
            named services, then hover a service to see the work inside. Each layer
            opens only when you ask for it.
          </p>
        </div>
        <ServiceTree />
      </div>
    </section>
  );
}
