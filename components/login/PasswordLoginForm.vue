<template>
  <div>
    <Form ref="passwordLoginForm" :model="passwordLoginFormValue" :rules="passwordLoginFormValidate" class="form">
      <FormItem prop="username">
        <Row>
          <Col span="4">
            <span>手机号:</span>
          </Col>
          <Col span="20">
            <Input type="text" v-model="passwordLoginFormValue.username" placeholder="请输入邮箱或者手机号" />
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
import { mapMutations, mapActions } from 'vuex';

export default {
  name: 'PasswordLoginForm',
  data() {
    return {
      path,
      userToken: null,
      rememberCheckbox: true,
      signUpLoading: false,
      passwordLoginFormValue: {
        username: 'admin',
        password: '123456',
      },
      passwordLoginFormValidate: {
        username: [
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
    ...mapMutations(['auth/setToken']),
    passwordLogin() {
      this.$refs.passwordLoginForm.validate(async (valid) => {
        if (!valid) {
          return this.$Message.error('请输入正确的表单内容');
        }
        this.signUpLoading = true;
        //  request
        await this.$store.dispatch('auth/login', this.passwordLoginFormValue);
        this.signUpLoading = false;
        await this.$router.push('home');
      });
    },
  },
};
</script>

<style scoped>
@import '~/assets/css/login/password-login.css';
</style>
