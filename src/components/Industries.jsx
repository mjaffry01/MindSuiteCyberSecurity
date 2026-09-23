import { industries, reasons } from "../data/content.js";
import { industryFocus } from "../data/offers.js";
import { Icon } from "../icons.jsx";
import { DefinedText } from "./LeafText.jsx";
import { NestedTree } from "./NestedTree.jsx";
import { useInView } from "../hooks.js";

const industryNodes = industries.map((item) => ({
  id: item.id,
  title: item.title,
  icon: item.icon,
  kicker: "This sector",
  what: item.text,
  gets: industryFocus[item.id],
  outcome: "Controls and evidence that match how this sector is actually attacked.",
  cta: "Talk to a specialist",
}));

export function Industries() {
  const [ref, visible] = useInView();

  return (
    <section className="section" id="industries" ref={ref}>
      <div className="wrap">
        <div className={`section-head ${visible ? "in" : ""}`}>
          <div>
            <p className="eyebrow">Industries</p>
            <h2>The same protection, scoped to the sector.</h2>
          </div>
          <p>
            Banking, healthcare, manufacturing, software, retail, and public
            services — each attacked differently.
          </p>
        </div>
        <NestedTree rootLabel="Sectors" nodes={industryNodes} ariaLabel="Industry coverage" />
        <div className="reason-row">
          {reasons.map((item) => (
            <article className="reason-item" key={item.title}>
              <Icon name={item.icon} size={18} />
              <div>
                <h3>{item.title}</h3>
                <p>
                  <DefinedText text={item.text} />
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
