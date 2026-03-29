import Link from 'next/link'
import '@/components/ServiceCard.css'

export default function ServiceCard({ service, index = 0 }) {
  return (
    <Link href={service.slug} className="svc-card">
      <div className="svc-img-wrap">
        <img src={service.image} alt={service.h1} loading="lazy" />
      </div>
      <div className="svc-body">
        <div className="svc-num">0{index + 1}</div>
        <div className="svc-icon"><i className={service.icon} /></div>
        <h3>{service.name}</h3>
        <p>{service.desc}</p>
        <ul className="svc-list">
          {service.features.map((f, i) => (
            <li key={i}><i className="ri-arrow-right-s-line" />{f}</li>
          ))}
        </ul>
        <span className="svc-link">
          Learn more <i className="ri-arrow-right-line" />
        </span>
      </div>
    </Link>
  )
}
