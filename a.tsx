import { auth, db } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { loadUserData } from "../../lib/sync";
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      // Charge les anciennes sessions du Cloud
      const data = await loadUserData(user.uid);
      if (data && data.chatSessions) {
        setSessions(data.chatSessions);
      }
    }
  });
  return () => unsubscribe();
}, []);
const saveSessionToCloud = async (updatedMessages: Message[]) => {
  const uid = auth.currentUser?.uid;
  if (!uid) return;
  
  // Met à jour ou crée le document utilisateur dans Firestore
  const userDocRef = doc(db, "users", uid);
  await setDoc(userDocRef, {
    chatSessions: updatedSessions
  }, { merge: true });
};
