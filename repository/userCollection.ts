import { db } from '../config/firebaseConfig';
import * as admin from 'firebase-admin';

const userCollection = db.collection('users');

const createUser = async (userData: any) => {
  const { uid, email, password, displayName } = userData;
  const userRecord = await admin.auth().createUser({
    uid,
    email,
    password,
    displayName
  });

  await userCollection.doc(userRecord.uid).set({
    email,
    displayName,
    createdAt: admin.firestore.FieldValue.serverTimestamp()
  });
};

const updateUser = async (userId: string, userData: any) => {
  const userDoc = await userCollection.doc(userId).update(userData);
  return userDoc;
};

const fetchUser = async (userId: string) => {
  const userDoc = await userCollection.doc(userId).get();
  return userDoc.exists ? userDoc.data() : null;
};

export { createUser, updateUser, fetchUser };