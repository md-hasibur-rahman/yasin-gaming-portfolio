"use server";
import { revalidatePath } from "next/cache";
import { adminDb } from "@/lib/firebase/admin";
import { isAdmin } from "@/lib/auth";

export async function createEducationAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const payload = {
    institution_name: String(formData.get("institution_name") || ""),
    level: String(formData.get("level") || ""),
    description: String(formData.get("description") || ""),
    dress_image_url: String(formData.get("dress_image_url") || ""),
    created_at: new Date().toISOString(),
  };

  try {
    await adminDb.collection("education").add(payload);
    revalidatePath("/admin/education");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}

export async function updateEducationAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const id = String(formData.get("id") || "");
  const updates = {
    institution_name: String(formData.get("institution_name") || ""),
    level: String(formData.get("level") || ""),
    description: String(formData.get("description") || ""),
    dress_image_url: String(formData.get("dress_image_url") || ""),
    updated_at: new Date().toISOString(),
  };

  try {
    await adminDb.collection("education").doc(id).update(updates);
    revalidatePath("/admin/education");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}

export async function deleteEducationAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const id = String(formData.get("id") || "");
  try {
    await adminDb.collection("education").doc(id).delete();
    revalidatePath("/admin/education");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}
