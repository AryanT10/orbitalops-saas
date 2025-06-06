"use client"

import { useEffect, useState } from "react"
import { useOrganization, useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { clerkClient } from "@clerk/nextjs/server"

export default function RequireOrgRole({
  role,
  children,
}: {
  role: "admin" | "member" | "viewer" | "owner"
  children: React.ReactNode
}) {
  const { organization } = useOrganization()
  const { user } = useUser()
  const router = useRouter()
  const [hasAccess, setHasAccess] = useState(false)

  useEffect(() => {
    if (!organization || !user) return

    const checkRole = async () => {
      const memberships = await fetch(
        `/api/org-role-check?orgId=${organization.id}&userId=${user.id}`
      ).then((res) => res.json())

      if (
  memberships &&
  (role === "member"
    ? !!memberships.role
    : memberships.role === role || memberships.role === "owner")
)
 {
        setHasAccess(true)
      } else {
        router.push("/")
      }
    }

    checkRole()
  }, [organization, user, role, router])

  if (!hasAccess) return null

  return <>{children}</>
}
