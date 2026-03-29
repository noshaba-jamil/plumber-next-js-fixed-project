'use client'
import axios from 'axios'

// In Next.js, API routes are same-origin so BASE_URL is empty
const BASE_URL = ''

export const publicApi = axios.create({ baseURL: BASE_URL, headers: { 'Content-Type': 'application/json' }, timeout: 15000 })
export const adminApi  = axios.create({ baseURL: BASE_URL, headers: { 'Content-Type': 'application/json' }, timeout: 15000 })

adminApi.interceptors.request.use(config => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
}, err => Promise.reject(err))

adminApi.interceptors.response.use(res => res, err => {
  if (err.response?.status === 401) {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('admin_token')
      localStorage.removeItem('admin_user')
      window.location.href = '/admin'
    }
  }
  return Promise.reject(err)
})

export const submitContactForm = data  => publicApi.post('/api/contact', data)
export const adminLogin        = creds => publicApi.post('/api/admin/login', creds)
export const getLeads          = ()    => adminApi.get('/api/leads')
export const markLeadContacted = id    => adminApi.patch(`/api/leads/${id}/contacted`)
