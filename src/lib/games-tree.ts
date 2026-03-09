import { Game, GameSection, TreeSection } from "./types";

export function buildGameTree(sections: GameSection[], games: Game[]): TreeSection[] {
  const byParent = new Map<string | null, GameSection[]>();
  for (const s of sections) {
    const arr = byParent.get(s.parent_id ?? null) ?? [];
    arr.push(s);
    byParent.set(s.parent_id ?? null, arr);
  }
  const gamesBySection = new Map<string | null, Game[]>();
  for (const g of games) {
    const arr = gamesBySection.get(g.section_id ?? null) ?? [];
    arr.push(g);
    gamesBySection.set(g.section_id ?? null, arr);
  }
  function build(node: GameSection): TreeSection {
    const children = (byParent.get(node.id) || []).sort((a, b) => a.position - b.position).map(build);
    const gms = (gamesBySection.get(node.id) || []).slice();
    return { ...node, children, games: gms };
  }
  const roots = (byParent.get(null) || []).sort((a, b) => a.position - b.position);
  return roots.map(build);
}
