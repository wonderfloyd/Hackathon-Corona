import { MutationTree } from 'vuex';
import { AuthState } from './types';

export const mutations: MutationTree<AuthState> = {
  setAuthState: (state: AuthState, data: AuthState) => {
    state.isAuthenticated = data.isAuthenticated
    state.isReady = data.isReady
  }
};