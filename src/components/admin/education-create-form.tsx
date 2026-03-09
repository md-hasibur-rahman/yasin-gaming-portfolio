"use client";
import { useActionState } from "react";
import { createEducationAction } from "@/app/admin/actions/education";
import { toast } from "sonner";

export function EducationCreateForm() {
  const [state, formAction, pending] = useActionState(async (_prev: any, formData: FormData) => {
    const res = await createEducationAction(formData);
    return res;
  }, null);
  if (state?.ok) toast.success("Created");
  if (state?.error) toast.error(state.error);
  return (
    <form action={formAction} className="grid max-w-2xl gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="institution_name">Institution Name</label>
        <input id="institution_name" name="institution_name" required className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="level">Class / Level</label>
        <input id="level" name="level" className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="dress_image_url">Dress Image URL</label>
        <input id="dress_image_url" name="dress_image_url" className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="description">Short Description</label>
        <textarea id="description" name="description" rows={4} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div>
        <button disabled={pending} className="rounded-md bg-purple-600 px-4 py-2 text-white disabled:opacity-60">{pending ? "Creating..." : "Add"}</button>
      </div>
    </form>
  );
}
