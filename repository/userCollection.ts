import { db } from '../config/firebaseConfig';

const usersCollection = db.collection('users');

export const updateUser = async (id: string, data: any) => {
  await usersCollection.doc(id).update(data);
};

export const fetchUser = async (id: string) => {
  const doc = await usersCollection.doc(id).get();
  return doc.exists ? doc.data() : null;
};
