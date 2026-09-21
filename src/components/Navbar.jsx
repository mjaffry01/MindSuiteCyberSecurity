import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/content.js";
import { BrandLogo } from "./BrandLogo.jsx";

export function Navbar({ active }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <BrandLogo />
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={active === item.id ? "active" : ""}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <a className="nav-cta" href="#contact">
            Talk to us
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>
      <div className={`drawer ${open ? "open" : ""}`} id="mobile-drawer">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="nav-cta drawer-cta" href="#contact" onClick={() => setOpen(false)}>
          Talk to us
        </a>
      </div>
    </header>
  );
}
