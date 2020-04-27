import Vue from 'vue';
import Vuex, { StoreOptions, ModuleTree } from 'vuex';
import { vuexfireMutations } from 'vuexfire';

import { RootState } from './types';

import { authModule } from './auth';
import { userModule } from './user';
import { taskModule } from './tasks';

Vue.use(Vuex);

const modules: ModuleTree<RootState> = {
  auth: authModule,
  tasks: taskModule,
  user: userModule
}

const store: StoreOptions<RootState> = {
  modules,
  mutations: {
    ...vuexfireMutations
  },

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV === 'true'
}

const Store = new Vuex.Store<RootState>(store);
export type AppStore = typeof Store;
export default Store;


  

