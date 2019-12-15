const firebase = require('firebase');
// Required for side-effects
require('firebase/firestore');

const pollutants = require('./pollutants');

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyDZttoXkrMDwC8orUZ95nYQYonTF-RDKvk',
  authDomain: 'polluntants-web-browser.firebaseapp.com',
  projectId: 'polluntants-web-browser'
});

const db = firebase.firestore();

pollutants.forEach((obj) => {
  db.collection('pollutants').add({
    id: obj.id,
    nameEs: obj.nameEs,
    casNumber: obj.casNumber,
    proteccion: obj.proteccion
  }).then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
  })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
});
