import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile} from "firebase/auth";
import { auth } from "../firebase/firebase.ts";

export const signup = async(username:string ,email:string, password:string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
  
    await updateProfile(user, {
      displayName: username
    });

    return userCredential; 

  } catch (error: any) {
    if (error.code === "auth/email-already-in-use") {
      throw new Error("Email already in use. Try Logging in!");
    } else {
      throw error;
    }
  }
};

export const signin = async(email:string, password:string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};
