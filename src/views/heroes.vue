<template>
  <div class="content-container">
    <div class="columns">
      <div class="column is-8">
        <div class="section content-title-group">
          <h2 class="title">Heroes</h2>
          <button
            class="button refresh-button"
            @click="loadHeroes({ force: true })"
          >
            <i class="fas fa-sync"></i>
          </button>
          <router-link
            tag="button"
            class="button add-button"
            :to="{ name: 'hero-detail', params: { id: 0 } }"
          >
            <i class="fas fa-plus"></i>
          </router-link>
          <HeroList
            v-if="heroes.length"
            :heroes="heroes"
            @delete="askToDelete"
          />
        </div>
        <div class="notification is-info" v-show="message">{{ message }}</div>
      </div>
    </div>
    <Modal
      :message="modalMessage"
      :isOpen="showModal"
      @handleNo="closeModal"
      @handleYes="deleteHero"
    >
    </Modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import HeroList from '@/components/HeroList';
import Modal from '@/components/modal';
import * as Shared from '../shared';

export default {
  name: 'Heroes',
  components: { HeroList, Modal },
  data() {
    return {
      heroToDelete: null,
      message: '',
      showModal: false,
    };
  },
  mixins: [Shared.lifecycleHooks, Shared.heroWatchers],
  created() {
    this.loadHeroes();
  },
  methods: {
    ...mapActions(['getHeroesAction', 'deleteHeroAction']),
    askToDelete(hero) {
      this.heroToDelete = hero;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    async deleteHero() {
      this.closeModal();
      if (this.heroToDelete) {
        // await this.$store.dispatch('deleteHeroAction', this.heroToDelete);
        await this.deleteHeroAction(this.heroToDelete);
      }
      /** The loadHeroes is not needed,
       *  but it's nice to query the database
       * in case any other changes were made by other users
       */
      await this.loadHeroes();
    },
    async loadHeroes({ force } = { force: false }) {
      this.message = 'getting the heroes. please be patient';
      await this.getHeroesAction({ force });
      this.message = '';
    },
  },
  computed: {
    ...mapState(['heroes']),
    modalMessage() {
      const name = this.heroToDelete?.fullName ?? '';

      return `Would you like to delete ${name}`;
    },
  },
};
</script>
