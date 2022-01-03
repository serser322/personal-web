<template>
  <cover-area ref="top"></cover-area>
  <experience-area ref="experience"></experience-area>
  <skill-area ref="skill"></skill-area>
  <portfolio-area ref="portfolio"></portfolio-area>
  <biography-area ref="biography"></biography-area>
</template>

<script>
import CoverArea from "./../area/CoverArea.vue";
import ExperienceArea from "./../area/ExperienceArea.vue";
import SkillArea from "./../area/SkillArea.vue";
import PortfolioArea from "./../area/PortfolioArea.vue";
import BiographyArea from "./../area/BiographyArea.vue";

export default {
  components: {
    CoverArea,
    ExperienceArea,
    SkillArea,
    PortfolioArea,
    BiographyArea,
  },
  data() {
    return {
      elements: [],
      timer: "",
    };
  },
  methods: {
    dispatchToSection(element) {
      this.$store.dispatch("toSection", element);
    },
    scrollToSection(deltaY) {
      let currentIndex = this.$store.getters.currentIndex;
      const elements = this.$store.getters.elements;
      //go down
      if (deltaY > 0) {
        if (currentIndex < elements.length - 1) {
          this.dispatchToSection(elements[++currentIndex]);
        } else {
          this.dispatchToSection(elements[currentIndex]);
        }
      }
      //go up
      if (deltaY < 0) {
        if (currentIndex > 0) {
          this.dispatchToSection(elements[--currentIndex]);
        } else {
          this.dispatchToSection(elements[currentIndex]);
        }
      }
    },
    debounce(func, delay) {
      clearTimeout(this.timer);
      this.timer = setTimeout(func, delay);
    },
  },
  created() {
    document.body.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        this.debounce(() => this.scrollToSection(e.deltaY), 200);
      },
      {
        passive: false,
      }
    );
    // window.addEventListener("touchstart", this.touchStart, {
    //   passive: false,
    // }); // mobile devices
    // window.addEventListener("touchmove", this.touchMove, {
    //   passive: false,
    // }); // mobile devices
  },
  mounted() {
    const store = this.$store;
    const sectionElements = store.state.sectionElements;
    const refs = this.$refs;
    sectionElements.top = refs.top.$el;
    sectionElements.experience = refs.experience.$el;
    sectionElements.skill = refs.skill.$el;
    sectionElements.portfolio = refs.portfolio.$el;
    sectionElements.biography = refs.biography.$el;
    store.state.currentSection =
      store.getters.elements[store.getters.currentIndex];
  },
  unmounted() {
    document.body.removeEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        this.debounce(() => this.scrollToSection(e.deltaY), 200);
      },
      {
        passive: false,
      }
    );
    // window.removeEventListener("mousedown", this.mouseDown, {
    //   passive: false,
    // }); // Other browsers
    // window.removeEventListener("DOMMouseScroll", this.handleMouseWheelDOM); // Mozilla Firefox
    // window.removeEventListener("touchstart", this.touchStart); // mobile devices
    // window.removeEventListener("touchmove", this.touchMove); // mobile devices
  },
};
</script>

<style scoped></style>
