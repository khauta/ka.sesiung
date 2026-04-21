import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, onSnapshot, collection } from "firebase/firestore";

// Using the config provided by the user in the prompt comment
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

export const auth = getAuth(app);
export const db = getFirestore(app);

/**
 * Subscribes to a user's resources collection in Firestore
 * @param phoneNumber The user's phone number as the document ID
 * @param callback The function to call with the mapped resources array whenever data changes
 * @returns A function to unsubscribe from the listener
 */
export function subscribeToUserResources(phoneNumber: string, callback: (data: any[]) => void) {
  const resourcesRef = collection(db, `users/${phoneNumber}/resources`);
  
  return onSnapshot(resourcesRef, (snapshot) => {
    const items = snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data
      };
    });
    callback(items);
  }, (error) => {
    console.error("Error listening to user resources:", error);
  });
}
