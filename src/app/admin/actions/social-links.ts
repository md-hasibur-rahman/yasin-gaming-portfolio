"use server";
import { revalidatePath } from "next/cache";
import { adminDb } from "@/lib/firebase/admin";
import { isAdmin } from "@/lib/auth";

export async function createSocialLinkAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const payload = {
    platform: String(formData.get("platform") || ""),
    icon_url: String(formData.get("icon_url") || ""),
    url: String(formData.get("url") || ""),
    position: Number(formData.get("position") || 0),
    created_at: new Date().toISOString(),
  };

  try {
    await adminDb.collection("social_links").add(payload);
    revalidatePath("/admin/social-links");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}

export async function updateSocialLinkAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const id = String(formData.get("id") || "");
  const updates = {
    platform: String(formData.get("platform") || ""),
    icon_url: String(formData.get("icon_url") || ""),
    url: String(formData.get("url") || ""),
    position: Number(formData.get("position") || 0),
    updated_at: new Date().toISOString(),
  };

  try {
    await adminDb.collection("social_links").doc(id).update(updates);
    revalidatePath("/admin/social-links");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}

export async function deleteSocialLinkAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const id = String(formData.get("id") || "");
  try {
    await adminDb.collection("social_links").doc(id).delete();
    revalidatePath("/admin/social-links");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}
