<template>
  <a :href="link" class="card">
    <img :src="image" alt="" />
    <figcaption>
      <div class="caption-title">{{ title }}</div>
      <div class="caption">{{ caption }}</div>
    </figcaption>
  </a>
</template>

<script>
export default {
  props: ["link", "image", "title", "caption"],
};
</script>

<style scoped>
a {
  text-decoration: none !important;
}

.card {
  width: 260px;
  height: auto;
  border: 2px solid lightyellow;
  border-radius: 15px;
  background-color: lemonchiffon;
  margin: 10px 10px;
  transition: transform 0.5s;
  cursor: pointer;
  display: grid;
  grid-template: 170px 0.3fr / 1fr;
  overflow: hidden;
  text-decoration: none;
  color: mediumblue;
}

.card:hover {
  transform: scale(1.1);
  border: 3px solid coral;
}

.card:hover figcaption {
  color: coral;
}

.card:active {
  transform: scale(1.1);
  border: 3px solid darkred;
}

.card img {
  width: 100%;
}

.card figcaption {
  padding: 10px 15px;
}

.caption-title {
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 1.1em;
}

/* @media (min-width: 1200px) {
  .card {
    width: 280px;
  }
} */
</style>
