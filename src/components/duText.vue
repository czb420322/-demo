<template>
  <div class="text">
    <texts></texts>
  </div>
</template>

<script>
import texts from "./textArea.vue";
export default {
  data() {
    return {};
  },
  components: {
    texts,
  },
};
</script>

<style  scoped>
.text {
  position: absolute;
  top: 0;
  border: 1px solid red;
  width: 100%;
  height: 100%;
  background: #fff;
}</style>
