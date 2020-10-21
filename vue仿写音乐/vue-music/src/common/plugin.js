let toast = {}
toast.install = function (Vue, options) {
    let opt = {
        defaultType: 'center',//默认显示的位子
        duration:'1500',//持续时间
    }
    //用户给了什么 我们就使用什么
    for (let key in options) {
        opt[key] = options[key]
      //  opt.key = options.key
    }
    Vue.prototype.$toast = (tips ,type) => {  //tips内容 type 位子
        if ( type) {
            opt.defaultType=type  //如果传了type 那么就使用type作为位子 
        }
        if (document.getElementsByClassName('vue-toast').length) {
            return 
        }
        let toasttpl = Vue.extend({
            template:'<div class="vue-toast toast-'+ opt.defaultType +' ">'+ tips +' </div>'
        })
        let tpl = new toasttpl().$mount().$el;
        //在视窗下  添加 tpl 
        document.body.appendChild(tpl)
        setTimeout(() => {
            //移除 tpl
            document.body.removeChild(tpl)
        }, opt.duration);

    }
    
    ['bottom', 'top', 'center'].forEach(type => {
        Vue.prototype.$toast[type] = (tips) => {
            return Vue.prototype.$toast(tips,type)
        }
    })
}

export {
    toast
}