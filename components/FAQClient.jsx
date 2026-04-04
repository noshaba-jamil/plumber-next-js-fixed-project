'use client'

import Link from 'next/link'
import PageHero from '@/components/PageHero'
import FAQAccordion from '@/components/FAQAccordion'
import CtaBanner from '@/components/CtaBanner'
import { FAQS, SERVICES, CONTACT_INFO } from '@/data/services'

export default function FAQ() {
  return (
    <>
      <PageHero
        image="\faq.webp"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
        h1="Frequently Asked Questions — Emergency Plumber Springfield MO"
        subtitle="Common questions about our emergency plumbing services, pricing, and process in Springfield, Missouri — answered honestly and clearly."
      />

      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '5fr 7fr', gap: 80, alignItems: 'start' }}>
            {/* LEFT */}
            <div>
              <div className="stag">FAQ</div>
              <h2 className="sh">Your Questions, <em>Answered</em></h2>
              <p className="ssub" style={{ maxWidth: '100%', marginBottom: 32 }}>
                We believe in transparent communication. Here are the most common questions about our plumbing services in Springfield, MO.
              </p>
              <a href={CONTACT_INFO.phoneHref} className="btn-primary" style={{ display: 'inline-flex' }}>
                <i className="ri-phone-fill" />Call Us Directly
              </a>

              <div style={{ marginTop: 36 }}>
                <img
                  src="/plumber2.webp"
                  alt="Plumber Springfield MO"
                  style={{ width: '100%', borderRadius: 'var(--rlg)', height: 260, objectFit: 'cover', opacity: 0.65 }}
                />
              </div>

              <div style={{ marginTop: 36 }}>
                <div className="stag">Quick Service Links</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: 12 }}>
                  {SERVICES.map(s => (
                    <Link key={s.id} href={s.slug} style={{ background: 'var(--card)', border: '1px solid rgba(255,255,255,0.05)', padding: '14px 18px', display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', transition: 'var(--t)' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--card2)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'var(--card)'}>
                      <i className={s.icon} style={{ color: 'var(--teal)', fontSize: 16 }} />
                      <span style={{ fontSize: 13.5, fontWeight: 600, color: '#fff' }}>{s.name}</span>
                      <i className="ri-arrow-right-s-line" style={{ color: 'var(--text-dimmer)', marginLeft: 'auto' }} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — FAQ accordion */}
            <div>
              <FAQAccordion faqs={FAQS} />

              <div style={{ background: 'linear-gradient(135deg, var(--blue), var(--blue2))', padding: 28, marginTop: 3, borderRadius: 0 }}>
                <h3 style={{ marginBottom: 8 }}>Still Have Questions?</h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, marginBottom: 20 }}>
                  Our team is ready to answer any questions about our plumbing services in Springfield, MO.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <a href={CONTACT_INFO.phoneHref} className="btn-white">
                    <i className="ri-phone-fill" />Call Now
                  </a>
                  <Link href="/contact" className="btn-outline-white">
                    <i className="ri-mail-send-line" />Send Message
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title='Call Our Emergency Plumber <em>Today</em>'
        subtitle="If you are dealing with a plumbing emergency, do not wait. Our 24/7 emergency plumber in Springfield MO is ready to respond quickly."
      />
    </>
  )
}
