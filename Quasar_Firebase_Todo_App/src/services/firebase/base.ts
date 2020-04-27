
import firebase from 'firebase/app';
import 'firebase/auth';
import { Notify } from 'quasar';

import { AppStore } from '../../store';
import { Router } from '../../router';

export default class fbBaseService {

  // constructor(config: Object) {
  //   console.log('init firebase')
  //   firebase.initializeApp(config);
  // }

  public auth = (): any => {
    return firebase.auth();
  }

  fBInit = (config: Object) => {
    return firebase.initializeApp(config);
  }

  private isAuthenticated = (store: AppStore): boolean => {
    return store.state.auth.isAuthenticated;  
  }

  private ensureAuthIsInitialized = async (store: AppStore): Promise<boolean | void> => {
    if (store.state.auth.isReady) return true;
    // Create the observer only once on init
    return new Promise((resolve, reject) => {
      // Use a promise to make sure that the router will eventually show the route after the auth is initialized.
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
        resolve();
        unsubscribe();
      }, () => {
        reject(new Error('Looks like there is a problem with the firebase service. Please try again later'))
      })
    })
  }

  public handleOnAuthStateChanged = async (store: AppStore, currentUser: firebase.User): Promise<void> => {
  
    const initialAuthState = this.isAuthenticated(store);
    // Save to the store
    store.commit('auth/setAuthState', {
      isAuthenticated: currentUser !== null,
      isReady: true,
      uid: (currentUser ? currentUser.uid : '')
    });
  
    // Get & bind the current user and tasks
    if (store.state.auth.isAuthenticated) {
      await store.dispatch('user/getCurrentUser', currentUser.uid);
      await store.dispatch('tasks/getCurrentUserTasks', currentUser.uid);
      console.log('user : ', store.state.user.currentUser);
      console.log('user tasks : ', store.state.tasks.userTasks);
    }
  
    // If the user loses authentication route
    // them to the login page
    if (!currentUser && initialAuthState) {
      store.dispatch('auth/routeUserToAuth');
    }
  }

  public routerBeforeEach = async (router: Router, store: AppStore): Promise<void> => {
    router.beforeEach(async (to, from, next) => {
      try {
        // Force the app to wait until Firebase has
        // finished its initialization, and handle the
        // authentication state of the user properly
        await this.ensureAuthIsInitialized(store)
        if (to.matched.some((record) => record.meta.requiresAuth)) {
          if (this.isAuthenticated(store)) {
            await store.dispatch('auth/registerNewUsers');
            next()
          } else {
            alert('Please Log In.');
            next('/auth')
          }
        } else if (to.path === '/auth' && this.isAuthenticated(store)) {
          next('/')
        } else {
          next()
        }
      } catch (err) {
        Notify.create({
          message: `${err}`,
          color: 'negative'
        })
      }
    })
  }
}
