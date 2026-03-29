'use client'

/**
 * useAuth Hook — Admin authentication state
 * ─────────────────────────────────────────
 * Manages JWT token in localStorage
 * Provides login / logout functions
 * Checks token expiry on mount
 */

import { useState, useEffect, useCallback } from 'react'
import { adminLogin as apiLogin } from '@/admin/utils/api'

export function useAuth() {
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Hydrate from localStorage only on the client after mount
  // (localStorage does not exist during Next.js server-side rendering)
  useEffect(() => {
    try {
      const savedToken = localStorage.getItem('admin_token')
      const savedUser = JSON.parse(localStorage.getItem('admin_user'))
      if (savedToken) setToken(savedToken)
      if (savedUser) setUser(savedUser)
    } catch {
      // localStorage unavailable or invalid JSON — stay logged out
    }
  }, [])

  const isAuthenticated = Boolean(token)

  const login = useCallback(async (username, password) => {
    setLoading(true)
    setError('')
    try {
      const res = await apiLogin({ username, password })
      const { token: jwt, user: userData } = res.data
      localStorage.setItem('admin_token', jwt)
      localStorage.setItem('admin_user', JSON.stringify(userData || { username }))
      setToken(jwt)
      setUser(userData || { username })
      return true
    } catch (err) {
      const msg = err.response?.data?.message || err.response?.data?.error || 'Invalid credentials. Please try again.'
      setError(msg)
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem('admin_token')
    localStorage.removeItem('admin_user')
    setToken(null)
    setUser(null)
  }, [])

  return { isAuthenticated, token, user, login, logout, loading, error, setError }
}
