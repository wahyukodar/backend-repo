import { db } from '../config/firebaseConfig';
import * as admin from 'firebase-admin';

const userCollection = db.collection('USERS');

const createUserAndAuth = async (userData: any) => {
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
    createdAt: new Date()
  });

  return userCollection;
};

const createUser = async (userData: any) => {
  const { uid, email, displayName } = userData;
  const user = await userCollection.doc(uid).set({
    email,
    displayName,
    createdAt: new Date()
  });

  return user;
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