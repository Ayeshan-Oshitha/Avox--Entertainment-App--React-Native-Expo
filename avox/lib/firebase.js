import { router } from "expo-router";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { Alert } from "react-native";

const firebaseConfig = {
  apiKey: "AIzaSyBtSxtGCWdp_SWrPOyq65ApcmRxU8Y9UYs",
  authDomain: "avox-entertainment-app.firebaseapp.com",
  projectId: "avox-entertainment-app",
  storageBucket: "avox-entertainment-app.firebasestorage.app",
  messagingSenderId: "817126085035",
  appId: "1:817126085035:web:883ead8aeab3f7ab6342ee",
  measurementId: "G-BELSR2X6YP",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const createAccount = async (username, email, password) => {
  try {
    console.log("Inside firebase function");
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, {
      displayName: username,
    });
    Alert.alert("User created successfully", "You can now sign in");
    console.log("User created successfully", userCredential);
    router.push("/sign-in");
    return userCredential;
  } catch (error) {
    Alert.alert("Error creating user", error.message);
    throw error;
  }
};

export const signIn = async (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      Alert.alert("Logged in successfully", "You have been signed in");
      console.log("User Logged in successfully", user);
      router.push("/home");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert("Error creating user", errorMessage);
      throw error;
    });
};

// const getCurrentUser = () => {
//   const user = auth.currentUser; // This gives the current user if logged in, or null if not logged in
//   if (user) {
//     return user;
//   } else {
//     console.log("No user is signed in.");
//   }
// };

export const logout = async () => {
  console.log("Inside logout function");
  try {
    await signOut(auth);
    Alert.alert("Logged out successfully", "You have been signed out");
    console.log("User signed out successfully");
    router.push("/sign-in");
  } catch (error) {
    console.error("Error signing out: ", error);
    Alert.alert("Error signing out", error.message);
    throw error;
  }
};
