"use client";

import React, { useState, useEffect } from "react";
import { auth, db } from "../lib/firebase";
import {
  signInAnonymously,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import {
  Cloud,
  CloudOff,
  User as UserIcon,
  LogOut,
  Mail,
  Lock,
  Key,
  ShieldCheck,
  Chrome,
  Loader2,
  X,
  Sparkles,
  AlertCircle
} from "lucide-react";
import { saveUserData, loadUserData } from "../lib/sync";

interface AuthWidgetProps {
  onSyncComplete?: (profile: any, savedLessons: any[]) => void;
  currentProfile: any;
  currentLessons: any[];
}

export default function AuthWidget({ onSyncComplete, currentProfile, currentLessons }: AuthWidgetProps) {
  const [user, setUser] = useState<User | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authTab, setAuthTab] = useState<"login" | "register" | "anonymous">("login");
  
  // Form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // Track Firebase auth status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setLoading(true);
        // Load data from cloud, merge, and trigger callback
        const cloudData = await loadUserData(currentUser.uid);
        if (cloudData) {
          if (onSyncComplete) {
            onSyncComplete(cloudData.profile || currentProfile, cloudData.savedLessons || currentLessons);
          }
        } else {
          // No cloud data yet, back up local storage state to Firestore
          await saveUserData(currentUser.uid, currentProfile, currentLessons);
        }
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [currentProfile, currentLessons]);

  // Handle Cloud Save triggered when local state updates
  useEffect(() => {
    if (user && !loading) {
      saveUserData(user.uid, currentProfile, currentLessons);
    }
  }, [currentProfile, currentLessons, user]);

  const handleAnonymousSignIn = async () => {
    setLoading(true);
    setError("");
    try {
      await signInAnonymously(auth);
      setSuccessMsg("Success! Connected anonymously to Firestore database.");
      setTimeout(() => {
        setModalOpen(false);
        setSuccessMsg("");
      }, 1500);
    } catch (err: any) {
      setError(err.message || "Failed to sign in anonymously.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setSuccessMsg("Success! Logged in with Google.");
      setTimeout(() => {
        setModalOpen(false);
        setSuccessMsg("");
      }, 1500);
    } catch (err: any) {
      setError(
        "Google Popup Blocked. Note: Inside iframe previews, third-party popups can be restricted. Please use Email Sign In or Quick Anonymous Sync for direct firestore operations!"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      if (authTab === "login") {
        await signInWithEmailAndPassword(auth, email, password);
        setSuccessMsg("Success! Logged in securely.");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccessMsg("Account created! Welcome to Mentora AI.");
      }
      setTimeout(() => {
        setModalOpen(false);
        setSuccessMsg("");
        setEmail("");
        setPassword("");
      }, 1500);
    } catch (err: any) {
      setError(err.message || "Authentication failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    if (confirm("Are you sure you want to sign out?")) {
      await signOut(auth);
    }
  };

  return (
    <div id="firebase-auth-widget" className="relative z-50">
      {/* Sync Status Button */}
      {user ? (
        <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1.5 shadow-lg shadow-emerald-500/5 hover:bg-emerald-500/20 transition cursor-pointer" onClick={() => setModalOpen(true)}>
          <Cloud className="w-4 h-4 text-emerald-400 animate-pulse" />
          <div className="text-left">
            <p className="text-[10px] font-mono font-bold text-emerald-300">Firebase Synced</p>
            <p className="text-[9px] text-gray-400 font-medium truncate max-w-[120px]">
              {user.isAnonymous ? "Guest Session" : user.email}
            </p>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-2 bg-violet-600/10 border border-violet-500/20 rounded-full px-3.5 py-1.5 shadow-lg shadow-violet-500/5 hover:bg-violet-600 hover:text-white transition group"
        >
          <CloudOff className="w-4 h-4 text-violet-400 group-hover:text-white" />
          <span className="text-[11px] font-mono font-bold text-violet-300 group-hover:text-white">Sync Firebase Database</span>
        </button>
      )}

      {/* Auth Modal Overlay */}
      {modalOpen && (
        <div className="fixed inset-0 bg-[#000]/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-[#0e0e15] border border-white/10 rounded-2xl w-full max-w-md p-6 relative overflow-hidden shadow-2xl">
            {/* Ambient visual light blur */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Cloud className="w-5 h-5 text-violet-400" />
                <h3 className="font-extrabold text-white text-base">Mentora AI Cloud Synchronization</h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-400 hover:text-white transition p-1 rounded-lg"
              >
                <X size={18} />
              </button>
            </div>

            {/* If Logged In: Show Account Details */}
            {user ? (
              <div className="space-y-4 text-center">
                <div className="w-16 h-16 bg-violet-600/10 border border-violet-500/20 rounded-full flex items-center justify-center mx-auto text-violet-400">
                  <UserIcon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Signed In Successfully</h4>
                  <p className="text-xs text-gray-400 mt-1">
                    {user.isAnonymous
                      ? "Anonymous Sandbox Session ID: " + user.uid.slice(0, 10) + "..."
                      : "User: " + user.email}
                  </p>
                  <p className="text-[10px] text-emerald-400 mt-2 font-mono flex items-center justify-center gap-1">
                    <ShieldCheck size={12} />
                    Live Cloud Sync is Active & Saved to Firestore
                  </p>
                </div>

                <div className="bg-[#12121c] border border-white/5 rounded-xl p-3.5 text-left text-xs text-gray-300 leading-relaxed">
                  <p className="font-semibold text-white mb-1">🔥 Real-time Database Persistence:</p>
                  Every lesson, diagnostic result, and custom curriculum generated will now sync and persist securely in your Cloud Firestore container even if you clear your browser cache.
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-2.5 rounded-xl text-xs transition"
                  >
                    Keep Learning
                  </button>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 font-bold px-4 py-2.5 rounded-xl text-xs transition flex items-center gap-2 justify-center"
                  >
                    <LogOut size={14} />
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              /* If Logged Out: Show Credentials Forms */
              <div className="space-y-4">
                {/* Tabs */}
                <div className="grid grid-cols-3 bg-[#07070b] border border-white/5 rounded-lg p-1">
                  <button
                    onClick={() => { setAuthTab("login"); setError(""); }}
                    className={`py-1.5 rounded-md text-xs font-semibold transition ${
                      authTab === "login" ? "bg-violet-600 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => { setAuthTab("register"); setError(""); }}
                    className={`py-1.5 rounded-md text-xs font-semibold transition ${
                      authTab === "register" ? "bg-violet-600 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={() => { setAuthTab("anonymous"); setError(""); }}
                    className={`py-1.5 rounded-md text-xs font-semibold transition ${
                      authTab === "anonymous" ? "bg-violet-600 text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Quick Guest
                  </button>
                </div>

                {/* Status messages */}
                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-2 text-xs text-red-400">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}
                {successMsg && (
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-start gap-2 text-xs text-emerald-400">
                    <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 animate-bounce" />
                    <span>{successMsg}</span>
                  </div>
                )}

                {authTab === "anonymous" ? (
                  <div className="space-y-4 py-2 text-center">
                    <Sparkles className="w-8 h-8 text-violet-400 mx-auto animate-pulse" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Immediate 1-Click Firestore Sync</h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                        Securely provisions a persistent workspace record in Firebase. No emails or credentials required! Perfect for rapid prototyping in sandbox environments.
                      </p>
                    </div>
                    <button
                      onClick={handleAnonymousSignIn}
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold py-3 rounded-xl text-xs transition shadow-lg shadow-violet-600/20 flex items-center justify-center gap-2"
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Key className="w-4 h-4" />}
                      Initialize Guest Cloud Session
                    </button>
                  </div>
                ) : (
                  /* Login / Register Email Form */
                  <form onSubmit={handleEmailAuth} className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-gray-400 uppercase font-bold">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="learner@mentora.ai"
                          className="w-full bg-[#07070b] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-violet-500 transition"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-gray-400 uppercase font-bold">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          type="password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••••••"
                          className="w-full bg-[#07070b] border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-xs text-white focus:outline-none focus:border-violet-500 transition"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 rounded-xl text-xs transition shadow-lg shadow-violet-600/15 flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : authTab === "login" ? (
                        "Sign In"
                      ) : (
                        "Create Account & Sync"
                      )}
                    </button>

                    {/* Divider */}
                    <div className="flex items-center my-4">
                      <div className="flex-1 h-px bg-white/5" />
                      <span className="px-3 text-[10px] font-mono text-gray-500 uppercase">Or</span>
                      <div className="flex-1 h-px bg-white/5" />
                    </div>

                    {/* Google Alternative */}
                    <button
                      type="button"
                      onClick={handleGoogleSignIn}
                      disabled={loading}
                      className="w-full bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 text-white font-bold py-2.5 rounded-xl text-xs transition flex items-center justify-center gap-2"
                    >
                      <Chrome className="w-4 h-4 text-red-400" />
                      Continue with Google Auth
                    </button>
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
