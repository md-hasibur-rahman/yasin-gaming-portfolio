"use client";
import { useActionState } from "react";
import { createFriendAction } from "@/app/admin/actions/friends";
import { toast } from "sonner";

export function FriendCreateForm() {
  const [state, formAction, pending] = useActionState(async (_: any, formData: FormData) => {
    const res = await createFriendAction(formData);
    return res;
  }, null);
  if (state?.ok) toast.success("Friend created");
  if (state?.error) toast.error(state.error);
  return (
    <form action={formAction} className="grid max-w-2xl gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="name">Name</label>
        <input id="name" name="name" required className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="image_url">Image URL</label>
        <input id="image_url" name="image_url" required className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="role">Role</label>
        <input id="role" name="role" className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="description">Description</label>
        <textarea id="description" name="description" rows={3} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div>
        <button disabled={pending} className="rounded-md bg-purple-600 px-4 py-2 text-white disabled:opacity-60">{pending ? "Creating..." : "Add Friend"}</button>
      </div>
    </form>
  );
}
