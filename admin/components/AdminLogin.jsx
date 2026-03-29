'use client'

/**
 * AdminLogin — Secure admin login form
 * ─────────────────────────────────────
 * Clean, professional design matching the brand
 * Calls POST /api/admin/login via useAuth hook
 */

import { useState } from 'react'
import '@/admin/components/AdminLogin.css'

export default function AdminLogin({ onLogin, loading, error, clearError }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!username.trim() || !password.trim()) return
    await onLogin(username.trim(), password)
  }

  return (
    <div className="al-wrapper">
      <div className="al-bg" />
      <div className="al-card">
        {/* Logo */}
        <div className="al-logo">
          <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
            <polygon points="4,36 20,4 36,36" fill="#E8321C" opacity="0.95"/>
            <polygon points="4,36 20,20 36,36" fill="#F59B1C" opacity="0.9"/>
            <circle cx="20" cy="20" r="3.5" fill="#fff"/>
          </svg>
          <div>
            <div className="al-brand">Springfield Plumbing</div>
            <div className="al-subbrand">Admin Portal</div>
          </div>
        </div>

        <h1 className="al-title">Sign In</h1>
        <p className="al-sub">Access your leads dashboard and business management tools.</p>

        {error && (
          <div className="al-error" role="alert">
            <i className="ri-error-warning-fill" />
            <span>{error}</span>
            <button className="al-error-close" onClick={clearError} aria-label="Dismiss">
              <i className="ri-close-line" />
            </button>
          </div>
        )}

        <form className="al-form" onSubmit={handleSubmit} noValidate>
          <div className="al-field">
            <label htmlFor="al-username">Username</label>
            <div className="al-input-wrap">
              <i className="ri-user-line" />
              <input
                id="al-username"
                type="text"
                autoComplete="username"
                placeholder="Enter your username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
                autoFocus
              />
            </div>
          </div>

          <div className="al-field">
            <label htmlFor="al-password">Password</label>
            <div className="al-input-wrap">
              <i className="ri-lock-line" />
              <input
                id="al-password"
                type={showPass ? 'text' : 'password'}
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <button type="button" className="al-toggle-pass" onClick={() => setShowPass(!showPass)} aria-label="Toggle password">
                <i className={showPass ? 'ri-eye-off-line' : 'ri-eye-line'} />
              </button>
            </div>
          </div>

          <button type="submit" className="al-submit" disabled={loading || !username || !password}>
            {loading ? (
              <><i className="ri-loader-4-line al-spin" /> Signing in...</>
            ) : (
              <><i className="ri-login-box-line" /> Sign In to Dashboard</>
            )}
          </button>
        </form>

        <div className="al-back">
          <a href="/" className="al-back-link">
            <i className="ri-arrow-left-line" /> Back to Website
          </a>
        </div>

        <div className="al-security">
          <i className="ri-shield-check-line" />
          <span>Secured connection · JWT authentication · Session expires automatically</span>
        </div>
      </div>
    </div>
  )
}
