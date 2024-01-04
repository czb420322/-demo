<template>
  <div class="page-search-highlight">
    <!-- <div class="search-highlight-container">
      <div class="header">
        <div class="keyword">
          <div class="label">搜索</div>
          <input class="input" v-model="keyword" placeholder="输入关键字搜索" />
        </div>
        <div class="menu">
          <div class="current" style="color: #fff;">{{ newmatchCount ? currentIdx : 0 }} / {{ newmatchCount }}</div>
          <Button type="primary" size="small" class="button" @click.stop="searchLast">上一个</Button>
          <Button type="primary" size="small" class="button" @click.stop="searchNext">下一个</Button>
        </div>
      </div>
      <div class="notice">支持对HTML字符串内容搜索，下面的示例是一个html字符串，可以跨标签搜索关键字</div>
      <search-highlight class="content-container" ref="search" @current-change="currentChange" :keyword="keyword"
        :content="content" @parentMathCount="parentMathCount">
      </search-highlight> 
      

    </div>-->
    <daan/>
  </div>
</template>

<script>
// import SearchHighlight from './inputChild.vue'
import daan from './daan.vue'
export default {
  components: {
    // SearchHighlight,
    daan
  },
  data() {
    return {
      currentIdx: 0,
      newmatchCount: 0,
      keyword: '',
      content: '',
    }
  },

  mounted() {
    // for (let key in this.$refs.search) {
    //   if (!(key in this) && typeof this.$refs.search[key] === 'function') {
    //     console.log(key)
    //   }
    // }
    this.getHuoData()
  },
  methods: {

    getHuoData() {
      /* 这里就是数据获取的方法 axios.get().then((res)=>{}) */
      setTimeout(() => {
        this.content = `
            春江花<b>月</b>夜
                [唐] 张若虚
      春江潮水连海平，海上明<b>月</b>共潮生。
      滟滟随波千万里，何处春江无<b>月</b>明！
      江流宛转绕芳甸，<b>月</b>照花林皆似霰；
      空里流霜不觉飞，汀上白沙看不见。
      江天一色无纤尘，皎皎空中孤<b>月</b>轮。
      江畔何人初见<b>月</b>？江<b>月</b>何年初照人？
      人生代代无穷已，江<b>月</b>年年望相似。
      不知江<b>月</b>待何人，但见长江送流水。
      白云一片去悠悠，青枫浦上不胜愁。
      谁家今夜扁舟子？何处相思明<b>月</b>楼？
      可怜楼上<b>月</b>徘徊，应照离人妆镜台。
      玉户帘中卷不去，捣衣砧上拂还来。
      此时相望不相闻，愿逐<b>月</b>华流照君。
      鸿雁长飞光不度，鱼龙潜跃水成文。
      昨夜闲潭梦落花，可怜春半不还家。
      江水流春去欲尽，江潭落<b>月</b>复西斜。
      斜<b>月</b>沉沉藏海雾，碣石潇湘无限路。
      不知乘<b>月</b>几人归，落<b>月</b>摇情满江树。`
      }, 200);
    },
    searchNext() {
      this.$refs.search.searchNext()
    },
    searchLast() {
      this.$refs.search.searchLast()
    },
    parentMathCount(count) {
      this.newmatchCount = count
    },
    currentChange(idx) {
      this.currentIdx = idx + 1
    },
  }
}
</script>

<style  scoped>
.text {
  /* position: absolute;
    top: 0;
    border: 1px solid red; */
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>