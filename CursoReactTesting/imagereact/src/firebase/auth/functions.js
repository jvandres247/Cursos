import { auth } from "../firebase.js";

export const signUpFirebase = (email, password)  => {
    return auth.createUserWithEmailAndPassword(email, password);
}

export const logoutfirebase = () => {
    return auth.signOut();
}

export const signInFirebase = (email, password) => {
    return auth.signInWithEmailAndPassword(email,password)
}
