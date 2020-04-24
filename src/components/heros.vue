<template>
  <div class="content-container">
    <div class="section content-title-group">
      <h2 class="title">Heroes</h2>
      <div class="columns">
        <div class="column is-8">
          <HeroList
            v-if="heroes.length"
            :heroes="heroes"
            @select="selectHero"
          />

          <HeroDetail
            v-if="selectedHero"
            :derivedHero="selectedHero"
            @save="saveHero"
            @canel="cancelHero"
          />

          <div class="notification is-info" v-show="message">{{ message }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroDetail from '@/components/HeroDetail';
import HeroList from '@/components/HeroList';
import * as Shared from '../shared';

export default {
  name: 'Heroes',
  components: { HeroList, HeroDetail },
  data() {
    return {
      heroes: [],
      selectedHero: null,
      message: '',
      capeMessage: '',
    };
  },
  mixins: [Shared.lifecycleHooks, Shared.heroWatchers],
  created() {
    this.loadHeroes();
  },
  methods: {
    async loadHeroes() {
      this.heroes = [];
      this.message = 'getting the heroes. please be patient';
      this.heroes = await Shared.getHeroes();
      this.message = '';
    },
    cancelHero() {
      this.selectedHero = undefined;
      this.message = '';
    },
    saveHero(hero) {
      const index = this.heroes.findIndex(h => h.id === hero.id);
      this.heroes = [
        ...this.heroes.slice(0, index),
        hero,
        ...this.heroes.slice(index + 1),
      ];
      this.selectedHero = undefined;
    },
    selectHero(hero) {
      this.selectedHero = hero;
    },
  },
};
</script>
