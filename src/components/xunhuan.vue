<template>
    <div class="main">
        <el-table :data="tableData" :span-method="objectSpanMethod" style="width: 100%">
            <el-table-column v-for="item in tableColumn" :key="item.prop" :prop="item.prop" :label="item.label"
                min-width="180" />
        </el-table>
        <template #default="scope">
            <div>
                <el-button @click="handle(scope.row)"></el-button>
            </div>
        </template>
        <el-dialog v-model="false">
            <div>主体内容</div>
            <template #footer>
                <div>
                    <el-button>确定</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>
  
<script>
export default {
    components: {},
    mixins: [],
    props: {},
    data() {
        return {
            tableColumn: [
                { prop: 'School', label: '学校', Name: '张三' },
                { prop: 'Grade', label: '年级', Name: '张伟' },
                { prop: 'Class', label: '班级', Name: '李四' },
                { prop: 'Name', label: '姓名', Name: '王五' },
                { prop: 'Chinese', label: '中文', Name: '赵六' },
                { prop: 'Math', label: '数学', Name: '陈九' },
                { prop: 'English', label: '英文', Name: '黄十' }
            ],
            tableData: [
                { School: '第一小学', Grade: '1年级', Class: '1班', Name: '张三', Chinese: '90', Math: '100', English: '80' },
                { School: '第一小学', Grade: '1年级', Class: '1班', Name: '张伟', Chinese: '90', Math: '99', English: '89' },
                { School: '第一小学', Grade: '1年级', Class: '2班', Name: '李四', Chinese: '90', Math: '85', English: '80' },
                { School: '第一小学', Grade: '1年级', Class: '3班', Name: '王五', Chinese: '79', Math: '100', English: '80' },
                { School: '第一小学', Grade: '2年级', Class: '1班', Name: '赵六', Chinese: '95', Math: '100', English: '80' },
                { School: '第一小学', Grade: '2年级', Class: '2班', Name: '钱八', Chinese: '98', Math: '85', English: '80' },
                { School: '第一小学', Grade: '2年级', Class: '3班', Name: '陈九', Chinese: '79', Math: '100', English: '100' },
                { School: '第一小学', Grade: '3年级', Class: '1班', Name: '黄十', Chinese: '91', Math: '88', English: '80' },
                { School: '第一小学', Grade: '3年级', Class: '2班', Name: '魏一', Chinese: '90', Math: '86', English: '87' },
                { School: '第一小学', Grade: '3年级', Class: '3班', Name: '杨二', Chinese: '79', Math: '99', English: '80' },
                { School: '第二小学', Grade: '3年级', Class: '3班', Name: '袁零', Chinese: '79', Math: '99', English: '80' }
            ]
        }
    },
    computed: {
        // 获取所有单元格合并数据
        spanArr() {
            if (!this.tableColumn.length) return []
            const mergeCols = ['School', 'Grade', 'Class'] // 需要合并的列（字段）
            return this.getMergeCells(this.tableData, this.tableColumn, mergeCols)
        }
    },
    watch: {},
    created() { },
    mounted() { },
    destroyed() { },
    methods: {
        
        // 表数据合并
        // eslint-disable-next-line no-unused-vars
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            return this.spanArr[rowIndex][columnIndex]
        },
        getMergeCells(tableData, tableColumn, mergeCols) {
            const fields = tableColumn?.map(v => v.prop)
            const array = []

            if (!tableData?.length || !tableColumn?.length || !mergeCols?.length) return

            // 倒叙遍历行（方便统计合并列单元格数至最上方，避免表格塌陷）
            for (let row = tableData.length - 1; row >= 0; row--) {
                array[row] = []
                for (let col = 0; col < fields.length; col++) {
                    // 1.最后一行单元格不合并（初始无可对比数据）
                    // 2.不在指定列（mergeCols）的单元格不合并
                    // 3.空值不合并
                    if (row === tableData.length - 1 || !mergeCols.includes(fields[col]) || !tableData[row][fields[col]]) {
                        array[row][col] = [1, 1]
                        continue
                    }

                    // 4.数据相同但所属父级不一致的单元格不合并
                    const parentFields = mergeCols.slice(0, col) // 在指定合并列中找出所有父级
                    if (mergeCols.includes(fields[col]) && parentFields?.includes(fields[col - 1])) {
                        const currentParents = parentFields.map(field => tableData[row][field]) // 当前单元格所有父级
                        const nextRowParents = parentFields.map(field => tableData[row + 1][field]) // 下一行单元格所有父级
                        if (currentParents?.toString() !== nextRowParents?.toString()) {
                            array[row][col] = [1, 1]
                            continue
                        }
                    }

                    // 5.合并相同数据的单元格
                    if (tableData[row][fields[col]] === tableData[row + 1][fields[col]]) {
                        const beforeCell = array[row + 1][col]
                        array[row][col] = [1 + beforeCell[0], 1]
                        beforeCell[0] = 0
                        beforeCell[1] = 0
                    } else {
                        array[row][col] = [1, 1] // 否则不合并
                    }
                }
            }
            // console.log(array, 'array')
            return array
        }
    }
}
</script>
<style  scoped>
.main {
    width: 100%;
    height: 100%;
}
</style>
  
  