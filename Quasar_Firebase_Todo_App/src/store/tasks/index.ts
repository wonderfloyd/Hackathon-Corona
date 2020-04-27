import { Module } from 'vuex';
import { TasksState } from './types';
import { RootState } from '../types';
import { state } from './state';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

const namespaced: boolean = true;

export const taskModule: Module<TasksState, RootState> = {
  namespaced,
  state,
  getters,
  mutations,
  actions
}

