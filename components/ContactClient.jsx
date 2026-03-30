 'use client'

import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import MapEmbed from '@/components/MapEmbed'
import { SERVICES, CONTACT_INFO } from '@/data/services'
import '@/components/Contact.css'

export default function Contact() {
  return (
    <>
      <PageHero
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
        alt="Emergency plumber Springfield MO contact page"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        h1="Contact Our Emergency Plumber in Springfield MO"
        subtitle="If you need fast and reliable plumbing services, our team is ready to help. Whether you are dealing with a plumbing emergency, clogged drain, water heater problem, or hidden leak, our experienced plumbers are available to provide professional assistance."
      />

      <section className="section section-alt">
        <div className="container">

          {/* Request service intro */}
          <div className="contact-intro">
            <div className="stag">Get in Touch</div>
            <h2 className="sh">Request Plumbing <em>Service</em></h2>
            <div className="content-block contact-intro-text">
              <p>Homeowners and businesses in <strong>Springfield</strong> rely on our team for quick response times and dependable plumbing solutions. If you are experiencing a plumbing issue, contact our team to schedule service.</p>
              <p>We recommend contacting us immediately if you are facing urgent plumbing issues such as burst pipes, overflowing fixtures, or sewer backups.</p>
            </div>
          </div>

          <div className="contact-layout">
            {/* LEFT — contact info */}
            <div className="contact-left">
              <div className="stag">Contact Information</div>
              <h2 className="sh contact-reach-heading">Reach Us <em>Anytime</em></h2>

              <div className="cinfo">
                {[
                  { icon: 'ri-phone-fill',    label: 'Phone — Emergency & General', content: <a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phone}</a> },
                  { icon: 'ri-mail-fill',     label: 'Email',                        content: <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a> },
                  { icon: 'ri-map-pin-fill',  label: 'Service Location',             content: <span>{CONTACT_INFO.location}</span> },
                  { icon: 'ri-time-fill',     label: 'Business Hours',               content: <span>{CONTACT_INFO.hours}</span> },
                ].map((item, i) => (
                  <div key={i} className="ccard">
                    <div className="ccard-icon"><i className={item.icon} /></div>
                    <div>
                      <div className="ccard-lbl">{item.label}</div>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency block */}
              <div className="emerg-cta-block">
                <h3>Emergency Plumbing Assistance</h3>
                <p>Plumbing emergencies can happen at any time. If you are dealing with burst pipes, severe leaks, or major drain blockages in <strong>Springfield</strong>, contact us right away.</p>
                <a
  href={CONTACT_INFO.phoneHref}
  className="btn-gold emerg-btn"
  style={{
    fontSize: 'clamp(10px, 2vw, 18px)', // responsive text: min 14px, max 18px
    padding: '12px 20px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',          // space between icon and text
    textAlign: 'center',
    whiteSpace: 'nowrap', // keep text + icon in one line
    maxWidth: '100%',     // prevent overflow
  }}
>
  <i className="ri-phone-fill" style={{ fontSize: '1em' }} />
  Call {CONTACT_INFO.phone} Now
</a>
              </div>

              {/* Services available */}
              <div className="services-avail-block">
                <div className="stag" style={{ marginBottom: 12 }}>Services Available</div>
                <p className="services-avail-desc">
                  Our plumbers provide a wide range of plumbing services for homes and businesses throughout <strong>Springfield</strong>:
                </p>
                {SERVICES.map(s => (
                  <Link key={s.id} href={s.slug} className="service-avail-item">
                    <i className="ri-check-line" />{s.name}
                    <i className="ri-arrow-right-s-line service-avail-arrow" />
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT — contact form */}
            <div className="cf-card">
              <h3>Send Us a Message — We Respond Fast</h3>
              <p>Fill in your details below and we will respond within 30 minutes during business hours. For emergencies — CALL US NOW for immediate dispatch.</p>
              <ContactForm />
            </div>
          </div>

          {/* Map */}
          <div className="contact-map-wrap">
            <div className="contact-map-header">
              <div>
                <div className="stag" style={{ marginBottom: 8 }}>Our Location</div>
                <h3 className="contact-map-heading">
                  Serving <span style={{ color: 'var(--amber)' }}>Springfield, Missouri</span>
                </h3>
              </div>
              <a
                href="https://maps.google.com/?q=Springfield,MO"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary contact-map-btn"
              >
                <i className="ri-external-link-line" />Open in Google Maps
              </a>
            </div>
            <MapEmbed height={500} />
          </div>

          {/* Schedule CTA block */}
          <div className="contact-schedule-cta">
            <h2 className="sh" style={{ marginBottom: 12 }}>Schedule Your Plumbing <em>Service Today</em></h2>
            <p className="contact-schedule-sub">
              If you need a dependable plumber in <strong>Springfield</strong>, our team is ready to help. Whether you require emergency plumbing assistance or routine plumbing repairs, we are committed to providing fast, professional service.
            </p>
            <a href={CONTACT_INFO.phoneHref} className="btn-primary">
              <i className="ri-phone-fill" />Call {CONTACT_INFO.phone}
            </a>
          </div>

        </div>
      </section>
    </>
  )
}