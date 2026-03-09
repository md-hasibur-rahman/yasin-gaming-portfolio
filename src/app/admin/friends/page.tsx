import { fetchAllFriendLinks, fetchFriends } from "@/lib/data";
import { FriendCreateForm } from "@/components/admin/friend-create-form";
import { FriendItemForm } from "@/components/admin/friend-item-form";

export default async function AdminFriendsPage() {
  const [friends, links] = await Promise.all([fetchFriends(), fetchAllFriendLinks()]);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Friends</h1>
      <FriendCreateForm />
      <div className="grid gap-4">
        {friends.map((f) => (
          <FriendItemForm key={f.id} friend={f} links={links.filter((l) => l.friend_id === f.id)} />
        ))}
        {friends.length === 0 && <div className="text-zinc-400">No friends yet.</div>}
      </div>
    </div>
  );
}
