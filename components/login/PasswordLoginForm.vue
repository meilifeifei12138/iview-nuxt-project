<template>
  <div>
    <Form ref="passwordLoginForm" :model="passwordLoginFormValue" :rules="passwordLoginFormValidate" class="form">
      <FormItem prop="user">
        <Row>
          <Col span="4">
            <span>手机号:</span>
          </Col>
          <Col span="20">
            <Input type="text" v-model="passwordLoginFormValue.user" placeholder="请输入邮箱或者手机号" />
          </Col>
        </Row>
      </FormItem>
      <FormItem prop="password">
        <Row>
          <Col span="4">
            <span>密码 :</span>
          </Col>
          <Col span="20">
            <Input type="password" v-model="passwordLoginFormValue.password" placeholder="Password" />
          </Col>
        </Row>
      </FormItem>
    </Form>
    <div>
      <Row>
        <Col span="12">
          <div class="remember-text">
            <Checkbox v-model="rememberCheckbox">Remember me?</Checkbox>
          </div>
        </Col>
        <Col span="12">
          <nuxt-link :to="path.forgotPassword" class="forgot-password-text">忘记密码？</nuxt-link>
        </Col>
      </Row>
      <br />
      <Button type="primary" :loading="signUpLoading" @click="passwordLogin" class="login-button"> 登陆 </Button>
    </div>
  </div>
</template>

<script>
import path from 'assets/js/Router/Path';
export default {
  name: 'PasswordLoginForm',
  data() {
    return {
      path,
      rememberCheckbox: true,
      signUpLoading: false,
      passwordLoginFormValue: {
        user: '11111111111',
        password: '123456',
      },
      passwordLoginFormValidate: {
        user: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
          {
            type: 'string',
            min: 6,
            message: '密码不能少于6位',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    passwordLogin() {
      this.$refs.passwordLoginForm.validate((valid) => {
        if (valid) {
          this.signUpLoading = true;
          localStorage.setItem('UserInfo', this.passwordLoginFormValue.user);
          //  request
          this.signUpLoading = false;
          this.$router.push({ path: path.home });
        } else {
          this.$Message.error('Fail!');
        }
      });
    },
  },
};
</script>

<style scoped>
@import '~/assets/css/login/password-login.css';
</style>
