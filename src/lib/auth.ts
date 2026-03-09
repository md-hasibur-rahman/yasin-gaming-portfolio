import { adminAuth, adminDb } from "./firebase/admin";
import { cookies } from "next/headers";

export async function getCurrentUser() {
  const cookieStore = await cookies();
  const session = cookieStore.get("__session")?.value;
  if (!session) return null;
  
  try {
    const decodedToken = await adminAuth.verifySessionCookie(session, true);
    return {
      id: decodedToken.uid,
      email: decodedToken.email,
      user_metadata: {
        avatar_url: decodedToken.picture,
        full_name: decodedToken.name,
      }
    };
  } catch (error) {
    return null;
  }
}

export async function isAdmin() {
  const user = await getCurrentUser();
  if (!user) return false;
  
  const MAIN_ADMIN = "animeandmanga1810@gmail.com";
  const userEmail = (user.email || "").toLowerCase();
  
  // Rule 1: Fixed main admin
  if (userEmail === MAIN_ADMIN) return true;
  
  // Rule 2: Extra admins from Firestore
  try {
    const adminDoc = await adminDb.collection("admins").doc(userEmail).get();
    return adminDoc.exists;
  } catch (error) {
    return false;
  }
}
