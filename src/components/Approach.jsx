import { steps } from "../data/content.js";
import { motionGets } from "../data/offers.js";
import { NestedTree } from "./NestedTree.jsx";
import { useInView } from "../hooks.js";

const motionOutcomes = {
  Assess: "The board can fund the right work, in the right order.",
  Architect: "Access, cloud, and OT are designed the way the estate actually runs.",
  Protect: "Controls sit on networks, endpoints, data, and models.",
  Detect: "Signals become decisions in one SOC.",
  Recover: "Containment, investigation, and restore are rehearsed before they are needed.",
};

const motionNodes = steps.map((step) => ({
  id: step.title,
  title: step.title,
  icon: step.icon,
  kicker: "This step",
  what: step.text,
  gets: motionGets[step.title],
  outcome: motionOutcomes[step.title],
  cta: "Talk to a specialist",
}));

export function Approach() {
  const [ref, visible] = useInView();

  return (
    <section className="section band" id="approach" ref={ref}>
      <div className="wrap">
        <div className={`section-head ${visible ? "in" : ""}`}>
          <div>
            <p className="eyebrow">The path</p>
            <h2>Start with the risk. Finish with a rehearsal.</h2>
          </div>
          <p>
            Each step has deliverables. Open one to see them.
          </p>
        </div>
        <NestedTree rootLabel="The path" nodes={motionNodes} ariaLabel="How the work proceeds" />
      </div>
    </section>
  );
}
