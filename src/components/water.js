/*
 * @Author: czb 2751470984@qq.com
 * @Date: 2022-12-30 15:53:32
 * @LastEditors: czb 2751470984@qq.com
 * @LastEditTime: 2023-01-03 09:00:15
 * @FilePath: \knowledgeGraph\src\components\water.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import store from '@/store'
const watermark = {
    set: function (text1, text2) {
        var canvas = document.createElement('canvas')
        canvas.width = 150;
        canvas.height = 120;
        canvas.style.display = 'none';
        var shuiyin = canvas.getContext('2d');
        // 控制文字的旋转角度和上下位置
        shuiyin.rotate(-20 * Math.PI / 180);
        shuiyin.translate(-50, 20)
        //文字颜色
        shuiyin.fillStyle = "#f5f5f5";
        //文字样式
        shuiyin.font = "500 24px Microsoft JhengHei ";
        shuiyin.fillText(text1, canvas.width / 3, canvas.height / 2);
        shuiyin.fillText(text2, canvas.width / 3, canvas.height / 2 + 20);
        /* 新建一个用于填充canvas水印的标签，之所以没有直接在body上添加，
           是因为z-index对个别内容影响，才考虑的不用body */
        var watermark = document.createElement('div')
        const styleStr = `
            position:fixed;
            top:0;
            left:0;
            width:100vw;
            height:100vh;
            z-index:99;
            pointer-events:none;
            background-repeat:repeat;
            mix-blend-mode: multiply;
            background-image:url('${canvas.toDataURL("image/png")}')`;
        watermark.setAttribute('style', styleStr);
        watermark.classList.add('watermark')
        document.body.appendChild(watermark)

        //此方法是防止用户通过控制台修改样式去除水印效果
        /* MutationObserver 是一个可以监听DOM结构变化的接口。 */
        const observer = new MutationObserver(() => {
            const wmInstance = document.querySelector('.watermark');
            if ((wmInstance && wmInstance.getAttribute('style') !== styleStr) || !wmInstance) {
                //如果标签在，只修改了属性，重新赋值属性
                if (wmInstance) {
                    // 避免一直触发
                    // observer.disconnect();
                    // console.log('水印属性修改了');
                    wmInstance.setAttribute('style', styleStr);
                }
                // else {
                //     /* 此处根据用户登录状态，判断是否终止监听，避免用户退出后登录页面仍然有水印 */
                //     if (store.getters.token) {
                //         //标签被移除，重新添加标签
                //         // console.log('水印标签被移除了');
                //         document.body.appendChild(watermark)
                //     } else {
                //         observer.disconnect();
                //     }
                // }
            }
        })
        observer.observe(document.body, {
            attributes: true,
            subtree: true,
            childList: true,
        });
    },
    close: function () {
        /* 关闭页面的水印，即要移除水印标签 */
        let watermark = document.querySelector('.watermark')
        document.body.removeChild(watermark)
    }
}
export default watermark