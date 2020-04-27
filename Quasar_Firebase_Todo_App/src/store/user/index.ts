import { Module } from 'vuex';
import { UserState } from './types';
import { RootState } from '../types';
import { state } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

const namespaced: boolean = true;

export const userModule: Module<UserState, RootState> = {
  namespaced,
  state,
  mutations,
  getters,
  actions,
}

