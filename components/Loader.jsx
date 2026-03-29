'use client'

import { useEffect, useState } from 'react'
import '@/components/Loader.css'

export default function Loader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="loader" className={hidden ? 'hide' : ''}>
      <div className="ld-ring" />
      <div className="ld-text">Springfield <span>Plumbing</span></div>
      <div className="ld-bar"><div className="ld-fill" /></div>
    </div>
  )
}
