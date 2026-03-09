import { fetchProfile } from "@/lib/data";
import { ProfileForm } from "@/components/admin/profile-form";

export default async function AdminProfilePage() {
  const profile = await fetchProfile();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Profile</h1>
      <ProfileForm initial={profile || null} />
    </div>
  );
}
