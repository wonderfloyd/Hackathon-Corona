import { GetterTree } from 'vuex';
import { AuthState } from './state';

export const isAuthenticated = ({ isAuthenticated }: AuthState) => isAuthenticated;

export default <GetterTree<AuthState, any>> {
  isAuthenticated
}
