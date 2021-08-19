// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
  var firebaseConfig = {
    apiKey: "AIzaSyC0GgM-HUOeE1riBjkVdIl-0pgDL_daLVQ",
    authDomain: "web-app-43811.firebaseapp.com",
    databaseURL: "https://web-app-43811.firebaseio.com",
    projectId: "web-app-43811",
    storageBucket: "web-app-43811.appspot.com",
    messagingSenderId: "269912740152",
  }


    firebase.initializeApp(firebaseConfig)
    // firebase.firestore().settings({timestampsInSnapshots: true})
}
const db = firebase.firestore()
// const fireDb = firebase.firestore()
export {db}

