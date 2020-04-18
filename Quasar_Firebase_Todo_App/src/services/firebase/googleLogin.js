import firebase from 'firebase/app';
import 'firebase/auth';

const provider = new firebase.auth.GoogleAuthProvider();

/**
 *
 * @return {Promise} UserCredentials
 */
export const loginWithGoogle = () => {
  return firebase.auth().signInWithPopup(provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    return result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log('google login error: ', error);
    // ...
  });
}

/**
 * remove firebase auth token
 */
export const logoutUser = () => {
  return firebase.auth().signOut()
}
