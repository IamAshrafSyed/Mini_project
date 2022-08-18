import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
// };
const firebaseConfig = {
	apiKey: "AIzaSyCC8pMWNy1IP6SckDMN9ZYwNsk09Q_6Zvk",
	authDomain: "mini-project-df418.firebaseapp.com",
	projectId: "mini-project-df418",
	storageBucket: "mini-project-df418.appspot.com",
	messagingSenderId: "399898084846",
	appId: "1:399898084846:web:44978e475a1cc0d72fbaff",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
