import firebase from 'firebase/app';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAWCs5t9651WyVepxTmjL9CZ7l3C8y7jxc",
    authDomain: "todoist-tuto.firebaseapp.com",
    databaseURL: "https://todoist-tuto.firebaseio.com",
    projectId: "todoist-tuto",
    storageBucket: "todoist-tuto.appspot.com",
    messagingSenderId: "269128520282",
    appId: "1:269128520282:web:58f4ec85dce7793d"
})

export { firebaseConfig as firebase };