<template>
    <div>
        <div style="
          width: 84%;
          margin: 0 16%;
          position: fixed;
          top: 0px;
          height: 50px;
          background-color: #e6e6e6;
          line-height: 50px;
          text-indent: 1em;
        ">
            <span style="font-size: 14px">在文档中查找</span>
            <input type="text" @input="search" placeholder="输入要搜索的文本" style="
            width: 300px;
            height: 32px;
            box-sizing: border-box;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-size: 12px;
            margin-right: -5px;
            vertical-align: middle;
          " v-model="searchText" />
            <button style="
            border-radius: 5px;
            border: 1px solid #ccc;
            width: 120px;
            height: 32px;
            box-sizing: border-box;
            background-color: #fff;
            font-size: 12px;
            margin-top:1px
          ">
                {{ num === 0 ? "没有任何结果" : indexNum + 1 + "/" + num }}
            </button>
            <i class="el-icon-arrow-left" style="cursor: pointer" @click="prev">上一个</i>
            <i class="el-icon-arrow-right" style="cursor: pointer" @click="next">下一个</i>
            <!-- <i style="cursor: pointer; font-weight: 700" @click="prev">&lt;</i>
            <i style="cursor: pointer; font-weight: 700" @click="next">&gt;</i> -->
        </div>
        <div class="main">
            <div></div>

            <ul class="left-tools">
                <li class="title">钢联数据智能版帮助手册</li>
                <li v-for="item in menu" :key="item.id" :class="item.class" style="cursor: pointer;">
                    <i :class="showArr.indexOf(item.index) === -1 ? 'select' : 'selected'" @click="select(item)"
                        v-if="item.index != undefined"></i>
                    <a :class="item.id == index + 'a' ? 'active' : ''" v-if="showArr.indexOf(item.father) != -1 ||
                        item.class == 'first-title-left'
                        " @click="goback(item.href)">{{ item.name }}</a>
                </li>
            </ul>
            <div class="container">
                <div style="height: 50px; width: 100%"></div>
                <h3 class="first-title" id="1">一、钢联数据智能版产品介绍</h3>
                <p class="content">
                    <span>钢联数据智能版，依托多维的数据采集和智能分析体系,构建大宗商品以及上下游产业的大数据体系,并不断深层演化应用,为产业及金融客户提供决策支持。
                        目前，钢联数据智能版拥有行业数据、资讯、报告、品种深度资料、宏观、期货等六大内容模块，以及Excel插件、搜索等功能性模块，并努力打造成为以数据、资讯、报告为基础，大宗商品及相关金融资产价格分析模型为核心
                        ，人工智能技术为驱动引擎的综合性研究平台。</span>
                </p>
                <h3 class="first-title" id="2">二、行业数据</h3>
                <p class="content">
                    <span>行业数据模块拥有42个巨型大宗商品行业数据库，169万+条数据指标，4亿2000万条数据，
                        4万多家行业样本采集企业，日更新量达20万条。</span>
                </p>
                <h3 class="second-title" id="3">1.查找指标和提取指标</h3>
                <p class="content">
                    <span>(1)从首页左侧目录进入行业数据</span><br />
                    <br />
                    <span>(2)通过左侧目录树查找指标（左侧目录树宽度可自由调节）。双击指标，将指标添加到待选区。点击提取按钮，提取数据。</span>

                </p>
                <h3 class="second-title" id="4">2.选择日期范围</h3>
                <p class="content">
                    <span>点击日期选择框，可以设置提取指标的日期范围（默认为所有数据日期）和日期格式。
                        日期范围的设置方式有以下几种：</span>
                    <br />
                    <span>1)直接快捷选择最近一个季度、最近半年、最近一年、最近三年或最近五年，点击确定生效</span>
                    <span>2)在“高级设置”里选择日期范围为最近N个日、周、月、年、观测值</span>
                    <span>3)在“高级设置”里将日期设置为从一个特定日期开始至今，或从第一个数据日期开始到一个特定日期</span>
                    <span>4)在“高级设置”里将日期设为农历日期</span><br />
                </p>
                <h3 class="second-title" id="5">3.指标计算</h3>
                <p class="content">
                    <span>钢联数据智能版支持对单条指标在时间序列上的各种处理及运算。</span><br />
                    <span>(1)变频。</span><br />
                    <span>钢联数据智能版的主要数据频率包括日、周、月、季、半年、年。可以通过变频功能，将选中的指标（允许多条）从当前数据频率到其它频率的转换。</span><br />
                    <span>从高频往低频变，可选方式有分拆和复制。</span><br />
                    <span>从低频往高频变，可选方式有合计、平均、第一条、最后一条、最大值、最小值和第N条。</span><br />
                    <span>（图：将一条日度指标以平均值的方式变频为周度指标）</span><br />
                    <span>(2)同环比计算。</span><br />
                    <span>钢联数据智能版允许对指标进行同比和环比计算。</span><br />

                    <span>在同比和环比计算时，可选择百分比变化、数据变化和对数增长率这三种方式。</span><br />
                    <span>其中，在选择环比/数据变化时，可以勾选“限于当年”选项，用于将月累计数据拆解为月度数据。</span><br />
                    <span>(3)累计求和</span><br />
                    <span>例如可以根据某个品种的月度产量，计算其年度累计产量。</span>
                    <span>也可以计算其到到当年每个月的月均产量。</span>
                    <span>(4)修匀</span>
                    <br />
                    <span>对于上下波动比较大的数据指标，很难从图形上看出其趋势性方向。可以通过修匀计算，过滤掉细小且高频的波动，让趋势在图形上更明显。</span>
                    <br />
                    <span>修匀的方式包括中心化移动平均、指数修匀、移动平均等。</span>
                    <span>(5)指数化</span>
                    <br />
                    <span>如果要将多条数值差别很大指标在同一个图表里进行对比，可以先把它们进行指数化。这样它们的数值范围基本上在同一区间内，在图形上更容易看出相互之间走势的区别。</span>
                    <span>(6)单位转换</span>
                    <br />
                    <span>钢联数据智能版允许对指标的单位进行转换。</span>


                    <span>(7)季节性分析</span>
                    <br />
                    <span>钢联数据智能版允许对指标按照年度进行拆分，以方便查看不同年份同一时期的数值对比。</span>
                    <span>如果将日期形式改为农历，数据会按照不同年份的农历日期进行对齐，并且在图形上标注出春节的时间。</span>
                    <span>(8)调整列</span>
                    <br />
                    <span>调整列下面包含了一系列子功能，包括后置、补充区间、替换数据、区间求和、标准化等。这些功能往往和其它的指标计算功能配合使用，以满足更个性化的计算需求。</span>
                    <br />
                    <span>后置</span>
                    <br />
                    <span>后置可以对指标数据在时间维度上进行向前或向后移动。比如在指标从日度频率向周度频率变频时，钢联数据智能版默认的变频区间是从前一周的周六到这一周的周五。如果要让变频区间从前一周的周四到这一周的周三，可以先对指标进行后置2天的处理，再进行变频。</span>
                    <span>补充区间</span>
                    <br />
                    <span>补充区间可以补充数据里的空缺数据。补充的方式可以选择前一个观测值、前后平均值或后一个观察值，并且可选择是否忽略周末观察点。</span>
                    <span>标准化</span>
                    <br />
                    <span>钢联数据智能版可以对指标进行标准化处理。可选的方式包括在一个数值区间内进行标准化，或者将指标以均值=0，标准差=1的方式进行标准化。</span>
                </p>
                <h3 class="second-title" id="6">4.编辑公式</h3>
                <p class="content">
                    <span>编辑公式允许在多条指标间进行复合运算，也可以对单条指标的值进行函数处理。</span>
                    <br />
                    <span>(1)指标间的四则运算</span>
                    <br />
                    <span>钢联数据智能版允许对多个指标之间，或指标与常数之间，进行四则运算，并自定义结果名称。常数通过点击“Number”按钮输入。</span>
                    <span>(2)单指标函数</span>
                    <br />
                    <span>可以对单个指标的每个数值进行函数处理。处理的方式包括求绝对值（Abs）、指数（Exp）、自然对数（ln）、10为底的对数（Log10）、开方（Sqrt）等。</span>
                    <br />
                    <span>使用的方法是点击这些函数，然后在列表中选择要计算的指标。</span>
                    <span>(3)多指标函数</span>
                    <br />
                    <span>可以对多个指标间，求同一数据日期的平均值（Average）、最大值（Max）、最小值（Min）、中位数（Median）等。在使用这些函数时，要求参与计算的指标是同一频率的。如果原指标频率不同，首先需要通过变频转换为同一频率。</span>
                    <br />
                    <span>使用的方法是点击这些函数，然后在列表中选择要计算的指标。</span>
                    <span>(4)指标拼接</span>
                    <br />
                    <span>可以通过“编辑公式”里的“Union”函数，将不同的指标按照不同的时间段拼接成一条指标。</span>
                    <br />
                    <span>例如要计算某个商品的税前价格，原始指标是含税价，而增值税率在过去几年又发生过多次变更。这时就需要按照不同的税率来分别计算税前价，再按照税率变动的时间点，将分别计算出的税前价拼接成一条指标。</span>
                    <span>(5)删除和插入</span>
                </p>
                <h3 class="second-title" id="7">5.图形设置</h3>
                <p class="content">
                    <span>点击界面上的“图形”页签，可以查看已提取指标的图形</span><br />
                    <span>(1)线型和颜色设置</span><br />
                    <span>点击上方工具栏的线型选择，可以对所有指标切换到统一的线型。</span><br />
                    <span>如果要对某一条指标单独设置线型，可以在右边栏展开这条指标的图例设置，单独选择其线型。在图例设置中，也可以为这条指标选择颜色。</span><br />
                    <span>(2)左右轴设置</span><br />
                    <span>在图例设置中，可以设置这条指标是显示在左轴还是右轴。</span><br />
                    <span>(3)坐标轴设置</span><br />
                    <span>横坐标设置</span><br />
                    <span>可以在右边栏-坐标轴对横坐标的形式进行设置，也可以直接点击横坐标进入到横坐标设置界面。</span><br />
                    <span>横坐标的主要设置包括：标签步长、标签位置、刻度线位置、正序/逆序日期，以及文本样式等。</span><br />
                    <span>纵坐标设置</span><br />
                    <span>可以在右边栏-坐标轴对横坐标的形式进行设置，也可以直接点击纵坐标进入到纵坐标设置界面。</span><br />
                    <span>(4)标题设置</span><br />
                    <span>可以在右边栏-标题下为图形配置标题</span><br />
                    <span>(5)指标右键菜单</span><br />
                    <span>可以在指标上点击右键，在右键菜单上对图形进行快速设置</span><br />
                    <span>(6)其它功能</span><br />
                    <span>点击右上角的“全屏显示”，可以在全屏进行图形编辑。</span><br />
                    <span>点击上方的“高低点”、“最新数值”，可以在图形上显示最高、最低点和最新的数据。</span><br />
                    <span>在上方工具栏中，可以对图表内的所有文字的格式进行设置，并设置图形的网格线。</span><br />
                    <span>在“主题”设置中可以设置图形的主题，以及四边的边距。</span><br />
                    <span>图表做完后，可以选择下载图形或将图形导出到PPT、Excel中。</span><br />
                </p>
                <h3 class="second-title" id="8">6.收藏和导出</h3>
                <p class="content">
                    <span>从数据库里挑选的指标、自定义计算的指标，以及对图形设置，都可以通过收藏功能保存起来，以方便下次快速提取使用。也可以下载到Excel表里。</span>
                    <br />
                    <span>(1)指标收藏</span>
                    <br />
                    <span>在指标收藏功能里选择“指标收藏”，收藏后的指标保存于左侧目录“我的指标”下。指标收藏只保存指标，不保存图形设置。同一批收藏的指标，每一条都可以单独提取使用。</span>
                    <span>(2)模板收藏</span>
                    <br />
                    <span>在指标收藏功能里选择“收藏为模板”，收藏后的模板保存于左侧目录“我的模板”下。模板收藏可以将多条指标打包收藏，并且保存收藏时的日期和图形设置。模板里的指标不能单独提取，只能以一个模板整体提取。</span>
                    <span>(3)导出</span>
                    <br />
                    <span>数据提取后，可以点击“导出数据”按钮，将数据导出到Excel中。在导出时，可以在设置中选择指标的行列排列方式，日期的升降序、表头包含的元素，以及是否要自动显示图形。</span>

                </p>
                <h3 class="second-title" id="9">7.其它功能</h3>
                <p class="content">
                    <span>为了方便使用，钢联数据智能版还提供了一些便捷功能。</span><br />
                    <span>(1)新上指标提醒</span><br />
                    <span>钢联数据智能版一直在不断地补充新数据源。可以点击“新上指标”指标按钮，第一时间看到近期的新增指标的目录位置和简要描述。</span><br />
                    <span>(2)黑色数据地图</span><br />
                    <span>在黑色数据库下，点击左侧“数据地图”，可以调出与左侧目录树联动的可视化的数据目录，以产业链上下游的关系，更清晰的展现目录框架的逻辑。</span><br />
                    <span>(3)隐藏/显示停更指标</span><br />
                    <span>有部分指标因数据源原因，无法继续更新，但依旧呈现在数据目录中。如果要隐藏掉已停更的指标，可以勾选目录树上方的“不显示停更指标”的勾选项。</span><br />
                    <span>(4)数据库shift、ctrl多选</span><br />
                    <span>除了在左侧目录树上双击某条指标进行添加外，还可以通过键盘shift或ctrl进行连续或不连续地多选，再通过右键菜单里的“添加指标”或“提取指标”来添加或直接提取指标。</span><br />
                    <span>(5)指标更新提醒</span><br />
                    <span>可以通过右键菜单，设置某一条指标的更新提醒。已设置更新提醒的指标，列在消息中心里。可以点击消息中心，查看和管理已设置提醒的指标。</span><br />
                    <span>已设置提醒的指标一旦更新，界面右下角会立刻弹出提示框。</span><br />
                    <span>(6)编辑指标名称和注释</span><br />
                    <span>可以添加指标后双击指标名称，进行自定义编辑，并可通过右键菜单添加注释。</span><br />
                    <span>(7)指标定位</span><br />
                    <span>可以通过指标待选区的右键菜单-指标定位，让程序自动在数据目录里找到这条指标。</span><br />

                </p>
                <h3 class="first-title" id="10">三、指标搜索</h3>
                <p class="content">
                    <span>钢联数据智能版提供指标搜索功能。可以通过搜索指标的关键词或指标编码，来找到对应的指标。</span>
                </p>
                <h3 class="second-title" id="11">1.关键词搜索</h3>
                <p class="content">
                    <span>可以通过在搜索框内输入一个或多个关键词，点击搜索按钮，来找到和这些关键词匹配的指标。</span>
                    <span>如果要缩小搜索范围，在上方高级筛选里选择所需的条件</span>
                    <span>勾选指标，并点击“添加指标”或“提取数据”，指标就可以被添加或提取了。同时左侧目录也会自动展开到这条指标的位置。</span>

                </p>
                <h3 class="second-title" id="12">2.指标编码搜索</h3>
                <p class="content">
                    <span>除了关键词搜索，钢联数据智能版也支持指标编码的搜索。可以输入一个或多个指标编码（多个指标编码之间用空格隔开）。</span><br />

                    <span>指标编码搜索不仅支持智能版指标编码的搜索，也支持用经典版指标编码搜对应的智能版指标。</span><br />

                </p>
                <h3 class="first-title" id="13">四、Excel插件</h3>
                <p class="content">
                    <span>导出到Excel的指标可以通过Excel插件进行更新。Excel插件中也提供相应的功能，可以直接使用钢联数据智能版终端里的数据库，并且将已导出的指标在数据库中进行回查。</span>
                </p>
                <h3 class="second-title" id="14">1.Excel插件的安装和登录</h3>
                <p class="content">
                    <span>钢联数据智能版终端安装后，系统会自动安装Excel插件。</span><br />
                    <span>安装后，如果在打开Excel时，钢联数据智能版终端处于登录状态，插件会自动登录，否则需要点击登录。</span>

                </p>
                <h3 class="second-title" id="15">2.更新指标</h3>
                <p class="content">
                    <span>点击插件里“更新当前页”或“更新所有页”按钮，可以对表格数据进行刷新。其中“更新当前页”，只更新当前sheet；更新所有页，则会更新这个Excel文件里的所有sheet。</span>

                </p>
                <h3 class="second-title" id="16">3.回查指标和查看数据库</h3>
                <p class="content">
                    <span>如果要在当前sheet里移除某一条指标，或增加新的指标，可以在选择表头红色黑体的“钢联数据”单元格后，点击“回查指标”，已添加的指标会回填到一个mini版数据库界面中。可以在这个界面中重新选择指标，并重新导入到当前位置。</span>
                    <br />

                    <span>也可以在一个空sheet页点击“查看数据库”，从数据库中直接找到并添加指标。</span>

                </p>
                <h3 class="second-title" id="17">4.日期升降序</h3>
                <p class="content">
                    <span>在插件中，可以在选择表头红色黑体的“钢联数据”单元格后，对指标的日期排序方式（升序/降序）直接进行设置。</span>

                </p>
                <h3 class="second-title" id="18">5.检查异常指标</h3>
                <p class="content">
                    <span>点击“检查异常指标”，可以对当前页或所有页无法继续更新的指标进行检查，包括停更的指标和下线的指标。</span><br />
                    <span>如果存在异常指标，系统会打开一个日志文件，标注有异常指标的名称、编码以及在Excel文件中的位置。</span><br />

                </p>
                <h3 class="first-title" id="19">五、资讯</h3>
                <p class="content">
                    <span>资讯功能中为实时更新的大宗商品行业价格信息，库存信息以及新闻等内容，资讯对各类内容进行了分类，同时提供资讯的时间等筛选功能。</span>

                    <span>(1)为资讯菜单栏，为资讯的相关相关分类。</span><br />
                    <span>(2)为设置资讯展现栏，可以设置每页展示的资讯数量和排列方式。</span><br />
                    <span>(3)为“高级筛选”，可以根据大宗商品的品种和资讯的发布时间进行筛选。</span><br />
                    <span>(4)为资讯的展示区域，展现的为资讯的概览，点击可以进入资讯的详情页面。</span><br />
                    <span>(5)为用户点击量最高的资讯关键字，点击关键字可以将资讯展示范围设定为包含关键字的文章。</span><br />
                    <span>(6)“热门为文章”为当天点击量的资讯排行，“文章排行”为当月点击量资讯排行。</span><br />

                    <span>上图所示为“高级筛选”的展开样式，在其中可以进行行业，时间的筛选。</span>
                </p>

                <h3 class="first-title" id="20">六、研报</h3>
                <p class="content">

                    <span>(1)为研报菜单栏，为研报的相关相关分类</span>
                    <span>(2)为设置研报展现栏，可以设置每页展示的研报数量和排列方式</span>
                    <span>(3)为“高级筛选”，可以根据大宗商品的品种和研报的发布时间进行筛选</span>
                    <span>(4)为研报的展示区域，展现的为研报的概览，点击可以进入研报的详情页面</span>
                    <span>(5)为用户点击量最高的研报关键字，点击关键字可以将研报展示范围设定为包含关键字的文章</span>
                    <span>(6)为“热门为文章”为当天点击量的研报排行，“文章排行”为当月点击量研报排行。</span>


                    <span>上图所示为“高级筛选”的展开样式，在其中可以进行品种，时间的筛选。</span><br />
                </p>
                <h3 class="first-title" id="21">七、海关数据</h3>
                <p class="content">
                    <span>钢联数据智能版提供海关数据的查询、聚合统计和导出功能。</span>
                </p>
                <h3 class="second-title" id="22">1.进入海关数据</h3>
                <p class="content">
                    <span>海关数据的入口在顶部菜单-数据-海关</span><br />

                </p>
                <h3 class="second-title" id="23">2.数据查询</h3>
                <p class="content">
                    <span>海关数据下有两个子功能：数据查询和数据统计。</span><br />
                    <span>其中数据查询是对海关数据表按照不同的维度进行筛选和查询，包括品种维度、省市维度、区域维度、国别维度、洲别维度和贸易类型维度。</span><br />
                    <span>以品种维度为例，可选项包括日期选择、时间展现、品种颗粒度、贸易方式、贸易类型和货币类型。</span><br />
                    <span>选择了所需的可选项后，点击“提取数据”，可以将结果数据呈现在页面上。也可以点击“导出”，将数据导出到Excel表格中。</span><br />
                    <span>(1)日期选择</span><br />
                    <span>日期选择包括时间范围和数据频率。频率包括原始的月度频率或年度聚合。</span><br />

                    <span>(2)时间展现</span><br />
                    <span>时间展现可以选择时间序列（每个数据日期都是一行），或区间统计（只显示一个统计行）。</span><br />

                    <span>(3)品种颗粒度</span><br />
                    <span>品种颗粒度从细到粗分别是税则号、细分品种和钢材分类</span><br />

                    <span>区间统计还可以选择按大类展示所有品种的数据。</span><br />

                    <span>(4)贸易方式</span><br />
                    <span>贸易方式分出口、进口，以及进出口合计。</span><br />

                    <span>(5)贸易类型</span><br />
                    <span>贸易类型有两类，分别是海关和国别，以及省市贸易类型。</span><br />
                    <span>其中“海关和国别”，可以选择国内海关及境外国家或地区；“省市贸易类型”，可以选择国内省市和贸易类型</span><br />
                    <span>其中国内海关及境外国家或地区、国内省市和贸易类型，其中可以选择一个进行多选，另一个进行单选。多选选项最多可以选5个，支持模糊搜索。不选的效果等同于全选。</span><br />
                    <span>(6)货币类型</span><br />
                    <span>可以选择货币类型为美元或是人民币。</span><br />
                    <span>(7)其它查询维度</span><br />
                    <span>其它查询维度的操作方式与品种维度类似，只是最终呈现的结果所统计的维度不同。用户可以根据自身的需求，选择适合的查询维度。</span><br />
                    <span>例如按省市分组：</span><br />

                </p>
                <h3 class="second-title" id="24">3.数据统计</h3>
                <p class="content">
                    <span>钢联数据智能版将一些常用的海关数据查询结果直接呈现出来，免除了每次都要输入查询条件的麻烦。</span><br />
                    <span>数据统计包括以下几个模块</span><br />
                    <span>(1)进出口数据统计图表</span><br />
                    <span>进出口统计图表以图表的方式，呈现
                        出某个品种当月进口量、当月出口量、出口累计值和净出口量的分年对比。</span><br />

                    <span>(2)进出口变化统计图表</span><br />
                    <span>
                        进出口变化统计图表是以一个表格的形式，全景呈现一个品种下的各个子品种在某个月的进出口情况，并且可以通过一个日期选择框切换月份。
                        出某个品种当月进口量、当月出口量、出口累计值和净出口量的分年对比。</span><br />

                    <span>(3)数据监控</span><br />
                    <span>
                        数据监控可以自由选择所要关注的品种的进出口数据，并以图表的形式呈现。可以选择多个品种在一张图上，也可以选择每个品种单独一张图。
                        出某个品种当月进口量、当月出口量、出口累计值和净出口量的分年对比。</span><br />
                    <span>
                        已添加图表可以调整位置或删除。
                        出某个品种当月进口量、当月出口量、出口累计值和净出口量的分年对比。</span><br />
                </p>
                <h3 class="first-title" id="25">八、品种深度资料</h3>
                <p class="content">
                    <span>钢联数据智能版为主要的钢铁及上下游品种建立了品种深度资料页面。入口位置在顶部导航分析-商品下面。</span><br />

                    <span>每个品种的深度资料结构类似，都是以品种资料、价格行情、供需分析、成本利润几个方面展开每个品种的价格和供需基本面的历史和现状。下面就以螺纹钢为例，介绍品种深度资料的内容。</span>
                </p>
                <h3 class="second-title" id="26">1.首页</h3>
                <p class="content">
                    <span>首页是这个品种深度资料的综合页面，包括价格、生产、消费、库存、成本利润、供需统计等。-商品下面。</span><br />

                    <span>对应每个图表来说，可以设置图表的显示时长、高低点、警戒线、折线图和面积图切换，以及全屏显示等功能。</span>

                </p>
                <h3 class="second-title" id="27">2.品种资料</h3>
                <p class="content">
                    <span>品种资料分品种介绍和生产工艺两部分。-商品下面。</span><br />
                    <span>其中品种介绍分产品介绍和成分介绍。</span>

                    <span>生产工艺包括工艺流程的文字介绍和流程图。</span>
                </p>
                <h3 class="second-title" id="28">3.价格行情</h3>
                <p class="content">
                    <span>价格行情分现货价格和期货价格。</span><br />
                    <span>现货价格分价格分析和价差分析。其中价格分析的图表可以自定义选择选择要进行对比的指标。价差分析包括区域价差分析和进出口价差分析。</span>

                </p>
                <h3 class="second-title" id="29">4.供需分析</h3>
                <p class="content">
                    <span>供需分析包括生产与消费、进口与出口、品种库存等几个子栏目。</span>

                </p>
                <h3 class="second-title" id="30">5.成本利润</h3>
                <p class="content">
                    <span>成本利润板块，包括了这个品种不同工艺路线的利润和利润的季节性走势。</span>

                </p>
                <h3 class="first-title" id="31">九、宏观</h3>
                <p class="content">
                    <span>钢联数据智能版提供宏观经济的数据和图表分析。</span>
                </p>
                <h3 class="second-title" id="32">1.进入宏观板块</h3>
                <p class="content">
                    <span>宏观板块的入口在顶部导航分析-宏观下</span>

                </p>
                <h3 class="second-title" id="33">2.总览</h3>
                <p class="content">
                    <span>总览是宏观板块的综合页面，包括重要经济指标监测、汇率和利率数据以及快讯、财经日历、经济速览的近期内容和入口。</span>

                </p>
                <h3 class="second-title" id="34">3.宏观经济概览</h3>
                <p class="content">
                    <span>宏观经济概览包括一系列宏观经济数据图表，包括中国宏观经济概览、全球宏观经济概览和商品宏观经济概览，并打通行业数据板块，方便快速提取添加、提取指标。</span>
                    <span>可以通过在宏观页面点击左侧的“宏观经济速览”进入。</span>

                </p>
                <h3 class="first-title" id="35">十、期货</h3>
                <p class="content">
                    <span>钢联数据智能版提供和期货相关的数据和分析。</span>
                </p>
                <h3 class="second-title" id="36">1.进入期货板块</h3>
                <p class="content">
                    <span>在顶部导航-分析下可以找到期货板块的入口。</span>

                </p>
                <h3 class="second-title" id="37">2.品种涨跌幅和持仓变化率图</h3>
                <p class="content">
                    <span>在进入期货板块首页“市场总览”，后会出现一个散点图，标注了所有期货上市品种近期的价格和持仓变化，并可以自主选择时间周期和品种范围。</span>

                </p>
                <h3 class="second-title" id="38">3.基差表</h3>
                <p class="content">
                    <span>在期货板块首页，可以在列表上看到主要期货上市品种的最新的基差情况。点击某个品种，可以展开图表，了解这个品种历史上基差的变化。</span>

                </p>
                <h3 class="second-title" id="39">4.远期曲线</h3>
                <p class="content">
                    <span>点击“
                        品种涨跌幅和持仓变化率图”上的品种，可以进入远期曲线和基差表页面。
                        远期曲线反映了一个期货上市品种各个合约间的价差关系，并支持对不同日期的远期曲线进行对比。</span>

                </p>
                <h3 class="second-title" id="40">5.龙虎榜</h3>
                <p class="content">
                    <span>期货板块可以对每个品种的各期货公司持仓进行统计和分析。</span>
                    <br />
                    <span>选择不同的日期和合约，可以查看期货公司成交量、多单持仓量、空单持仓量的数值和排名。</span>

                </p>
                <h3 class="first-title" id="41">十一、系统功能</h3>
                <p class="content">
                    <span>钢联数据智能版还提供了一些系统功能，方便用户更好地使用终端，并向我们提出意见和建议。</span>
                </p>
                <h3 class="second-title" id="42">1.基本设置</h3>
                <p class="content">
                    <span>鼠标放在顶部导航个人账号处，会出现一个下拉菜单。点击菜单上的“基本设置”，进入基本设置板块。</span>
                    <br />
                    <span>在基本设置功能下，可以对登录、关闭、提示框以及数据目录进行选择。</span>

                </p>
                <h3 class="second-title" id="43">2.消息中心</h3>
                <p class="content">
                    <span>点击个人账号旁边的消息按钮，进入消息中心。</span>
                    <br />
                    <span>消息中心内可以维护数据更新提醒，以及查看系统消息。</span>

                </p>
                <h3 class="second-title" id="44">3.个人中心</h3>
                <p class="content">
                    <span>在个人账号下的下拉菜单里，有个人中心。可以显示账号的个人资料、权限和距离到期时间。</span>

                </p>
                <h3 class="second-title" id="45">4.问题反馈</h3>
                <p class="content">
                    <span>点击右下角红色的“我要吐槽”，可以向我们反馈您对于产品和功能的意见和建议。</span>

                    <span>在行业数据里，点击指标数据旁的问号，可以反馈数据的错误或缺漏。</span>
                </p>
                <h3 class="first-title" id="46">十二、常见问题处理方法</h3>
                <p class="content">
                    <span>(1)登录钢联数据终端，提示“机器码上限”或是“机器码被占用”</span>
                    <br />
                    <span>钢联数据帐号最多只能登录两台电脑，如已绑定两台电脑，无法再登录其它电脑，且帐号无法同时登录使用，如有机器码问题，建议联系客户经理或钢联数据客服热线。</span>
                    <br />
                    <span>(2)安装终端时，出现提示“访问权限”，无法安装。</span>

                    <span>查看是否安装防火墙或杀毒软件，建议在安装过程中，防火墙或杀毒软件提示“是否阻止访问”时，选择“允许”访问即可；如果没有安装此类软件，建议在安装时右击“以管理员身份运行”进行安装即可。</span>
                    <span>(3)EXCEL无“钢联数据2.0”插件。</span>
                    <br />
                    <span>通过钢联数据智能版终端进行数据插件修复即可，提示“已成功”弹框，即为修复成功。</span>
                    <br />
                    <span>操作路径：登录终端 —— 数据插件 —— 一键修复</span>

                    <span>查看是否有禁用项；</span>
                    <br />
                    <span>操作路径：EXCEL—— 文件 —— 选项 —— 禁用项；</span>

                    <span>查看是否有加载项；</span>
                    <br />
                    <span>操作路径：EXCEL —— 文件 —— 选项 —— 加载项；</span>

                    <span>(4)EXCEL插件数据无法更新。</span>
                    <span>查看插件中是否有批注；</span>
                    <span>核实数据提取量是否超限；</span>
                    <br />
                    <span>(5) 为什么停更的指标查看不了？</span>
                    <span>建议在“行业数据”中，“不显示停更指标”框，去掉勾选即可；</span>
                    <span>(6)重新下载钢联数据终端，收藏的指标如何保留？</span>
                    <br />
                    <span>同为智能版终端，不需要任何操作，收藏的指标同步与帐号同步</span><br />
                    <span>经典版终端转变为智能版终端，需要先通过经典版把收藏的指标，右击“导出”操作，再通过智能版“我的指标”右击进行“导入”操作</span><br />

                </p>
            </div>
        </div>
    </div>
