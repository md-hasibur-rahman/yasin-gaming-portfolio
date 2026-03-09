"use server";
import { revalidatePath } from "next/cache";
import { adminDb } from "@/lib/firebase/admin";
import { isAdmin } from "@/lib/auth";

export async function createGameAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const payload = {
    section_id: String(formData.get("section_id") || "") || null,
    name: String(formData.get("name") || ""),
    icon_url: String(formData.get("icon_url") || ""),
    admin_username: String(formData.get("admin_username") || ""),
    level_rank: String(formData.get("level_rank") || ""),
    level_progress: formData.get("level_progress") ? Number(formData.get("level_progress")) : 0,
    notes: String(formData.get("notes") || ""),
    created_at: new Date().toISOString(),
  };

  try {
    await adminDb.collection("games").add(payload);
    revalidatePath("/admin/games");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}

export async function updateGameAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const id = String(formData.get("id") || "");
  const updates = {
    section_id: String(formData.get("section_id") || "") || null,
    name: String(formData.get("name") || ""),
    icon_url: String(formData.get("icon_url") || ""),
    admin_username: String(formData.get("admin_username") || ""),
    level_rank: String(formData.get("level_rank") || ""),
    level_progress: formData.get("level_progress") ? Number(formData.get("level_progress")) : 0,
    notes: String(formData.get("notes") || ""),
    updated_at: new Date().toISOString(),
  };

  try {
    await adminDb.collection("games").doc(id).update(updates);
    revalidatePath("/admin/games");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}

export async function deleteGameAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const id = String(formData.get("id") || "");
  try {
    await adminDb.collection("games").doc(id).delete();
    revalidatePath("/admin/games");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}
