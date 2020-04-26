import { Module } from 'vuex';

import { AuthState } from './state'
import Getters from './getters'
import Mutations from './mutations'
import Actions from './actions'

export default class AuthModule implements Module<AuthState, any> {
  namespaced: boolean = true;
  state: AuthState;
  getters = Getters;
  mutations = Mutations;
  actions = Actions

  constructor() {
    this.state = new AuthState();
  }
}
