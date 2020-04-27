import { ActionTree } from 'vuex';
import { firestoreAction } from 'vuexfire';

import { UserState } from './types';
import { RootState } from '../types';
import { userRef } from '../../services/firebase/db.js';

/** 
 * Get current user from the firestore collection user's,
 * and bind it to local store's user.state.currentUser
*/
export const actions: ActionTree<UserState, RootState> = {
  getCurrentUser: firestoreAction(({ bindFirestoreRef }, id) => {
    return bindFirestoreRef('currentUser', userRef(id));
  })
};

