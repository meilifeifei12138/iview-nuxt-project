export const state = () => ({
  isLogin: false,
  notSubscribe: true,
});
export const mutations = {
  changeIsLogin(state, newState) {
    state.isLogin = JSON.parse(JSON.stringify(newState));
  },
};
