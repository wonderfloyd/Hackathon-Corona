import { ActionTree, ActionContext } from 'vuex';
import { AuthState } from './state';
import { firestoreAction } from 'vuexfire';
import Router from '../../router';

import { userRef, isUserRegistered } from '../../services/firebase/db';
import { loginWithGoogle, getGoogleLoginResult, logoutUser } from '../../services/firebase/googleLogin';

import User from '../../models/User';

const addUserToUsersCollection = async (state: User, userRef: any) => {
  const
    { uid, email, displayName } = state,
    user = new User(uid, email, displayName);
  userRef.set(user);
}

export function routeUserToAuth () {
  Router().push({
    path: '/auth'
  });
}

export const userGoogleLogin = async function({ commit }: ActionContext<AuthState, any>) {

  try {
    const googleAuthRes = await loginWithGoogle();
    return googleAuthRes;
  } catch (err) {
    console.log('problem logging in: ', err);
  }
}

export const registerNewUsers = async function() {
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
}

export const logout = async function ({ commit }: ActionContext<AuthState, any>) {
  await firestoreAction(({ unbindFirestoreRef }) => { unbindFirestoreRef('users') });
  await firestoreAction(({ unbindFirestoreRef }) => { unbindFirestoreRef('tasks') });
  commit('user/setCurrentUserData', null, { root: true });
  commit('tasks/setCurrentUserTasks', [], { root: true });
  logoutUser();
}

export default <ActionTree<AuthState, any>> {
  routeUserToAuth, userGoogleLogin, registerNewUsers, logout
}