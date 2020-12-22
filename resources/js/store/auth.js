import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

import auth from './modules/Auth'

const authenticate = new Vuex.Store({
    modules: {
      auth,
    },
    plugins: [createPersistedState()]
  });

  export default authenticate

