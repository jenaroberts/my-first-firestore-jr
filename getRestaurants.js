import { restaurantsCol } from "./connect-db.js";

restaurantsCol
  .get() // gets all restaurants
  .then((snapshot) => {
    //loops through all results
    snapshot.docs.forEach((doc) => console.log(doc.data()));
  })
  .catch(console.error);

restaurantsCol
  //   .where("name", "==", "Bolay")
  .where("rating", ">=", 4.75)
  .get()
  .then((snapshot) => {
    //loops through all results
    snapshot.docs.forEach((doc) => console.log(doc.data()));
  })
  .catch(console.error);
