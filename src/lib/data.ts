import { adminDb } from "./firebase/admin";
import type {
  Profile,
  Education,
  SocialLink,
  GameSection,
  Game,
  Friend,
  FriendSocialLink,
  Message,
} from "./types";

export async function fetchProfile(): Promise<Profile | null> {
  const doc = await adminDb.collection("profile").doc("main").get();
  return (doc.data() as Profile) ?? null;
}

export async function fetchEducation(): Promise<Education[]> {
  const snapshot = await adminDb.collection("education").orderBy("created_at").get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Education));
}

export async function fetchSocialLinks(profileId?: string): Promise<SocialLink[]> {
  let query = adminDb.collection("social_links").orderBy("position");
  const snapshot = await query.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as SocialLink));
}

export async function fetchGameSections(): Promise<GameSection[]> {
  const snapshot = await adminDb.collection("game_sections").orderBy("position").get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as GameSection));
}

export async function fetchGames(): Promise<Game[]> {
  const snapshot = await adminDb.collection("games").orderBy("created_at").get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Game));
}

export async function fetchFriends(): Promise<Friend[]> {
  const snapshot = await adminDb.collection("friends").orderBy("created_at", "asc").get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Friend));
}

export async function fetchFriendLinks(friendId: string): Promise<FriendSocialLink[]> {
  const snapshot = await adminDb.collection("friend_social_links")
    .where("friend_id", "==", friendId)
    .orderBy("position")
    .get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FriendSocialLink));
}

export async function fetchAllFriendLinks(): Promise<FriendSocialLink[]> {
  const snapshot = await adminDb.collection("friend_social_links").orderBy("position").get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as FriendSocialLink));
}

export async function fetchMessages(): Promise<Message[]> {
  const snapshot = await adminDb.collection("messages").orderBy("created_at", "desc").get();
  return snapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      ...data,
      created_at: data.created_at?.toDate?.()?.toISOString() || data.created_at
    } as Message;
  });
}
