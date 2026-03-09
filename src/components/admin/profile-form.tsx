"use client";
import { useActionState } from "react";
import { updateProfileAction } from "@/app/admin/actions/profile";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";

export function ProfileForm({ initial }: { initial: any }) {
  const [state, formAction, pending] = useActionState(async (_prev: any, formData: FormData) => {
    const res = await updateProfileAction(formData);
    return res;
  }, null);

  if (state?.ok) toast.success("Profile saved");
  if (state?.error) toast.error(state.error);

  return (
    <form action={formAction} className="grid max-w-2xl gap-4">
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="full_name">Full Name</label>
        <input id="full_name" name="full_name" defaultValue={initial?.full_name || ""} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" required />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="gamer_name">Gamer Name</label>
        <input id="gamer_name" name="gamer_name" defaultValue={initial?.gamer_name || ""} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" required />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="gamer_title">Gamer Title</label>
        <input id="gamer_title" name="gamer_title" defaultValue={initial?.gamer_title || ""} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" placeholder="e.g., Blox Fruits Player" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="country">Country</label>
        <input id="country" name="country" defaultValue={initial?.country || ""} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="age">Age</label>
        <input id="age" name="age" type="number" min={1} max={150} defaultValue={initial?.age || ""} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="profile_image_url">Profile Image URL</label>
        <input id="profile_image_url" name="profile_image_url" defaultValue={initial?.profile_image_url || ""} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" required />
        <p className="text-xs text-zinc-500">At the very top of the public page, only this image is shown.</p>
      </div>
      <div className="grid gap-2">
        <label className="text-sm text-zinc-300" htmlFor="bio">Short Bio</label>
        <textarea id="bio" name="bio" rows={5} defaultValue={initial?.bio || ""} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
      </div>
      <div className="grid gap-3 rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium">Show Personal Info</div>
            <div className="text-xs text-zinc-400">Toggle visibility of the Personal Info section.</div>
          </div>
          <input type="hidden" name="show_personal" value={(initial?.show_personal ?? true).toString()} />
          <Switch
            defaultChecked={initial?.show_personal ?? true}
            onCheckedChange={(v) => {
              const el = document.querySelector<HTMLInputElement>('input[name="show_personal"]');
              if (el) el.value = v.toString();
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium">Show Games</div>
            <div className="text-xs text-zinc-400">Toggle visibility of the Games section.</div>
          </div>
          <input type="hidden" name="show_games" value={(initial?.show_games ?? true).toString()} />
          <Switch
            defaultChecked={initial?.show_games ?? true}
            onCheckedChange={(v) => {
              const el = document.querySelector<HTMLInputElement>('input[name="show_games"]');
              if (el) el.value = v.toString();
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium">Show Friends</div>
            <div className="text-xs text-zinc-400">Toggle visibility of the Friends section.</div>
          </div>
          <input type="hidden" name="show_friends" value={(initial?.show_friends ?? true).toString()} />
          <Switch
            defaultChecked={initial?.show_friends ?? true}
            onCheckedChange={(v) => {
              const el = document.querySelector<HTMLInputElement>('input[name="show_friends"]');
              if (el) el.value = v.toString();
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium">Show Message Form</div>
            <div className="text-xs text-zinc-400">Toggle visibility of the Message section.</div>
          </div>
          <input type="hidden" name="show_messages" value={(initial?.show_messages ?? true).toString()} />
          <Switch
            defaultChecked={initial?.show_messages ?? true}
            onCheckedChange={(v) => {
              const el = document.querySelector<HTMLInputElement>('input[name="show_messages"]');
              if (el) el.value = v.toString();
            }}
          />
        </div>
      </div>
      <div>
        <button disabled={pending} className="rounded-md bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-500 disabled:opacity-60">
          {pending ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
}
