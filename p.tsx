import { auth } from "../lib/firebase";
import {
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from "firebase/auth";
const [user, setUser] = useState<User | null>(null);
const [authLoading, setAuthLoading] = useState(true);
const [authTab, setAuthTab] = useState<"login" | "register" | "anonymous">("login");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [success, setSuccess] = useState("");
const [actionLoading, setActionLoading] = useState(false);

useEffect(() => {
  // Vérifie si un utilisateur est déjà connecté au chargement de la page
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setAuthLoading(false);
  });
  return () => unsubscribe();
}, []);
