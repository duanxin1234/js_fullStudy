//链表是一个线性结构，同时也是天然的递归的结构，链表结构可以充分利用计算机
//实现灵活的内存动态管理，没有像数组一样的随机读取功能

//实现单向链表
class Node{
    constructor(v, next) {
        this.value = v
        this.next=next
    }
}
class LinkList{
    constructor() {
        //链表长度
        this.size = 0
        //头部
        this.dummyNode= new Node(null,null)
    }
//查找元素
    find(header, index, currentIndex){
        if (index===currentIndex) {
            return header
        } else {
            
            return this.find(header.next,index,currentIndex+1)
        }
    }
    addNode(v,index) {
        //查找当前 添加元素的索引
        this.checkIndex(index)
        //当往链表的末尾插入时，元素下一项 为空
        //其他情况，需要设置元素下个项 为有值
        let perv = this.find(this.dummyNode, index, 0)
        perv.next = new Node(v, perv.next)
        this.size++
        return perv.next

    }
    insertNode(v,index) {
        return this.addNode(v,index)
    }

    addToFirst(v,index) {
        return this.addNode(v,0)
    }
    addTolast(v,index) {
        return this.addNode(v,this.size)
    }


    checkIndex(index) {
        if (index<0 || index>this.size) {
            throw Error('index error')
        }
    }

    removeNode(index,isLast) {
        this.checkIndex(index)
        index = isLast ? index - 1 : index
        let prev = this.find(this.dummyNode, index, 0)
        let node = prev.next
        prev.next = node.next
        node.next = null
        this.size--
        return node
    }
}

let link = new LinkList()
link.addToFirst('aaa')
link.insertNode('bb', 1)
console.log(link);

link.removeNode(1, false)
console.log(link);