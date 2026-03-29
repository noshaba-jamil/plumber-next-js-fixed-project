import mongoose from 'mongoose'

const leadSchema = new mongoose.Schema(
  {
    name:    { type: String, required: true, trim: true },
    email:   { type: String, required: true, trim: true, lowercase: true },
    phone:   { type: String, required: true, trim: true },
    address: { type: String, trim: true, default: '' },
    service: { type: String, trim: true, default: '' },
    message: { type: String, trim: true, default: '' },
    contacted:   { type: Boolean, default: false },
    contactedAt: { type: Date, default: null },
    ipAddress:   { type: String, default: '' },
  },
  { timestamps: true }
)

leadSchema.index({ createdAt: -1 })
leadSchema.index({ contacted: 1 })

export default mongoose.models.Lead || mongoose.model('Lead', leadSchema)
