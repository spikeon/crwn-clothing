import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBLqpPBuQLbJm1AkP5z0RQKJvwBipmVry8",
    authDomain: "crwn-db-7ce4b.firebaseapp.com",
    projectId: "crwn-db-7ce4b",
    storageBucket: "crwn-db-7ce4b.appspot.com",
    messagingSenderId: "760476181099",
    appId: "1:760476181099:web:448bc1671a0468352f472e",
    measurementId: "G-49QSVXF418"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore
        .collection(`users`)
        .doc(userAuth.uid);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log("Error creating user", error);
        }
    }

    return userRef;
};


export default firebase;