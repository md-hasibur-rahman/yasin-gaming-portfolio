import { fetchProfile, fetchEducation, fetchSocialLinks, fetchGameSections, fetchGames, fetchFriends, fetchAllFriendLinks, fetchMessages } from "@/lib/data";
import { buildGameTree } from "@/lib/games-tree";
import Image from "next/image";
import Link from "next/link";
import { GoogleLoginButton, LogoutButton } from "@/components/auth-buttons";
import { getCurrentUser, isAdmin } from "@/lib/auth";
import { ProfileImageGlow } from "@/components/profile-image-glow";
import { SocialLinksBar } from "@/components/social-links-bar";
import { MessageForm } from "@/components/message-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LevelProgress } from "@/components/level-progress";
import { MotionDiv } from "@/components/motion-div";
import { SafeImage } from "@/components/safe-image";

export default async function Home() {
  const [profile, education, user] = await Promise.all([
    fetchProfile(),
    fetchEducation(),
    getCurrentUser(),
  ]);
  const profileId = profile?.id;
  const [social, sections, games, friends, friendLinks, messages] = await Promise.all([
    fetchSocialLinks(profileId || undefined),
    fetchGameSections(),
    fetchGames(),
    fetchFriends(),
    fetchAllFriendLinks(),
    fetchMessages(),
  ]);
  const admin = await isAdmin();
  const tree = buildGameTree(sections, games);
  const totalGames = games.length;
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <section className="relative flex flex-col items-center px-6 py-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_60%)]" />
        <div className="flex w-full max-w-3xl flex-col items-center gap-4 text-center">
          <ProfileImageGlow src={profile?.profile_image_url} alt={profile?.gamer_name || "profile"} />
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">{profile?.full_name || "Your Name"}</h1>
          <p className="text-zinc-400">{profile?.gamer_title || profile?.gamer_name || "Gamer"} • {profile?.country || "Country"}</p>
          {profile?.bio && <p className="max-w-2xl text-zinc-300">{profile.bio}</p>}
          <SocialLinksBar links={social} />
          <div className="mt-4 flex items-center gap-3">
            {user && (
              <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-black/30 px-2 py-1">
                {((user as any)?.user_metadata?.avatar_url || (user as any)?.user_metadata?.picture) ? (
                  <img
                    src={(user as any).user_metadata.avatar_url || (user as any).user_metadata.picture}
                    alt="avatar"
                    className="h-6 w-6 rounded-full object-cover"
                  />
                ) : (
                  <div className="h-6 w-6 rounded-full bg-zinc-700" />
                )}
                <span className="text-xs text-zinc-300">{user.email}</span>
              </div>
            )}
            {admin && (
              <Link href="/admin" className="rounded-md border border-purple-500/40 bg-purple-500/10 px-3 py-1 text-xs text-purple-300 hover:border-purple-400">
                Admin
              </Link>
            )}
            {!user ? <GoogleLoginButton /> : <LogoutButton />}
          </div>
        </div>
      </section>

      {profile?.show_personal !== false && (
        <section className="mx-auto w-full max-w-5xl px-6 py-8">
          <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
          <Card>
            <CardHeader>
              <CardTitle>{profile?.full_name || "Your Name"}</CardTitle>
              <CardDescription>{profile?.gamer_title || profile?.gamer_name || "Gamer"}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-zinc-800 bg-black/30 p-4">
                  <div className="text-xs uppercase text-zinc-400 mb-1">Age</div>
                  <div className="text-lg font-medium">{profile?.age ?? "—"}</div>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-black/30 p-4">
                  <div className="text-xs uppercase text-zinc-400 mb-1">Location</div>
                  <div className="text-lg font-medium">{profile?.country || "—"}</div>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-black/30 p-4 sm:col-span-2">
                  <div className="text-xs uppercase text-zinc-400 mb-1">School / Madrasa</div>
                  <div className="text-lg font-medium">
                    {education[0]?.institution_name || "—"}
                    {education[0]?.level ? (
                      <span className="text-zinc-400 text-sm"> • {education[0].level}</span>
                    ) : null}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      <section className="mx-auto w-full max-w-5xl px-6 py-8">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((e) => (
            <MotionDiv key={e.id} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:border-zinc-700 transition" whileHover={{ y: -2 }}>
              {e.dress_image_url && (
                <div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-lg">
                  <SafeImage src={e.dress_image_url} alt={e.institution_name} fill className="object-cover" />
                </div>
              )}
              <div className="space-y-1">
                <div className="text-lg font-medium">{e.institution_name}</div>
                {e.level && <div className="text-sm text-zinc-400">{e.level}</div>}
                {e.description && <p className="text-sm text-zinc-300">{e.description}</p>}
              </div>
            </MotionDiv>
          ))}
          {education.length === 0 && (
            <div className="text-zinc-400">No education records yet.</div>
          )}
        </div>
      </section>

      {profile?.show_games !== false && (
      <section className="mx-auto w-full max-w-5xl px-6 py-8">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="text-2xl font-semibold">Games</h2>
          <span className="text-zinc-400">Total: {totalGames}</span>
        </div>
        <div className="space-y-6">
          {tree.map((section) => (
            <div key={section.id} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
              <h3 className="text-xl font-semibold mb-3">{section.name}</h3>
              {section.games.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
                  {section.games.map((g) => (
                    <MotionDiv key={g.id} className="rounded-lg border border-zinc-800 bg-black/30 p-3 hover:border-purple-500/40 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.6)] transition" whileHover={{ scale: 1.03 }}>
                      {g.icon_url && (
                        <div className="relative mb-2 aspect-square overflow-hidden rounded-md">
                          <Image src={g.icon_url} alt={g.name} fill className="object-cover" />
                        </div>
                      )}
                      <div className="text-sm font-medium">{g.name}</div>
                      {g.admin_username && <div className="text-xs text-zinc-400">{g.admin_username}</div>}
                      {g.level_rank && <div className="text-xs text-zinc-400">{g.level_rank}</div>}
                      {typeof (g as any).level_progress === "number" && (
                        <div className="mt-2">
                          <LevelProgress value={(g as any).level_progress as number} />
                        </div>
                      )}
                      {g.notes && <div className="text-xs text-zinc-500 mt-1">{g.notes}</div>}
                    </MotionDiv>
                  ))}
                </div>
              )}
              {section.children.length > 0 && (
                <div className="space-y-4">
                  {section.children.map((child) => (
                    <div key={child.id} className="rounded-lg border border-zinc-800 bg-black/20 p-3">
                      <div className="font-medium mb-2">{child.name}</div>
                      {child.games.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                          {child.games.map((g) => (
                            <MotionDiv key={g.id} className="rounded-md border border-zinc-800 bg-black/30 p-3 hover:border-purple-500/40 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.6)] transition" whileHover={{ scale: 1.03 }}>
                              {g.icon_url && (
                                <div className="relative mb-2 aspect-square overflow-hidden rounded-md">
                                  <Image src={g.icon_url} alt={g.name} fill className="object-cover" />
                                </div>
                              )}
                              <div className="text-sm font-medium">{g.name}</div>
                              {g.admin_username && <div className="text-xs text-zinc-400">{g.admin_username}</div>}
                              {g.level_rank && <div className="text-xs text-zinc-400">{g.level_rank}</div>}
                              {typeof (g as any).level_progress === "number" && (
                                <div className="mt-2">
                                  <LevelProgress value={(g as any).level_progress as number} />
                                </div>
                              )}
                              {g.notes && <div className="text-xs text-zinc-500 mt-1">{g.notes}</div>}
                            </MotionDiv>
                          ))}
                        </div>
                      ) : (
                        <div className="text-sm text-zinc-500">No games yet.</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          {tree.length === 0 && (
            <div className="text-zinc-400">No games yet.</div>
          )}
        </div>
      </section>
      )}

      {profile?.show_friends !== false && (
      <section className="mx-auto w-full max-w-5xl px-6 py-8">
        <h2 className="text-2xl font-semibold mb-6">Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {friends.map((f) => {
            const fLinks = friendLinks.filter((x) => x.friend_id === f.id);
            return (
              <MotionDiv key={f.id} className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 backdrop-blur supports-[backdrop-filter]:bg-white/5" whileHover={{ y: -3 }}>
                <div className="flex items-center gap-3">
                  <div className="relative h-20 w-20 overflow-hidden rounded-xl ring-2 ring-purple-500/40 shadow-[0_0_25px_-12px_rgba(168,85,247,0.7)]">
                    {f.image_url && f.image_url.trim() !== "" ? (
                      <Image src={f.image_url} alt={f.name} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 bg-zinc-800" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium">{f.name}</div>
                    {f.role && <div className="text-xs text-zinc-400">{f.role}</div>}
                  </div>
                </div>
                {f.description && <p className="mt-3 text-sm text-zinc-300">{f.description}</p>}
                {fLinks.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {fLinks.map((l) => (
                      <a key={l.id} href={l.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-black/20 px-2 py-1 hover:border-zinc-700">
                        <div className="relative h-4 w-4 overflow-hidden rounded">
                          {l.icon_url && l.icon_url.trim() !== "" ? (
                            <Image src={l.icon_url} alt="link" fill className="object-cover" />
                          ) : (
                            <div className="absolute inset-0 bg-zinc-800" />
                          )}
                        </div>
                        <span className="text-xs text-zinc-300">Link</span>
                      </a>
                    ))}
                  </div>
                )}
              </MotionDiv>
            );
          })}
          {friends.length === 0 && <div className="text-zinc-400">No friends yet.</div>}
        </div>
      </section>
      )}

      {profile?.show_messages !== false && (
        <section className="mx-auto w-full max-w-2xl px-6 py-12">
          <h2 className="text-2xl font-semibold mb-6">Message Admin</h2>
          {!user ? (
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 flex items-center justify-between">
              <div className="text-zinc-300">Login to send a message.</div>
              <GoogleLoginButton />
            </div>
          ) : (
            <MessageForm />
          )}
          <div className="mt-8">
            <h3 className="mb-3 text-lg font-semibold">Public Comments</h3>
            <div className="space-y-3">
              {messages.length === 0 ? (
                <div className="text-sm text-zinc-400">No comments yet.</div>
              ) : (
                messages.map((m) => (
                  <div key={m.id} className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        {m.avatar_url ? (
                          <img src={m.avatar_url} alt="avatar" className="h-6 w-6 rounded-full object-cover" />
                        ) : user && m.sender_user_id === user.id && ((user as any)?.user_metadata?.avatar_url || (user as any)?.user_metadata?.picture) ? (
                          <img
                            src={(user as any).user_metadata.avatar_url || (user as any).user_metadata.picture}
                            alt="avatar"
                            className="h-6 w-6 rounded-full object-cover"
                          />
                        ) : (
                          <div className="h-8 w-8 rounded-full bg-zinc-700" />
                        )}
                        <div className="leading-tight">
                          <div className="text-sm font-medium">{m.name || "Anonymous"}</div>
                          {m.email && <div className="text-xs text-zinc-400">{m.email}</div>}
                        </div>
                      </div>
                      <div className="text-xs text-zinc-500">{new Date(m.created_at).toISOString().replace("T", " ").slice(0, 16)} UTC</div>
                    </div>
                    <p className="mt-2 text-sm text-zinc-200 whitespace-pre-wrap">{m.message}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
