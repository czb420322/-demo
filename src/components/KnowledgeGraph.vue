<template>
  <div class="containers">
    <!-- <div class="center"> -->
      <!-- <div class="header">
        <input type="text" class="ipt" v-model="searchContent" @keydown.enter="search()" placeholder="搜索盗墓笔记重启试试" />
        <p class="tips">
          <span>搜索示例:盗墓笔记重启</span>
        </p>
        <button @click="btn">打开</button>
        <button @click="btns">百度</button>
        <button @click="water">水印</button>
        <button @click="casDer">级联选择器</button>
        <button @click="handleEcharts">echarts</button>
        <button @click="handleEchartsPie">echartsPie</button>
        <button @click="handlescrollTip">scrollTip</button>
        <button @click="handleInput">scrollInput</button>
      </div> -->
      <!-- <div class="canvas">
        <Keywords v-show="type === 1" @searchData="search" @windowResize="windowResize"></Keywords>
        <Charts ref="charts" v-show="type === 2" :chartList="searchList" />
      </div> -->
    <!-- </div> -->
    <!-- <texts v-if="flag"></texts>
    <du-text v-if="isFlag"></du-text>
    <water v-if="iswater"></water>
    <selectedValues v-if="isselect" />
    <echartsVue v-if="isEcharts"/>
    <DPIE v-if="isPie"/>
    <scrollTopic v-if="isTop"/> -->
    <inputVue/>
  </div>
</template>
<script>
import Keywords from "./Keywords";
import Charts from "./Charts";
import texts from "./text";
import duText from "./duText.vue";
import water from './water.vue'
import selectedValues from "./selectedValue.vue"
import echartsVue from "../pages/eCharts.vue"
import inputVue from "../pages/input.vue";
// import DPIE from "../pages/3dCirclePie.vue";
// import DPIE from "../pages/3DPIE.vue";
import DPIE from "../pages/hingLiat3dPie.vue";
import scrollTopic from "../pages/scrollTopic.vue";
export default {
  name: "KnowledgeGraph",
  components: {
    Keywords,
    Charts,
    texts,
    duText,
    water,
    selectedValues,
    echartsVue,
    DPIE,
    scrollTopic,
    inputVue
  },
  mixins: [],
  props: {},
  data() {
    return {
      searchContent: "",
      type: 1,
      searchList: [],
      flag: false,
      isFlag: false,
      iswater: false,
      isselect: false,
      isEcharts:false,
      isPie:false,
      isTop:false,
      isInput:false
    };
  },
  methods: {
    btn() {
      // this.flag = true;
      this.$router.push('/input')
    },
    btns() {
      this.isFlag = true;
    },
    water() {
      this.iswater = true;
    },
    casDer() {
      this.isselect = true
    },
    handleEcharts(){
      this.isEcharts = true
    },
    handleEchartsPie(){
      this.isPie=true
    },
    handlescrollTip(){
      this.isTop=true
    },
    handleInput(){
      this.isInput=true
    },
    /**
     * 搜索方法,text为空则为点击类别操作,不为空则为输入框搜索
     */
    async search(text) {
      text || (text = this.searchContent);
      // eslint-disable-next-line no-console
      console.log("sss", text, this.searchContent);
      if (!text) {
        this.type = 1;
        return;
      }
      try {
        let result = await search(text);
        this.type = 2;
        this.searchList = [].concat(result);
      } catch (error) {
        alert("未查询到数据,请更改查询条件");
      }
    },
    /**
     * 窗体大小变化回调
     */
    windowResize() {
      const charts = this.$refs.charts;
      charts && charts.myChart && charts.myChart.resize();
    },
  },
  created() { },
  mounted() {
    this.type = 1;
  },
  beforeDestroy() { },
};
</script>
<style scoped>
.container {
  overflow: hidden;
  position: relative;
  min-height: 100vh;
}

.canvas {
  margin-top: 10px;
  height: calc(100vh - 110px);
}

.center {
  position: relative;
  min-width: 1200px;
  margin: 0 auto;
  width: 85%;
}

.header {
  padding-top: 30px;
}

.ipt {
  border: 1px solid #9093c7;
  border-radius: 20px;
  width: 374px;
  height: 44px;
  line-height: 44px;
  box-sizing: border-box;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
}

.tips {
  font-size: 14px;
  color: #ccc;
  line-height: 17px;
  margin-top: 5px;
}
</style>
