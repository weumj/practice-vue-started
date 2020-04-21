<template>
  <div id="app">
    <HeaderBar />
    <div class="main-section columns">
      <main class="column">
        <Heroes />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import HeaderBar from '@/components/header-bar';
import Heroes from '@/components/heros';

export default {
  name: 'App',
  components: { HeaderBar, Heroes },
};
</script>

<style lang="scss">
@import '@/design/index.scss';
</style>
