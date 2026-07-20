import { db } from "./firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export interface UserData {
  level: string;
  streak: number;
  xp: number;
  lessonsCompleted: number;
}

export interface SavedLesson {
  title: string;
  date: string;
  data: any;
}

/**
 * Saves both profile and saved lessons to the user's Firestore document.
 */
export async function saveUserData(
  uid: string,
  profile: UserData,
  savedLessons: SavedLesson[],
  chatHistory?: any[]
) {
  try {
    const userDocRef = doc(db, "users", uid);
    await setDoc(
      userDocRef,
      {
        profile,
        savedLessons,
        chatHistory: chatHistory || [],
        updatedAt: new Date().toISOString(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error("Failed to save user data to Firestore:", error);
  }
}

/**
 * Loads the user's profile and lessons from Firestore.
 */
export async function loadUserData(uid: string) {
  try {
    const userDocRef = doc(db, "users", uid);
    const snap = await getDoc(userDocRef);
    if (snap.exists()) {
      return snap.data();
    }
  } catch (error) {
    console.error("Failed to load user data from Firestore:", error);
  }
  return null;
}
