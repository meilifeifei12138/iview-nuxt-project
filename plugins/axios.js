import constant from '~/utils/constant';
export default function ({ $axios, store, redirect }) {
  //请求拦截器
  $axios.onRequest((config) => {
    store.commit('auth/setToken', localStorage.getItem(constant.TOKEN));
    if (store.state.token) {
      config.headers['Authorization'] = store.state.token;
    }
    return config;
  });

  //响应拦截器
  $axios.interceptors.response.use((response) => {
    const businessCode = response.data.meta.status;
    const msg = response.data.meta.msg;
    if (businessCode === 400 && msg === '无效token') {
      redirect('/login');
      return store.commit('auth/removeToken', store.token);
    }
    if (businessCode <= businessCode < 400) {
      return response.data;
    } else {
      $axios.onError((error) => {
        console.log(error);
      });
    }
  });
}
