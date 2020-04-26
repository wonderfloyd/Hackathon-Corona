import { ActionTree } from 'vuex';
import { firestoreAction } from 'vuexfire';

import { UserState } from './state';
import { userRef } from '../../services/firebase/db.js';

/** Get current user from the firestore collection user's
 * via firebase uid
 *
 * @param  {Ojbect} payload.id - Firebase currentUser id
 */
export const getCurrentUser = firestoreAction(({ bindFirestoreRef }, id) => {
  return bindFirestoreRef('currentUser', userRef(id));
})

export default <ActionTree<UserState, any>> {
  getCurrentUser
}

