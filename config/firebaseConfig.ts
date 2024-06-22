import * as admin from 'firebase-admin';
import * as serviceAccount from '../serviceAccountKey.json';

const initializeFirebase = (): admin.firestore.Firestore => {
  if (process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'development') {
    admin.initializeApp({
      projectId: 'ebuddy-a58eb',
    });

    const devDb = admin.firestore();
    devDb.settings({
      host: 'localhost:8080',
      ssl: false,
    });

    process.env.FIREBASE_AUTH_EMULATOR_HOST = 'localhost:9099';

    return devDb;
  } else {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
    });

    return admin.firestore();
  }
};

const db = initializeFirebase();

export { db, admin };