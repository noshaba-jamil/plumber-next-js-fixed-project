import Link from 'next/link'
import { SERVICES, CONTACT_INFO } from '@/data/services'
import '@/components/Footer.css'

export default function Footer() {
  return (
    <footer id="ft">
      <div className="ft-top">
        <div className="ft-grid">

          {/* BRAND */}
          <div className="ft-brand">
            <Link href="/" className="ft-logo">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                <polygon points="4,36 20,4 36,36" fill="#E8321C" opacity="0.95"/>
                <polygon points="4,36 20,20 36,36" fill="#F59B1C" opacity="0.9"/>
                <circle cx="20" cy="20" r="3.5" fill="#fff"/>
              </svg>
              <span>Springfield Emergency Plumbing</span>
            </Link>
            <p>Licensed emergency plumber in Springfield MO — answering every call 24/7. No hidden fees. Upfront pricing. Trusted by homeowners across Springfield, Nixa, Ozark, Republic and Battlefield, MO.</p>
            <div className="ft-socials">
              <a href="#" aria-label="Facebook"><i className="ri-facebook-fill" /></a>
              <a href="#" aria-label="Google"><i className="ri-google-fill" /></a>
              <a href="#" aria-label="Instagram"><i className="ri-instagram-line" /></a>
              <a href="#" aria-label="Yelp"><i className="ri-star-fill" /></a>
            </div>
            {/* Emergency strip */}
            <a href={CONTACT_INFO.phoneHref} className="ft-emergency">
              <i className="ri-phone-fill" />
              <div>
                <div className="fe-label">24/7 Emergency Hotline</div>
                <div className="fe-num">{CONTACT_INFO.phone}</div>
              </div>
            </a>
          </div>

          {/* SERVICES */}
          <div className="ft-col">
            <h5>Services</h5>
            {SERVICES.map(s => (
              <Link key={s.id} href={s.slug}>{s.name} Springfield MO</Link>
            ))}
          </div>

          {/* COMPANY */}
          <div className="ft-col">
            <h5>Company</h5>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">All Services</Link>
            <Link href="/service-areas">Service Areas</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          {/* CONTACT */}
          <div className="ft-col">
            <h5>Contact</h5>
            <div className="fci2"><i className="ri-phone-fill"/><a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phone}</a></div>
            <div className="fci2"><i className="ri-mail-fill"/><a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a></div>
            <div className="fci2"><i className="ri-map-pin-fill"/><span>Springfield, MO — Nixa, Ozark, Republic, Battlefield</span></div>
            <div className="fci2"><i className="ri-map-pin-fill"/><span>220 S Campbell Avenue, Springfield, MO 65806</span></div>
            <div className="fci2"><i className="ri-time-fill"/><span>24/7 — Real Person Answers Every Call</span></div>
          </div>

        </div>
      </div>

      <div className="ft-bot">
        <div className="ft-bot-in">
          <p>© 2026 Springfield Emergency Plumbing · <strong>Emergency Plumber Springfield MO</strong> · All Rights Reserved</p>
          <div className="ft-badges">
            <span className="ftb"><i className="ri-shield-check-fill"/>Licensed &amp; Insured</span>
            <span className="ftb"><i className="ri-star-fill"/>4.8★ Google</span>
            <span className="ftb"><i className="ri-timer-flash-fill"/>24/7 Emergency</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
