/**
 * AdminPage — Main admin entry point
 * ────────────────────────────────────
 * Shows login form if not authenticated
 * Shows dashboard if authenticated
 * Manages auth state with useAuth hook
 */

import { useAuth } from '../hooks/useAuth'
import AdminLogin from '../components/AdminLogin'
import LeadsDashboard from '../components/LeadsDashboard'

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
