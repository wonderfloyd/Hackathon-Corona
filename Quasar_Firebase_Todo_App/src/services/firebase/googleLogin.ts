import firebase from 'firebase/app';
import 'firebase/auth';

export default class GoogleLogin {

  provider: firebase.auth.GoogleAuthProvider;

  constructor () {
    this.provider = new firebase.auth.GoogleAuthProvider();
  }

  public loginWithGoogle = async (): Promise<void> => {
    console.log('loginWithGoogle is running');
    try {
      firebase.auth().signInWithRedirect(this.provider);
      return;
    } catch (err) {
      console.log('google login error: ', err);
    }
  }

  public getGoogleLoginResult = async (): Promise<firebase.User | null> => {
    const result = await firebase.auth().getRedirectResult();
    // You can get a Google Access Token with "result.credential.accessToken".
    // and use it to access the Google API.
    return result.user;
  }

  public logoutUser = (): Promise<void> => {
    return firebase.auth().signOut()
  }
}
