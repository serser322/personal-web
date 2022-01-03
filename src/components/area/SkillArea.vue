<template>
  <section class="skill-area">
    <div>
      <base-title>{{ data.headline.skills }}</base-title>
      <div>
        <div>
          <div class="skill-group">
            <div class="subtitle">
              <i class="lni lni-display-alt"></i>{{ abilities.programming }}
            </div>
            <div class="skill">
              <img
                v-for="(image, index) in skills.programming"
                :key="index"
                :src="image"
                alt=""
              />
            </div>
          </div>
          <div class="line"></div>
          <div class="skill-group">
            <div class="subtitle">
              <i class="lni lni-image"></i>{{ abilities.multimedia }}
            </div>
            <div class="skill">
              <img
                v-for="(image, index) in skills.design"
                :key="index"
                :src="image"
                alt=""
              />
            </div>
          </div>
          <div class="line"></div>
          <div class="skill-group">
            <div class="subtitle">
              <i class="lni lni-world"></i>{{ abilities.english }}
            </div>
            <div class="skill">
              <img
                v-for="(image, index) in skills.english"
                :key="index"
                :src="image"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.getters.data;
    },
    skills() {
      return this.$store.getters.data.skills;
    },
    abilities() {
      return this.$store.getters.data.headline.abilities;
    },
  },
};
</script>

<style scoped>
.skill-area {
  min-height: 100vh;
  background-color: BlanchedAlmond;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.skill-group {
  margin-top: -15px;
  margin-bottom: 30px;
}

.skill-group:last-child {
  margin-bottom: 0px;
}

.subtitle {
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
}

.skill {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.lni {
  margin-right: 10px;
}

.skill img {
  height: 100px;
  margin: 5px;
}

.line {
  height: 1px;
  width: 65vw;
  background-color: coral;
  margin: 0px auto 20px auto;
}

@media (min-width: 576px) {
  .skill-area {
    padding: 40px 90px 30px 90px;
  }

  .skill-area > div {
    padding-top: 20px;
  }

  .skill {
    justify-content: left;
    margin-left: 25px;
  }

  .line {
    width: 40vw;
  }
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
  .skill-area > div {
    width: 950px;
  }
  .skill-area > div > div {
    display: flex;
    justify-content: center;
  }
  .skill img {
    height: 120px;
  }
}
</style>
