<template>
  <Header class="header">
    <Menu class="header-menu" mode="horizontal">
      <Row>
        <Col span="8">
          <NuxtLink to="/">
            <img src="~/assets/image/logo.gif" alt="桔加" />
          </NuxtLink>
        </Col>
        <Col span="8" offset="8">
          <div class="layout-nav">
            <menu-item name="1">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </menu-item>
            <menu-item name="2">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </menu-item>
            <menu-item name="3">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </menu-item>
            <menu-item name="userAvatar">
              <UserAvatar />
            </menu-item>
          </div>
        </Col>
      </Row>
    </Menu>
  </Header>
</template>

<script>
import UserAvatar from '@/components/UserAvatar';
export default {
  name: 'LayoutHeaderPage',
  components: {
    UserAvatar,
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
  height: 100%;
}
</style>
