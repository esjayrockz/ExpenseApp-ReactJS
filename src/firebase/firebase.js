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

firebase.database()
  .ref()
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log('error fetching data', e);
  })

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
