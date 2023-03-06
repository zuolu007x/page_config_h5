import service from '../request'

// 调用测试
export function getH5PageInfo(params: any) {
    return service({
        url: '/apph5singlepageconfig/manage/getH5PageInfo', //此处为自己请求地址
        method: 'Post',
        data: params,
    })
}
