import clerkClient from "@clerk/clerk-sdk-node"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const orgId = searchParams.get("orgId")
  const userId = searchParams.get("userId")

  if (!orgId || !userId) {
    return NextResponse.json({ error: "Missing params" }, { status: 400 })
  }

  const memberships = await clerkClient.organizations.getOrganizationMembershipList({
    organizationId: orgId,
  })

  const membership = memberships.find(
    (m) => m.publicUserData?.userId === userId
  )

  return NextResponse.json({ role: membership?.role || null })
}
