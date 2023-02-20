<template>
  <section class="experience-area">
    <div>
      <div class="education-area">
        <base-title
          ><template #title-white
            ><i class="lni lni-graduation"></i>
            {{ historyHeadline.education }}</template
          ></base-title
        >
        <div class="education">
          <div v-for="(educationItem, index) in data.education" :key="index">
            {{ educationItem }}
          </div>
        </div>
      </div>
      <div class="job-area">
        <base-title>
          <template #title-white>
            <i class="lni lni-briefcase"></i> {{ historyHeadline.jobs }}
          </template>
        </base-title>
        <div class="job">
          <div v-for="(jobItem, index) in data.jobs" :key="index">
            <div>{{ jobItem.job }}</div>
            <div class="period">{{ jobItem.period }}</div>
            <br />
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
    historyHeadline() {
      return this.$store.getters.data.headline.history;
    },
  },
};
</script>

<style scoped>
.experience-area {
  background-color: steelblue;
  min-height: 100vh;
  font-size: 20px;
  color: white;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.job-area {
  margin-top: 50px;
}

.education div {
  margin-bottom: 10px;
}

.period {
  font-size: 0.9em;
}

.lni {
  font-size: 26px;
  margin-right: 10px;
}

@media (min-width: 576px) {
  .experience-area {
    padding: 50px 90px;
  }

  .education-area,
  .job-area {
    font-size: 22px;
    padding-right: 30px;
  }
}

@media (min-width: 768px) {
  .experience-area > div {
    display: grid;
    grid-template: "a" 1fr / 1fr 1fr;
  }

  .education {
    margin-right: 15px;
  }

  .job-area {
    margin-top: 0px;
    margin-left: 40px;
  }

  .job {
    max-height: 75vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .job::-webkit-scrollbar {
    width: 10px;
    border-radius: 4px;
    background: rgb(70, 94, 122);
  }
  .job::-webkit-scrollbar-thumb {
    background: lightsteelblue;
    border-radius: 4px;
  }

  .education div {
    margin-bottom: 25px;
  }
}

@media (min-width: 992px) {
  .experience-area > div {
    width: 850px;
  }
}
</style>
