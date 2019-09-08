
// 存数据
export const state =()=> {
    return{
        userInfo: {
            token: '',
            user: {}
        }
    }
}
// 写方法
export const mutations = {
    // 存token
    setUserInfo(state, data) {
        // state的userInfo就等于data传入的值
        state.userInfo = data
    },
    // 退出登录
    delUserInfo(state) {
        // 将state里面的设置为空
        state.userInfo = {
            token: '',
            user: {}
        }
    }
}