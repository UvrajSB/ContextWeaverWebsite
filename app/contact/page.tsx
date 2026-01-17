"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ContactPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to Calendly
    window.location.href = "https://calendly.com/yuvraj-s-bhadauria/30min"
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-muted-foreground">Redirecting to Calendly...</p>
    </div>
  )
}
