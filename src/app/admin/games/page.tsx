import { fetchGameSections, fetchGames } from "@/lib/data";
import { SectionCreateForm } from "@/components/admin/section-create-form";
import { SectionItemForm } from "@/components/admin/section-item-form";
import { GameCreateForm } from "@/components/admin/game-create-form";
import { GameItemForm } from "@/components/admin/game-item-form";

export default async function AdminGamesPage() {
  const [sections, games] = await Promise.all([fetchGameSections(), fetchGames()]);
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Games & Categories</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="mb-3 font-medium">Sections / Categories</h2>
          <SectionCreateForm sections={sections} />
          <div className="mt-4 grid gap-3">
            {sections.map((s) => (
              <SectionItemForm key={s.id} item={s} sections={sections} />
            ))}
            {sections.length === 0 && <div className="text-zinc-500">No sections yet.</div>}
          </div>
        </div>
        <div>
          <h2 className="mb-3 font-medium">Games</h2>
          <GameCreateForm sections={sections} />
          <div className="mt-4 grid gap-3">
            {games.map((g) => (
              <GameItemForm key={g.id} item={g} sections={sections} />
            ))}
            {games.length === 0 && <div className="text-zinc-500">No games yet.</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
