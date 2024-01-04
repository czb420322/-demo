const menu = [
    {
        name: "一、钢联数据智能版产品介绍",
        id: "1a",
        href: '#1',
        class: "first-title-left",
        noChild: true
    },
    {
        name: "二、行业数据",
        id: "2a",
        href: '#2',
        class: "first-title-left",
        index: 2
    },
    {
        name: "1.查找指标和提取指标",
        id: "3a",
        href: '#3',
        class: "second-title-left",
        father: 2
    },
    {
        name: "2.选择日期范围",
        id: "4a",
        href: '#4',
        class: "second-title-left",
        father: 2
    },
    {
        name: "3.指标计算",
        id: "5a",
        href: '#5',
        class: "second-title-left",
        father: 2
    },
    {
        name: "4.编辑公式",
        id: "6a",
        href: '#6',
        class: "second-title-left",
        father: 2

    },
    {
        name: "5.图形设置",
        id: "7a",
        href: '#7',
        class: "second-title-left",
        father: 2

    },
    {
        name: "6.收藏和导出",
        id: "8a",
        href: '#8',
        class: "second-title-left",
        father: 2

    },
    {
        name: "7.其它功能",
        id: "9a",
        href: '#9',
        class: "second-title-left",
        father: 2

    },
    {
        name: "三、指标搜索",
        id: "10a",
        href: '#10',
        class: "first-title-left",
        index: 3
    },
    {
        name: "1.关键词搜索",
        id: "11a",
        href: '#11',
        class: "second-title-left",
        father: 3

    },
    {
        name: "2.指标编码搜索",
        id: "12a",
        href: '#12',
        class: "second-title-left",
        father: 3

    },
    {
        name: "四、Excel插件",
        id: "13a",
        href: '#13',
        class: "first-title-left",
        index: 4
    },
    {
        name: "1.Excel插件的安装和登录",
        id: "14a",
        href: '#14',
        class: "second-title-left",
        father: 4
    },
    {
        name: "2.更新指标",
        id: "15a",
        href: '#15',
        class: "second-title-left",
        father: 4
    },
    {
        name: "3.回查指标和查看数据库",
        id: "16a",
        href: '#16',
        class: "second-title-left",
        father: 4
    },
    {
        name: "4.日期升降序",
        id: "17a",
        href: '#17',
        class: "second-title-left",
        father: 4
    },
    {
        name: "5.检查异常指标",
        id: "18a",
        href: '#18',
        class: "second-title-left",
        father: 4
    },
    {
        name: "五、资讯",
        id: "19a",
        href: '#19',
        class: "first-title-left",
    },
    {
        name: "六、研报",
        id: "20a",
        href: '#20',
        class: "first-title-left",
    },
    {
        name: "七、海关数据",
        id: "21a",
        href: '#21',
        class: "first-title-left",
        index: 7
    },
    {
        name: "1.进入海关数据",
        id: "22a",
        href: '#22',
        class: "second-title-left",
        father: 7
    },
    {
        name: "2.数据查询",
        id: "23a",
        href: '#23',
        class: "second-title-left",
        father: 7
    },
    {
        name: "3.数据统计",
        id: "24a",
        href: '#24',
        class: "second-title-left",
        father: 7
    },
    {
        name: "八、品种深度资料",
        id: "25a",
        href: '#25',
        class: "first-title-left",
        index: 8
    },
    {
        name: "1.首页",
        id: "26a",
        href: '#26',
        class: "second-title-left",
        father: 8
    },
    {
        name: "2.品种资料",
        id: "27a",
        href: '#27',
        class: "second-title-left",
        father: 8
    },
    {
        name: "3.价格行情",
        id: "28a",
        href: '#28',
        class: "second-title-left",
        father: 8
    },
    {
        name: "4.供需分析",
        id: "29a",
        href: '#29',
        class: "second-title-left",
        father: 8
    },
    {
        name: "5.成本利润",
        id: "30a",
        href: '#30',
        class: "second-title-left",
        father: 8
    },
    {
        name: "九、宏观",
        id: "31a",
        href: '#31',
        class: "first-title-left",
        index: 9
    },
    {
        name: "1.进入宏观板块",
        id: "32a",
        href: '#32',
        class: "second-title-left",
        father: 9
    },
    {
        name: "2.总览",
        id: "33a",
        href: '#33',
        class: "second-title-left",
        father: 9
    },
    {
        name: "3.宏观经济概览",
        id: "34a",
        href: '#34',
        class: "second-title-left",
        father: 9
    },
    {
        name: "十、期货",
        id: "35a",
        href: '#35',
        class: "first-title-left",
        index: 10
    },
    {
        name: "1.进入期货板块",
        id: "36a",
        href: '#36',
        class: "second-title-left",
        father: 10
    },
    {
        name: "2.品种涨跌幅和持仓变化率图",
        id: "37a",
        href: '#37',
        class: "second-title-left",
        father: 10
    },
    {
        name: "3.基差表",
        id: "38a",
        href: '#38',
        class: "second-title-left",
        father: 10
    },
    {
        name: "4.远期曲线",
        id: "39a",
        href: '#39',
        class: "second-title-left",
        father: 10
    },
    {
        name: "5.龙虎榜",
        id: "40a",
        href: '#40',
        class: "second-title-left",
        father: 10
    },
    {
        name: "十一、系统功能",
        id: "41a",
        href: '#41',
        class: "first-title-left",
        index: 11
    },
    {
        name: "1.基本设置",
        id: "42a",
        href: '#42',
        class: "second-title-left",
        father: 11
    },
    {
        name: "2.消息中心",
        id: "43a",
        href: '#43',
        class: "second-title-left",
        father: 11
    },
    {
        name: "3.个人中心",
        id: "44a",
        href: '#44',
        class: "second-title-left",
        father: 11
    },
    {
        name: "4.问题反馈",
        id: "45a",
        href: '#45',
        class: "second-title-left",
        father: 11
    },
    {
        name: "十二、常见问题处理方法",
        id: "46a",
        href: '#46',
        class: "first-title-left"
    },
]
export default menu;

