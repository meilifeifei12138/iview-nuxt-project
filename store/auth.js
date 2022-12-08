import { Message } from 'view-design';
import { setItem, removeItem } from '~/utils/localstorage';
import constant from '~/utils/constant';
//开始设置vuex
export const state = () => ({
  token: null,
});

export const mutations = {
  setToken(state, payload) {
    state.token = payload;
    setItem(constant.TOKEN, state.token);
  },
  removeToken(state) {
    state.token = null;
    removeItem(constant.TOKEN);
  },
};

export const actions = {
  async login(context, data) {
    const res = await this.$axios.post('login', data);
    if (!res) {
      Message.error('请求有些问题～');
      return;
    }
    Message.success('登陆成功');
    context.commit('setToken', res.data.token);
    return res;
  },
};
