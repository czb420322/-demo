<template>
    <div class="text">
        <el-cascader v-model="selectedOptions" :options="options" :multiple="true"
            @change="handleCascaderChange"></el-cascader>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectedOptions: [],
            options: [
                {
                    value: "Fruits",
                    label: "Fruits",
                    children: [
                        {
                            value: "Apple",
                            label: "Apple",
                            children: [
                                {
                                    value: "Fuji",
                                    label: "Fuji"
                                },
                                {
                                    value: "Granny Smith",
                                    label: "Granny Smith"
                                }
                            ]
                        },
                        {
                            value: "Banana",
                            label: "Banana"
                        }
                    ]
                },
                {
                    value: "Vegetables",
                    label: "Vegetables",
                    children: [
                        {
                            value: "Carrot",
                            label: "Carrot"
                        },
                        {
                            value: "Tomato",
                            label: "Tomato"
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        handleCascaderChange(value) {
            // 只显示一个选项：移除多余选项
            if (value.length > 1) {
                value.splice(1)
            }
            // 更新选中值数组
            this.selectedOptions = value
        }
    }
}
</script>

<style  scoped>
.text {
    position: absolute;
    top: 0;
    border: 1px solid red;
    width: 100%;
    height: 100%;
    background: #fff;
}
</style>