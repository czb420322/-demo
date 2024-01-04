<template>
  <el-select size="mini" multiple filterable :disabled="disabled" v-model='selectedArr' :loading="mulSelectLoading"
    :collapse-tags="collapseTags" placeholder='请选择' @change='changeSelect' @remove-tag='removeTag'>
    <el-option label='全选' value='全选' @click.native='selectAll' v-if="selectOptions.length"></el-option>
    <el-option v-for='item in selectOptions' :key='item.value' :label='item.label' :value='item.value'></el-option>
  </el-select>
</template>
  
<script>
export default {
  name: 'MultipleSelect',
  data() {
    return {
      selectedArr: [],
    }
  },
  props: {
    // 选项
    selectOptions: {
      type: Array,
      default() {
        return []
      }
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 已选中选项
    mulSelecteds: {
      type: Array,
      default() {
        return []
      }
    },
    mulSelectLoading: {
      type: Boolean,
      default: false
    },
    collapseTags: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    selectAll() {
      if (this.selectedArr.length < this.selectOptions.length) {
        this.selectedArr = []
        this.selectOptions.map((item) => {
          this.selectedArr.push(item.value)
        })
        this.selectedArr.unshift('全选');
      } else {   // 取消全选
        this.selectedArr = [];
      }
      this.$emit('update:updateMultipleSelect', this.selectedArr);
    },
    changeSelect(val) {
      if (!val.includes('全选') && val.length === this.selectOptions.length) {
        this.selectedArr.unshift('全选')
      } else if (val.includes('全选') && (val.length - 1) < this.selectOptions.length) {
        this.selectedArr = this.selectedArr.filter((item) => { return item !== '全选' })
      }
      this.$emit('update:updateMultipleSelect', this.selectedArr);
    },
    removeTag(val) {
      if (val === '全选') {
        this.selectedArr = [];
        this.$emit('update:updateMultipleSelect', this.selectedArr);
      }
    }
  },
  watch: {
    mulSelecteds: {
      handler(newVal, oldVal) {
        this.selectedArr = newVal;
        if (!this.selectedArr.includes('全选') &&
          this.selectedArr.length &&
          this.selectedArr.length === this.selectOptions.length) {
          this.selectedArr.unshift('全选')
        }
      },
      immediate: true
    }
  }
}
</script>


<script setup>
import { ref } from 'vue';
import { format } from 'date-fns';
import { useRenderContext } from 'vue-router';
const router = useRenderContext().router;
// 在此处定义变量
const value = ref(new Date());
// 定义日期时间选择器的配置项
const pickerOptions = ref({ shortcuts: [{ text: '最近7天', onClick(picker, date, endDate) { const start = addDays(date, -6); const end = addDays(date, 0); picker.$emit('input', [start, end]); } }, { text: '最近30天', onClick(picker, date, endDate) { const start = subDays(date, 30); picker.$emit('input', [start, date]); } }], defaultPickerValue: value, shortcuts: [{ text: '今天', onClick(picker, $event) { const value = new Date(); picker.$emit('input', [value, value]); } }, { text: '昨天', onClick(picker, $event) { const value = new Date(); value.setDate(value.getDate() - 1); picker.$emit('input', [value, value]); } }, { text: '最近一周', onClick(picker, $event) { const start = new Date(); start.setDate(start.getDate() - 30); const end = new Date(); picker.$emit('input', [start, end]); } }, { text: '最近3天', onClick(picker, $event) { const start = new Date(); start.setDate(start.getDate() - 3); picker.$emit('input', [start, new Date()]); } }] });
// 定义当前时间函数 
const getCurrentTime = () => new Date(); // 更新选择器的最大时间限制
const updateMaxTime = () => { const current = getCurrentTime(); pickerOptions.value.maxTime = current; }; // 更新选择器的最小时间限制 
const updateMinTime = () => { const current = getCurrentTime(); pickerOptions.value.minTime = current; };
// 监听路由变化
router.beforeEach((to, from, next) => { updateMaxTime(); updateMinTime(); next(); }); watch(() => value.value, () => { updateMaxTime(); updateMinTime(); }); onMounted(() => { updateMaxTime(); updateMinTime(); }); 
</script>
  