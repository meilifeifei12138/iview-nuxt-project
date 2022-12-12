import { Message } from 'view-design';
import path from 'assets/js/Router/Path';
import constant from '@/utils/constant';
export const state = () => ({
  token: undefined,
});

export const mutations = {
  setToken(state, payload) {
    state.token = payload;
    this.$cookies.set(constant.TOKEN, payload);
  },
  async removeToken() {
    this.$cookies.set(constant.TOKEN, undefined);
    await this.$router.push(path.login);
  },
};

export const actions = {
  async login({ commit }, data) {
    const res = await this.$axios.post('login', data);
    if (!res) {
      Message.error('好像出了一些问题～');
      return;
    }
    await commit('setToken', res.data.token);
    Message.success('登陆成功');
    await this.$router.push(path.home);
    return res;
  },
};
