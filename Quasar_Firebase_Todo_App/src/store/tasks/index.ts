import { Module } from 'vuex';
import { TasksState } from './state';
import Getters from './getters';
import Mutations from './mutations';
import Actions from './actions';

export default class TaskModule implements Module<TasksState, any> {

  // resolve namespacing, applies "foo/bar/..." stuff automatically
  namespaced: boolean = true;

  // default properties required for vuex stores/modules
  state: TasksState;
  mutations = Mutations;
  getters = Getters;
  actions = Actions;
  // plugins: Plugin<TasksState>[] = []

  // create everything
  constructor() {
      this.state = new TasksState();
      // this.plugins = plugins
  }
}


// export default {
//   namespaced: true as true,
//   state,
//   getters,
//   mutations,
//   actions
// }
