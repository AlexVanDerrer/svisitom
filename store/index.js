import DATA from '@/assets/mockData'
export const strict = false

export const state = () => {
  return {
    token: null,
    data: []
  }
}

export const getters = {
  isAuth: state => !!state.token,
  getData: state => state.data
}

export const mutations = {
  setToken: (state, data) => (state.token = data),
  setData: (state, data) => (state.data = data)
}

export const actions = {
  getData (context) {
    // имитирует запрос на сервер
    setTimeout(() => {
      context.commit('setData', DATA)
    }, 500)
  }
}
