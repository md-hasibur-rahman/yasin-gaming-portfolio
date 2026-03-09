"use client";
import { auth } from "@/lib/firebase/client";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export function GoogleLoginButton({ className = "" }: { className?: string }) {
  const [loading, setLoading] = useState(false);
  async function handleLogin() {
    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();
      
      // Set session cookie via API route
      const res = await fetch("/api/auth/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });

      if (res.ok) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <button
      onClick={handleLogin}
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 bg-white text-black dark:bg-zinc-800 dark:text-white border border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition ${className}`}
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Logging in...
        </>
      ) : (
        <>Continue with Google</>
      )}
    </button>
  );
}

export function LogoutButton({ className = "" }: { className?: string }) {
  const [loading, setLoading] = useState(false);
  async function handleLogout() {
    try {
      setLoading(true);
      await signOut(auth);
      await fetch("/api/auth/session", { method: "DELETE" });
      window.location.reload();
    } finally {
      setLoading(false);
    }
  }
  return (
    <button
      onClick={handleLogout}
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 bg-transparent text-white border border-zinc-700 hover:bg-zinc-900 transition ${className}`}
      disabled={loading}
    >
      {loading ? "Signing out..." : "Sign out"}
    </button>
  );
}
