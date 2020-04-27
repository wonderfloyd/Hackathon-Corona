import { ActionTree, ActionContext } from 'vuex';
import { firestoreAction } from 'vuexfire';
import router from '../../router';

import { AuthState } from './types';
import { RootState } from '../types';

import { userRef, isUserRegistered } from '../../services/firebase/db';
import { loginWithGoogle, getGoogleLoginResult, logoutUser } from '../../services/firebase/googleLogin';

import User from '../../models/User';



const addUserToUsersCollection = async (state: User, userRef: any) => {
  const
    { uid, email, displayName } = state,
    user = new User(uid, email, displayName);
  userRef.set(user);
}

export const actions: ActionTree<AuthState, RootState> = {
  routeUserToAuth: async function () {
    router.push({
      path: '/auth'
    });
  },
  userGoogleLogin: async () => {
    try {
      const googleAuthRes = await loginWithGoogle();
      return googleAuthRes;
    } catch (err) {
      console.log('problem logging in: ', err);
    }
  },
  registerNewUsers: async () => {
    const res = await getGoogleLoginResult();

    // Check if redirecting from google login 
    if (res) {
      const { uid, email, displayName } = res;
      const userExists = await isUserRegistered(uid);
      
      // Check if user is alread registered
      if (!userExists) {
        console.log('registering user: ', displayName);
        const user = userRef(uid);
        return addUserToUsersCollection({ uid, email, displayName }, user);
      }

      console.log('user exists: ', displayName);
      return;
    }
    
    return res;
  },
  logout: async ({ commit }: ActionContext<AuthState, RootState>) => {
    await firestoreAction(({ unbindFirestoreRef }) => { unbindFirestoreRef('users') });
    await firestoreAction(({ unbindFirestoreRef }) => { unbindFirestoreRef('tasks') });
    commit('user/setCurrentUserData', null, { root: true });
    commit('tasks/setCurrentUserTasks', [], { root: true });
    logoutUser();
  }
}
