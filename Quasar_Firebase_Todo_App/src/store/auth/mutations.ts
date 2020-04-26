import { MutationTree } from 'vuex';
import { AuthState } from './state';

export function setAuthState (state: AuthState, data: AuthState) {
  state.isAuthenticated = data.isAuthenticated
  state.isReady = data.isReady
}

export default <MutationTree<AuthState>> {
  setAuthState
} 
