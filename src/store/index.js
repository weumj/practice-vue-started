import Vue from 'vue';
import Vuex from 'vuex';

import * as modules from './module';

Vue.use(Vuex);

export default function createStore() {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules,
  });
}
