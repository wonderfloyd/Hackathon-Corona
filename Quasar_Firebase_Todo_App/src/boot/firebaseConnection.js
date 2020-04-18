import firebaseService from '../services/firebase';

export default ({ router, store, Vue }) => {
  const config = process.env.FIREBASE_CONFIG
  firebaseService.fBInit(config)

  // Tell the application what to do when the
  // authentication state has changed
  firebaseService.auth().onAuthStateChanged((user) => {
    console.log('onAuthStateChanged user: ', user)
    firebaseService.handleOnAuthStateChanged(store, user);
  }, (error) => {
    console.error(error);
  })

  // Setup the router to be intercepted on each route.
  // This allows the application to halt rendering until
  // Firebase is finished with its initialization process,
  // and handle the user accordingly
  firebaseService.routerBeforeEach(router, store);
  Vue.prototype.$fb = firebaseService;
  store.$fb = firebaseService;
}