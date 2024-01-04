const data = [{
    WorkStation: "DIFF_UPOLY",
    Wip: '区域A-类型1-数据1',
    RunWip: '区域A-类型2-数据1',
    WaitWip: '区域A-类型3-数据1',
    HlodWip: '区域A-类型4-数据1',
    StageWip: '区域A-类型5-数据1',
    WithoutHoldRunRatio: '区域A-类型6-数据1',
    WithoutStageRunRatio: '区域A-类型7-数据1',
    Hour1: '区域A-类型8-数据1',
}, {
    WorkStation: "DIFF_UPOLY",
    Wip: '区域A-类型1-数据2',
    RunWip: '区域A-类型2-数据2',
    WaitWip: '区域A-类型3-数据2',
    HlodWip: '区域A-类型4-数据2',
    StageWip: '区域A-类型5-数据2',
    WithoutHoldRunRatio: '区域A-类型6-数据2',
    WithoutStageRunRatio: '区域A-类型7-数据2',
    Hour1: '区域A-类型8-数据1',
},
];

// 字段名到分类名称的映射
const fieldToNameMap = {
    Wip: "TotaI WIP",
    RunWip: "Run WIP",
    WaitWip: "Wait WIP",
    HlodWip: "Hlod WIP",
    StageWip: "Stage WIP",
    WithoutHoldRunRatio: "Run%",
    WithoutStageRunRatio: "Run% w/o hold",
    Hour1: "Run% w/o hold lmpact by Wait"
};
let array = [];
for (let i = 0; i < data.length; i++) {

    console.log(data[i])

    array.push({
        areaname: data[i].WorkStation,
        typeDataList: Object.entries(data[i])
            // 筛选出需要处理的字段（排除 WorkStation）
            .filter(([key]) => key !== "WorkStation")
            // 转换为目标格式的数组元素
            .map(([key, value]) => (
                {
                    name: fieldToNameMap[key],
                    contents: [value]
                }
            ))
    })
}
console.log(array)

// 原始数组
const originalArray = [
    {
        WorkStation: "DIFF_UPOLY",
        Wip: '区域A-类型1-数据1',
        RunWip: '区域A-类型2-数据1',
        WaitWip: '区域A-类型3-数据1',
        HlodWip: '区域A-类型4-数据1',
        WaitWip: '区域A-类型5-数据1',
        WithoutHoldRunRatio: '区域A-类型6-数据1',
        WithoutStageRunRatio: '区域A-类型7-数据1',
        Hour1: '区域A-类型8-数据1',
    },
    {
        WorkStation: "DIFF_UPOLY",
        Wip: '区域A-类型1-数据2',
        RunWip: '区域A-类型2-数据2',
        WaitWip: '区域A-类型3-数据2',
        HlodWip: '区域A-类型4-数据2',
        StageWip: '区域A-类型5-数据2',
        WithoutHoldRunRatio: '区域A-类型6-数据2',
        WithoutStageRunRatio: '区域A-类型7-数据2',
        Hour1: '区域A-类型8-数据2',
    },
];

// 将原始数组转换为新的数组对象
const newArrayObject = originalArray.reduce((result, item) => {
    // 循环遍历当前元素的所有属性
    for (const [key, value] of Object.entries(item)) {

        // 查找与当前属性名相同的 name 值
        const index = result.typeDataList.findIndex((t) => t.name === key);
        // 如果找到，则将该属性值添加到对应的 contents 数组中
        if (index !== -1) {
            result.typeDataList[index].contents.push(value);
        }
        // 否则，创建一个新的对象，并将属性名和属性值添加到该对象中
        else {

            const newObj = { name: key, contents: [value] };

            result.typeDataList.push(newObj);
        }
    }
    return result;
}, { typeDataList: [] });

console.log(newArrayObject);

let newObj = {
    typeDataList: [
        { name: 'WorkStation', contents: ['DIFF_UPOLY', 'DIFF_UPOLY'] },
        { name: 'Wip', contents: ['区域A-类型1-数据1', '区域A-类型1-数据2'] },
        { name: 'RunWip', contents: ['区域A-类型2-数据1', '区域A-类型2-数据2'] },
        { name: 'WaitWip', contents: ['区域A-类型5-数据1', '区域A-类型3-数据2'] },
        { name: 'HlodWip', contents: ['区域A-类型4-数据1', '区域A-类型4-数据2'] },
        {
            name: 'WithoutHoldRunRatio',
            contents: ['区域A-类型6-数据1', '区域A-类型6-数据2']
        },
        {
            name: 'WithoutStageRunRatio',
            contents: ['区域A-类型7-数据1', '区域A-类型7-数据2']
        },
        { name: 'Hour1', contents: ['区域A-类型8-数据1', '区域A-类型8-数据1'] },
        { name: 'StageWip', contents: ['区域A-类型5-数据2'] }]
}
console.log(newObj)
const updatedTypeDataList = newObj.typeDataList.filter((item) => {
    return item.name !== 'WorkStation';
});

console.log(updatedTypeDataList);