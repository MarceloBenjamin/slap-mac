import type { FirebaseOptions } from "firebase/app";

function read(name: string): string | undefined {
  return process.env[name]?.trim() || undefined;
}

/** Resolves Firebase web config from env. Returns null if any value is missing (dev without .env.local). */
export function getFirebaseConfig(): FirebaseOptions | null {
  const apiKey = read("NEXT_PUBLIC_FIREBASE_API_KEY");
  const authDomain = read("NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN");
  const projectId = read("NEXT_PUBLIC_FIREBASE_PROJECT_ID");
  const storageBucket = read("NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET");
  const messagingSenderId = read("NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID");
  const appId = read("NEXT_PUBLIC_FIREBASE_APP_ID");
  const measurementId = read("NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID");

  if (
    !apiKey ||
    !authDomain ||
    !projectId ||
    !storageBucket ||
    !messagingSenderId ||
    !appId ||
    !measurementId
  ) {
    return null;
  }

  return {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId,
  };
}
