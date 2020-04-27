import Vue from 'vue';
import Vuex from 'vuex';
import { dataService } from '@/shared';

Vue.use(Vuex);

const GET_VILLAINS = 'getVillains';
const ADD_VILLAIN = 'addVillain';
const UPDATE_VILLAIN = 'updateVillain';
const DELETE_VILLAIN = 'deleteVillain';

export const TYPES = {
  GET_VILLAINS,
  ADD_VILLAIN,
  UPDATE_VILLAIN,
  DELETE_VILLAIN,
};

const state = {
  villains: [],
};
const mutations = {
  [GET_VILLAINS](state, villains) {
    state.villains = villains;
  },
  [ADD_VILLAIN](state, villain) {
    state.villains.push(villain);
  },
  [DELETE_VILLAIN](state, villainId) {
    state.villains = [...state.villains.filter(item => item.id !== villainId)];
  },
  [UPDATE_VILLAIN](state, villain) {
    const index = state.villains.findIndex(item => item.id === villain.id);

    state.villains = [
      ...state.villains.slice(0, index),
      villain,
      ...state.villains.slice(index + 1),
    ];
  },
};
const actions = {
  async getVillainsAction({ commit, state }, options) {
    if (!options?.force && state.villains.length) {
      return;
    }
    const villains = await dataService.getVillains();
    commit(GET_VILLAINS, villains);
  },
  async addVillainAction({ commit }, villain) {
    const addedVillain = await dataService.addVillain(villain);
    commit(ADD_VILLAIN, addedVillain);
  },
  async deleteVillainAction({ commit }, villain) {
    const deletedVillainId = await dataService.deleteVillain(villain);
    commit(DELETE_VILLAIN, deletedVillainId);
  },
  async updateVillainAction({ commit }, villain) {
    const updatedVillain = await dataService.updateVillain(villain);
    commit(UPDATE_VILLAIN, updatedVillain);
  },
};
const getters = {
  getVillainById: state => id => state.villains.find(item => item.id === id),
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
