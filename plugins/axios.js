// 引入一个提示插件
import {Message} from 'element-ui'

export default ( {$axios} ) =>{
    // 写错误拦截器,onError用于拦截错误信息
    $axios.onError(res =>{
        console.log(res.response,123)

        // 结构出里面的两个属性
        const {message,statusCode} = res.response.data
        // 判断
        if(statusCode === 400){
            // 提示用户
            Message.error(message)
        }
    }) 
}