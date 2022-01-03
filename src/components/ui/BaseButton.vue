<template>
  <button>
    <div>
      <slot></slot>
    </div>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  min-width: 36px;
  min-height: 30px;
  background-color: rgb(255, 255, 133);
  border: 0px;
  border-radius: 10px;
  color: black;
  margin: 10px;
  padding: 5px 10px;
}

button:hover {
  color: white;
  background-color: firebrick;
  cursor: pointer;
}

@media (min-width: 576px) {
  button {
    font-size: 18px;
  }
}
</style>
