import * as admin from "firebase-admin";

function parseServiceAccountFromEnv() {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  if (!raw) return null;

  const trimmed = raw.trim();
  const unwrapped =
    (trimmed.startsWith("'" ) && trimmed.endsWith("'")) ||
    (trimmed.startsWith('"') && trimmed.endsWith('"'))
      ? trimmed.slice(1, -1)
      : trimmed;

  const parsed = JSON.parse(unwrapped) as any;
  if (typeof parsed?.private_key === "string") {
    parsed.private_key = parsed.private_key.replace(/\\n/g, "\n");
  }
  return parsed;
}

const serviceAccount = parseServiceAccountFromEnv();

if (!admin.apps.length) {
  if (serviceAccount) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
  } else {
    // Fallback for development if service account is not provided yet
    // This will only work if running in an environment with default credentials
    admin.initializeApp({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
  }
}

const adminAuth = admin.auth();
const adminDb = admin.firestore();

export { adminAuth, adminDb };
