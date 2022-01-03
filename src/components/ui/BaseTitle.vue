<template>
  <div class="title title-black"><slot></slot></div>
  <div class="title title-white"><slot name="title-white"></slot></div>
  <div class="line"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 600;
  margin: 0 0 0 0;
}

.title-black {
  color: black;
}

.title-white {
  color: white;
}

.line {
  height: 3px;
  width: 25vw;
  background-color: coral;
  margin: 15px 0 30px 0;
}

@media (min-width: 576px) {
  .title {
    font-size: 35px;
  }
}
</style>
