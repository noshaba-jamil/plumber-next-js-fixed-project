import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Lead from '@/models/Lead'
import { requireAuth } from '@/lib/auth'

export async function GET(request) {
  const auth = await requireAuth(request)
  if (auth.error) return NextResponse.json({ message: auth.error }, { status: auth.status })

  try {
    await connectDB()
    const leads = await Lead.find({}).sort({ createdAt: -1 }).select('-__v -ipAddress').lean()
    return NextResponse.json(leads)
  } catch (err) {
    return NextResponse.json({ message: 'Failed to fetch leads' }, { status: 500 })
  }
}
