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
          <router-link
            :to="{ name: 'hero-detail', params: { id: hero.id } }"
            tag="button"
            class="link card-footer-item"
          >
            <i class="fas fa-check"></i>
            <span>Select</span>
          </router-link>
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
  methods: {},
};
</script>

<style scoped></style>
