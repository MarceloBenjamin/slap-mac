import type { FirebaseOptions } from "firebase/app";

function read(name: string): string | undefined {
  return process.env[name]?.trim() || undefined;
}

/**
 * Default web app config for Slap Mac (public keys). Used when the static build
 * has no `NEXT_PUBLIC_FIREBASE_*` in the environment (e.g. GitHub Pages CI).
 * Override any field via env for previews or forks.
 */
const FIREBASE_WEB_SHIPPED_DEFAULTS: FirebaseOptions = {
  apiKey: "AIzaSyAIopS-Vc-y-2iW6FjkDHbB3i1KLOmsjHE",
  authDomain: "slap-mac-94172.firebaseapp.com",
  projectId: "slap-mac-94172",
  storageBucket: "slap-mac-94172.firebasestorage.app",
  messagingSenderId: "711716643444",
  appId: "1:711716643444:web:0c7a79111eed3a53faa721",
  measurementId: "G-RSLRRK4EFD",
};

/**
 * Resolves Firebase web config: env overrides, then shipped defaults so
 * `output: "export"` works without CI secrets. `measurementId` stays optional
 * when building only from partial env (Analytics only).
 */
export function getFirebaseConfig(): FirebaseOptions | null {
  const d = FIREBASE_WEB_SHIPPED_DEFAULTS;

  const apiKey = read("NEXT_PUBLIC_FIREBASE_API_KEY") ?? d.apiKey;
  const authDomain = read("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN") ?? d.authDomain;
  const projectId = read("NEXT_PUBLIC_FIREBASE_PROJECT_ID") ?? d.projectId;
  const storageBucket =
    read("NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET") ?? d.storageBucket;
  const messagingSenderId =
    read("NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID") ?? d.messagingSenderId;
  const appId = read("NEXT_PUBLIC_FIREBASE_APP_ID") ?? d.appId;
  const measurementId =
    read("NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID") ?? d.measurementId;

  if (
    !apiKey ||
    !authDomain ||
    !projectId ||
    !storageBucket ||
    !messagingSenderId ||
    !appId
  ) {
    return null;
  }

  const config: FirebaseOptions = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
  };
  if (measurementId) {
    config.measurementId = measurementId;
  }
  return config;
}
