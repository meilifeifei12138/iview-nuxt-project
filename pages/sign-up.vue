<template>
  <div class="sign-up-bg">
    <div class="sign-up-card">
      <div class="sign-up-logo-box">
        <img src="~/assets/image/logo.gif" alt="logo" />
      </div>
      <Content>
        <Form ref="signUpForm" :model="SignUpFormValidate" :rules="SignUpRuleValidate" :label-width="90" class="form">
          <FormItem label="公司" prop="companyName">
            <Input v-model="SignUpFormValidate.companyName" placeholder="请输入公司名称" />
          </FormItem>
          <FormItem label="手机号" prop="phone">
            <Input v-model="SignUpFormValidate.phone" placeholder="Enter your phone number" />
          </FormItem>
          <FormItem label="验证码" prop="verificationCode">
            <Row>
              <Col span="16">
                <Input v-model="SignUpFormValidate.verificationCode" placeholder="请输入验证码" />
              </Col>
              <Col span="8">
                <Button
                  type="primary"
                  :loading="isSendVerificationCodeLoading"
                  :disabled="isSendVerificationCodeDisabled"
                  @click="geiVerificationCode"
                >
                  {{ verificationAppendText }}
                </Button>
              </Col>
            </Row>
          </FormItem>
          <FormItem class="checkboxFormItem">
            <Checkbox> 我接受<router-link to="">条款</router-link> </Checkbox>
          </FormItem>
        </Form>
        <div class="btn-father">
          <Button type="primary" @click="createAccountBtn" class="create-btn"> 创建账户 </Button>
        </div>
      </Content>
    </div>
  </div>
</template>

<script>
import SignUpFormValidate from 'assets/js/SignUpForm/SignUpFormValidate';
import SignUpRuleValidate from 'assets/js/SignUpForm/SignUpRuleValidate';
import path from 'assets/js/Router/Path';
export default {
  name: 'SignUpPage',
  data() {
    return {
      SignUpFormValidate,
      SignUpRuleValidate,
      isSendVerificationCodeDisabled: false,
      isSendVerificationCodeLoading: false,
      verificationAppendText: '发送验证码',
      waitTime: 60,
    };
  },
  methods: {
    geiVerificationCode() {
      // this.isSendVerificationCodeLoading = true;
      //request
      // this.isSendVerificationCodeLoading = false;
      const that = this;
      that.isSendVerificationCodeDisabled = true;
      let timer = setInterval(function () {
        if (that.waitTime > 1) {
          that.waitTime--;
          that.verificationAppendText = `${that.waitTime}s 后重新发送`;
        } else {
          clearInterval(timer);
          that.verificationAppendText = '发送验证码';
          that.isSendVerificationCodeDisabled = false;
          that.waitTime = 60;
        }
      }, 1000);
    },
    createAccountBtn() {
      this.$router.push({ path: path.login });
    },
  },
};
</script>

<style scoped>
.sign-up-bg {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('~/assets/image/background.jpeg');
}
.sign-up-card {
  width: 500px;
  height: 480px;
  background-color: white;
  overflow: auto;
}
.sign-up-logo-box {
  text-align: center;
  width: 100%;
  margin: 30px 0;
}
img {
  width: 200px;
}
.form {
  width: 400px;
  margin: auto;
}
.checkboxFormItem {
  text-align: right;
}
.btn-father {
  width: 100%;
  text-align: center;
}
.create-btn {
  width: 400px;
  text-align: center;
}
</style>
