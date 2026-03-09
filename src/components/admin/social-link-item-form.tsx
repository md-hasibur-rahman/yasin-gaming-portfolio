"use client";
import { useActionState } from "react";
import { deleteSocialLinkAction, updateSocialLinkAction } from "@/app/admin/actions/social-links";
import type { SocialLink } from "@/lib/types";
import { toast } from "sonner";

export function SocialLinkItemForm({ item }: { item: SocialLink }) {
  const [stateU, updateAction, pendingU] = useActionState(async (_: any, formData: FormData) => {
    const res = await updateSocialLinkAction(formData);
    return res;
  }, null);
  const [stateD, deleteAction, pendingD] = useActionState(async (_: any, formData: FormData) => {
    const res = await deleteSocialLinkAction(formData);
    return res;
  }, null);
  if (stateU?.ok) toast.success("Saved");
  if (stateU?.error) toast.error(stateU.error);
  if (stateD?.ok) toast.success("Deleted");
  if (stateD?.error) toast.error(stateD.error);

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
      <form action={updateAction} className="grid gap-3">
        <input type="hidden" name="id" value={item.id} />
        <div className="grid gap-2">
          <label className="text-sm text-zinc-300" htmlFor={`platform_${item.id}`}>Platform</label>
          <input id={`platform_${item.id}`} name="platform" defaultValue={item.platform} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-zinc-300" htmlFor={`icon_url_${item.id}`}>Icon IMAGE URL</label>
          <input id={`icon_url_${item.id}`} name="icon_url" defaultValue={item.icon_url} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-zinc-300" htmlFor={`url_${item.id}`}>Profile URL</label>
          <input id={`url_${item.id}`} name="url" defaultValue={item.url} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-zinc-300" htmlFor={`position_${item.id}`}>Position</label>
          <input id={`position_${item.id}`} name="position" type="number" defaultValue={item.position} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
        </div>
        <div className="flex gap-2">
          <button disabled={pendingU} className="rounded-md bg-purple-600 px-4 py-2 text-white disabled:opacity-60">{pendingU ? "Saving..." : "Save"}</button>
        </div>
      </form>
      <form action={deleteAction} className="mt-2">
        <input type="hidden" name="id" value={item.id} />
        <button disabled={pendingD} className="rounded-md bg-red-600 px-4 py-2 text-white disabled:opacity-60">{pendingD ? "Deleting..." : "Delete"}</button>
      </form>
    </div>
  );
}
