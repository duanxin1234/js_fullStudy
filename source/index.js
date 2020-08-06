let data = [
    { value: '快乐肥仔', time: 5, color: 'red', speed: 1, fontSize: 22 },
    { value: '段鑫最帅', time: 7, color: 'black', speed: 1, fontSize: 22 },
    { value: '快快长大', time: 8, color: 'blue', speed: 1, fontSize: 22 },
    { value: '听妈妈的话吧，晚点再恋爱吧', time: 9, },
    { value: '我能包含他', time: 10, color: 'black', },
    { value: '高潮', time: 11, color: 'black', speed: 1, fontSize: 22 },
    { value: '狂喷', time: 12, color: 'black', speed: 1, fontSize: 22 },
    { value: '猛插', time: 13, color: 'black', speed: 1, fontSize: 22 },

]
//获取所有需要的dom 元素
let canvas = document.getElementById('canvas')
let video = document.getElementById('video')
let $txt = document.getElementById('btn')
let $color = document.getElementById('color')
let $range = document.getElementById('range')
// 创建CanvasBarrge 类
class CanvasBarrge {
    constructor(canvas, video, opts = {}) {
        // opts={}表示如果没有传值，就默认为{}，防止报错
        if (!canvas || !video) return
        this.video = video
        this.canvas = canvas
        //设置下canvas画布的宽高和video一致
        this.canvas.width = video.width
        this.canvas.height = video.height
        //获取画布 ，操作画布
        this.ctx = canvas.getcontext("2d")
        //设置默认参数，如果没传就给带上
        let defOpts = {
            color: "#e91e63",
            speed: 1.5,
            opacity: 0.5,
            fontSize: 20,
            data: []
        }

        //合并对象，在挂载到this上
        Object.assign(this, defOpts, opts)
        //添加属性，用来判断播放暂停，默认是true为暂停
        this.isPaused = true
        //得到所有的弹幕消息
        this.barrages = this.data.mao((item => new Barrage(item, this)))


    }
}

// 创建Barrage类，用来实例化每一条弹幕
class Barrage {
    constructor(obj, ctx) {
        this.value = obj.value; //弹幕的内容
        this.time = obj.time; //弹幕的出现时间
        //把obj 和ctx 都挂载到this 上方便获取
        this.obj = obj
        this.context = ctx
    }
    // 初始化弹幕
    init() {
        //
        this.color = this.obj.color || this.context.color
        this.speed = this.obj.speed || this.context.speed
        this.opacity = this.obj.opacity || this.context.opacity
        this.fontSize = this.obj.fontSize || this.context.fontSize
        //计算每一条弹幕的宽度
        let p = document.createElement('p')
        p.style.fontSize = this.fontSize + 'px'
        p.innerHTML = this.value
        document.body.appendChild(p)
        //把p标签 添加到body里 这样就可以拿到宽度
        //设置弹幕的宽度 
        this.width = p.clientWidth
        //得到弹幕宽度后，就把p标签移除
        document.body.removeChild(p)
        //s设置弹幕位置
        this.x = this.context.canvas.width
        this.y = this.context.canvas.height * Math.random()
        //做一下超出范围的处理
        if (this.y < this.fontSize) {
            this.y = this.fontSize
        } else if (this.y > this.context.canvas.height - this.fontSize) {
            this.y = this.context.canvas.height - this.fontSize
        }
    }
}
//创建canvasBarrage的实例
let canvasBarrage = new CanvasBarrage(canvas, video, { data })