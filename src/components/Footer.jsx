import { contact, navItems } from "../data/content.js";
import { BrandLogo } from "./BrandLogo.jsx";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <a className="brand" href="#top">
            <BrandLogo onDark />
          </a>
          <p>Enterprise digital transformation and a full cybersecurity portfolio from Hyderabad.</p>
        </div>
        <div>
          <strong>Navigate</strong>
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <strong>Contact</strong>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href="tel:+919100005500">{contact.phone}</a>
          <span>{contact.address}</span>
        </div>
      </div>
      <div className="wrap footer-bar">
        <span>© {new Date().getFullYear()} MindSuite. All rights reserved.</span>
        <a href={contact.site} target="_blank" rel="noreferrer">
          mindsuite.in
        </a>
      </div>
    </footer>
  );
}
