"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <div className="announce"><strong>Yallah!</strong> Autumn Darija cohort opens September 15 · small groups only</div>
      <header className="site-header"><nav className="nav wrap">
        <Link className="logo" href="/">Darija<span>With</span>md</Link>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><i /><i /><i /></button>
        <div className={`navlinks ${menuOpen ? "open" : ""}`}>
          <details><summary>Learn <b>⌄</b></summary><div className="dropdown"><Link href="/online-classes">Online classes</Link><Link href="/atay-club">Atay Club</Link><Link href="/pricing">Pricing</Link></div></details>
          <details><summary>Experience <b>⌄</b></summary><div className="dropdown"><Link href="/workshops">Workshops</Link><Link href="/activities">Activities</Link><Link href="/trips">Trips</Link><Link href="/whats-on">What’s on</Link></div></details>
          <Link href="/community">Community</Link><Link href="/about-me">About Ahmed</Link>
        </div>
        <div className="nav-actions"><Link className="nav-contact" href="/contact-me">Say Salam <span>↗</span></Link><Link className="button button-primary" href="/start-learning">Start learning <span>→</span></Link></div>
      </nav></header>
      {children}
      <footer><div className="wrap footer-grid"><div><div className="foot-logo">Darija<span>With</span>md</div><p>Learn Darija the way it’s actually spoken: classes, culture, and community in one place.</p></div><div><h4>Explore</h4><Link href="/online-classes">Online classes</Link><Link href="/atay-club">Atay Club</Link></div><div><h4>Experience</h4><Link href="/workshops">Workshops</Link><Link href="/activities">Activities</Link><Link href="/trips">Trips</Link></div><div><h4>Contact</h4><a href="mailto:hello@darijawithahmed.com">hello@darijawithahmed.com</a><Link href="/community">Instagram</Link><Link href="/community">TikTok</Link></div></div><div className="wrap footer-bottom"><span>© 2026 DarijaWithAhmed. All rights reserved.</span><span>Marrakech, Morocco</span></div></footer>
    </div>
  );
}
