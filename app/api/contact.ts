import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: "Invalid email address" }, { status: 400 })
    }

    // Create email HTML content
    const emailHtml = `
      <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb;">
        <div style="background: linear-gradient(135deg, #ea580c 0%, #f97316 50%, #f59e0b 100%); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">New Contact Request</h1>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">PayNeor Payment Solutions</p>
        </div>
        
        <div style="background-color: white; padding: 40px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <h2 style="color: #1e293b; margin: 0 0 24px 0; font-size: 20px; border-bottom: 2px solid #f97316; padding-bottom: 12px;">Contact Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; color: #64748b; font-weight: 600; width: 120px;">Name:</td>
              <td style="padding: 12px 0; color: #1e293b; font-weight: 500;">${name}</td>
            </tr>
            <tr style="background-color: #fef3f2;">
              <td style="padding: 12px 8px; color: #64748b; font-weight: 600;">Email:</td>
              <td style="padding: 12px 8px; color: #1e293b; font-weight: 500;">
                <a href="mailto:${email}" style="color: #f97316; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #64748b; font-weight: 600;">Phone:</td>
              <td style="padding: 12px 0; color: #1e293b; font-weight: 500;">
                <a href="tel:${phone}" style="color: #f97316; text-decoration: none;">${phone}</a>
              </td>
            </tr>
          </table>
          
          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px; margin: 0;">
              <strong>Received:</strong> ${new Date().toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p style="color: #64748b; font-size: 14px; margin: 8px 0 0 0;">
              <strong>Source:</strong> Contact Form - PayNeor Website
            </p>
          </div>
        </div>
        
        <div style="text-align: center; padding: 20px; color: #94a3b8; font-size: 12px;">
          <p style="margin: 0;">This is an automated message from your PayNeor contact form.</p>
          <p style="margin: 8px 0 0 0;">Please respond to the customer within 24 hours.</p>
        </div>
      </div>
    `

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Send email
    await transporter.sendMail({
      from: `PayNeor Contact Form <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "info@payneor.com",
      cc: email,
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      html: emailHtml,
    })

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    })
  } catch (error) {
    console.error("Contact form email error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try again later.",
      },
      { status: 500 },
    )
  }
}
