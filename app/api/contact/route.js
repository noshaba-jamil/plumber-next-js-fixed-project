import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Lead from '@/models/Lead'
import nodemailer from 'nodemailer'

const transporter = process.env.EMAIL_USER ? nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
}) : null

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, address, service, message } = body

    // Validation
    const errors = []
    if (!name?.trim())    errors.push('Name is required')
    if (!email?.trim())   errors.push('Email is required')
    if (!phone?.trim())   errors.push('Phone is required')
    if (!message?.trim()) errors.push('Message is required')
    if (errors.length)    return NextResponse.json({ message: errors[0] }, { status: 400 })

    await connectDB()

    const lead = await Lead.create({
      name: name.trim(), email: email.trim().toLowerCase(),
      phone: phone.trim(), address: address?.trim() || '',
      service: service?.trim() || '', message: message?.trim() || '',
      ipAddress: request.headers.get('x-forwarded-for') || '',
    })

    // Email notification (fire & forget)
    if (transporter) {
      transporter.sendMail({
        from: `"Springfield Plumbing" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: `🚨 New Lead: ${lead.name} — ${lead.service || 'Plumbing Inquiry'}`,
        html: `<h2>New Lead</h2><p><strong>Name:</strong> ${lead.name}</p><p><strong>Phone:</strong> ${lead.phone}</p><p><strong>Email:</strong> ${lead.email}</p><p><strong>Service:</strong> ${lead.service}</p><p><strong>Message:</strong> ${lead.message}</p>`,
      }).catch(console.error)
    }

    return NextResponse.json({ success: true, message: 'Message received. We will contact you shortly.' }, { status: 201 })
  } catch (err) {
    console.error('/api/contact error:', err)
    return NextResponse.json({ message: 'Server error. Please call us directly.' }, { status: 500 })
  }
}
