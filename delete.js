// created restaurant
// created restaurant

import admin from "firebase-admin"; //this imports the f.b. library of tools

import serviceAccount from "./credentials.js"; // links your credentials to connect to f.b.

admin.initializeApp({
  //this connects to our firebase project
  credential: admin.credential.cert(serviceAccount), //creating a certificate from our credentials
});
//now we are connected to our firebase project and services

const db = admin.firestore(); //creates a shortcut to access the firestore database

const restaurantsCol = db.collection("restaurant"); // short cut to creating a collection

//delete

restaurantsCol
  .doc("7FJ4KeHbOiFhmpNKzpiZ")
  .delete()
  .then((res) => console.log("success"))
  .catch((err) => console.error("error deleting 7FJ4KeHbOiFhmpNKzpiZ", err));

restaurantsCol
  .doc("M77ChYkyFBD1k7qUsWny")
  .delete()
  .then((res) => console.log("success"))
  .catch((err) => console.error("error deleting M77ChYkyFBD1k7qUsWny", err));
