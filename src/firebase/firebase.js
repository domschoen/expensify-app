// takes all named export
//import * as firebase from 'firebase';

// example of such kind of import
// import * as expensesActions from '../actions/expenses';


const firebaseConfig = {
    apiKey: "AIzaSyC3xtsqvh0s7aqs4Dynko6wzvcG3-G1jhE",
    authDomain: "expenses-2a832.firebaseapp.com",
    databaseURL: "https://expenses-2a832.firebaseio.com",
    projectId: "expenses-2a832",
    storageBucket: "expenses-2a832.appspot.com",
    messagingSenderId: "656055645830",
    appId: "1:656055645830:web:0608f095b56f7de0620307"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

db.ref().set({
    name: 'Dominique Schoenenberger',
    age: 26,
    isSingle: false,
    location: {
        city: 'Philadelphia',
        contry: 'United State'
    }
}).then(() => {
    console.log('Data is saved')
}).catch((e) => {
    console.log('This failed.', e);
});

//db.ref('isSingle')
//    .remove()
//    .then(() => {
//       console.log('Data is removed')
//    }).catch((e) => {
//       console.log('This failed.', e);
//    });
//
//db.ref()
//    .remove()
//    .then(() => {
//       console.log('Data is removed')
//    }).catch((e) => {
//       console.log('This failed.', e);
//    });


// Other way but remove is more explicit
//db.ref('isSingle').set(null);

db.ref().update({
    name:'Mike',
    age: 29,
    job: 'Software developer',
    isSingle: null
});