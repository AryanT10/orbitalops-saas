"use client"

import { SignUp } from "@clerk/nextjs"
import { useEffect, useState } from "react"

export default function SignUpPage() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="flex justify-center items-center min-h-screen">
      {isClient && (
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" fallbackRedirectUrl="/" />
      )}
    </div>
  )
}
