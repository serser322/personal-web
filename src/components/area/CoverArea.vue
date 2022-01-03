<template>
  <section class="top-section">
    <section class="cover-area">
      <the-header></the-header>
      <div class="language">
        <base-button @click="toggleLanguage('ch')">中</base-button>
        <base-button @click="toggleLanguage('en')">En</base-button>
      </div>
      <div class="name">{{ this.$store.getters.data.name }}</div>
      <div class="avatar">
        <img src="../../../public/assets/avatar.jpg" alt="" />
      </div>
    </section>
    <about-area></about-area>
  </section>
</template>

<script>
import AboutArea from "./AboutArea.vue";
export default {
  components: {
    AboutArea,
  },
  methods: {
    toggleLanguage(payload) {
      this.$store.dispatch("toggleLanguage", payload);
    },
  },
  created() {
    this.toggleLanguage("ch");
  },
};
</script>

<style scoped>
.cover-area {
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.5);
  min-height: 50vh;
  display: grid;
  grid-template: "a" 0.5fr "b" 0.5fr "c" 1fr "d" 1fr / 1fr;
  position: relative;
}

.cover-area::after {
  content: "";
  background-image: url("./../../../public/assets/cover background.jpg");
  background-size: cover;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}

.language {
  justify-self: flex-end;
  margin-right: 10vw;
}

.name {
  font-size: 40px;
  font-weight: 500;
  justify-self: center;
  align-self: center;
}

.avatar {
  width: 200px;
  height: 200px;
  position: absolute;
  justify-self: center;
  bottom: 0;
  transform: translate(0, 50%);
}

.avatar img {
  box-sizing: border-box;
  width: 100%;
  border-radius: 150px;
  border: 7px solid white;
}

@media (min-width: 400px) {
  .name {
    font-size: 50px;
  }
}

@media (min-width: 576px) {
  .avatar {
    width: 250px;
    height: 250px;
  }
  .language {
    margin-right: 10px;
  }
}

@media (min-width: 768px) {
  .cover-area {
    background-size: 100%;
  }
}
</style>
