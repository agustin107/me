import { initializeApp, getApps } from "firebase/app";

export const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const createFirebaseApp = () => {
  if (getApps().length <= 0) {
    const app = initializeApp(clientCredentials);

    return app;
  }
};
