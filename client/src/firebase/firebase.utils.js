import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyBLqpPBuQLbJm1AkP5z0RQKJvwBipmVry8',
    authDomain: 'crwn-db-7ce4b.firebaseapp.com',
    projectId: 'crwn-db-7ce4b',
    storageBucket: 'crwn-db-7ce4b.appspot.com',
    messagingSenderId: '760476181099',
    appId: '1:760476181099:web:448bc1671a0468352f472e',
    measurementId: 'G-49QSVXF418'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});


export const addCollectionAndDocuments = async (collectionName, documents = []) => {
    const collectionRef = firestore.collection(collectionName);

    const batch = firestore.batch();

    documents.forEach(doc => {
        batch.set(collectionRef.doc(), doc);
    });

    return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();
        return {
            id: doc.id,
            title,
            items,
            routeName: encodeURI(title.toLowerCase())
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});

};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore
        .collection('users')
        .doc(userAuth.uid);
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
            });
        } catch (error) {
            console.log('Error creating user', error);
        }
    }

    return userRef;
};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            unsubscribe();
            resolve(userAuth);
        }, reject);
    });
};


export default firebase;