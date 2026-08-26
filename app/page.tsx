"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const paths = [
  ["✦", "Survive Morocco", "Structured Darija you can use the same week: markets, taxis, small talk, and real conversations.", ["Online classes", "Atay Club"]],
  ["◈", "Experience Morocco", "Get out of the classroom. Cook, hike, and haggle your way through real Moroccan life.", ["Workshops", "Activities", "Trips"]],
  ["◎", "Community", "A group chat, weekly meetups, and people who were exactly where you are six months ago.", ["Join the group", "What’s on"]],
] as const;

const events = [
  ["SEP", "04", "Atay Club: Thursday tea & talk", "Online · Free for subscribers", "Weekly"],
  ["SEP", "13", "Tagine cooking workshop", "Marrakech · In person · Limited to 8", "Workshop"],
  ["SEP", "27", "Weekend trip: Atlas villages", "2 days · All levels welcome", "Trip"],
] as const;

export default function Home() {
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
        <div className="nav-actions"><Link className="nav-contact" href="/contact-me">Say marhaba <span>↗</span></Link><Link className="button button-primary" href="/start-learning">Start learning <span>→</span></Link></div>
      </nav></header>

      <main id="top">
        <section className="hero wrap"><div className="hero-copy"><div className="eyebrow">Salam, stranger</div><h1>Learn Darija <em>the way</em><br />you’ll actually use it</h1><p className="lead">Not textbook Arabic. The Darija that gets you invited to the tea, haggles you a fair price, and makes a taxi driver switch from French mid-sentence.</p><div className="hero-actions"><a className="button button-primary" href="#contact">Book a free trial class</a><a className="button button-outline" href="#pricing">See pricing</a></div><div className="trust"><div className="avatars"><span>S</span><span>K</span><span>R</span><span>L</span></div><span>Trusted by learners across 14 countries</span></div></div><div className="hero-art"><div className="float-card float-top"><span />Live now: Atay Club</div><div className="tile-frame"><div className="zellige">✦<span>أهلا</span>✦</div><div className="teapot">◓</div><div className="tea-stream" /><div className="tea-glass">♨</div></div><div className="float-card float-bottom"><span />4.9/5 from 200+ students</div></div></section>
        <section className="stats"><div className="wrap stats-grid"><div><strong>200+</strong><span>Active learners</span></div><div><strong>6</strong><span>Native teachers</span></div><div><strong>30+</strong><span>Cultural trips run</span></div><div><strong>4.9/5</strong><span>Average rating</span></div></div></section>
        <section className="section wrap" id="pillars"><div className="section-head"><div className="eyebrow">Three ways in</div><h2>Whichever door you walk through, you land in the same souq</h2><p>Everything here sits under one of these. Pick the one that matches why you’re here.</p></div><div className="path-grid">{paths.map(([icon, title, text, links]) => <article className="path-card" key={title}><div className="path-icon">{icon}</div><h3>{title}</h3><p>{text}</p><div className="path-links">{links.map((link) => <a href={link === "What’s on" ? "#whats-on" : "#pricing"} key={link}>{link} <span>→</span></a>)}</div></article>)}</div></section>
        <section className="ritual" id="pricing"><div className="wrap"><div className="section-head centered"><div className="eyebrow">The atay ritual</div><h2>Three glasses, three ways to learn</h2><p>Moroccans say the first glass of tea is bitter, the second is gentle, the third is sweet. Pick the one that matches your pace.</p></div><div className="pricing-grid">{[["First glass", "Drop-in classes", "Pay as you go, no commitment: good for testing the water."], ["Second glass", "Monthly subscription", "Weekly 1-on-1 sessions, Atay Club access, and a learning plan."], ["Third glass", "Full immersion", "Classes, trips, and workshops bundled for the season you’re all in."]].map(([tag, title, text], index) => <article className={`price-card ${index === 1 ? "featured" : ""}`} key={title}><div className="glass">{index === 1 ? "◆" : "◇"}</div><small>{tag}</small><h3>{title}</h3><p>{text}</p><a className={`button ${index === 1 ? "button-light" : "button-outline"}`} href="#contact">{index === 1 ? "Most popular →" : "See details"}</a></article>)}</div><p className="proverb">“Ftel bel merra loula morra, ou f tania hnina, ou f talta lasfa.”<br /><span>The first is bitter, the second gentle, the third as light as life itself.</span></p></div></section>
        <section className="section wrap" id="whats-on"><div className="section-head"><div className="eyebrow">What’s on</div><h2>Coming up this month</h2></div><div className="events">{events.map(([month, day, title, meta, tag]) => <div className="event" key={title}><div className="event-date">{month}<strong>{day}</strong></div><div><h3>{title}</h3><p>{meta}</p></div><span className="event-tag">{tag}</span></div>)}</div></section>
        <section className="section wrap" id="community"><div className="section-head"><div className="eyebrow">Loved by learners</div><h2>What people say after their first cup</h2></div><div className="quote-grid">{[["I went from ordering coffee in French to arguing about the price of oranges in Darija. That’s the whole point.", "Sanne", "Learning Darija, 4 months", "S"], ["The Atay Club is the only class I’ve never skipped. It feels like showing up for friends.", "Kenji", "Subscriber, since March", "K"], ["We did the Atlas trip halfway through the course and suddenly all the vocab had a place to live.", "Rosa", "Full immersion track", "R"]].map(([quote, name, detail, initial]) => <article className="quote" key={name}><p>“{quote}”</p><div><span>{initial}</span><strong>{name}<small>{detail}</small></strong></div></article>)}</div></section>
        <section className="section about wrap" id="about"><div className="portrait"><Image src="/ahmed.png" alt="Ahmed, your Darija teacher" fill sizes="(max-width: 900px) 100vw, 35vw" /><span>مَرْحْبَا</span></div><div><div className="eyebrow">About me</div><h2>Hi, I’m Ahmed. I teach the Darija nobody puts in textbooks.</h2><p>Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla bla </p><Link className="button button-primary" href="/contact-me">Get in touch</Link></div></section>
        <section className="contact wrap" id="contact"><h2>Ready for your first glass?</h2><a className="button button-dark" href="mailto:hello@darijawithmd.com">Book a free trial class</a></section>
      </main>
      <footer><div className="wrap footer-grid"><div><div className="foot-logo">Darija<span>·</span>Ahmed</div><p>Learn Darija the way it’s actually spoken: classes, culture, and community in one place.</p></div><div><h4>Explore</h4><Link href="/online-classes">Online classes</Link><Link href="/atay-club">Atay Club</Link></div><div><h4>Experience</h4><Link href="/workshops">Workshops</Link><Link href="/activities">Activities</Link><Link href="/trips">Trips</Link></div><div><h4>Contact</h4><a href="mailto:hello@darijawithahmed.com">hello@darijawithahmed.com</a><Link href="/community">Instagram</Link><Link href="/community">TikTok</Link></div></div><div className="wrap footer-bottom"><span>© 2026 DarijaWithAhmed. All rights reserved.</span><span>Marrakech, Morocco</span></div></footer>
    </div>
  );
}
