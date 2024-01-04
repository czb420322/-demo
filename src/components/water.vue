<template>
  <div class="text" id="show">
    sdhegfyu
  </div>
</template>

<script>
import watermark from "./water.js";
export default {
  mounted() {
    watermark.set("水印内而国外的发个文档发给", "555");
  },
};
</script>

<style scoped>
.text {
  position: absolute;
  top: 0;
  border: 1px solid red;
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>
