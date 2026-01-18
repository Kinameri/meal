"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to home page - auth is handled via popup
    router.replace("/?auth=login")
  }, [router])

  return (
    <div className="flex min-h-svh w-full items-center justify-center">
      <p className="text-muted-foreground">Redirecting...</p>
    </div>
  )
}
