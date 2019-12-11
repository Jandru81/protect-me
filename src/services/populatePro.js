const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const products = require("./products")

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDZttoXkrMDwC8orUZ95nYQYonTF-RDKvk",
    authDomain: "polluntants-web-browser.firebaseapp.com",
    projectId: "polluntants-web-browser"
  });
  
var db = firebase.firestore();

 products.forEach((obj) => {
    db.collection("products").add({
        product: obj.product,
        refNum: obj.refNum,
        proteccion: obj.proteccion,
        picture: obj.picture
    }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
});

