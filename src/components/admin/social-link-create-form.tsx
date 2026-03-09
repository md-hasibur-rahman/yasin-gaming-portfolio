"use client";
import { useActionState } from "react";
import { createSocialLinkAction } from "@/app/admin/actions/social-links";
import { toast } from "sonner";

export function SocialLinkCreateForm() {
  const [state, formAction, pending] = useActionState(async (_: any, formData: FormData) => {
    const res = await createSocialLinkAction(formData);
    return res;
  }, null);
  if (state?.ok) toast.success("Created");
  if (state?.error) toast.error(state.error);
  return (
    <form action={formAction} className="grid max-w-2xl gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="platform">Platform</label>
        <input id="platform" name="platform" required className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="icon_url">Icon IMAGE URL</label>
        <input id="icon_url" name="icon_url" required className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="url">Profile URL</label>
        <input id="url" name="url" required className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="position">Position</label>
        <input id="position" name="position" type="number" defaultValue={0} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div>
        <button disabled={pending} className="rounded-md bg-purple-600 px-4 py-2 text-white disabled:opacity-60">{pending ? "Creating..." : "Add"}</button>
      </div>
    </form>
  );
}
