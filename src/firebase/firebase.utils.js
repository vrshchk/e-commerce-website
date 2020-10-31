import firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAtxe7Gd4bdOQbs90jNd9JgYhWtqmplqoQ",
    authDomain: "e-commerce-website-db-9a041.firebaseapp.com",
    databaseURL: "https://e-commerce-website-db-9a041.firebaseio.com",
    projectId: "e-commerce-website-db-9a041",
    storageBucket: "e-commerce-website-db-9a041.appspot.com",
    messagingSenderId: "102590513137",
    appId: "1:102590513137:web:bacf28bce3ce404e3a8e50"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating a user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({propt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

