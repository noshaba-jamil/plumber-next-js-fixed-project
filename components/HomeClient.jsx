'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import HeroCanvas from '@/components/HeroCanvas'
import ServiceCard from '@/components/ServiceCard'
import FAQAccordion from '@/components/FAQAccordion'
import CtaBanner from '@/components/CtaBanner'
import {
  SERVICES, SERVICE_AREAS, REVIEWS, FAQS, CONTACT_INFO,
  HERO_COPY, SECTION_COPY, WHY_US_FEATURES, EMERGENCY_ITEMS, PROCESS_STEPS,
  TRUST_LINES
} from '@/data/services'
import '@/components/Home.css'

export default function Home({ h1 }) {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); obs.unobserve(e.target) } })
    }, { threshold: 0.07, rootMargin: '0px 0px -30px 0px' })
    document.querySelectorAll('[data-aos]').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <section id="hero">
        <div className="hero-left-panel">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              <span>{HERO_COPY.availability_pill}</span>
            </div>

            {/* H1 — uses prop from page.jsx for SEO control */}
            <h1 className="hero-h1">
              {h1 ? (
                h1
              ) : (
                <><em>Emergency Plumber</em><br />in Springfield MO —<br />24/7. Fast. Trusted.</>
              )}
            </h1>

            <div className="hero-sub">
              <p><strong>Pipe burst? Water leaking? Drain backed up?</strong></p>
              <p>Get fast, reliable help from a licensed emergency plumber in Springfield MO.</p>
              <p>We answer every call — day or night — and get to you FAST.</p>
            </div>

            <div className="hero-actions">
              <a href={CONTACT_INFO.phoneHref} className="hero-cta-primary">
                <span className="pulse-ring" />
                <i className="ri-phone-fill" />
                CALL NOW — GET HELP FAST
              </a>
              <Link href="/contact" className="hero-cta-secondary">
                <i className="ri-calendar-check-line" />
                REQUEST EMERGENCY SERVICE
              </Link>
            </div>

            <div className="hero-trust">
              {HERO_COPY.trust_row.map((item, i) => (
                <div key={i} className="trust-row">
                  <div className="trust-icon"><i className="ri-check-line" /></div>
                  <span className="trust-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-right-panel">
          <HeroCanvas />
          <div className="hero-cards">
            <a href={CONTACT_INFO.phoneHref} className="hgc-phone">
              <div className="hgc-phone-icon"><i className="ri-phone-fill" /></div>
              <div className="hgc-phone-text">
                <div className="lbl">Emergency Hotline — Answers Instantly</div>
                <div className="num">{CONTACT_INFO.phone}</div>
              </div>
              <div className="hgc-phone-arrow"><i className="ri-arrow-right-line" /></div>
            </a>
            <div className="hero-glass-card">
              <div className="hgc-stats">
                <div className="hgc-stat"><div className="n">24<sup>/7</sup></div><div className="l">We Answer</div></div>
                <div className="hgc-stat"><div className="n">4.8<sup>★</sup></div><div className="l">Google</div></div>
                <div className="hgc-stat"><div className="n">$0<sup></sup></div><div className="l">Call-Out Fee</div></div>
              </div>
            </div>
            <div className="hero-glass-card">
              <div className="hgc-avail">
                <span className="avail-dot" />
                <span className="avail-text">
                  <strong>No hidden fees.</strong> You approve pricing before we start — every time.
                </span>
              </div>
            </div>
            <div className="hero-glass-card" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div className="shield-icon"><i className="ri-shield-check-fill" /></div>
              <div>
                <div className="shield-title">Licensed &amp; Insured</div>
                <div className="shield-sub">State of Missouri Certified · Trusted by Springfield Homeowners</div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-hint">
          <div className="scroll-mouse"><div className="scroll-wheel" /></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="mq-wrap">
        <div className="mq-track">
          {[
            'Emergency Plumber Springfield MO','24/7 — Real Person Answers','Drain Cleaning Springfield',
            'Leak Detection Springfield MO','No Hidden Fees — Upfront Pricing','Water Heater Repair Springfield',
            'Licensed & Insured Plumbers','Sewer Line Repair Springfield MO','Fast Response — Same Day Service',
            'Emergency Plumber Springfield MO','24/7 — Real Person Answers','Drain Cleaning Springfield',
            'Leak Detection Springfield MO','No Hidden Fees — Upfront Pricing','Water Heater Repair Springfield',
            'Licensed & Insured Plumbers','Sewer Line Repair Springfield MO','Fast Response — Same Day Service',
          ].map((t, i) => (
            <span key={i} className="mitem"><span className="msep">◆</span>{t}</span>
          ))}
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="stats-sec">
        <div className="stats-in">
          {[['24', '/7', 'We Answer Every Call'], ['Fast', '⚡', 'Emergency Response'], ['4.8', '★', 'Google Rating'], ['$0', '', 'No Call-Out Fee'], ['100', '%', 'Upfront Pricing']].map(([n, sup, l], i) => (
            <div key={i} className="scell" data-aos="zi" data-aos-delay={i * 80}>
              <div className="n">{n}<sup>{sup}</sup></div>
              <div className="l">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="intro-grid">
            <div data-aos="fl">
              <div className="stag">{SECTION_COPY.intro.tag}</div>
              <h2 className="sh">{SECTION_COPY.intro.h2} <em>{SECTION_COPY.intro.h2_em}</em></h2>
              <div className="content-block" style={{ marginTop: 20 }}>
                <p>{SECTION_COPY.intro.body[0]}</p>
                <p><strong style={{ color: '#fff' }}>{SECTION_COPY.intro.body[1]}</strong></p>
                <p>{SECTION_COPY.intro.body[2]}</p>
                <p>{SECTION_COPY.intro.body[3]}</p>
                <div className="trust-lines-block">
                  {TRUST_LINES.map((line, i) => (
                    <div key={i} className="trust-line-item"><i className="ri-check-double-line" />{line}</div>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: 28, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a href={CONTACT_INFO.phoneHref} className="btn-primary"><i className="ri-phone-fill" />{SECTION_COPY.intro.cta}</a>
                <Link href="/services" className="btn-secondary">See All Services <i className="ri-arrow-right-line" /></Link>
              </div>
            </div>
            <div data-aos="fr">
              <div className="emerg-list">
                {EMERGENCY_ITEMS.map((item, i) => (
                  <div key={i} className="emerg-item"><i className={item.icon} /><span>{item.text}</span></div>
                ))}
              </div>
              <div className="micro-cta-row">
                <i className="ri-alarm-warning-fill" />
                <span><strong>Same-day service available.</strong> Emergency calls prioritized immediately.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="container">
          <div className="sec-center" data-aos="fade-up">
            <div className="stag">{SECTION_COPY.services.tag}</div>
            <h2 className="sh">{SECTION_COPY.services.h2} <em>{SECTION_COPY.services.h2_em}</em></h2>
            <p className="ssub">{SECTION_COPY.services.body}</p>
          </div>
          <div className="svc-grid">{SERVICES.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}</div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/services" className="btn-secondary" style={{ display: 'inline-flex' }}>View All Services <i className="ri-arrow-right-line" /></Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ padding: 0 }}>
        <div className="split">
          <div className="split-img" data-aos="fl">
            <img
  src="/licensed-emergency-plumber-springfield-mo.webp"
  alt="Licensed Emergency Plumber Springfield MO"
  width={800}
  height={500}
  loading="eager"
  decoding="async"
  fetchpriority="high"
/>
            <div className="img-overlay" />
            <div className="split-badge"><div className="big">24/7</div><div className="sm">We Answer. Every. Call.</div></div>
            <div className="split-rating"><div className="stars">★★★★★</div><div className="score">4.8/5</div><div className="cnt">Springfield, MO</div></div>
          </div>
          <div className="split-content" data-aos="fr">
            <div className="stag">{SECTION_COPY.whyUs.tag}</div>
            <h2 className="sh">{SECTION_COPY.whyUs.h2} <em>{SECTION_COPY.whyUs.h2_em}</em></h2>
            <p className="ssub" style={{ maxWidth: '100%' }}>{SECTION_COPY.whyUs.body}</p>
            <div className="anti-scam-bar">
              <i className="ri-shield-check-fill" />
              <span>{SECTION_COPY.whyUs.anti_scam}</span>
            </div>
            <div className="split-feats">
              {WHY_US_FEATURES.map((f, i) => (
                <div key={i} className="sfeat">
                  <div className="sfeat-icon"><i className={f.icon} /></div>
                  <div><h3>{f.title}</h3><p>{f.desc}</p></div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href={CONTACT_INFO.phoneHref} className="btn-primary"><i className="ri-phone-fill" />CALL NOW — GET HELP FAST</a>
              <Link href="/about" className="btn-secondary">About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMON EMERGENCIES ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="intro-grid">
            <div data-aos="fl">
              <div className="stag">{SECTION_COPY.emergencies.tag}</div>
              <h2 className="sh">{SECTION_COPY.emergencies.h2} <em>{SECTION_COPY.emergencies.h2_em}</em></h2>
              <div className="content-block" style={{ marginTop: 20 }}>
                {SECTION_COPY.emergencies.body.map((line, i) => <p key={i}>{line}</p>)}
              </div>
              <div style={{ marginTop: 28 }}>
                <a href={CONTACT_INFO.phoneHref} className="btn-primary"><i className="ri-phone-fill" />{SECTION_COPY.emergencies.cta}</a>
              </div>
              <p style={{ color: 'var(--text-dimmer)', fontSize: 12.5, marginTop: 14 }}>
                Serving Springfield, Nixa, Ozark, Republic &amp; Battlefield, MO
              </p>
            </div>
            <div data-aos="fr">
              <div className="emerg-list">
                {EMERGENCY_ITEMS.map((item, i) => (
                  <div key={i} className="emerg-item"><i className={item.icon} /><span>{item.text}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
        {/* ── HOW IT WORKS ── */}
<section
  className="section"
  style={{
    background: "var(--navy)",
    padding: "100px 0",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Ambient background glows */}
  <div style={{ position: "absolute", top: "-80px", left: "-80px", width: "400px", height: "400px", background: "var(--blue)", borderRadius: "50%", filter: "blur(160px)", opacity: 0.12, pointerEvents: "none" }} />
  <div style={{ position: "absolute", bottom: "-80px", right: "-80px", width: "350px", height: "350px", background: "var(--teal)", borderRadius: "50%", filter: "blur(140px)", opacity: 0.1, pointerEvents: "none" }} />
  <div style={{ position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "200px", background: "var(--gold)", borderRadius: "50%", filter: "blur(180px)", opacity: 0.05, pointerEvents: "none" }} />

  <style>{`
    .process-grid {
      grid-template-columns: repeat(4, 1fr) !important;
    }
    .pcon {
      display: flex !important;
    }
    @media (max-width: 1024px) {
      .process-grid {
        grid-template-columns: repeat(2, 1fr) !important;
      }
      .pcon {
        display: none !important;
      }
    }
    @media (max-width: 540px) {
      .process-grid {
        grid-template-columns: 1fr !important;
      }
      .sec-center {
        margin-bottom: 48px !important;
      }
      .process-micro {
        padding: 12px 18px !important;
        text-align: center !important;
      }
    }
  `}</style>

  <div className="container">

    {/* Header */}
    <div className="sec-center" data-aos="fade-up" style={{ textAlign: "center", marginBottom: "72px" }}>
      <div
        className="stag"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--teal)",
          background: "rgba(0,229,212,0.08)",
          border: "1px solid rgba(0,229,212,0.25)",
          padding: "7px 18px",
          borderRadius: "99px",
          marginBottom: "22px",
        }}
      >
        <i className="ri-settings-3-line" style={{ fontSize: "12px" }} />
        How It Works
      </div>
      <h2
        className="sh"
        style={{
          fontSize: "clamp(30px, 4vw, 48px)",
          fontWeight: 800,
          color: "#fff",
          margin: "0 0 18px",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
        }}
      >
        Simple. Honest.{" "}
        <em
          style={{
            fontStyle: "normal",
            background: "linear-gradient(90deg, var(--teal), var(--blue))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Fast.
        </em>
      </h2>
      <p
        className="ssub"
        style={{
          fontSize: "16px",
          color: "rgba(255,255,255,0.45)",
          maxWidth: "480px",
          margin: "0 auto",
          lineHeight: 1.8,
        }}
      >
        From your first call to a fully resolved problem — transparent, fast, and stress-free.
      </p>
    </div>

    {/* Steps Grid */}
    <div
      className="process-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
        position: "relative",
      }}
    >
      {PROCESS_STEPS.map((step, i) => (
        <div
          key={i}
          className="pstep"
          data-aos="fade-up"
          data-aos-delay={i * 120}
          style={{
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            cursor: "default",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-6px)";
            e.currentTarget.style.boxShadow = `0 24px 60px rgba(0,0,0,0.4)`;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Image with gradient overlay */}
          <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
            <img
              src={step.image}
              alt={step.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                filter: "brightness(0.55) saturate(1.2)",
              }}
            />
            {/* Gradient overlay on image */}
            <div style={{ position: "absolute", inset: 0 }} />
            {/* Step number top-left */}
            <div
              className="pnum"
              style={{
                position: "absolute",
                top: "14px",
                left: "16px",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.6)",
                background: "rgba(0,0,0,0.25)",
                padding: "3px 10px",
                borderRadius: "99px",
                backdropFilter: "blur(6px)",
              }}
            >
              {step.num}
            </div>
            {/* Icon centered on image */}
            <div
              className="picon"
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                width: "46px",
                height: "46px",
                borderRadius: "12px",
                background: "#F59B1C",
                border: "1px solid rgba(189, 25, 25, 0.25)",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className={step.icon} style={{ fontSize: "20px", color: "#fff" }} />
            </div>
          </div>

          {/* Card content */}
          <div style={{ padding: "22px 20px 24px" }}>
            <h3
              style={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#fff",
                margin: "0 0 10px",
                lineHeight: 1.3,
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              {step.desc}
            </p>
            {/* Accent bottom line */}
            <div
              style={{
                marginTop: "18px",
                height: "2px",
                borderRadius: "2px",
                background: step.gradient,
                opacity: 0.7,
              }}
            />
          </div>

          {/* Connector arrow */}
          {i < PROCESS_STEPS.length - 1 && (
            <div
              className="pcon"
              style={{
                position: "absolute",
                right: "-14px",
                top: "90px",
                width: "28px",
                height: "28px",
                background: "var(--navy)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }}
            >
              <i className="ri-arrow-right-s-line" style={{ fontSize: "16px", color: step.accent }} />
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Bottom micro note */}
    <div
      className="process-micro"
      data-aos="fade-up"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        marginTop: "56px",
        background: "rgba(0,229,212,0.06)",
        border: "1px solid rgba(0,229,212,0.18)",
        borderRadius: "99px",
        padding: "14px 30px",
        width: "fit-content",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <i className="ri-time-fill" style={{ fontSize: "16px", color: "var(--teal)" }} />
      <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
        <strong style={{ color: "#fff", fontWeight: 700 }}>Most calls dispatched in under 5 minutes.</strong>{" "}
        Emergency calls prioritized immediately.
      </span>
    </div>

  </div>
</section>

      {/* ── GALLERY ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="sec-center" data-aos="fade-up">
            <div className="stag">Our Work</div>
            <h2 className="sh">Professional Plumbing <em>Done Right</em></h2>
            <p className="ssub">Real work. Real results. Real Springfield homeowners helped.</p>
          </div>
          <div className="gallery-grid" data-aos="fade-up">
            <div className="gitem tall">
  <img
    src="/drain-cleaning.jpg"
    alt="Professional drain cleaning service Springfield MO"
    width={600}
    height={800}
    loading="lazy"
    decoding="async"
  />
  <div className="gover" />
  <div className="gitem-label"><i className="ri-drop-fill" />Drain Cleaning</div>
</div>

<div className="gitem">
  <img
    src="/leak-detection-springfield-mo.webp"
    alt="Leak detection specialist Springfield MO"
    width={600}
    height={400}
    loading="lazy"
    decoding="async"
  />
  <div className="gover" />
  <div className="gitem-label"><i className="ri-search-eye-fill" />Leak Detection</div>
</div>

<div className="gitem">
  <img
    src="/water-heater-repair-springfield-mo.webp"
    alt="Water heater repair and replacement Springfield MO"
    width={600}
    height={400}
    loading="lazy"
    decoding="async"
  />
  <div className="gover" />
  <div className="gitem-label"><i className="ri-fire-fill" />Water Heater</div>
</div>

<div className="gitem wide">
  <img
    src="/sewer-line-repair-springfield-mo.webp"
    alt="Sewer line repair Springfield MO licensed plumber"
    width={900}
    height={400}
    loading="lazy"
    decoding="async"
  />
  <div className="gover" />
  <div className="gitem-label"><i className="ri-recycle-fill" />Sewer Line Repair</div>
</div>
 

 
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="section">
        <div className="container">
          <div className="sec-center" data-aos="fade-up">
            <div className="stag">{SECTION_COPY.reviews.tag}</div>
            <h2 className="sh">{SECTION_COPY.reviews.h2} <em>{SECTION_COPY.reviews.h2_em}</em></h2>
            <p className="ssub">{SECTION_COPY.reviews.body}</p>
          </div>
          <div className="rev-top" data-aos="zi">
            <div className="rev-score">4.8</div>
            <div><div className="rev-stars-big">★★★★★</div><div className="rev-cnt">{SECTION_COPY.reviews.platform}</div></div>
            <div className="rev-div" />
            <div className="rev-platform"><i className="ri-google-fill" />Google Business Profile</div>
          </div>
          <div className="rev-grid">
            {REVIEWS.slice(0, 3).map((r, i) => (
              <div key={i} className="rcard" data-aos="fade-up" data-aos-delay={i * 100}>
                <span className="qmark">"</span>
                <div className="stars">{'★'.repeat(r.rating)}</div>
                <p className="quote">{r.text}</p>
                <div className="author">
                  <div className="avatar">{r.initials}</div>
                  <div><div className="aname">{r.name}</div><div className="asrc">{r.service}</div></div>
                </div>
              </div>
            ))}
          </div>
          <div className="reviews-trust-footer">
            <i className="ri-verified-badge-fill" />
            <span>All reviews are from verified Google customers in Springfield MO — we never fabricate testimonials.</span>
          </div>
        </div>
      </section>

      {/* ── AREAS + MAP ── */}
      <section style={{ padding: 0 }}>
        <div className="am-grid">
          <div className="am-list" data-aos="fl">
            <div className="stag">{SECTION_COPY.areas.tag}</div>
            <h2 className="sh">{SECTION_COPY.areas.h2} <em>{SECTION_COPY.areas.h2_em}</em></h2>
            <p className="ssub" style={{ maxWidth: '100%', marginBottom: 0 }}>{SECTION_COPY.areas.body}</p>
            <div className="am-chips">
              {SERVICE_AREAS.map((a, i) => (
                <Link key={i} href="/service-areas" className="achip">
                  <div className="achip-l"><i className="ri-map-pin-fill" />{a.name}{a.label && ` — ${a.label}`}</div>
                  <i className="ri-arrow-right-s-line" />
                </Link>
              ))}
            </div>
            <div style={{ marginTop: 28 }}>
              <Link href="/service-areas" className="btn-primary" style={{ display: 'inline-flex' }}>
                <i className="ri-map-pin-fill" />View All Service Areas
              </Link>
            </div>
          </div>
          <div className="am-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105055.62!2d-93.3720556!3d37.215259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf62f0f9116cbb%3A0x62c14e0e4d9ed5e4!2sSpringfield%2C%20MO!5e0!3m2!1sen!2sus!4v1710000000000" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Emergency Plumber Springfield MO" style={{ width: '100%', height: '100%', minHeight: 540, border: 'none', filter: 'hue-rotate(180deg) saturate(1.2) brightness(0.65)' }} />
            <div className="map-card1"><div className="mc-title"><i className="ri-map-pin-2-fill" />Springfield Emergency Plumbing</div><div className="mc-row"><i className="ri-time-fill" />Open 24/7 · 365 Days a Year</div><div className="mc-row"><i className="ri-phone-fill" />{CONTACT_INFO.phone}</div></div>
            <div className="map-avail"><span className="map-avail-dot" />Plumbers Available Now — Ready to Dispatch</div>
            <div className="map-rating-badge"><div className="stars">★★★★★</div><div className="score">4.8/5</div><div className="sub">Springfield, MO</div></div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section-alt">
        <div className="container">
          <div className="faq-layout">
            <div data-aos="fl">
              <div className="stag">{SECTION_COPY.faq.tag}</div>
              <h2 className="sh">{SECTION_COPY.faq.h2} <em>{SECTION_COPY.faq.h2_em}</em></h2>
              <p className="ssub" style={{ maxWidth: '100%', marginBottom: 32 }}>{SECTION_COPY.faq.body}</p>
              <a href={CONTACT_INFO.phoneHref} className="btn-primary" style={{ display: 'inline-flex' }}>
                <i className="ri-phone-fill" />{SECTION_COPY.faq.cta}
              </a>
              <div style={{ marginTop: 36 }}>
                 <img
  src="\springfield plumber.webp"
  alt="Licensed emergency plumber in Springfield MO fixing residential plumbing system"
  loading="lazy"
  width="500"
  height="260"
  style={{
    width: '100%',
    height: '260px',
    objectFit: 'cover',
    borderRadius: 'var(--rlg)',
    opacity: 0.65,
  }}
/>
              </div>
            </div>
            <div data-aos="fr"><FAQAccordion faqs={FAQS} /></div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <CtaBanner
        title={`${SECTION_COPY.cta_banner.h2} <em>${SECTION_COPY.cta_banner.h2_em}</em>`}
        subtitle={SECTION_COPY.cta_banner.body}
        primaryLabel={SECTION_COPY.cta_banner.cta_primary}
        secondaryLabel={SECTION_COPY.cta_banner.cta_secondary}
      />
    </>
  )
}
