
// 存数据
export const state = {
    userInfo: {
        token: '',
        user: {}
    }
}
// 写方法
export const mutations = {
    setUserInfo(state, data) {
        // state的userInfo就等于data传入的值
        state.userInfo = data
    },
    delUserInfo(state) {
        // 将state里面的设置为空
        state.userInfo = {
            token: '',
            user: {}
        }
    }
}