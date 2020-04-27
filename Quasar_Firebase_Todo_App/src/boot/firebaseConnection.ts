// import firebaseService from '../services/firebase';
import fbBaseService from '../services/firebase/base';

import { Router } from '../router';
import { AppStore } from '../store/';

interface BootParams {
  router: Router;
  store: AppStore;
}

export default ({ router, store }: BootParams) => {
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DB_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_ID,
    appId: process.env.FIREBASE_API_ID
  }

  const fb = new fbBaseService();

  fb.fBInit(config)

  // Tell the application what to do when the
  // authentication state has changed
  fb.auth().onAuthStateChanged((user: any) => {
    fb.handleOnAuthStateChanged(store, user);
  }, (error: Error) => {
    console.error(error);
  })

  // Setup the router to be intercepted on each route.
  // This allows the application to halt rendering until
  // Firebase is finished with its initialization process,
  // and handle the user accordingly
  fb.routerBeforeEach(router, store);
  // Vue.prototype.$fb = firebaseService;
  // store.$fb = firebaseService;
}
