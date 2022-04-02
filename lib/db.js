import { db } from "../lib/firebase";

export async function createUser(uid, data) {
  const docRef = db.collection("users").doc(uid);

  await docRef.set({ uid, ...data });
  return docRef;
}
