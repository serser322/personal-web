<template>
  <div class="modal-mask" @wheel.stop="stopBubble">
    <div class="modal">
      <div class="modal-title">
        <slot name="title"></slot>
        <div class="close" @click="closeModal">
          <i class="lni lni-close"></i>
        </div>
      </div>
      <div class="modal-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    stopBubble() {},
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 20px;
  color: black;
}

.modal-title {
  margin: 20px;
  margin-left: 30px;
  font-size: 1.2em;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
}

.close:first-child {
  font-size: 20px;
  margin: 0;
}

.close:first-child:hover {
  cursor: pointer;
  color: coral;
  font-weight: 900;
}

.close:first-child:active {
  color: darkred;
}

.modal-content {
  margin: 10px 10px 25px 0;
  padding: 10px 10px 0 30px;
  width: 60vw;
  height: 60vh;
  overflow: auto;
  white-space: pre-line;
}

.modal-content::-webkit-scrollbar {
  width: 10px;
}

.modal-content::-webkit-scrollbar-thumb {
  background-color: darkgray;
  border-radius: 20px;
}

.modal-content::-webkit-scrollbar-track-piece:start {
  margin-top: 10px;
}
</style>
