<template>
  <div class="content-container">
    <div class="section content-title-group">
      <h2 class="title">Heroes</h2>
      <div class="columns">
        <div class="column is-8">
          <HeroList v-if="heroes.length" :heroes="heroes" />

          <div class="notification is-info" v-show="message">{{ message }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroList from '@/components/HeroList';
import * as Shared from '../shared';

export default {
  name: 'Heroes',
  components: { HeroList },
  data() {
    return {
      heroes: [],
      message: '',
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
      this.heroes = await Shared.dataService.getHeroes();
      this.message = '';
    },
  },
};
</script>
