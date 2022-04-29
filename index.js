import { restaurantsCol } from "./connect-db";

// import admin from "firebase-admin"; //this imports the f.b. library of tools

// import serviceAccount from "./credentials.js"; // links your credentials to connect to f.b.

// admin.initializeApp({
//   //this connects to our firebase project
//   credential: admin.credential.cert(serviceAccount), //creating a certificate from our credentials
// });
// //now we are connected to our firebase project and services

// const db = admin.firestore(); //creates a shortcut to access the firestore database

// const restaurantsCol = db.collection("restaurant"); // short cut to creating a collection

const restaurant = {
  // creating an object and object values ot be added to the db
  name: "Mr. 01",
  address: "555 N. Federal Hwy",
  cuisine: "pizza",
  rating: 4.9,
  phoneNumber: "(786)-677-2903",
};

restaurantsCol
  .add(restaurant) // adding the restaurant to the collection
  .then((doc) => console.log("created restaurant", doc.id)) //handle resolve
  .catch((err) => console.log(err)); // handle reject

const restaurant2 = {
  name: "Bolay",
  address: "7050 west palmetto parkway, boca raton",
  cuisine: "American",
  rating: 4.6,
};

async function addRestaurant(data) {
  // creating the async function
  try {
    const doc = await db.collection("restaurants").add(data); // adds the restaurant to the collection
    console.log("created restaurant", doc.id); // handling the resolve
  } catch (err) {
    // handles the reject
    console.log(err);
  }
}
addRestaurant(restaurant2); // calling the function
