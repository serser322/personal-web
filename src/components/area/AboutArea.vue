<template>
  <section class="about-area">
    <div>
      <base-title
        ><div class="about-title">
          {{ data.headline.about }}
        </div></base-title
      >
      <div class="about">{{ data.about }}</div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.getters.data;
    },
  },
};
</script>

<style scoped>
.about-area {
  min-height: 50vh;
  padding: 70px 50px 10px 50px;
}

.about {
  font-size: 18px;
}

@media (min-width: 400px) {
  .about-area {
    padding: 90px 50px 10px 50px;
  }
}

@media (min-width: 576px) {
  .about-area {
    padding: 90px 90px 0 90px;
  }
  .about {
    font-size: 22px;
  }
}

@media (min-width: 768px) {
  .about {
    max-height: 20vh;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .about::-webkit-scrollbar {
    width: 10px;
    border-radius: 4px;
    background: rgb(255, 255, 255);
  }
  .about::-webkit-scrollbar-thumb {
    background: rgb(208, 208, 208);
    border-radius: 4px;
  }
}

@media (min-width: 992px) {
  .about-area {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }

  .about-area > div {
    max-width: 850px;
  }
}
</style>
