import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const links = [
    { href: "/admin", label: "Profile" },
    { href: "/admin/education", label: "Education" },
    { href: "/admin/social-links", label: "Social Links" },
    { href: "/admin/games", label: "Games" },
    { href: "/admin/friends", label: "Friends" },
    { href: "/admin/messages", label: "Messages" },
    { href: "/admin/manage", label: "Admin Management" },
  ];
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto flex w-full max-w-6xl gap-6 px-6 py-8">
        <aside className="w-56 shrink-0">
          <nav className="sticky top-6 space-y-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2 hover:border-zinc-700"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="flex-1">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
