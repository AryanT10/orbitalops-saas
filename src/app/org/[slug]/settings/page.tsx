import RequireOrgRole from "@/components/RequireOrgRole"

export default function SettingsPage() {
  return (
    <RequireOrgRole role="admin">
      <div className="p-8">
        <h1 className="text-2xl font-bold">⚙️ Organization Settings</h1>
        <p className="text-gray-500 mt-2">
          Only users with the <code>admin</code> role can view this page.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Organization Name</label>
            <input
              disabled
              value="(Coming Soon)"
              className="mt-1 px-3 py-2 w-full border rounded bg-gray-100 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Billing Plan</label>
            <input
              disabled
              value="Free"
              className="mt-1 px-3 py-2 w-full border rounded bg-gray-100 text-sm"
            />
          </div>
        </div>
      </div>
    </RequireOrgRole>
  )
}