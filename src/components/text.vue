<template>
  <div class="text">
    <wangEnduit v-model="Content" :isClear="isClear" @change="change" :value="Content" />
    <button @click="cls">关闭</button>
    <!-- <el-form label="生效时间：" prop="time">
      <el-date-picker v-model="addStockForm.time" type="datetime" placeholder="选择生效时间" :picker-options="pickerOption"
        value-format="yyyy-MM-dd HH:mm:ss" :editable="false" @change="handler">
      </el-date-picker>
    </el-form> -->

    <p>合同开始时间:</p>
    <div class="contract-elInput">
      <el-date-picker v-model="startTime" type="datetime" placeholder="选择开始时间" format="yyyy-MM-dd HH:mm:ss"
        value-format="yyyy-MM-dd" center :editable="false" :clearable="false" :picker-options="pickerBeginDateBefore">
      </el-date-picker>
    </div>
    <p>合同结束时间:</p>
    <div class="contract-elInput">
      <el-date-picker v-model="endTime" type="datetime" placeholder="选择结束时间" format="yyyy-MM-dd HH:mm:ss"
        value-format="yyyy-MM-dd" center :editable="false" :clearable="false" :picker-options="pickerBeginDateAfter">
      </el-date-picker>
    </div>
    <!-- <xunhuan/> -->
  </div>
</template>

<script>
import wangEnduit from "./world.vue";
// import xunhuan from "./xunhuan.vue";
export default {
  data() {
    return {
      Content: "",
      isClear: false,
      addStockForm: {
        time: "",
      },
      pickerOption: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        },
        selectableRange: "00:00:00 - 23:59:59",
      },
      startTime: '',
      endTime: ''
    };
  },
  watch: {
    "addStockForm.time": {
      //需要对绑定的时间进行监听
      handler(newValue, oldValue) {
        if (newValue) {
          let date = new Date(); //当前时间
          let min = date.getMinutes(); //当前时间的分
          date.setMinutes(min);
          let nowDate = this.$moment(date).format("HH:mm:ss"); //当前时分秒
          let st = "";
          if (
            this.$moment(date).format("yyyy-MM-DD") ===
            this.$moment(newValue).format("yyyy-MM-DD")
          ) {
            let hh1 = this.$moment(newValue).format("HH:mm:ss");
            if (hh1 <= nowDate) {
              this.addStockForm.time = this.$moment(date).format(
                "yyyy-MM-DD HH:mm:ss"
              );
            }
            st = nowDate;
          } else {
            st = "00:00:00";
          }
          this.pickerOption.selectableRange = st + "-23:59:59";
          this.pickerOption = this.pickerOption;
        }
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    // 结束时间大于开始时间
    pickerBeginDateBefore() {
      return {
        disabledDate: time => {
          let endDateVal = this.endTime;
          if (endDateVal) {
            return time.getTime() > new Date(endDateVal).getTime();
          } else {
            return time.getTime() > Date.now();   // 大于当前时间禁止选择
          }
        }
      }
    },
    pickerBeginDateAfter() {
      return {
        disabledDate: time => {
          let beginDateVal = this.startTime;
          if (beginDateVal) {
            return time.getTime() < Date.now() - 8.64e7 || time.getTime() < new Date(beginDateVal).getTime() - 8.64e7;
          }
        }
      }
    },
  },
  methods: {
    cls() {
      this.$parent.flag = false;
    },
    change(val) {
      // eslint-disable-next-line no-console
      console.log(val, "val");
    },
  },
  components: {
    wangEnduit,
    // xunhuan
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
