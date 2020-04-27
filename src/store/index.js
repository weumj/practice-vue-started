import Vue from 'vue';
import Vuex from 'vuex';
import { dataService } from '../shared';
import {
  ADD_HERO,
  DELETE_HERO,
  GET_HEROES,
  UPDATE_HERO,
} from './mutation-types';

Vue.use(Vuex);

const state = {
  heroes: [],
};
const mutations = {
  [GET_HEROES](state, heroes) {
    state.heroes = heroes;
  },
  [ADD_HERO](state, hero) {
    state.heroes.push(hero);
  },
  [DELETE_HERO](state, heroId) {
    state.heroes = [...state.heroes.filter(item => item.id === heroId)];
  },
  [UPDATE_HERO](state, hero) {
    const index = state.heroes.findIndex(item => item.id === hero.id);

    state.heroes = [
      ...state.heroes.slice(0, index),
      hero,
      ...state.heroes.slice(index + 1),
    ];
  },
};
const actions = {
  async getHeroesAction({ commit, state }, options) {
    if (!options?.force && state.heroes.length) {
      return;
    }
    const heroes = await dataService.getHeroes();
    commit(GET_HEROES, heroes);
  },
  async addHeroAction({ commit }, hero) {
    const addedHero = await dataService.addHero(hero);
    commit(ADD_HERO, addedHero);
  },
  async deleteHeroAction({ commit }, hero) {
    const deletedHeroId = await dataService.deleteHero(hero);
    commit(DELETE_HERO, deletedHeroId);
  },
  async updateHeroAction({ commit }, hero) {
    const updatedHero = await dataService.updateHero(hero);
    commit(UPDATE_HERO, updatedHero);
  },
};
const getters = {
  getHeroById: state => id => state.heroes.find(item => item.id === id),
};
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  getters,
  modules: {},
});
