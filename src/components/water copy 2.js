/*
 * @Author: czb 2751470984@qq.com
 * @Date: 2022-12-30 16:37:00
 * @LastEditors: czb 2751470984@qq.com
 * @LastEditTime: 2023-01-03 09:05:05
 * @FilePath: \knowledgeGraph\src\components\water copy 2.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let watermark = {}

let setWatermark = (str,date) => {
    let id = '1.23452384164.123412416'

    if (document.getElementById(id) !== null) {
        document.body.removeChild(document.getElementById(id))
    }
         
    //创建一个画布
    let can = document.createElement('canvas')
    //设置画布的长宽
    can.width = 200
    can.height = 150

    let cans = can.getContext('2d')
    //旋转角度
    cans.rotate(-15 * Math.PI / 180)
    cans.font = '20px Vedana'
    //设置填充绘画的颜色、渐变或者模式
    cans.fillStyle = 'rgba(200, 200, 200, 0.40)'
    //设置文本内容的当前对齐方式
    cans.textAlign = 'left'
    //设置在绘制文本时使用的当前文本基线
    cans.textBaseline = 'Middle'
    //在画布上绘制填色的文本（输出的文本，开始绘制文本的X坐标位置，开始绘制文本的Y坐标位置）
    cans.fillText(str, can.width / 4, can.height / 2)
    cans.fillText(date,can.width / 4, can.height / 3)
    let div = document.createElement('div')
    div.id = id
    div.style.pointerEvents = 'none'
    div.style.top = '30px'
    div.style.left = '0px'
    div.style.position = 'absolute'
    div.style.zIndex = '100000'
    div.style.width = document.documentElement.clientWidth + 'px'
    div.style.height = document.documentElement.clientHeight + 'px'
    div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
    //   document.body.appendChild(div)
    div.style.opacity = '0.4' // 水印的透明度
    let show = document.getElementById("show") // 控制水印显示的区域，设置id = show,表示在该范围内有水印
    show.appendChild(div)
    return id
}

// 该方法只允许调用一次
watermark.set = (str,date) => {
    let id = setWatermark(str,date) // str,date代表的是两行水印。如果需好几个的话再追加。
    setInterval(() => {
        if (document.getElementById(id) === null) {
            id = setWatermark(str,date)
        }
    }, 500);
    window.onresize = () => {
        setWatermark(str,date)
    };
}

export default watermark