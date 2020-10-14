import { request } from '../util/axios'

export function getplanlist() {
    return request({   url:"/plan",methods: "get"})
}

export function addplan() {
    return request({   url:"/plan",methods: "post",data})
}
export function deleteplan(id) {
    return request({   url:"/plan",methods: "delete",params:{id}})
}
