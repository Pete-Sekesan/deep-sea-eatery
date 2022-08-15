import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD0nI0hIPWXjjfHB3s6HP_gv-T-HDDBHG0',
  authDomain: 'deep-sea-eatery-pete.firebaseapp.com',
  databaseURL: 'https://deep-sea-eatery-pete-default-rtdb.firebaseio.com',
});
const base = Rebase.createClass(firebaseApp.database());
// This is a named export
export { firebaseApp };
// this is a default export
export default base;
