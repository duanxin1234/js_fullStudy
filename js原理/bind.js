
        Function.prototype.mybind=function (obj) {
            //判断 fn是否为函数
            if (typeof this != "function" ) {
                throw new TypeError('error')
            }

            //取参数
            const args=[...arguments].slice(1)
            const fn=this 
           return   function F() {
               if(this instanceof F) {
                   return new fn(...args,...arguments)
               }else{
                   return fn.apply(obj,args.concat(...arguments))
               }

            }

        }

       function fn() {
            console.log(this.name);
        }

        let obj={
            name:"wn"
        }

var a = fn.mybind(obj)
a()  
 



        
  