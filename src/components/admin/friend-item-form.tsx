"use client";
import { useActionState } from "react";
import type { Friend, FriendSocialLink } from "@/lib/types";
import { deleteFriendAction, updateFriendAction, createFriendLinkAction, deleteFriendLinkAction, updateFriendLinkAction } from "@/app/admin/actions/friends";
import { toast } from "sonner";

export function FriendItemForm({ friend, links }: { friend: Friend; links: FriendSocialLink[] }) {
  const [stateU, updateAction, pendingU] = useActionState(async (_: any, formData: FormData) => {
    const res = await updateFriendAction(formData);
    return res;
  }, null);
  const [stateD, deleteAction, pendingD] = useActionState(async (_: any, formData: FormData) => {
    const res = await deleteFriendAction(formData);
    return res;
  }, null);
  const [stateCL, createLinkAction, pendingCL] = useActionState(async (_: any, formData: FormData) => {
    const res = await createFriendLinkAction(formData);
    return res;
  }, null);
  const [stateUL, updateLinkAction, pendingUL] = useActionState(async (_: any, formData: FormData) => {
    const res = await updateFriendLinkAction(formData);
    return res;
  }, null);
  const [stateDL, deleteLinkAction, pendingDL] = useActionState(async (_: any, formData: FormData) => {
    const res = await deleteFriendLinkAction(formData);
    return res;
  }, null);

  if (stateU?.ok) toast.success("Friend saved");
  if (stateU?.error) toast.error(stateU.error);
  if (stateD?.ok) toast.success("Friend deleted");
  if (stateD?.error) toast.error(stateD.error);
  if (stateCL?.ok) toast.success("Link added");
  if (stateCL?.error) toast.error(stateCL.error);
  if (stateUL?.ok) toast.success("Link saved");
  if (stateUL?.error) toast.error(stateUL.error);
  if (stateDL?.ok) toast.success("Link deleted");
  if (stateDL?.error) toast.error(stateDL.error);

  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
      <form action={updateAction} className="grid gap-3">
        <input type="hidden" name="id" value={friend.id} />
        <div className="grid gap-2">
          <label className="text-sm text-zinc-300" htmlFor={`name_${friend.id}`}>Name</label>
          <input id={`name_${friend.id}`} name="name" defaultValue={friend.name} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-zinc-300" htmlFor={`image_url_${friend.id}`}>Image URL</label>
          <input id={`image_url_${friend.id}`} name="image_url" defaultValue={friend.image_url} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
        </div>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 gap-x-4">
          <div className="grid gap-2">
            <label className="text-sm text-zinc-300" htmlFor={`role_${friend.id}`}>Role</label>
            <input id={`role_${friend.id}`} name="role" defaultValue={friend.role || ""} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-zinc-300" htmlFor={`description_${friend.id}`}>Description</label>
            <input id={`description_${friend.id}`} name="description" defaultValue={friend.description || ""} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
          </div>
        </div>
        <div className="flex gap-2">
          <button disabled={pendingU} className="rounded-md bg-purple-600 px-4 py-2 text-white disabled:opacity-60">{pendingU ? "Saving..." : "Save"}</button>
          <form action={deleteAction}>
            <input type="hidden" name="id" value={friend.id} />
            <button disabled={pendingD} className="rounded-md bg-red-600 px-4 py-2 text-white disabled:opacity-60">{pendingD ? "Deleting..." : "Delete"}</button>
          </form>
        </div>
      </form>
      <div className="mt-4 border-t border-zinc-800 pt-4">
        <h3 className="mb-2 font-medium">Links</h3>
        <form action={createLinkAction} className="grid gap-2 md:grid-cols-4 md:items-end">
          <input type="hidden" name="friend_id" value={friend.id} />
          <div className="grid gap-1">
            <label className="text-xs text-zinc-400" htmlFor={`icon_url_new_${friend.id}`}>Icon IMAGE URL</label>
            <input id={`icon_url_new_${friend.id}`} name="icon_url" className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
          </div>
          <div className="grid gap-1">
            <label className="text-xs text-zinc-400" htmlFor={`url_new_${friend.id}`}>Profile URL</label>
            <input id={`url_new_${friend.id}`} name="url" className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
          </div>
          <div className="grid gap-1">
            <label className="text-xs text-zinc-400" htmlFor={`position_new_${friend.id}`}>Position</label>
            <input id={`position_new_${friend.id}`} name="position" type="number" defaultValue={0} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
          </div>
          <button disabled={pendingCL} className="rounded-md bg-purple-600 px-3 py-2 text-white disabled:opacity-60">{pendingCL ? "Adding..." : "Add"}</button>
        </form>
        <div className="mt-4 grid gap-3">
          {links.map((l) => (
            <div key={l.id} className="rounded-md border border-zinc-800 bg-black/20 p-3">
              <form action={updateLinkAction} className="grid items-end gap-2 md:grid-cols-5">
                <input type="hidden" name="id" value={l.id} />
                <div className="grid gap-1">
                  <label className="text-xs text-zinc-400" htmlFor={`icon_url_${l.id}`}>Icon IMAGE URL</label>
                  <input id={`icon_url_${l.id}`} name="icon_url" defaultValue={l.icon_url} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
                </div>
                <div className="grid gap-1 md:col-span-2">
                  <label className="text-xs text-zinc-400" htmlFor={`url_${l.id}`}>Profile URL</label>
                  <input id={`url_${l.id}`} name="url" defaultValue={l.url} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
                </div>
                <div className="grid gap-1">
                  <label className="text-xs text-zinc-400" htmlFor={`position_${l.id}`}>Position</label>
                  <input id={`position_${l.id}`} name="position" type="number" defaultValue={l.position} className="rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm" />
                </div>
                <div className="flex gap-2">
                  <button disabled={pendingUL} className="rounded-md bg-purple-600 px-3 py-2 text-white disabled:opacity-60">{pendingUL ? "Saving..." : "Save"}</button>
                  <form action={deleteLinkAction}>
                    <input type="hidden" name="id" value={l.id} />
                    <button disabled={pendingDL} className="rounded-md bg-red-600 px-3 py-2 text-white disabled:opacity-60">{pendingDL ? "Deleting..." : "Delete"}</button>
                  </form>
                </div>
              </form>
            </div>
          ))}
          {links.length === 0 && <div className="text-zinc-500">No links yet.</div>}
        </div>
      </div>
    </div>
  );
}
