import { NextResponse } from 'next/server'
import { signToken, verifyAdminPassword } from '@/lib/auth'

export async function POST(request) {
  try {
    const { username, password } = await request.json()
    if (!username || !password)
      return NextResponse.json({ message: 'Username and password required' }, { status: 400 })

    if (username !== process.env.ADMIN_USERNAME)
      return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 })

    const match = await verifyAdminPassword(password)
    if (!match)
      return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 })

    const token = signToken({ username, role: 'admin' })
    return NextResponse.json({ success: true, token, user: { username, role: 'admin' } })
  } catch (err) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}
