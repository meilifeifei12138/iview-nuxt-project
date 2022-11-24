<template>
  <div>
    <Form ref="loginForm" :model="passwordLoginFormValue" :rules="passwordLoginFormValidate" class="form">
      <FormItem prop="user">
        <Input type="text" v-model="passwordLoginFormValue.user" placeholder="请输入邮箱或者手机号">
          <template #prepend>
            <Icon type="ios-person-outline" />
          </template>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="passwordLoginFormValue.password" placeholder="Password">
          <template #prepend>
            <Icon type="ios-lock-outline" />
          </template>
        </Input>
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
      <Button type="primary" :loading="signUpLoading" @click="handleSubmit" class="login-button"> 登陆 </Button>
      <br />
      <div class="sign-up-text">
        还没有账号？
        <nuxt-link :to="path.signUp">立即注册</nuxt-link>
      </div>
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
            message: 'Please fill in the user name',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: 'Please fill in the password.',
            trigger: 'blur',
          },
          {
            type: 'string',
            min: 6,
            message: 'The password length cannot be less than 6 bits',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate((valid) => {
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
