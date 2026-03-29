'use client'

import { useState } from 'react'
import '@/components/FAQAccordion.css'

export default function FAQAccordion({ faqs }) {
  const [open, setOpen] = useState(null)

  return (
    <div className="faq-items">
      {faqs.map((faq, i) => (
        <div key={i} className={`fitem ${open === i ? 'open' : ''}`}>
          <div className="fq" onClick={() => setOpen(open === i ? null : i)}>
            <span>{faq.q}</span>
            <div className="ftog">
              <i className="ri-add-line" />
            </div>
          </div>
          <div className="fans">
            <p>{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
