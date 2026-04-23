"use client";

import { useEffect } from "react";
import { initFirebaseAnalytics } from "@/lib/firebase/client";

/**
 * Mounts Firebase Analytics once on the client. Renders nothing.
 */
export function FirebaseAnalytics() {
  useEffect(() => {
    void initFirebaseAnalytics();
  }, []);

  return null;
}
