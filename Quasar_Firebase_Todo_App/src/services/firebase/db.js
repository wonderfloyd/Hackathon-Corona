import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

/**
 * Firestore
 * https: //firebase.google.com/docs/reference/js/firebase.firestore.Firestore.html
 *
 * @return {Interface} returns Firestore
 */
export const firestore = () => {
  return firebase.firestore()
}

/**
 * @param {String} collectionName - Firestore collection name
 * @param {String} id - Uid to assign to a doc in firestore collection
 */
export const userRef = (collectionName, id) => {
  return firestore().collection(collectionName).doc(id)
}

/**
 * @param {String} id - Uid of the user that logging in
 * 
 * @return {Boolean} retutns true if the user is already in firestore
 */
export const isUserRegistered = async (id) => {
  try {
    const data = await userRef('users', id).get();
    const user = data.data();
    return user ? true : false;
  } catch (err) {
    console.log('unable to get user from db: ', err)
  }
}

/**
 * @param  {String} storageLocation - Location on Firebase Storage
 */
export const storageRef = (storageLocation) => {
  return firebase.storage().ref(storageLocation)
}
