"use client";
import { useActionState } from "react";
import { createSectionAction } from "@/app/admin/actions/game-sections";
import type { GameSection } from "@/lib/types";
import { toast } from "sonner";

export function SectionCreateForm({ sections }: { sections: GameSection[] }) {
  const [state, formAction, pending] = useActionState(async (_: any, formData: FormData) => {
    const res = await createSectionAction(formData);
    return res;
  }, null);
  if (state?.ok) toast.success("Section created");
  if (state?.error) toast.error(state.error);
  return (
    <form action={formAction} className="grid max-w-xl gap-3 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="name">Name</label>
        <input id="name" name="name" required className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="parent_id">Parent (optional)</label>
        <select id="parent_id" name="parent_id" className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm">
          <option value="">None (root)</option>
          {sections.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="position">Position</label>
        <input id="position" name="position" type="number" defaultValue={0} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div>
        <button disabled={pending} className="rounded-md bg-purple-600 px-4 py-2 text-white disabled:opacity-60">{pending ? "Creating..." : "Add Section"}</button>
      </div>
    </form>
  );
}
