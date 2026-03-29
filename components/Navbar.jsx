'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SERVICES, CONTACT_INFO } from '@/data/services'
import '@/components/Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [svcOpen, setSvcOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setSvcOpen(false)
  }, [pathname])

  const isActive = (path) => pathname === path || pathname.startsWith(path + '/')

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-wrap">
        {/* LOGO */}
        <Link href="/" className="nav-logo">
          <svg className="nl-icon" viewBox="0 0 40 40" fill="none">
            <polygon points="4,36 20,4 36,36" fill="#E8321C" opacity="0.95" />
            <polygon points="4,36 20,20 36,36" fill="#F59B1C" opacity="0.9" />
            <circle cx="20" cy="20" r="3.5" fill="#fff" />
          </svg>
          <div>
            <div className="brand-name">Springfield Plumbing</div>
            <div className="brand-sub">24/7 Emergency Response</div>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="nav-links">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>

          {/* SERVICES MEGA DROPDOWN */}
          <div className="nav-svc-wrap">
            <Link href="/services" className={isActive('/services') || SERVICES.some(s => pathname === s.slug) ? 'active' : ''}>
              Services <i className="ri-arrow-down-s-line dd-arrow" />
            </Link>
            <div className="mega-drop">
              <div className="mega-header">
                <span className="mega-header-title">Our Plumbing Services</span>
                <Link href="/services" className="mega-header-link">
                  View All Services <i className="ri-arrow-right-line" />
                </Link>
              </div>
              <div className="mega-grid">
                {SERVICES.map(svc => (
                  <Link key={svc.id} href={svc.slug} className="mega-item">
                    <div className="mega-item-icon"><i className={svc.icon} /></div>
                    <div>
                      <div className="mega-item-name">{svc.name}</div>
                      <div className="mega-item-desc">{svc.tagline}</div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mega-cta-row">
                <span className="mega-cta-text">
                  <i className="ri-phone-fill" style={{ color: 'var(--teal)', marginRight: 6 }} />
                  24/7 Emergency: {CONTACT_INFO.phone}
                </span>
                <a href={CONTACT_INFO.phoneHref} className="mega-cta-btn">
                  <i className="ri-phone-fill" /> Call Now — Free
                </a>
              </div>
            </div>
          </div>

          <Link href="/about" className={isActive('/about') ? 'active' : ''}>About Us</Link>
          <Link href="/service-areas" className={isActive('/service-areas') ? 'active' : ''}>Service Areas</Link>
          <Link href="/faq" className={isActive('/faq') ? 'active' : ''}>FAQ</Link>
          <Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link>
        </div>

        {/* CTA */}
        <div className="nav-cta">
          <a href={CONTACT_INFO.phoneHref} className="nav-phone">
            <i className="ri-phone-fill" />{CONTACT_INFO.phone}
          </a>
          <Link href="/contact" className="nav-btn">
            SPEAK WITH A PLUMBER <i className="ri-arrow-right-line" />
          </Link>
        </div>

        {/* HAMBURGER */}
        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`mob-menu ${menuOpen ? 'open' : ''}`}>
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <div className="mob-svc-toggle" onClick={() => setSvcOpen(!svcOpen)}>
          Services <i className={`ri-arrow-down-s-line ${svcOpen ? 'rotated' : ''}`} />
        </div>
        <div className={`mob-svc-list ${svcOpen ? 'open' : ''}`}>
          <Link href="/services" onClick={() => setMenuOpen(false)}><i className="ri-apps-fill" />All Services</Link>
          {SERVICES.map(svc => (
            <Link key={svc.id} href={svc.slug} onClick={() => setMenuOpen(false)}>
              <i className={svc.icon} />{svc.name}
            </Link>
          ))}
        </div>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link href="/service-areas" onClick={() => setMenuOpen(false)}>Service Areas</Link>
        <Link href="/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <a href={CONTACT_INFO.phoneHref} className="mob-call-btn">
          <i className="ri-phone-fill" />{CONTACT_INFO.phone}
        </a>
      </div>
    </nav>
  )
}
