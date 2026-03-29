'use client'

/**
 * LeadsDashboard — Admin leads management
 * ─────────────────────────────────────────
 * • Displays all leads in a responsive table
 * • Search/filter by name, service, date
 * • Mark lead as contacted
 * • Auto-refresh every 60 seconds
 * • Stats cards at top
 */

import { useState, useMemo } from 'react'
import { useLeads } from '@/admin/hooks/useLeads'
import '@/admin/components/LeadsDashboard.css'

const SERVICES = [
  'All Services',
  'Emergency Plumbing',
  'Drain Cleaning',
  'Leak Detection',
  'Water Heater Repair',
  'Sewer Line Repair',
  'Pipe Repair & Installation',
  'Other',
]

function formatDate(dateStr) {
  if (!dateStr) return '—'
  const d = new Date(dateStr)
  if (isNaN(d)) return '—'
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

function formatDateShort(dateStr) {
  if (!dateStr) return '—'
  const d = new Date(dateStr)
  if (isNaN(d)) return '—'
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function LeadsDashboard({ user, onLogout }) {
  const { leads, loading, refreshing, error, lastUpdated, markingId, markContacted, manualRefresh } = useLeads()

  const [search, setSearch] = useState('')
  const [serviceFilter, setServiceFilter] = useState('All Services')
  const [dateFilter, setDateFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('all')
  const [expandedId, setExpandedId] = useState(null)

  // ── STATS ──────────────────────────────────
  const stats = useMemo(() => {
    const total = leads.length
    const contacted = leads.filter(l => l.contacted).length
    const pending = total - contacted
    const today = leads.filter(l => {
      const d = new Date(l.createdAt || l.created_at || 0)
      const now = new Date()
      return d.toDateString() === now.toDateString()
    }).length
    return { total, contacted, pending, today }
  }, [leads])

  // ── FILTER ──────────────────────────────────
  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    const now = new Date()

    return leads.filter(lead => {
      // Text search
      if (q) {
        const name = (lead.name || '').toLowerCase()
        const email = (lead.email || '').toLowerCase()
        const phone = (lead.phone || '').toLowerCase()
        const service = (lead.service || '').toLowerCase()
        const msg = (lead.message || '').toLowerCase()
        if (!name.includes(q) && !email.includes(q) && !phone.includes(q) && !service.includes(q) && !msg.includes(q)) return false
      }
      // Service filter
      if (serviceFilter !== 'All Services' && lead.service !== serviceFilter) return false
      // Status filter
      if (statusFilter === 'contacted' && !lead.contacted) return false
      if (statusFilter === 'pending' && lead.contacted) return false
      // Date filter
      if (dateFilter !== 'all') {
        const d = new Date(lead.createdAt || lead.created_at || 0)
        if (dateFilter === 'today' && d.toDateString() !== now.toDateString()) return false
        if (dateFilter === 'week') {
          const weekAgo = new Date(now); weekAgo.setDate(now.getDate() - 7)
          if (d < weekAgo) return false
        }
        if (dateFilter === 'month') {
          const monthAgo = new Date(now); monthAgo.setMonth(now.getMonth() - 1)
          if (d < monthAgo) return false
        }
      }
      return true
    })
  }, [leads, search, serviceFilter, statusFilter, dateFilter])

  const toggleExpand = (id) => setExpandedId(prev => prev === id ? null : id)

  if (loading) {
    return (
      <div className="ld-loading">
        <div className="ld-spinner" />
        <p>Loading leads...</p>
      </div>
    )
  }

  return (
    <div className="ld-wrapper">
      {/* ── TOPBAR ── */}
      <header className="ld-topbar">
        <div className="ld-topbar-left">
          <a href="/" className="ld-logo">
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
              <polygon points="4,36 20,4 36,36" fill="#E8321C" opacity="0.95"/>
              <polygon points="4,36 20,20 36,36" fill="#F59B1C" opacity="0.9"/>
              <circle cx="20" cy="20" r="3.5" fill="#fff"/>
            </svg>
            <div>
              <div className="ld-logo-name">Springfield Plumbing</div>
              <div className="ld-logo-sub">Admin Dashboard</div>
            </div>
          </a>
        </div>
        <div className="ld-topbar-right">
          {refreshing && (
            <div className="ld-refreshing">
              <i className="ri-loader-4-line ld-spin" /> Refreshing...
            </div>
          )}
          {lastUpdated && (
            <span className="ld-last-updated">
              <i className="ri-time-line" /> Updated {lastUpdated.toLocaleTimeString()}
            </span>
          )}
          <button className="ld-refresh-btn" onClick={manualRefresh} disabled={refreshing} title="Refresh now">
            <i className="ri-refresh-line" />
          </button>
          <a href="/" target="_blank" className="ld-site-btn">
            <i className="ri-external-link-line" /> View Site
          </a>
          <div className="ld-user">
            <div className="ld-avatar">{(user?.username || 'A')[0].toUpperCase()}</div>
            <span className="ld-username">{user?.username || 'Admin'}</span>
          </div>
          <button className="ld-logout" onClick={onLogout}>
            <i className="ri-logout-box-r-line" /> Sign Out
          </button>
        </div>
      </header>

      <div className="ld-content">
        {/* ── PAGE HEADER ── */}
        <div className="ld-page-header">
          <div>
            <h1 className="ld-page-title">Leads Dashboard</h1>
            <p className="ld-page-sub">Manage and track all incoming customer inquiries in real-time. Auto-refreshes every 60 seconds.</p>
          </div>
        </div>

        {/* ── STATS CARDS ── */}
        <div className="ld-stats">
          <div className="ld-stat-card ld-stat-total">
            <div className="ld-stat-icon"><i className="ri-group-fill" /></div>
            <div><div className="ld-stat-n">{stats.total}</div><div className="ld-stat-l">Total Leads</div></div>
          </div>
          <div className="ld-stat-card ld-stat-today">
            <div className="ld-stat-icon"><i className="ri-calendar-2-fill" /></div>
            <div><div className="ld-stat-n">{stats.today}</div><div className="ld-stat-l">Today</div></div>
          </div>
          <div className="ld-stat-card ld-stat-pending">
            <div className="ld-stat-icon"><i className="ri-time-fill" /></div>
            <div><div className="ld-stat-n">{stats.pending}</div><div className="ld-stat-l">Needs Follow-up</div></div>
          </div>
          <div className="ld-stat-card ld-stat-done">
            <div className="ld-stat-icon"><i className="ri-checkbox-circle-fill" /></div>
            <div><div className="ld-stat-n">{stats.contacted}</div><div className="ld-stat-l">Contacted</div></div>
          </div>
        </div>

        {/* ── ERROR ── */}
        {error && (
          <div className="ld-error-banner">
            <i className="ri-error-warning-fill" />
            <span>{error}</span>
            <button onClick={manualRefresh} className="ld-error-retry">
              <i className="ri-refresh-line" /> Retry
            </button>
          </div>
        )}

        {/* ── FILTERS ── */}
        <div className="ld-filters">
          <div className="ld-search-wrap">
            <i className="ri-search-line" />
            <input
              type="text"
              placeholder="Search by name, email, phone, service..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="ld-search"
            />
            {search && (
              <button className="ld-search-clear" onClick={() => setSearch('')}>
                <i className="ri-close-line" />
              </button>
            )}
          </div>
          <div className="ld-filter-row">
            <select value={serviceFilter} onChange={e => setServiceFilter(e.target.value)} className="ld-select">
              {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="ld-select">
              <option value="all">All Status</option>
              <option value="pending">Needs Follow-up</option>
              <option value="contacted">Already Contacted</option>
            </select>
            <select value={dateFilter} onChange={e => setDateFilter(e.target.value)} className="ld-select">
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">Last 7 Days</option>
              <option value="month">Last 30 Days</option>
            </select>
            {(search || serviceFilter !== 'All Services' || statusFilter !== 'all' || dateFilter !== 'all') && (
              <button className="ld-clear-filters" onClick={() => { setSearch(''); setServiceFilter('All Services'); setStatusFilter('all'); setDateFilter('all') }}>
                <i className="ri-filter-off-line" /> Clear All
              </button>
            )}
          </div>
          <div className="ld-result-count">
            Showing <strong>{filtered.length}</strong> of <strong>{leads.length}</strong> leads
          </div>
        </div>

        {/* ── TABLE — Desktop ── */}
        <div className="ld-table-wrap">
          {filtered.length === 0 ? (
            <div className="ld-empty">
              <i className="ri-inbox-2-line" />
              <p>{leads.length === 0 ? 'No leads yet. They will appear here when customers submit the contact form.' : 'No leads match your current filters.'}</p>
            </div>
          ) : (
            <>
              {/* Desktop Table */}
              <table className="ld-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Contact</th>
                    <th>Service</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(lead => {
                    const id = lead._id || lead.id
                    const isExpanded = expandedId === id
                    return (
                      <>
                        <tr key={id} className={`ld-row ${lead.contacted ? 'ld-row-done' : 'ld-row-pending'}`}>
                          <td className="ld-td-date">
                            <div className="ld-date">{formatDateShort(lead.createdAt || lead.created_at)}</div>
                            <div className="ld-time">{new Date(lead.createdAt || lead.created_at || 0).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                          </td>
                          <td>
                            <div className="ld-name">{lead.name || '—'}</div>
                            {lead.address && <div className="ld-addr">{lead.address}</div>}
                          </td>
                          <td>
                            {lead.phone && <div className="ld-phone"><i className="ri-phone-line" /><a href={`tel:${lead.phone}`}>{lead.phone}</a></div>}
                            {lead.email && <div className="ld-email"><i className="ri-mail-line" /><a href={`mailto:${lead.email}`}>{lead.email}</a></div>}
                          </td>
                          <td>
                            {lead.service ? (
                              <span className="ld-service-tag">{lead.service}</span>
                            ) : '—'}
                          </td>
                          <td className="ld-td-msg">
                            <div className={`ld-msg ${isExpanded ? 'expanded' : ''}`}>
                              {lead.message || '—'}
                            </div>
                            {lead.message && lead.message.length > 80 && (
                              <button className="ld-expand-btn" onClick={() => toggleExpand(id)}>
                                {isExpanded ? 'Less' : 'More'}
                              </button>
                            )}
                          </td>
                          <td>
                            {lead.contacted ? (
                              <div className="ld-status ld-status-done">
                                <i className="ri-checkbox-circle-fill" /> Contacted
                                {lead.contactedAt && <div className="ld-contacted-at">{formatDateShort(lead.contactedAt)}</div>}
                              </div>
                            ) : (
                              <div className="ld-status ld-status-pending">
                                <i className="ri-time-line" /> Pending
                              </div>
                            )}
                          </td>
                          <td>
                            {!lead.contacted && (
                              <button
                                className="ld-mark-btn"
                                onClick={() => markContacted(id)}
                                disabled={markingId === id}
                                title="Mark as contacted"
                              >
                                {markingId === id ? (
                                  <><i className="ri-loader-4-line ld-spin" /> Saving...</>
                                ) : (
                                  <><i className="ri-phone-fill" /> Mark Contacted</>
                                )}
                              </button>
                            )}
                          </td>
                        </tr>
                      </>
                    )
                  })}
                </tbody>
              </table>

              {/* Mobile Cards */}
              <div className="ld-mobile-cards">
                {filtered.map(lead => {
                  const id = lead._id || lead.id
                  return (
                    <div key={id} className={`ld-mobile-card ${lead.contacted ? 'done' : 'pending'}`}>
                      <div className="lmc-header">
                        <div>
                          <div className="lmc-name">{lead.name}</div>
                          <div className="lmc-date">{formatDate(lead.createdAt || lead.created_at)}</div>
                        </div>
                        {lead.contacted ? (
                          <span className="ld-status ld-status-done"><i className="ri-checkbox-circle-fill" /> Contacted</span>
                        ) : (
                          <span className="ld-status ld-status-pending"><i className="ri-time-line" /> Pending</span>
                        )}
                      </div>
                      {lead.service && <div className="lmc-service"><i className="ri-tools-fill" />{lead.service}</div>}
                      <div className="lmc-contact">
                        {lead.phone && <a href={`tel:${lead.phone}`}><i className="ri-phone-line" />{lead.phone}</a>}
                        {lead.email && <a href={`mailto:${lead.email}`}><i className="ri-mail-line" />{lead.email}</a>}
                      </div>
                      {lead.message && <div className="lmc-msg">{lead.message}</div>}
                      {!lead.contacted && (
                        <button className="ld-mark-btn" onClick={() => markContacted(id)} disabled={markingId === id}>
                          {markingId === id ? <><i className="ri-loader-4-line ld-spin" /> Saving...</> : <><i className="ri-phone-fill" /> Mark as Contacted</>}
                        </button>
                      )}
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
