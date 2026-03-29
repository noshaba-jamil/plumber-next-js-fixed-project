'use client'

import { useAuth } from '@/admin/hooks/useAuth'
import AdminLogin from '@/admin/components/AdminLogin'
import LeadsDashboard from '@/admin/components/LeadsDashboard'

// Admin page bypasses root layout's Navbar/Footer
// because layout.jsx wraps ALL routes including /admin
// The dashboard has its own topbar built in

export default function AdminPage() {
  const { isAuthenticated, user, login, logout, loading, error, setError } = useAuth()

  if (!isAuthenticated) {
    return (
      <AdminLogin
        onLogin={login}
        loading={loading}
        error={error}
        clearError={() => setError('')}
      />
    )
  }

  return (
    <LeadsDashboard
      user={user}
      onLogout={logout}
    />
  )
}
