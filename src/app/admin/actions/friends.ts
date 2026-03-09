"use server";
import { revalidatePath } from "next/cache";
import { adminDb } from "@/lib/firebase/admin";
import { isAdmin } from "@/lib/auth";

export async function createFriendAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const payload = {
    name: String(formData.get("name") || ""),
    image_url: String(formData.get("image_url") || ""),
    role: String(formData.get("role") || ""),
    description: String(formData.get("description") || ""),
    created_at: new Date().toISOString(),
  };

  try {
    await adminDb.collection("friends").add(payload);
    revalidatePath("/admin/friends");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}

export async function updateFriendAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const id = String(formData.get("id") || "");
  const updates = {
    name: String(formData.get("name") || ""),
    image_url: String(formData.get("image_url") || ""),
    role: String(formData.get("role") || ""),
    description: String(formData.get("description") || ""),
    updated_at: new Date().toISOString(),
  };

  try {
    await adminDb.collection("friends").doc(id).update(updates);
    revalidatePath("/admin/friends");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}

export async function deleteFriendAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const id = String(formData.get("id") || "");
  try {
    await adminDb.collection("friends").doc(id).delete();
    revalidatePath("/admin/friends");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}

export async function createFriendLinkAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const payload = {
    friend_id: String(formData.get("friend_id") || ""),
    icon_url: String(formData.get("icon_url") || ""),
    url: String(formData.get("url") || ""),
    position: Number(formData.get("position") || 0),
    created_at: new Date().toISOString(),
  };

  try {
    await adminDb.collection("friend_social_links").add(payload);
    revalidatePath("/admin/friends");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}

export async function updateFriendLinkAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const id = String(formData.get("id") || "");
  const updates = {
    icon_url: String(formData.get("icon_url") || ""),
    url: String(formData.get("url") || ""),
    position: Number(formData.get("position") || 0),
    updated_at: new Date().toISOString(),
  };

  try {
    await adminDb.collection("friend_social_links").doc(id).update(updates);
    revalidatePath("/admin/friends");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}

export async function deleteFriendLinkAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const id = String(formData.get("id") || "");
  try {
    await adminDb.collection("friend_social_links").doc(id).delete();
    revalidatePath("/admin/friends");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}
