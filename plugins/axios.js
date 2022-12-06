export default function ({ $axios, store }) {
  $axios.interceptors.response.use((response) => {
    const businessCode = response.data.meta.status;
    const msg = response.data.meta.msg;
    if (businessCode === 400 && msg === '无效token') {
      return store.commit('auth/removeAuths', store.token);
    }
    if (businessCode <= businessCode < 400) {
      return response.data;
    } else {
      $axios.onError((error) => {
        console.log(error);
      });
    }
  });
  $axios.onRequest((config) => {
    const token = store.state.token;
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  });
}
