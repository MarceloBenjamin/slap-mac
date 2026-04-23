import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";
import { getStorage, type FirebaseStorage } from "firebase/storage";
import { getFirebaseConfig } from "./config";

export function getFirebaseApp(): FirebaseApp | null {
  const config = getFirebaseConfig();
  if (!config) {
    return null;
  }
  if (getApps().length > 0) {
    return getApp();
  }
  return initializeApp(config);
}

export function getFirebaseStorage(app: FirebaseApp): FirebaseStorage {
  return getStorage(app);
}

let analyticsInit: Promise<Analytics | null> | null = null;

/**
 * Initializes Google Analytics for Firebase in the browser only.
 * No-ops when env is incomplete or analytics is unsupported.
 */
export function initFirebaseAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") {
    return Promise.resolve(null);
  }
  if (!analyticsInit) {
    analyticsInit = (async () => {
      const app = getFirebaseApp();
      if (!app) {
        return null;
      }
      const supported = await isSupported();
      if (!supported) {
        return null;
      }
      return getAnalytics(app);
    })();
  }
  return analyticsInit;
}
