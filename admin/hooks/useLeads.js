'use client'

/**
 * useLeads Hook — Fetch and manage leads data
 * ────────────────────────────────────────────
 * • Fetches leads on mount and on manual refresh
 * • Auto-refreshes every 60 seconds
 * • Handles mark-as-contacted action
 * • Provides search/filter state
 */

import { useState, useEffect, useCallback, useRef } from 'react'
import { getLeads, markLeadContacted } from '@/admin/utils/api'

const AUTO_REFRESH_MS = 60 * 1000 // 60 seconds

export function useLeads() {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState('')
  const [lastUpdated, setLastUpdated] = useState(null)
  const [markingId, setMarkingId] = useState(null) // ID of lead being marked
  const intervalRef = useRef(null)

  const fetchLeads = useCallback(async (silent = false) => {
    if (!silent) setLoading(true)
    else setRefreshing(true)
    setError('')
    try {
      const res = await getLeads()
      // Support both { leads: [...] } and [...] response shapes
      const data = Array.isArray(res.data) ? res.data : (res.data.leads || [])
      // Sort by newest first
      const sorted = [...data].sort((a, b) => new Date(b.createdAt || b.created_at || 0) - new Date(a.createdAt || a.created_at || 0))
      setLeads(sorted)
      setLastUpdated(new Date())
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load leads. Please refresh.')
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }, [])

  // Initial load
  useEffect(() => {
    fetchLeads(false)
  }, [fetchLeads])

  // Auto-refresh every 60s
  useEffect(() => {
    intervalRef.current = setInterval(() => fetchLeads(true), AUTO_REFRESH_MS)
    return () => clearInterval(intervalRef.current)
  }, [fetchLeads])

  const markContacted = useCallback(async (id) => {
    setMarkingId(id)
    try {
      await markLeadContacted(id)
      setLeads(prev =>
        prev.map(lead =>
          (lead._id || lead.id) === id
            ? { ...lead, contacted: true, contactedAt: new Date().toISOString() }
            : lead
        )
      )
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update lead. Please try again.')
    } finally {
      setMarkingId(null)
    }
  }, [])

  const manualRefresh = useCallback(() => fetchLeads(true), [fetchLeads])

  return {
    leads,
    loading,
    refreshing,
    error,
    lastUpdated,
    markingId,
    markContacted,
    manualRefresh,
  }
}
