"use client";
import { useActionState } from "react";
import { deleteEducationAction, updateEducationAction } from "@/app/admin/actions/education";
import type { Education } from "@/lib/types";
import { toast } from "sonner";

export function EducationItemForm({ item }: { item: Education }) {
  const [stateU, updateAction, pendingU] = useActionState(async (_: any, formData: FormData) => {
    const res = await updateEducationAction(formData);
    return res;
  }, null);
  const [stateD, deleteAction, pendingD] = useActionState(async (_: any, formData: FormData) => {
    const res = await deleteEducationAction(formData);
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
          <label className="text-sm text-zinc-300" htmlFor={`institution_name_${item.id}`}>Institution Name</label>
          <input id={`institution_name_${item.id}`} name="institution_name" defaultValue={item.institution_name} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-zinc-300" htmlFor={`level_${item.id}`}>Class / Level</label>
          <input id={`level_${item.id}`} name="level" defaultValue={item.level || ""} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-zinc-300" htmlFor={`dress_image_url_${item.id}`}>Dress Image URL</label>
          <input id={`dress_image_url_${item.id}`} name="dress_image_url" defaultValue={item.dress_image_url || ""} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-zinc-300" htmlFor={`description_${item.id}`}>Short Description</label>
          <textarea id={`description_${item.id}`} name="description" rows={4} defaultValue={item.description || ""} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
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
