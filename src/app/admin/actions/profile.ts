"use server";
import { revalidatePath } from "next/cache";
import { adminDb } from "@/lib/firebase/admin";
import { isAdmin } from "@/lib/auth";

export async function updateProfileAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) return { ok: false, error: "Not authorized" } as const;

  const updates = {
    full_name: String(formData.get("full_name") || ""),
    gamer_name: String(formData.get("gamer_name") || ""),
    gamer_title: String(formData.get("gamer_title") || ""),
    bio: String(formData.get("bio") || ""),
    country: String(formData.get("country") || ""),
    profile_image_url: String(formData.get("profile_image_url") || ""),
    age: formData.get("age") ? Number(formData.get("age")) : null,
    show_personal: String(formData.get("show_personal") || "true") === "true",
    show_games: String(formData.get("show_games") || "true") === "true",
    show_friends: String(formData.get("show_friends") || "true") === "true",
    show_messages: String(formData.get("show_messages") || "true") === "true",
    updated_at: new Date().toISOString(),
  };

  try {
    await adminDb.collection("profile").doc("main").set(updates, { merge: true });
    revalidatePath("/admin");
    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message } as const;
  }
}
