import { MutationTree } from 'vuex';
import { UserState } from './types';
import User from '../../models/User';

export const mutations: MutationTree<UserState> = {
  setCurrentUserData: (state: UserState, data: User | null ) => {
    state.currentUser = data;
  }
}
