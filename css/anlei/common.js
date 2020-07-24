const bannerEle = document.querySelector('#banner');

fetch('http://neteasecloudmusicapi.zhaoboy.com/banner')
    .then(data => data.json())
    .then(data => {
        // console.log(data);
        if (data.code == 200) { //状态码
            const banners = data.banners;
            bannerEle.innerHTML = banners.map((banner) => {

                return `<img src="${banners.imageUrl}">`
            })
            // bannerEle.innerHTML = banners
            // console.log(html);
            // console.log(banners, '+++++++');
            // array  -> html DOM 结点 
            //     for (let banner of banners) {
            //         console.log(banner);
            //         bannerEle.innerHTML += `<img src="${banner.imageUrl}"/>`
            //     }
            //     // bannerEle.innerHTML = banners.map()
            // } else {
            //     console.log('请求失败')
            // }
        }
    })
