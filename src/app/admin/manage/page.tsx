import { adminDb } from "@/lib/firebase/admin";
import { isAdmin } from "@/lib/auth";
import { addAdminAction, removeAdminAction } from "../actions/manage";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, UserPlus, Trash2, CheckCircle, XCircle } from "lucide-react";

export default async function AdminManagementPage() {
  const isAuthorized = await isAdmin();
  if (!isAuthorized) return <div>Unauthorized</div>;

  const snapshot = await adminDb.collection("admins").get();
  const admins = snapshot.docs.map(doc => doc.data());
  const MAIN_ADMIN = "animeandmanga1810@gmail.com";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          <Shield className="h-6 w-6 text-purple-500" />
          Admin Management
        </h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-lg">Add New Admin</CardTitle>
            <CardDescription>Grant admin access to another user by email.</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={addAdminAction} className="flex gap-2">
              <input
                name="email"
                type="email"
                placeholder="user@example.com"
                required
                className="flex-1 rounded-md bg-black border border-zinc-800 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-500 transition"
              >
                <UserPlus className="h-4 w-4" />
                Add
              </button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardHeader>
            <CardTitle className="text-lg">Firebase Connection</CardTitle>
            <CardDescription>Status of your Firebase integration.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-4">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <div>
                <div className="text-sm font-medium text-emerald-400">Connected to Firebase</div>
                <div className="text-xs text-zinc-500">Project ID: {process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-zinc-900/50 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-lg">Admin List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Main Admin (Fixed) */}
            <div className="flex items-center justify-between rounded-lg border border-zinc-800 bg-black/30 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium">{MAIN_ADMIN}</div>
                  <div className="text-xs text-purple-400">Main Admin (Permanent)</div>
                </div>
              </div>
            </div>

            {/* Extra Admins */}
            {admins.map((admin: any) => (
              <div key={admin.email} className="flex items-center justify-between rounded-lg border border-zinc-800 bg-black/30 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-zinc-400">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{admin.email}</div>
                    <div className="text-xs text-zinc-500 text-zinc-500">Added on {new Date(admin.added_at).toLocaleDateString()}</div>
                  </div>
                </div>
                <form action={removeAdminAction}>
                  <input type="hidden" name="email" value={admin.email} />
                  <button
                    type="submit"
                    title="Remove Admin"
                    className="flex h-8 w-8 items-center justify-center rounded-md text-zinc-500 hover:bg-red-500/10 hover:text-red-500 transition"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </form>
              </div>
            ))}

            {admins.length === 0 && (
              <div className="text-center py-8 text-zinc-500 text-sm">
                No additional admins added yet.
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
