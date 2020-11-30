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

const onValueChange = (snapshot) => {
   const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
};
const onError = (e) => {
  console.log('Error while fetching the data.', e);
};

const onValueChange2 = db.ref()
    .on('value', onValueChange, onError);

setTimeout(() => {
    db.ref('job').update({ company: 'EPFL'});
}, 3500);



//db.ref('location/city')
//    .once('value')
//    .then((snapshot) => {
//        const val = snapshot.val();
//        console.log(val);
//    })
//    .catch((e) => {
//         console.log('This failed.', e);
//    })



//db.ref().set({
//    name: 'Dominique Schoenenberger',
//    age: 26,
//    stressLevel: 6,
//    job: {
//        title: 'Software developer',
//        company: 'Google'
//    },
//    location: {
//        city: 'Philadelphia',
//        contry: 'United State'
//    }
//}).then(() => {
//    console.log('Data is saved')
//}).catch((e) => {
//    console.log('This failed.', e);
//});
//
//
//db.ref().update({
//    stressLevel: 9,
//    'job/company': 'Live',
//    'location/city': 'Zurich'
//});