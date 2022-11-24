<template>
  <div class="login-bg">
    <div class="login-card-box">
      <div class="login-card">
        <img src="~assets/image/logo.gif" alt="logo" class="login-image" />
        <Tabs value="password">
          <TabPane label="密码登陆" name="password">
            <PasswordLoginForm />
          </TabPane>
          <TabPane label="验证码登陆" name="verificationCode">标签二的内容</TabPane>
        </Tabs>
      </div>
    </div>
  </div>
</template>
<script>
import PasswordLoginForm from '@/components/login/PasswordLoginForm';
export default {
  name: 'LoginPage',
  components: {
    PasswordLoginForm,
  },
};
</script>
<style scoped>
.login-bg {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('~/assets/image/background.jpeg');
}
.login-card {
  width: 500px;
  min-height: 420px;
  text-align: center;
  background-color: #fff;
  padding: 20px 60px 0 60px;
  border-radius: 5px;
  margin: auto;
}
.login-image {
  width: 200px;
  margin: 25px;
}
</style>
