import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBNj76f6uuVcUujfM7rWle4_U1hs3EZS9w",
    authDomain: "trendy-clothing-6a15e.firebaseapp.com",
    projectId: "trendy-clothing-6a15e",
    storageBucket: "trendy-clothing-6a15e.appspot.com",
    messagingSenderId: "478915951761",
    appId: "1:478915951761:web:7529edfd22ed91af1e1330"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })                 
        } catch(error) {
            console.log('error creating user', error.message);            
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;