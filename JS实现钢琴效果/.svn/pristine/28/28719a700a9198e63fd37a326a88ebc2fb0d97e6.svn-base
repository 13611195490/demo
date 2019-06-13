import { $getRsa, $login, $resetPassword } from '@/api/login'
import { removeToken, setToken, getToken, setPersonnelName, setPersonnelId, getPersonnelId } from '../../utils/auth'
// import { setPersonnelName, removePersonnelId, removePersonnelName, removeJSESSIONID } from '@/utils/auth'
// import md5 from 'js-md5'
const user = {
  state: {
    name: '',
    publicKey: '',
    key: '',
    id: ''
  },

  mutations: {
    SET_RSA: (state, data) => {
      state.publicKey = data.publicKey
      state.key = data.key
    },
    SET_USERID: (state, id) => {
      state.id = id
      setPersonnelId(id)
    }
  },
  actions: {
    async getRsa({
      commit,
      state
    }, params) {
      const result = await $getRsa({})
      result && commit('SET_RSA', result)
    },

    // 登录
    Login({ commit, state }, user) {
      const username = user.username.trim()
      const password = sm2Encrypt(user.password, state.publicKey, 0)
      const signature = hex_md5(password)
      const key = state.key
      const userinfo = {
        'username': username,
        'password': password,
        'signature': signature,
        'key': key
      }
      return new Promise((resolve, reject) => {
        $login(userinfo).then(response => {
          setToken(response.token)
          setPersonnelName(response.username)
          commit('SET_USERID', response.id)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        removeToken()
        resolve()
      })
    },

    // 修改密码
    ResetPassword({ commit, state }, user) {
      const token = getToken()
      const id = getPersonnelId()
      const oldPassword = sm2Encrypt(user.oldPassword, state.publicKey, 0)
      const newPassword = sm2Encrypt(user.newPassword, state.publicKey, 0)
      const key = state.key
      const oldSignature = hex_md5(oldPassword)
      const newSignature = hex_md5(newPassword)
      const userinfo = {
        'id': id,
        'oldPassword': oldPassword,
        'newPassword': newPassword,
        'key': key,
        'oldSignature': oldSignature,
        'newSignature': newSignature
      }
      return new Promise((resolve, reject) => {
        $resetPassword(userinfo, token).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
