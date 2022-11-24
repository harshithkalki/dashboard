import { initializeApp } from "firebase/app";
import "firebase/auth";

const app = initializeApp({
  apiKey: process.env.apikey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
});

// export const auth = app.auth();
export default app;
