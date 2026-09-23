import { useEffect, useMemo, useState } from "react";
import { capabilities, frameworks } from "../data/content.js";
import { iconFor } from "../data/leafIcons.js";
import { pointLabel, pointTip, resolveTip, tipPoints, tipText } from "../data/leafTips.js";
import { useInView } from "../hooks.js";
import { Icon } from "../icons.jsx";
import { DefinedText, LeafText } from "./LeafText.jsx";

function LeadCarousel({ label }) {
  const slides = useMemo(() => {
    const points = tipPoints(resolveTip(label)) ?? [];
    return points.map((point) => {
      const name = pointLabel(point);
      return { key: name, icon: iconFor(name), title: name, text: tipText(pointTip(point)) ?? "" };
    });
  }, [label]);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const safeIndex = count ? ((index % count) + count) % count : 0;
  const slide = slides[safeIndex];

  useEffect(() => {
    if (paused || count < 2) return undefined;
    const timer = setInterval(() => setIndex((current) => (current + 1) % count), 4500);
    return () => clearInterval(timer);
  }, [paused, count]);

  if (!slide) return null;

  function go(next) {
    setIndex((next + count) % count);
  }

  return (
    <div
      className="cap-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="cap-carousel-slide" key={slide.key} aria-live="polite">
        <button type="button" className="cap-carousel-btn" aria-label="Previous point" onClick={() => go(safeIndex - 1)}>
          ‹
        </button>
        <span className="cap-carousel-kicker">
          <Icon name={slide.icon} size={14} strokeWidth={2} className="leaf-ico" aria-hidden="true" />
          {slide.title}
        </span>
        <p className="cap-carousel-copy">{slide.text}</p>
        <button type="button" className="cap-carousel-btn" aria-label="Next point" onClick={() => go(safeIndex + 1)}>
          ›
        </button>
      </div>
      <div className="cap-carousel-dots">
        {slides.map((item, dot) => (
          <button
            key={item.key}
            type="button"
            className={`cap-carousel-dot${dot === safeIndex ? " is-on" : ""}`}
            aria-label={`Show ${item.title}`}
            aria-current={dot === safeIndex ? "true" : undefined}
            onClick={() => go(dot)}
          />
        ))}
      </div>
    </div>
  );
}

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
            <DefinedText text="Fractional CISO, generative AI risk, ransomware rehearsal, and red teaming belong in the opening meeting — not a later annex." />
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
            <p className="cap-lead-def">{tipText(resolveTip(lead.title)) || lead.text}</p>
            <LeadCarousel label={lead.title} />
          </article>
          <div className="cap-compact">
            {rest.map((item) => (
              <article className="cap-row" key={item.id}>
                <span className="icon-blob sm">
                  <Icon name={item.icon} size={16} />
                </span>
                <div>
                  <h3>
                    <DefinedText text={item.title} />
                  </h3>
                  <p>
                    <DefinedText text={item.text} />
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <ul className="frame-pills" aria-label="Core frameworks">
          {frameworks.map((item) => (
            <li key={item.name}>
              <Icon name={iconFor(item.name)} size={14} strokeWidth={2} className="leaf-ico" />
              <strong>
                <LeafText label={item.name} />
              </strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
