"use client";
import { useActionState } from "react";
import type { Game, GameSection } from "@/lib/types";
import { deleteGameAction, updateGameAction } from "@/app/admin/actions/games";
import { toast } from "sonner";

export function GameItemForm({ item, sections }: { item: Game; sections: GameSection[] }) {
  const [stateU, updateAction, pendingU] = useActionState(async (_: any, formData: FormData) => {
    const res = await updateGameAction(formData);
    return res;
  }, null);
  const [stateD, deleteAction, pendingD] = useActionState(async (_: any, formData: FormData) => {
    const res = await deleteGameAction(formData);
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
          <label className="text-sm text-zinc-300" htmlFor={`name_${item.id}`}>Game Name</label>
          <input id={`name_${item.id}`} name="name" defaultValue={item.name} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-zinc-300" htmlFor={`section_id_${item.id}`}>Section</label>
          <select id={`section_id_${item.id}`} name="section_id" defaultValue={item.section_id || ""} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm">
            <option value="">None</option>
            {sections.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-zinc-300" htmlFor={`icon_url_${item.id}`}>Icon IMAGE URL</label>
          <input id={`icon_url_${item.id}`} name="icon_url" defaultValue={item.icon_url || ""} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
        </div>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 gap-x-4">
          <div className="grid gap-2">
            <label className="text-sm text-zinc-300" htmlFor={`admin_username_${item.id}`}>Admin Username</label>
            <input id={`admin_username_${item.id}`} name="admin_username" defaultValue={item.admin_username || ""} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-zinc-300" htmlFor={`level_rank_${item.id}`}>Level / Rank</label>
            <input id={`level_rank_${item.id}`} name="level_rank" defaultValue={item.level_rank || ""} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
          </div>
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-zinc-300" htmlFor={`notes_${item.id}`}>Notes</label>
          <textarea id={`notes_${item.id}`} name="notes" rows={3} defaultValue={item.notes || ""} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
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
