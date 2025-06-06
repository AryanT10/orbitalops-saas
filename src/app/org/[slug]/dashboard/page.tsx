import { auth, currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import OrganizationHeader from "@/components/OrganizationHeader"

export default async function OrgDashboard(props: { params: { slug: string } }) {
  const { slug } =  props.params
  const { orgSlug } = await auth()
  const user = await currentUser()

  if (orgSlug && slug !== orgSlug) {
    redirect(`/org/${orgSlug}/dashboard`)
  }

  return (
    <div className="p-8">
      <OrganizationHeader />
      <p className="text-gray-600">Logged in as: {user?.emailAddresses[0]?.emailAddress}</p>
      <p className="mt-2">User ID: {user?.id}</p>
    </div>
  )
}
