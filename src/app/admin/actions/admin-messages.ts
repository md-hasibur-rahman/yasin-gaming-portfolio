"use server";
import { revalidatePath } from "next/cache";
import { adminDb } from "@/lib/firebase/admin";
import { isAdmin } from "@/lib/auth";

export async function markMessageReadAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) throw new Error("Not authorized");

  const id = String(formData.get("id") || "");
  const is_read = String(formData.get("is_read") || "false") === "true";

  try {
    await adminDb.collection("messages").doc(id).update({ is_read });
    revalidatePath("/admin/messages");
    return;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to update message");
  }
}

export async function deleteMessageAction(formData: FormData) {
  const admin = await isAdmin();
  if (!admin) throw new Error("Not authorized");

  const id = String(formData.get("id") || "");
  try {
    await adminDb.collection("messages").doc(id).delete();
    revalidatePath("/admin/messages");
    return;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to delete message");
  }
}
