import moment from 'moment';
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

export { firebase, db as default };
//
//// child_removed subscription
//db.ref('expenses').on('child_removed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
//});
//// child_changed subscription
//db.ref('expenses').on('child_changed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
//});
//
//// child_added subscription
//// fired for existing data also
//db.ref('expenses').on('child_added', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
//});
//
//
//// Being notified of any change and display it as array
////db.ref('expenses').on('value', (snapshot) => {
////        const expenses = [];
////        snapshot.forEach((childSnapshot) => {
////            expenses.push({
////                id: childSnapshot.key,
////                ...childSnapshot.val()
////            });
////        });
////        console.log(expenses);
////
////})
////
////
////db.ref('expenses')
////    .once('value')
////    .then((snapshot) => {
////        const expenses = [];
////        snapshot.forEach((childSnapshot) => {
////            expenses.push({
////                id: childSnapshot.key,
////                ...childSnapshot.val()
////            });
////        });
////        console.log(expenses);
////    });
////
//
////db.ref('expenses')
////    .once('value')
////    .then((snapshot) => {
////        console.log(snapshot.val());
////    });
////
//
//
//
//
//
////db.ref('expenses').push({
////            description: 'Course Topic',
////            note: 'Do it nicely',
////            amount: 4423,
////            createdAt: moment().valueOf()
////});
//
//
//
//
////db.ref('notes/-MOC8sWQElPj8oovlQ9o').update({
////    body: 'Buy food'
////})
//
////db.ref('notes/-MOC8sWQElPj8oovlQ9o').remove()
//
////db.ref('notes').push({
////            title: 'Course Topic',
////            body: 'Do it nicely'
////})
//
////const firebaseNotes = {
////    notes: {
////        asdfadsf: {
////            title: 'First note!',
////            body: 'This is my note'
////        },
////        adddasdf : {
////            title: 'Another note!',
////            body: 'This is my note'
////        }
////    }
////}
////
////const notes = [{
////    id: '12',
////    title: 'First note!',
////    body: 'This is my note'
////},
////{
////    id: '123212',
////    title: 'Another note!',
////    body: 'This is my note'
////}
////]
////db.ref('notes').set(notes);
//// does not save as array !