import { GetterTree } from 'vuex';
import { AuthState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<AuthState, RootState> = {
  isAuthenticated: ({ isAuthenticated }: AuthState) => isAuthenticated
};

