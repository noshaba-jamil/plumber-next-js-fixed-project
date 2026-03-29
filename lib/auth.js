import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const JWT_SECRET = process.env.JWT_SECRET

export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '8h' })
}

export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET)
}

export function getTokenFromRequest(request) {
  const auth = request.headers.get('authorization') || ''
  if (!auth.startsWith('Bearer ')) return null
  return auth.split(' ')[1]
}

export async function requireAuth(request) {
  const token = getTokenFromRequest(request)
  if (!token) return { error: 'No token provided', status: 401 }
  try {
    const decoded = verifyToken(token)
    return { user: decoded }
  } catch (err) {
    const msg = err.name === 'TokenExpiredError' ? 'Session expired' : 'Invalid token'
    return { error: msg, status: 401 }
  }
}

let hashedPassword = null

export async function getHashedAdminPassword() {
  if (!hashedPassword) {
    hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 12)
  }
  return hashedPassword
}

export async function verifyAdminPassword(password) {
  const hashed = await getHashedAdminPassword()
  return bcrypt.compare(password, hashed)
}
