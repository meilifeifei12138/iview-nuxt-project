<template>
  <Header class="header">
    <Menu class="header-menu" mode="horizontal">
      <nuxt-link to="/">
        <img src="~/assets/image/logo.gif" alt="桔加" />
      </nuxt-link>
      <div class="layout-nav" v-if="isLogin">
        <!--        已登陆   -->
        <nuxt-link v-for="item in Logged" :key="item.value" :to="item.path">
          <menu-item :name="item.value">
            <font-awesome-icon :icon="item.icon" />
            {{ item.name }}
          </menu-item>
        </nuxt-link>
        <menu-item name="userAvatar">
          <UserAvatar />
        </menu-item>
      </div>
      <div class="layout-nav" v-else>
        <!--        未登录-->
        <nuxt-link v-for="item in UnLogged" :key="item.value" :to="item.path">
          <menu-item :name="item.value">
            <font-awesome-icon :icon="item.icon" />
            {{ item.name }}
          </menu-item>
        </nuxt-link>
        <menu-item name="loginButton">
          <Button type="primary" ghost @click="toLoginPage">登陆</Button>
        </menu-item>
      </div>
    </Menu>
  </Header>
</template>

<script>
import UserAvatar from '@/components/UserAvatar';
import UnLogged from 'assets/js/NavBar/UnLogged';
import Logged from 'assets/js/NavBar/Logged';
import path from 'assets/js/Router/Path';
export default {
  name: 'LayoutHeaderPage',
  components: {
    UserAvatar,
  },
  data() {
    return {
      UnLogged,
      Logged,
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  methods: {
    toLoginPage() {
      this.$router.push({ path: path.login });
    },
  },
};
</script>

<style scoped>
img {
  width: 107px;
  height: 30px;
  margin-top: 12px;
}
.header {
  background-color: #fff;
  height: 64px;
}
.header-menu {
  height: 100%;
}
.layout-nav {
  float: right;
  height: 100%;
}
</style>
