import { fetchMessages } from "@/lib/data";
import { deleteMessageAction, markMessageReadAction } from "@/app/admin/actions/admin-messages";

export default async function AdminMessagesPage() {
  const messages = await fetchMessages();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Messages</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-zinc-400">
              <th className="px-3 py-2">Time</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">Message</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((m) => (
              <tr key={m.id} className="border-t border-zinc-800">
                <td className="px-3 py-2 text-zinc-400">{new Date(m.created_at).toLocaleString()}</td>
                <td className="px-3 py-2">{m.name || "-"}</td>
                <td className="px-3 py-2 text-blue-400">
                  {m.email ? (
                    <a href={`mailto:${m.email}`}>{m.email}</a>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="px-3 py-2 max-w-[28rem] text-pretty text-zinc-200">{m.message}</td>
                <td className="px-3 py-2">{m.is_read ? <span className="text-green-400">Read</span> : <span className="text-yellow-400">Unread</span>}</td>
                <td className="px-3 py-2">
                  <div className="flex gap-2">
                    <form action={markMessageReadAction}>
                      <input type="hidden" name="id" value={m.id} />
                      <input type="hidden" name="is_read" value={(!m.is_read).toString()} />
                      <button className="rounded-md bg-zinc-800 px-3 py-1 hover:bg-zinc-700">
                        {m.is_read ? "Mark Unread" : "Mark Read"}
                      </button>
                    </form>
                    <form action={deleteMessageAction}>
                      <input type="hidden" name="id" value={m.id} />
                      <button className="rounded-md bg-red-600 px-3 py-1 text-white hover:bg-red-500">Delete</button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {messages.length === 0 && (
              <tr>
                <td className="px-3 py-6 text-center text-zinc-400" colSpan={6}>No messages yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