</template>
  
<script>
import menu from "./menu.js";
export default {
    data() {
        return {
            menu: menu,
            scroll: "",
            index: 1,
            searchText: "",
            query: "",
            preQuery: "",
            indexNum: 0,
            num: 0,
            main: null,
            showArr: [],
            showIndex: 0,
        };
    },
    mounted() {
        // scroll代表滚动条距离页面顶部距离
        window.addEventListener("scroll", this.dataScroll);
        this.mian = document.querySelector(".container");
    },
    watch: {
        //监听scroll变量，只要滚动条位置变化就会执行方法loadScroll
        scroll: function () {
            this.loadScroll();
        },
    },
    methods: {
        goback(idName) {
            // console.log(document.getElementById(parseInt(idName.slice(1))));
            document.getElementById(parseInt(idName.slice(1))).scrollIntoView();
            // 因为搜索遮挡了50px 因此需要往上移动50px
            document.documentElement.scrollTop -= 50;
        },
        select(item) {
            this.showArr.indexOf(parseInt(item.index)) === -1
                ? this.showArr.push(parseInt(item.index))
                : this.showArr.splice(this.showArr.indexOf(item.index), 1);
            console.log(this.showArr);
        },
        search() {
            this.num = 0;
            this.indexNum = 0;
            this.query = this.searchText;
            // let main = document.querySelector(".container");
            let main = this.main || document.querySelector(".container");
            let innerHTML = main.innerHTML;
            // 每次搜索之前都需要将em替换回来，不然就会出现em里面套em的情况而导致em数量一直叠加
            let emReg1 = new RegExp('<em style="background-color: yellow">', "g");
            innerHTML = innerHTML.replace(emReg1, "");
            let emReg2 = new RegExp("</em>", "g");
            innerHTML = innerHTML.replace(emReg2, "");
            let emReg3 = new RegExp(
                '<strong style="background-color: #ff9632">',
                "g"
            );
            innerHTML = innerHTML.replace(emReg3, "");
            let emReg4 = new RegExp("</strong>", "g");
            innerHTML = innerHTML.replace(emReg4, "");
            // main.innerHTML = innerHTML;
            // 设置本次搜索背景色
            if (this.searchText != "") {
                // console.log(this.searchText);
                let reg = new RegExp(this.searchText, "g");
                innerHTML = innerHTML.replace(
                    reg,
                    '<em style="background-color: yellow">' + this.searchText + "</em>"
                );
            }
            // 替换配置
            main.innerHTML = innerHTML;
            this.getSearchList();
        },
        getSearchList() {
            // em标签都是被替换的 所以em标签的数量就是搜索到关键字的数量
            let num = document.getElementsByTagName("em").length;
            this.num = num;
            if (num != 0) {
                // 使用.style.background会出现em删不掉会一直叠加的情况 因此只能替换innerHTML
                document.getElementsByTagName("em")[0].innerHTML =
                    '<strong style="background-color: #ff9632">' +
                    this.searchText +
                    "</strong>";
                // 滚动到第一个关键字位置
                document.getElementsByTagName("em")[0].scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                });
                // 因为搜索遮挡了40px 因此需要往上移动40px
                document.documentElement.scrollTop -= 50;
            }
        },
        dataScroll: function () {
            this.scroll =
                document.documentElement.scrollTop || document.body.scrollTop;
        },
        // 用循环的方式将每个标题离顶部的距离与滚动条当前位置对比来确定哪个标题需要变为高亮
        loadScroll: function () {
            var self = this;
            var sections = document.getElementsByTagName("h3");
            for (var i = sections.length - 1; i >= 0; i--) {
                if (self.scroll + 50 >= sections[i].offsetTop) {
                    //所有的标题都是h3标签，因此可以使用i来进行定位内容对应的目录位置，从而设置样式
                    //   31460 31099  31059 30702
                    console.log(self.scroll, sections[i].offsetTop);
                    this.index = sections[i].id;
                    break;
                }
            }
        },
        // 下一个
        next() {
            console.log("627***")
            if (this.num != 0) {
                for (let i = 0; i < document.getElementsByTagName("em").length; i++) {
                    document.getElementsByTagName("em")[i].innerHTML = this.searchText;
                }
                if (this.indexNum == this.num - 1) {
                    this.indexNum = 0;
                } else {
                    this.indexNum = this.indexNum + 1;
                }
                document.getElementsByTagName("em")[this.indexNum].innerHTML =
                    '<strong style="background-color: #ff9632">' +
                    this.searchText +
                    "</strong>";
                document.getElementsByTagName("em")[this.indexNum].scrollIntoView();
                document.documentElement.scrollTop -= 50;
            }
        },
        // 上一个
        prev() {
            console.log("649***")
            if (this.num != 0) {
                for (let i = 0; i < document.getElementsByTagName("em").length; i++) {
                    document.getElementsByTagName("em")[i].innerHTML = this.searchText;
                }
                if (this.indexNum == 0) {
                    this.indexNum = this.num - 1;
                } else {
                    this.indexNum = this.indexNum - 1;
                }
                document.getElementsByTagName("em")[this.indexNum].innerHTML =
                    '<strong style="background-color: #ff9632">' +
                    this.searchText +
                    "</strong>";
                document.getElementsByTagName("em")[this.indexNum].scrollIntoView();
                document.documentElement.scrollTop -= 50;
            }
        },
        //移动关键字
        moveToSearch(step) {
            let searchVal = this.searchVal;
            if (!searchVal) return;
            if (this.searchNum != 0) {
                for (let i = 0; i < document.getElementsByTagName("em").length; i++) {
                    document.getElementsByTagName("em")[i].innerHTML = searchVal;
                }
                if (step === -1 && this.indexNum === 0) {
                    //上一步，处理临边值
                    this.indexNum = this.searchNum - 1;
                } else if (step === 1 && this.indexNum === this.searchNum - 1) {
                    //下一步，处理临边值
                    this.indexNum = 0;
                } else {
                    this.indexNum = this.indexNum + step;
                }
                document.getElementsByTagName("em")[this.indexNum].innerHTML =
                    '<em class="currentSearchWord">' +
                    searchVal +
                    "</em>";
                document.getElementsByTagName("em")[this.indexNum].scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                });
                let currentTags = document.getElementsByClassName("currentSearchWord")[0];
                if (currentTags) {
                    currentTags.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    })
                }

            }
        },

    },
};
</script>
  
