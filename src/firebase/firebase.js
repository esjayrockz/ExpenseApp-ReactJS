import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBNWInsEY92LKMk4tqZ1zJbLI1wj45qfNE",
  authDomain: "yourexpenses-38a73.firebaseapp.com",
  databaseURL: "https://yourexpenses-38a73.firebaseio.com",
  projectId: "yourexpenses-38a73",
  storageBucket: "yourexpenses-38a73.appspot.com",
  messagingSenderId: "420347492640"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').
//   on('child_removed', (snapshot) => {
//     console.log(snapshot.key, 'description: ', snapshot.val().description)
//   });
//
// database.ref('expenses').
//   on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
//   });
//
// database.ref('expenses').
//   on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
//   });


// const expenses = [];
//
// database.ref('expenses')
//   .on('value',(snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });






//
// database.ref('expenses').push({
//   description: 'table',
//   amount: 2000,
//   note: '',
//   createdAt: 43212431234
// });
//
// database.ref('expenses').push({
//   description: 'chair',
//   amount: 1000,
//   note: '',
//   createdAt: 45634536654
// });
//
// database.ref('expenses').push({
//   description: 'white table',
//   amount: 6000,
//   note: '',
//   createdAt: 9808908980
// });
//

// database.ref('expenses/-LF2060EPPAZpJw0GKoO').update({
//   expense: 'white table'
// });
//
// database.ref('notes').push({
//   title: 'Playstation game 1',
//   body: 'The last of us2'
// });


// database.ref()
//   .on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });
//
// setTimeout(() => {
//   database.ref('name').set('Andrew');
// }, 3000);


// const onValueChange = firebase.database()
//   .ref()
//   .on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }); // This returns the function passed as the 2nd parameter
//
//   setTimeout(() => {
//     firebase.database().ref('age').set(29);
//   }, 3500);
//
//   setTimeout(() => {
//     firebase.database().ref().off('value', onValueChange); // We can pass the function which was returned earlier to turn off subscription
//   }, 7000);
//
//   setTimeout(() => {
//     firebase.database().ref('age').set(30);
//   }, 9000);
// firebase.database()
//   .ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('error fetching data', e);
//   })

// firebase.database().ref().set({
//   name:'Suvajit Chakrabarty',
//   age: 27,
//   stressLevel: 6,
//   job:{
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Charlotte',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('Something went wrong', e);
// });
// firebase.database().ref('name').set('SuvajitChakrabarty');
// firebase.database().ref().set('SuvajitChakrabarty');
//
// firebase.database().ref().update({name:'Suvajit', age:27, isSingle: null, job:'Software Developer'});
//
// firebase.database().ref().update({name: 'Suvajit Chakrabarty', 'location/city': 'NYC'});

//
// firebase.database().ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });
