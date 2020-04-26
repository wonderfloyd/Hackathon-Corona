import { GetterTree } from 'vuex';
import { UserState } from './state';

export const currentUser = ({ currentUser }: UserState) => currentUser;

export default <GetterTree<UserState, any>> {
  currentUser
}