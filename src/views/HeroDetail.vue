<template>
  <div v-if="hero">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{ fullName }}</p>
      </header>
      <div class="card-content">
        <div class="content">
          <div class="field">
            <label class="label" for="id">id</label>
            <label class="input" id="id" readonly>{{ hero.id }}</label>
          </div>
          <div class="field">
            <label class="label" for="firstName">first name</label>
            <input class="input" id="firstName" v-model="hero.firstName" />
          </div>
          <div class="field">
            <label class="label" for="lastName">last name</label>
            <input class="input" id="lastName" v-model="hero.lastName" />
          </div>
          <div class="field">
            <label class="label" for="description">description</label>
            <input class="input" id="description" v-model="hero.description" />
          </div>
          <div class="field">
            <label class="label" for="originDate">origin date</label>
            <input
              type="date"
              class="input"
              id="originDate"
              v-model="hero.originDate"
            />
            <p class="comment">
              My origin story began on
              {{ hero.originDate | shortDate }}
            </p>
          </div>
          <div class="field">
            <label class="label" for="capeCounter">cape counter</label>
            <input
              class="input"
              id="capeCounter"
              type="number"
              v-model="hero.capeCounter"
            />
          </div>
          <div class="field">
            <label class="label" for="capeMessage">cape message</label>
            <label class="input" id="capeMessage">{{ capeMessage }}</label>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <button
          class="link card-footer-item cancel-button"
          @click="cancelHero()"
        >
          <i class="fas fa-undo"></i>
          <span>Cancel</span>
        </button>
        <button class="link card-footer-item" @click="saveHero">
          <i class="fas fa-save"></i>
          <span>Save</span>
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns';
import { displayDateFormat } from '@/shared';
import { createNamespacedHelpers } from 'vuex';

const { mapActions, mapGetters } = createNamespacedHelpers('hero');

export default {
  name: 'HeroDetail',
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      hero: undefined,
      capeMessage: '',
    };
  },
  computed: {
    ...mapGetters(['getHeroById']),
    isAddMode() {
      return !this.id;
    },
    title() {
      return `${this.isAddMode ? 'Add' : 'Edit'} Hero`;
    },
    fullName() {
      return this.hero ? `${this.hero.firstName} ${this.hero.lastName}` : '';
    },
  },
  created() {
    if (this.isAddMode) {
      this.hero = {
        id: undefined,
        firstName: '',
        lastName: '',
        description: '',
      };
    } else {
      const hero = this.getHeroById(this.id);
      this.hero = JSON.parse(JSON.stringify(hero));
    }
  },
  filters: {
    shortDate(value) {
      return format(value, displayDateFormat);
    },
  },
  watch: {
    'hero.capeCounter': {
      immediate: true,
      handler(newValue, oldValue) {
        console.log(`watcher evaluated. old='${oldValue}', new='${newValue}'`);
        this.handleTheCapes(newValue);
      },
    },
  },
  methods: {
    ...mapActions(['addHeroAction', 'updateHeroAction']),
    cancelHero() {
      this.$router.push({ name: 'heroes' });
    },
    async saveHero() {
      this.isAddMode
        ? await this.addHeroAction(this.hero)
        : await this.updateHeroAction(this.hero);
      this.$router.push({ name: 'heroes' });
    },
    handleTheCapes(newValue) {
      const value = parseInt(newValue, 10);
      switch (value) {
        case 0:
          this.capeMessage = 'Where is my cape?';
          break;
        case 1:
          this.capeMessage = 'One is all I need';
          break;
        case 2:
          this.capeMessage = 'Alway have a spare';
          break;
        default:
          this.capeMessage = 'You can never have enough capes';
          break;
      }
    },
  },
};
</script>

<style scoped></style>
