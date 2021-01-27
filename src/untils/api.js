// 统一请求路径前缀在commmon/axios.js中修改
import { getRequest } from './http';
const urls='http://app.changxinghuiyuan.com/akjsjywzx/Business'
// 接口名称
export const QueryFAQList = (params) => {
    return getRequest(urls+'/QueryFAQList',params)
}
// 接口名称
export const QueryMemberList = () => {
    return getRequest(urls+'/QueryMemberList')
}
// 地区部门详情
export const GetDataInfo = () => {
    return getRequest(urls+'/GetDataInfo')
}
// 获取全部部门安装数量
export const GetDepartmentChart = () => {
    return getRequest(urls+'/GetDepartmentChart')
}
// 获取部门安装数量
export const GetDepartmentAll = () => {
    return getRequest(urls+'/GetDepartmentAll')
}
