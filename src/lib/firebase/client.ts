import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";
import { firebaseConfig } from "./config";

export function getFirebaseApp(): FirebaseApp {
  if (getApps().length > 0) {
    return getApp();
  }
  return initializeApp(firebaseConfig);
}

let analyticsInit: Promise<Analytics | null> | null = null;

/**
 * Initializes Google Analytics for Firebase in the browser only.
 * Safe to call from a client component after mount.
 */
export function initFirebaseAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") {
    return Promise.resolve(null);
  }
  if (!analyticsInit) {
    analyticsInit = (async () => {
      const supported = await isSupported();
      if (!supported) {
        return null;
      }
      return getAnalytics(getFirebaseApp());
    })();
  }
  return analyticsInit;
}
