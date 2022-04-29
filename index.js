const admin = require("firebase-admin");

const serviceAccount = require("./credentials.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const restaurant = {
  name: "Mr. 01",
  address: "555 N. Federal Hwy",
  cuisine: "pizza",
  rating: 4.9,
  phoneNumber: "(786)-677-2903",
};

db.collection("restaurants")
  .add(restaurant)
  .then((doc) => console.log("created restaurant", doc.id))
  .catch((err) => console.log(err));
