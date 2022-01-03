<template>
  <section class="portfolio-area">
    <div>
      <base-title
        ><template #title-white>{{
          data.headline.portfolio
        }}</template></base-title
      >
      <div class="portfolio">
        <base-card
          v-for="portfolio in data.portfolio"
          :key="portfolio.title"
          :link="portfolio.link"
          :image="portfolio.image"
          :title="portfolio.title"
          :caption="portfolio.caption"
        ></base-card>
      </div>
    </div>
  </section>
</template>

<script>
import BaseCard from "./../ui/BaseCard.vue";
export default {
  components: {
    BaseCard,
  },
  computed: {
    data() {
      return this.$store.getters.data;
    },
  },
};
</script>

<style scoped>
.portfolio-area {
  min-height: 100vh;
  background-color: steelblue;
  padding: 50px;
}

.portfolio {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: -15px;
}

@media (min-width: 576px) {
  .portfolio-area {
    padding: 50px;
  }
}

@media (min-width: 992px) {
  .portfolio-area {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 80px;
  }

  .portfolio-area > div {
    max-width: 1150px;
  }
}
</style>
