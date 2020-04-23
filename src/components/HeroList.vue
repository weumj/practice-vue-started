<template>
  <ul>
    <li v-for="hero in heroes" :key="hero.id">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div :key="hero.name" class="name">
              {{ hero.firstName }} {{ hero.lastName }}
            </div>
            <div class="description">{{ hero.description }}</div>
          </div>
        </div>
        <footer class="card-footer">
          <button class="link card-footer-item" @click="selectHero(hero)">
            <i class="fas fa-check"></i>
            <span>Select</span>
          </button>
        </footer>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HeroList',
  props: {
    heroes: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    selectHero(hero) {
      this.$emit('select', hero);
    },
  },
};
</script>

<style scoped></style>
