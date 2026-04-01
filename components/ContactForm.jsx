'use client'

import { useState } from 'react'
import { SERVICES } from '@/data/services'
import { submitContactForm } from '@/admin/utils/api'
import '@/components/ContactForm.css'

const INITIAL = { name: '', phone: '', email: '', address: '', service: '', message: '' }

export default function ContactForm() {
  const [form, setForm]           = useState(INITIAL)
  const [errors, setErrors]       = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [apiError, setApiError]   = useState('')

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Your name is required'
    if (!form.phone.trim())   e.phone   = 'Phone number is required'
    if (!form.message.trim()) e.message = 'Please describe your issue'
    return e
  }

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }))
    if (apiError) setApiError('')
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    setApiError('')
    try {
      await submitContactForm(form)
      setSubmitted(true)
      // GA4 form submission event tracking
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submit', {
          event_category: 'lead',
          event_label: form.service || 'General Inquiry',
          value: 1,
        })
      }
    } catch (err) {
      setApiError(
        err.response?.data?.message ||
        err.response?.data?.error ||
        'Failed to send message. Please call us directly at (417) 000-0000.'
      )
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="fs-ok">
        <i className="ri-checkbox-circle-fill" />
        <h3>Message Sent Successfully!</h3>
        <p>We will respond as soon as possible. For <strong>IMMEDIATE emergency</strong> plumbing assistance — call us directly:</p>
        <a href="tel:+14173734862" className="btn-primary" style={{ marginTop: 20, display: 'inline-flex' }}>
          <i className="ri-phone-fill" /> Call +1 (417) 373-4862 Now
        </a>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {apiError && (
        <div className="cf-api-error">
          <i className="ri-error-warning-fill" />
          <span>{apiError}</span>
        </div>
      )}

      <div className="frow">
        <div className="fgroup">
          <label>Full Name *</label>
          <input name="name" type="text" placeholder="John Smith"
            value={form.name} onChange={handleChange}
            className={errors.name ? 'error' : ''} />
          {errors.name && <span className="err-msg"><i className="ri-error-warning-fill" />{errors.name}</span>}
        </div>
        <div className="fgroup">
          <label>Phone Number *</label>
          <input name="phone" type="tel" placeholder="(417) 555-0000"
            value={form.phone} onChange={handleChange}
            className={errors.phone ? 'error' : ''} />
          {errors.phone && <span className="err-msg"><i className="ri-error-warning-fill" />{errors.phone}</span>}
        </div>
      </div>

      <div className="fgroup">
        <label>Email Address</label>
        <input name="email" type="email" placeholder="john@example.com"
          value={form.email} onChange={handleChange} />
      </div>

      <div className="fgroup">
        <label>Service Address</label>
        <input name="address" type="text" placeholder="123 Main St, Springfield, MO"
          value={form.address} onChange={handleChange} />
      </div>

      <div className="fgroup">
        <label>Service Needed</label>
        <select name="service" value={form.service} onChange={handleChange}>
          <option value="">— Select a Service —</option>
          {SERVICES.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="fgroup">
        <label>Describe Your Plumbing Issue *</label>
        <textarea name="message" rows={5}
          placeholder="Please describe your plumbing issue in detail — the more you tell us, the faster we can help..."
          value={form.message} onChange={handleChange}
          className={errors.message ? 'error' : ''} />
        {errors.message && <span className="err-msg"><i className="ri-error-warning-fill" />{errors.message}</span>}
      </div>

    <button
  type="submit"
  className="btn-primary submit-btn"
  disabled={loading}
  style={{
    fontSize: 'clamp(8px, 1vw, 14px)', // ✅ scales nicely, stops overflowing
    maxWidth: '100%',
    minWidth: '150px',
    padding: '12px 16px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  }}
>
  {loading ? (
    <>
      <i className="ri-loader-4-line spin" style={{ fontSize: '1em' }} />
      Sending your message...
    </>
  ) : (
    <>
      <i className="ri-send-plane-fill" style={{ fontSize: '1em' }} />
      GET EMERGENCY SERVICE NOW
    </>
  )}
</button>

      <p className="cf-disclaimer">
        <i className="ri-lock-line" /> Your information is private and secure. We never share your details.
      </p>
    </form>
  )
}
