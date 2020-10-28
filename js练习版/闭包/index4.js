//优点 2 做缓存   




function food() {  
    let food='apply'  //food 一直被缓存
   
    return obj = {
        eatfood:function () {
            if (food != '') {
                console.log('im eating' + food);
                food=''
            } else {
                console.log('nothing');
            }
          
        },
        pushfood:function (myfood) {
          food=myfood
        }
    }  
}
let ccc = food()
ccc.eatfood()
ccc.eatfood()
ccc.pushfood('banana')
ccc.eatfood()
ccc.eatfood()