<style scoped>
.left-tools {
    position: fixed;
    height: 100vh;
    width: 16%;
    padding: 0 0 0 2vw;
    overflow: auto;
    box-sizing: border-box;
    border-right: 1px solid rgba(0, 0, 0, 0.4);
}

.title {
    color: #000;
    font-size: 20px;
    font-weight: bold;
    margin: 0.5em 0;
    text-indent: 1em;
}

.first-title-left {
    font-size: 18px;
    font-weight: bold;
    height: 5vh;
    line-height: 5vh;
}

.first-title-left a {
    color: rgba(0, 0, 0, 0.7);
}

.second-title-left {
    font-size: 16px;
    font-weight: bold;
    line-height: 4vh;
    text-indent: 1em;
}

.second-title-left a {
    height: 4vh;
    color: rgba(0, 0, 0, 0.7);
}

.container {
    width: 60%;
    height: 100%;
    margin: 0 22%;
}

.first-title-left .active {
    color: blue;
}

.second-title-left .active {
    color: blue;
}

.first-title {
    font-size: 22px;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    color: #000;
}

.second-title {
    font-size: 18px;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    color: rgba(0, 0, 0, 0.7);
}

.content span {
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    color: rgba(0, 0, 0, 1);
    text-indent: 2em;
    display: inline-block;
}

.selected {
    display: inline-block;
    width: 10px;
    height: 10px;
    /* background: url("../assets/selected.png"); */
}

.select {
    display: inline-block;
    width: 10px;
    height: 10px;
    /* background: url("../assets/select.png"); */
}
</style>
  
<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

a {
    text-decoration: none;
}

p,
h3 {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

img {
    max-width: 100%;
    display: block;
    margin: 6px auto;
}

input {
    /*去除阴影*/
    box-shadow: none;
    /*聚焦input的蓝色边框*/
    outline: none;
    /*textarea 禁止拖拽*/
    resize: none;
    /*去除边框*/
    border: none;
    /*常用于IOS下移除原生样式*/
    -webkit-appearance: none;
    /*点击高亮的颜色*/
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

button {
    border: none;
    background-color: transparent;
    outline: none;
}

html::-webkit-scrollbar {
    width: 16px;
    height: 1px;
}

html::-webkit-scrollbar-track {
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    background: #f7f7f7;
}

html::-webkit-scrollbar-thumb {
    border-radius: 16px;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.2);
    background: #384971;
}
</style>