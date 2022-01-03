<template>
  <header>
    <nav @scroll="toTopDistance" :class="fixed">
      <div @click="toSection('top')">
        {{ headline.about }}
      </div>
      <div @click="toSection('experience')">{{ headline.experience }}</div>
      <div @click="toSection('skill')">{{ headline.skills }}</div>
      <div @click="toSection('portfolio')">{{ headline.portfolio }}</div>
      <div @click="toSection('biography')">{{ headline.biography }}</div>
      <div @click="toSection('biography')">{{ headline.contact }}</div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      fixed: "",
    };
  },
  computed: {
    headline() {
      return this.$store.getters.data.headline;
    },
  },
  methods: {
    toSection(element) {
      this.$store.dispatch("toSection", element);
    },
    toTopDistance() {
      const viewportHeight = document.documentElement.clientHeight;
      if (window.pageYOffset > viewportHeight - 10) {
        this.fixed = "fixed-position";
      } else {
        this.fixed = "";
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.toTopDistance);
  },
  unmounted() {
    window.removeEventListener("scroll", this.toTopDistance);
  },
};
</script>

<style scoped>
header {
  align-self: center;
  height: 100%;
}

header nav {
  align-self: start;
  width: 100%;
  background-color: rgba(255, 156, 64, 0.3);
  color: white;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.fixed-position {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

nav div {
  margin: 5px;
}

nav div:hover {
  cursor: pointer;
  color: red;
}

@media (min-width: 400px) {
  nav div {
    font-size: 18px;
    margin: 9px;
  }

  @media (min-width: 576px) {
    header nav {
      justify-content: end;
    }

    nav div {
      font-size: 22px;
      margin: 10px;
    }

    nav div:last-child {
      margin-right: 20px;
    }
  }
}
</style>
