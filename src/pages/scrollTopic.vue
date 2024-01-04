<template>
  <div class="text">
    <!-- <div class="notification-bar">
      <div class="notifications">
        <div v-for="(notification, index) in notifications" :key="index" class="notification-item">
          {{ notification }}
        </div>
      </div>
    </div>
    <el-select>
      <el-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value"
        v-model="option.modelValue"></el-option>
    </el-select> -->
    <div>
      <input type="text" v-model="searchText" @keydown.up="navigate(-1)" @keydown.down="navigate(1)" @input="search"
        placeholder="Search...">
      <ul>
        <li v-for="(result, index) in searchResults" :key="index" :class="{ active: index === currentIndex }">
          {{ result }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// 在Vue组件中定义通知内容数组
export default {
  data() {
    return {
      notifications: ['通知1', '通知2', '通知3', '通知4', '通知5'],
      options: [
        { value: 'option1', label: 'Option 1', modelValue: 5 },
        { value: 'option2', label: 'Option 2', modelValue: 6 },
        { value: 'option3', label: 'Option 3', modelValue: 7 }
      ],
      lines: [
        "Lorem ipsum dolor sit amet",
        "consectetur adipiscing elit",
        "sed do eiusmod tempor incididunt",
        "ut labore et dolore magna aliqua",
        "Ut enim ad minim veniam",
        "quis nostrud exercitation ullamco",
        "laboris nisi ut aliquip ex ea commodo consequat"
      ],
      searchText: "",
      searchResults: [],
      currentIndex: -1
    };
  },
  // computed: {
  //   selectedValues() {
  //     return this.options.reduce((obj, option) => {
  //       obj[option.value] = option.modelValue;
  //       return obj;
  //     }, {});
  //   }
  // },
  methods: {
    search() {
      this.searchResults = this.lines.filter(line =>
        line.toLowerCase().includes(this.searchText.toLowerCase())
      );
      this.currentIndex = -1;
    },
    navigate(direction) {
      if (this.searchResults.length === 0) return;

      if (direction === -1) {
        this.currentIndex =
          this.currentIndex <= 0 ? this.searchResults.length - 1 : this.currentIndex - 1;
      } else if (direction === 1) {
        this.currentIndex =
          this.currentIndex >= this.searchResults.length - 1 ? 0 : this.currentIndex + 1;
      }
    }
  }
}
</script>
  
<style>
.text {
  position: absolute;
  top: 0;
  border: 1px solid red;
  width: 100%;
  height: 100%;
  background: #fff;
}

.notification-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  /* 设置通知栏的高度 */
  overflow: hidden;
}

.notifications {
  position: relative;
  animation: scroll-up 10s linear infinite;
  /* 定义滚动动画，可根据需要调整动画时间 */
}

.notification-item {
  position: absolute;
  bottom: 0;
}

@keyframes scroll-up {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-100%);
  }
}

li.active {
  background-color: yellow;
}
</style>
  