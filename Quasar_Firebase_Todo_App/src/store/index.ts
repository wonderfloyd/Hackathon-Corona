import Vue from 'vue';
import Vuex from 'vuex';
import { vuexfireMutations } from 'vuexfire';
// import { createDirectStore } from 'direct-vuex';

import AuthModule from './auth';
import UserModule from './user';
import TaskModule from './tasks';

Vue.use(Vuex);


export default function () {
  const Store = new Vuex.Store({
    modules: {
      auth: new AuthModule(),
      user: new UserModule(),
      tasks: new TaskModule()
    },
    mutations: {
      ...vuexfireMutations
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV === 'true'
  })

  return Store;
}

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

// const {
//   store,
//   rootActionContext,
//   moduleActionContext,
//   rootGetterContext,
//   moduleGetterContext
// } = createDirectStore({
//   modules: {
//     // auth,
//     // user,
//     tasks
//   },
//   mutations: {
//     ...vuexfireMutations
//   },

//   // enable strict mode (adds overhead!)
//   // for dev mode only
//   strict: process.env.DEV === 'true'
// });

// // Export the direct-store instead of the classic Vuex store.
// export default store;

// export {
//   rootActionContext,
//   moduleActionContext,
//   rootGetterContext,
//   moduleGetterContext
// };

// // The following lines enable types in the injected store '$store'.
// export type AppStore = typeof store;
// declare module "vuex" {
//   interface Store<S> {
//     direct: AppStore
//   }
// }


