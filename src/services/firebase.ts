import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot, collection } from "firebase/firestore";

/**
 * Firebase is used exclusively for Firestore realtime data sync.
 * Authentication is handled by workspace-otp-server (see src/services/auth.ts).
 *
 * NOTE: Firestore security rules for the `users` collection must allow reads
 * from unauthenticated clients OR be updated to validate the workspace JWT via
 * a Cloud Function / backend proxy once a full server-side integration is in place.
 */
const firebaseConfig = {
  apiKey: "AIzaSyCw9bbJGjuL2dgR9qerwnJpE3vJ1lXoqmU",
  authDomain: "superstore-b3500.firebaseapp.com",
  databaseURL: "https://superstore-b3500-default-rtdb.firebaseio.com",
  projectId: "superstore-b3500",
  storageBucket: "superstore-b3500.firebasestorage.app",
  messagingSenderId: "224965135494",
  appId: "1:224965135494:web:be8b1896fdff06c3129507",
  measurementId: "G-GWNZSLE80Z"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

/**
 * Subscribes to a user's resources collection in Firestore.
 * The document tree is keyed by the client's E.164 phone number
 * (e.g. `users/+26651234567/resources`).
 *
 * @param phoneNumber E.164 phone number — must match the key used by Apps Script
 * @param callback    Called with the full resources array on every change
 * @returns           Unsubscribe function — call on component teardown
 */
export function subscribeToUserResources(
  phoneNumber: string,
  callback: (data: Record<string, unknown>[]) => void
) {
  const resourcesRef = collection(db, `users/${phoneNumber}/resources`);

  return onSnapshot(
    resourcesRef,
    (snapshot) => {
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      callback(items);
    },
    (error) => {
      console.error('Firestore subscription error:', error);
    }
  );
}

