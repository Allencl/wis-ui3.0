/**
 * 公司 api
 */
import {httpHandle} from '@/http/http'



// 获取 公司列表
export const companyList= async(option:any)=>{
    return await httpHandle({
        method:'GET',
    })
}