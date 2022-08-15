import { Rebase } from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDm8pCKUNHORKGIRFcI7b0YVaQ1L7_vpPg',
  authDomain: 'deep-sea-eatery.firebaseapp.com',
  databaseURL: 'https://deep-sea-eatery-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());
//this is a named export
export { firebaseApp };

//this is a default export
export default base;
