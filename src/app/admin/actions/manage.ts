"use server";
import { revalidatePath } from "next/cache";
import { adminDb } from "@/lib/firebase/admin";
import { isAdmin, getCurrentUser } from "@/lib/auth";

export async function addAdminAction(formData: FormData) {
  const isAuthorized = await isAdmin();
  if (!isAuthorized) throw new Error("Not authorized");

  const email = String(formData.get("email") || "").toLowerCase().trim();
  if (!email) throw new Error("Email is required");

  try {
    // We use the email as the document ID for easy lookup
    await adminDb.collection("admins").doc(email).set({
      email,
      added_at: new Date().toISOString(),
      added_by: (await getCurrentUser())?.email || "system",
    });
    revalidatePath("/admin/manage");
    return;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to add admin");
  }
}

export async function removeAdminAction(formData: FormData) {
  const isAuthorized = await isAdmin();
  if (!isAuthorized) throw new Error("Not authorized");

  const email = String(formData.get("email") || "").toLowerCase().trim();
  const MAIN_ADMIN = "animeandmanga1810@gmail.com";

  if (email === MAIN_ADMIN) {
    throw new Error("Cannot remove the main admin");
  }

  try {
    await adminDb.collection("admins").doc(email).delete();
    revalidatePath("/admin/manage");
    return;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to remove admin");
  }
}
