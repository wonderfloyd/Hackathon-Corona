import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { vuexfireMutations } from 'vuexfire';

import { RootState } from './types';

import { authModule } from './auth';
import { userModule } from './user';
import { taskModule } from './tasks';

Vue.use(Vuex);


export default function () {
  const store: StoreOptions<RootState> = {
    modules: {
      auth: authModule,
      tasks: taskModule,
      user: userModule
    },
    mutations: {
      ...vuexfireMutations
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV === 'true'
  }
  const Store = new Vuex.Store<RootState>(store);
  
  return Store;
}

