"use server";
import { z } from "zod";
import { adminAuth, adminDb } from "@/lib/firebase/admin";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { FieldValue } from "firebase-admin/firestore";

const MessageSchema = z.object({
  message: z.string().min(1).max(2000),
});

export async function sendMessageAction(formData: FormData) {
  const raw = {
    message: String(formData.get("message") || ""),
  };
  const parsed = MessageSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, error: "Invalid input" } as const;
  }

  const cookieStore = await cookies();
  const session = cookieStore.get("__session")?.value;
  if (!session) {
    return { ok: false, error: "Not authenticated" } as const;
  }

  try {
    const decodedToken = await adminAuth.verifySessionCookie(session, true);
    const displayName = (decodedToken.name || (decodedToken.email ? decodedToken.email.split("@")[0] : "User")).toString();
    const email = decodedToken.email || null;
    const avatarUrl = (decodedToken.picture || null) as string | null;

    await adminDb.collection("messages").add({
      sender_user_id: decodedToken.uid,
      name: displayName,
      email,
      avatar_url: avatarUrl,
      message: parsed.data.message,
      created_at: FieldValue.serverTimestamp(),
      is_read: false,
    });

    revalidatePath("/");
    return { ok: true } as const;
  } catch (error: any) {
    return { ok: false, error: error.message || "Failed to send message" } as const;
  }
}
