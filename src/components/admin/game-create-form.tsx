"use client";
import { useActionState } from "react";
import type { GameSection } from "@/lib/types";
import { createGameAction } from "@/app/admin/actions/games";
import { toast } from "sonner";

export function GameCreateForm({ sections }: { sections: GameSection[] }) {
  const [state, formAction, pending] = useActionState(async (_: any, formData: FormData) => {
    const res = await createGameAction(formData);
    return res;
  }, null);
  if (state?.ok) toast.success("Game created");
  if (state?.error) toast.error(state.error);
  return (
    <form action={formAction} className="grid max-w-xl gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="name">Game Name</label>
        <input id="name" name="name" required className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="section_id">Section</label>
        <select id="section_id" name="section_id" className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm">
          <option value="">None</option>
          {sections.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="icon_url">Icon IMAGE URL</label>
        <input id="icon_url" name="icon_url" className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="admin_username">Admin Username</label>
        <input id="admin_username" name="admin_username" className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="level_rank">Level / Rank</label>
        <input id="level_rank" name="level_rank" className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="notes">Notes</label>
        <textarea id="notes" name="notes" rows={3} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div>
        <button disabled={pending} className="rounded-md bg-purple-600 px-4 py-2 text-white disabled:opacity-60">{pending ? "Creating..." : "Add Game"}</button>
      </div>
    </form>
  );
}
