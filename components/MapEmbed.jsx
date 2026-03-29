'use client'

import '@/components/MapEmbed.css'

export default function MapEmbed({ height = 480 }) {
  return (
    <div className="map-wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105055.62!2d-93.3720556!3d37.215259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf62f0f9116cbb%3A0x62c14e0e4d9ed5e4!2sSpringfield%2C%20MO!5e0!3m2!1sen!2sus!4v1710000000000"
        width="100%"
        height={height}
        style={{ border: 0, display: 'block', filter: 'hue-rotate(215deg) saturate(1.5) brightness(0.6)' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Emergency Plumber Springfield MO Service Area"
      />
      <div className="map-pin-card">
        <div className="mc-title"><i className="ri-map-pin-2-fill" />Springfield Emergency Plumbing</div>
        <div className="mc-row"><i className="ri-time-fill" />Open 24/7 · 365 Days a Year</div>
        <div className="mc-row"><i className="ri-phone-fill" />(417) 000-0000</div>
      </div>
      <div className="map-avail">
        <span className="map-avail-dot" />
        Plumbers Available Now in Springfield
      </div>
      <div className="map-rating">
        <div className="stars">★★★★★</div>
        <div className="score">4.8/5</div>
        <div className="sub">Springfield, MO</div>
      </div>
    </div>
  )
}
