import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Lead from '@/models/Lead'
import { requireAuth } from '@/lib/auth'

export async function PATCH(request, { params }) {
  const auth = await requireAuth(request)
  if (auth.error) return NextResponse.json({ message: auth.error }, { status: auth.status })

  try {
    const { id } = params
    if (!id.match(/^[0-9a-fA-F]{24}$/))
      return NextResponse.json({ message: 'Invalid ID' }, { status: 400 })

    await connectDB()
    const lead = await Lead.findByIdAndUpdate(
      id,
      { contacted: true, contactedAt: new Date() },
      { new: true, select: '-__v -ipAddress' }
    )

    if (!lead) return NextResponse.json({ message: 'Lead not found' }, { status: 404 })
    return NextResponse.json({ success: true, lead })
  } catch (err) {
    return NextResponse.json({ message: 'Failed to update lead' }, { status: 500 })
  }
}
