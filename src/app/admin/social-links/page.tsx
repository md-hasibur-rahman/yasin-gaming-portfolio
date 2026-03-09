import { fetchProfile, fetchSocialLinks } from "@/lib/data";
import { SocialLinkCreateForm } from "@/components/admin/social-link-create-form";
import { SocialLinkItemForm } from "@/components/admin/social-link-item-form";

export default async function AdminSocialLinksPage() {
  const profile = await fetchProfile();
  const links = await fetchSocialLinks(profile?.id);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Social Links</h1>
      <SocialLinkCreateForm />
      <div className="grid gap-4">
        {links.map((l) => (
          <SocialLinkItemForm key={l.id} item={l} />
        ))}
        {links.length === 0 && <div className="text-zinc-400">No links yet.</div>}
      </div>
    </div>
  );
}
