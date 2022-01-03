<template>
  <section class="biography-area">
    <div>
      <div class="biography">
        <base-title>{{ headline.biography }}</base-title>
        <div>
          <base-button class="biography-btn" @click="toggleModal">{{
            headline.biographyBtn
          }}</base-button>
        </div>
        <teleport to="body">
          <base-modal v-if="isShow" @close-modal="toggleModal">
            <template #title>{{ headline.biography }}</template>
            <template #content>
              {{ data.biography }}
            </template>
          </base-modal>
        </teleport>
      </div>
      <div></div>
      <div class="contact">
        <base-title>{{ headline.contact }}</base-title>
        <div v-for="(contactItem, index) in data.contact" :key="index">
          <div v-if="notAnchor(contactItem.content, 'github')">
            <i :class="'lni ' + contactItem.icon"></i>{{ contactItem.content }}
          </div>
          <div v-else>
            <i :class="'lni ' + contactItem.icon"></i>
            <a :href="contactItem.content"> {{ contactItem.content }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    data() {
      return this.$store.getters.data;
    },
    headline() {
      return this.$store.getters.data.headline;
    },
  },
  methods: {
    toggleModal() {
      this.isShow = !this.isShow;
      const bodyStyle = document.body.style;
      if (this.isShow) {
        bodyStyle.height = "100vh";
        bodyStyle.overflowY = "hidden";
      } else {
        bodyStyle.height = "";
        bodyStyle.overflowY = "";
      }
    },
    notAnchor(content, string) {
      return !content.includes(string);
    },
  },
};
</script>

<style scoped>
.biography-area {
  min-height: 100vh;
  background-color: blanchedalmond;
  color: black;
  padding: 50px;
}

.biography {
  margin-bottom: 90px;
}

.biography div {
  display: flex;
  justify-content: center;
}

.biography-btn {
  background-color: coral;
  margin: 0 auto;
  justify-self: end;
  color: white;
  width: 100%;
  /* width: 25vw; */
  height: 50px;
  font-size: 22px;
}

.contact div {
  margin-bottom: 20px;
}

.lni {
  font-weight: 700;
  margin-right: 15px;
}

@media (min-width: 400px) {
  .contact div {
    font-size: 19px;
  }
}

@media (min-width: 576px) {
  .biography-area {
    padding: 50px 90px;
  }

  .biography-area {
    display: flex;
    align-items: center;
  }

  .contact div {
    font-size: 22px;
  }
}

@media (min-width: 768px) {
  .biography-area {
    display: flex;
    justify-content: center;
  }
  .biography-area > div {
    display: grid;
    grid-template: "a" 1fr / 0.8fr 10vw 1fr;
  }

  .biography-btn {
    width: 25vw;
    margin-left: 0;
  }
}

@media (min-width: 992px) {
}
</style>
