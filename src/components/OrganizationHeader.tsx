"use client"

import { useOrganization } from "@clerk/nextjs"

export default function OrganizationHeader() {
  const { organization } = useOrganization()

  return (
    <h1 className="text-3xl font-bold mb-4">
      👋 Welcome to {organization?.name || "your"} Dashboard
    </h1>
  )
}
