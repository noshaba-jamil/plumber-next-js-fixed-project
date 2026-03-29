// Admin section gets its own layout that suppresses the public Navbar/Footer
// The LeadsDashboard component has its own topbar

export const metadata = {
  title: 'Admin Dashboard | Springfield Emergency Plumbing',
  robots: { index: false, follow: false }, // Never index admin pages
}

export default function AdminLayout({ children }) {
  return <>{children}</>
}
