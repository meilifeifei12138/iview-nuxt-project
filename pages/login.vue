<template>
  <div class="login-bg">
    <div class="login-card-box">
      <div class="login-card">
        <img src="~assets/image/logo.gif" alt="logo" class="login-image" />
        <Tabs value="password">
          <TabPane label="密码登陆" name="password">
            <PasswordLoginForm />
          </TabPane>
          <TabPane label="验证码登陆" name="verificationCode">
            <VerificationCodeLoginForm />
          </TabPane>
        </Tabs>
        <br />
        <div class="sign-up-text">
          还没有账号？
          <nuxt-link :to="path.signUp">立即注册</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PasswordLoginForm from '@/components/login/PasswordLoginForm';
import VerificationCodeLoginForm from '@/components/login/VerificationCodeLoginForm';
import path from 'assets/js/Router/Path';
export default {
  name: 'LoginPage',
  components: {
    PasswordLoginForm,
    VerificationCodeLoginForm,
  },
  data() {
    return {
      path,
    };
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
.sign-up-text {
  text-align: right;
}
</style>
