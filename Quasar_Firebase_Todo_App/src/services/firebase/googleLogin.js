import firebase from 'firebase/app';
import 'firebase/auth';

const provider = new firebase.auth.GoogleAuthProvider();

/**
 *
 * @return {Promise} UserCredentials
 */
export const loginWithGoogle = async () => {
  console.log('loginWithGoogle is running');
  try {
    firebase.auth().signInWithRedirect(provider);
    const result = await firebase.auth().getRedirectResult();
    // You can get a Google Access Token with "result.credential.accessToken".
    // and use it to access the Google API.
    return result.user
  } catch (err) {
    console.log('google login error: ', err);
  }
}

/**
 * remove firebase auth token
 */
export const logoutUser = () => {
  return firebase.auth().signOut()
}
