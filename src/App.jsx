import { useMemo } from "react";
import { Approach } from "./components/Approach.jsx";
import { Background } from "./components/Background.jsx";
import { Capabilities } from "./components/Capabilities.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { Industries } from "./components/Industries.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Services } from "./components/Services.jsx";
import { navItems } from "./data/content.js";
import { useActiveSection } from "./hooks.js";

export default function App() {
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const active = useActiveSection(sectionIds);

  return (
    <>
      <a className="skip-link" href="#services">
        Skip to content
      </a>
      <Background />
      <div className="app">
        <Navbar active={active} />
        <main>
          <Hero />
          <Services />
          <Capabilities />
          <Approach />
          <Industries />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
