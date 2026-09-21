import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "../data/content.js";
import { useInView } from "../hooks.js";

const empty = { name: "", email: "", company: "", interest: "vCISO & advisory", message: "" };

export function Contact() {
  const [ref, visible] = useInView();
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  function update(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className="wrap contact-grid">
        <div className={`reveal ${visible ? "in" : ""}`}>
          <p className="eyebrow">Start a conversation</p>
          <h2>Tell us what the board needs to decide next.</h2>
          <p className="lead">
            Assessment, a vCISO retainer, AI risk, or a full operating program. We
            reply with a scoped next step.
          </p>
          <ul className="contact-meta">
            <li>
              <Mail size={18} />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <Phone size={18} />
              <a href="tel:+919100005500">{contact.phone}</a>
            </li>
            <li>
              <MapPin size={18} />
              <span>{contact.address}</span>
            </li>
          </ul>
        </div>

        {sent ? (
          <div className="form-card success">
            <CheckCircle2 size={36} />
            <h3>Request received.</h3>
            <p>A MindSuite specialist will follow up on the interest you selected.</p>
            <button type="button" className="btn btn-ghost" onClick={() => { setSent(false); setForm(empty); }}>
              Send another
            </button>
          </div>
        ) : (
          <form className={`form-card ${visible ? "in" : ""}`} onSubmit={submit}>
            <label htmlFor="name">
              Name
              <input id="name" name="name" value={form.name} onChange={update} required placeholder="Your name" autoComplete="name" />
            </label>
            <label htmlFor="email">
              Work email
              <input id="email" type="email" name="email" value={form.email} onChange={update} required placeholder="you@company.com" autoComplete="email" />
            </label>
            <label htmlFor="company">
              Company
              <input id="company" name="company" value={form.company} onChange={update} placeholder="Organization" autoComplete="organization" />
            </label>
            <label htmlFor="interest">
              Interest
              <select id="interest" name="interest" value={form.interest} onChange={update}>
                <option>vCISO & advisory</option>
                <option>Threat assessment</option>
                <option>AI security</option>
                <option>SOC & monitoring</option>
                <option>GRC & compliance</option>
                <option>Ransomware readiness</option>
                <option>Red team / pen test</option>
              </select>
            </label>
            <label className="full" htmlFor="message">
              Message
              <textarea id="message" name="message" value={form.message} onChange={update} rows="3" placeholder="What should we help you decide?" />
            </label>
            <button className="btn btn-primary full" type="submit">
              Request a conversation <ArrowRight size={18} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
