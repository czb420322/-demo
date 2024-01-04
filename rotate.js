/**
 * @param src 图片路径
 * @param rotate 旋转角度
 * @returns {Promise<base64>}
 */
export function rotateImg(src, rotate) {
  return new Promise(((resolve, reject) => {
    let img = new Image()
    img.src = src
    img.setAttribute('crossOrigin', 'Anonymous')
    img.onload = () => {
      let canvas = document.createElement('canvas')
      let context = canvas.getContext('2d')
      if (rotate > 45 && rotate <= 135) { // 90 宽高颠倒
        canvas.width = img.height
        canvas.height = img.width
      } else if (rotate > 225 && rotate <= 315) { // 270 宽高颠倒
        canvas.width = img.height
        canvas.height = img.width
      } else {
        canvas.width = img.width
        canvas.height = img.height
      }
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.translate(canvas.width / 2, canvas.height / 2)
      context.rotate(rotate * Math.PI / 180)
      context.translate(-canvas.width / 2, -canvas.height / 2)
      context.drawImage(img, canvas.width / 2 - img.width / 2, canvas.height / 2 - img.height / 2, img.width, img.height)
      context.translate(canvas.width / 2, canvas.height / 2)
      context.rotate(-rotate * Math.PI / 180)
      context.translate(-canvas.width / 2, -canvas.height / 2)
      context.restore()
      let base64 = canvas.toDataURL()
      resolve(base64)
    }
    img.onerror = reject
  }))
}

class imgRotate {
  constructor({ ele, src, angle }) {
    this.ele = ele;
    this.image = new Image();
    this.image.src = src;
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d")
    this.angle = angle;
  }
 
  async rotate () {
    let img = new Image(),
      angles = [0, 90, 180, 270];
    this.image.onload = _ => {
      if (angles[this.angle] % 180 === 0) {
        this.canvas.width = this.image.width;
        this.canvas.height = this.image.height;
      } else {
        this.canvas.width = this.image.height;
        this.canvas.height = this.image.width;
      }
      switch (this.angle) {
        case 0: // 0
          this.ctx.translate(0, 0)
          break;
        case 1: // 90
          this.ctx.translate(this.canvas.width, 0)
          break;
        case 2:// 180
          this.ctx.translate(this.canvas.width, this.canvas.height)
          break;
        case 3: // 270
          this.ctx.translate(0, this.canvas.height)
          break;
        default:
          throw new ReferenceError("No angle");
        break;
      }
      this.ctx.rotate(angles[this.angle] * Math.PI / 180);
      this.ctx.drawImage(this.image, 0, 0, this.image.width, this.image.height, 0, 0, this.image.width, this.image.height);
 
      img.src = this.canvas.toDataURL("image/png");
      if (this.isDom()) this.ele.appendChild(img);
    }
    return img;
  }
 
  isDom () {
    return typeof this.ele === 'object' && this.ele.nodeType === 1 && typeof this.ele.nodeName === 'string';
  }
}
 
export default imgRotate
function extend(to,_from){
 for(let key in _form){
  to[key]= _from[key]
 }
 return to 
}

function concat(a,b){
  return a?(b?a+' '+b:a):b||''
}