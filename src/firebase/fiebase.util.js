import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAJA8SsTmg_NLjlwMk5mzsxbOgYIB-yn6A",
    authDomain: "greenmall-4c7bc.firebaseapp.com",
    projectId: "greenmall-4c7bc",
    storageBucket: "greenmall-4c7bc.appspot.com",
    messagingSenderId: "189335993894",
    appId: "1:189335993894:web:6c87c9086360b6b54ff0e7",
    measurementId: "G-T9J5M16MMN"
  };

  firebase.initializeApp(config);
  export const createUserProfileDocument = async (userAuth, additionalData) =>{
      if (!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists){
          const { displayName, email} = userAuth;
          const createdAt = new Date();
          try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
          }catch(error){
            console.log('error creating user', error.message);
          }
      }
      return userRef;
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  const provider = new firebase.auth.GoogleAuthProvider(); 
  provider.setCustomParameters({ prompt:'select_account' });
  export const signInWithGoogle =()=> auth.signInWithPopup(provider);
  export default firebase;