let xq = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("元隆相亲！");
        resolve("相亲成功！嘿嘿")
    }, 2000)
})
xq.then((res) => {
    if (res == "相亲成功！嘿嘿") {
        marry()

    }
})
    .then((res) => {

        baby1()


    })

function marry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("元隆结婚！");

        }, 1000)
    },
        function baby1() {
            setTimeout(() => {
                console.log("元隆生娃！");
            }, 600)
        }

// xq()
// marry()
// baby1()
