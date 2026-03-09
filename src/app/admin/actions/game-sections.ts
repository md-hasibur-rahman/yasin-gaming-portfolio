"use server";
import { revalidatePath } from "next/cache";
import { adminDb } from "@/lib/firebase/admin";
import { isAdmin } from "@/lib/auth";

export async function createSectionAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const payload = {
    name: String(formData.get("name") || ""),
    parent_id: String(formData.get("parent_id") || "") || null,
    position: Number(formData.get("position") || 0),
    created_at: new Date().toISOString(),
  };

  try {
    await adminDb.collection("game_sections").add(payload);
    revalidatePath("/admin/games");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}

export async function updateSectionAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const id = String(formData.get("id") || "");
  const updates = {
    name: String(formData.get("name") || ""),
    parent_id: String(formData.get("parent_id") || "") || null,
    position: Number(formData.get("position") || 0),
    updated_at: new Date().toISOString(),
  };

  try {
    await adminDb.collection("game_sections").doc(id).update(updates);
    revalidatePath("/admin/games");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}

export async function deleteSectionAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const id = String(formData.get("id") || "");
  try {
    await adminDb.collection("game_sections").doc(id).delete();
    revalidatePath("/admin/games");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}
