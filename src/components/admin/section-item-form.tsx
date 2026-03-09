"use client";
import { useActionState } from "react";
import { deleteSectionAction, updateSectionAction } from "@/app/admin/actions/game-sections";
import type { GameSection } from "@/lib/types";
import { toast } from "sonner";

export function SectionItemForm({ item, sections }: { item: GameSection; sections: GameSection[] }) {
  const [stateU, updateAction, pendingU] = useActionState(async (_: any, formData: FormData) => {
    const res = await updateSectionAction(formData);
    return res;
  }, null);
  const [stateD, deleteAction, pendingD] = useActionState(async (_: any, formData: FormData) => {
    const res = await deleteSectionAction(formData);
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
          <label className="text-sm text-zinc-300" htmlFor={`name_${item.id}`}>Name</label>
          <input id={`name_${item.id}`} name="name" defaultValue={item.name} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-zinc-300" htmlFor={`parent_id_${item.id}`}>Parent</label>
          <select id={`parent_id_${item.id}`} name="parent_id" defaultValue={item.parent_id || ""} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm">
            <option value="">None (root)</option>
            {sections.filter((s) => s.id !== item.id).map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-zinc-300" htmlFor={`position_${item.id}`}>Position</label>
          <input id={`position_${item.id}`} name="position" type="number" defaultValue={item.position} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
        </div>
        <div className="flex gap-2">
          <button disabled={pendingU} className="rounded-md bg-purple-600 px-4 py-2 text-white disabled:opacity-60">{pendingU ? "Saving..." : "Save"}</button>
          <form action={deleteAction}>
            <input type="hidden" name="id" value={item.id} />
            <button disabled={pendingD} className="rounded-md bg-red-600 px-4 py-2 text-white disabled:opacity-60">{pendingD ? "Deleting..." : "Delete"}</button>
          </form>
        </div>
      </form>
    </div>
  );
}
