import { MutationTree } from 'vuex';
import { UserState } from './state';
import User from '../../models/User';

export const setCurrentUserData = (state: UserState, data: User | null ) => {
  state.currentUser = data;
}

export default <MutationTree<UserState>> {
  setCurrentUserData
}
