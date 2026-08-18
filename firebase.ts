import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth/web-extension";

const firebaseConfig = {
  // If using .env variables, make sure they start with NEXT_PUBLIC_
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyD3n1MfeyRc--c1Zhr0sukTZeExHQ0IygQ",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "eic-sac.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "eic-sac",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "eic-sac.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "467245598319",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:467245598319:web:6a0fdea82276cbc6f06f9a",
  measurementId: "G-5M2EF14P29"
};

// This specific pattern prevents Next.js SSR crashes
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };