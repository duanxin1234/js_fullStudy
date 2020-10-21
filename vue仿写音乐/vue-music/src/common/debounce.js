export function debounce(func,delay) {
    let timer =null
    return function () {
        if (timer) {
            clearTimeout(timer)
      }
        timer=setTimeout(() => {
            func.apply(this,arguments)
        }, delay);
    }
}

export function findIndex(list,song) {
    return list.findIndex((item) => {
        return item.id == song.id 
    })
}
