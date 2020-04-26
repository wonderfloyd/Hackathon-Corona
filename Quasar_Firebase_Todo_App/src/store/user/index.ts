import { Module } from 'vuex';
import { UserState } from './state'
import Getters from './getters'
import Mutations from './mutations'
import Actions from './actions'

export default class UserModule implements Module<UserState, any> {

  namespace: boolean = true;
  state: UserState;
  mutations = Mutations;
  getters = Getters;
  actions = Actions;
  
  constructor() {
    this.state = new UserState()
  }
}

// export default {
//   namespaced: true as true,
//   state,
//   getters,
//   mutations,
//   actions
// }
