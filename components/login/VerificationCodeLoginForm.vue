<template>
  <div>
    <Form ref="verificationCodeLoginForm" :model="verificationCodeLoginForm" :rules="verificationCodeLoginFormVal">
      <FormItem prop="phoneNumber">
        <Row>
          <Col span="4">
            <span>手机号:</span>
          </Col>
          <Col span="20">
            <Input type="text" v-model="verificationCodeLoginForm.phoneNumber" placeholder="手机号">
              <template #prepend>
                <Select v-model="phoneAreaDefaultCode" class="phone-area-select">
                  <Option v-for="item in phoneAreaOption" :key="item.value" :value="item.value" :label="item.value">
                    <Row>
                      <Col span="8">
                        <div class="phone-area-country">{{ item.label }}</div>
                      </Col>
                      <Col span="16">
                        <div class="phone-area-num">{{ item.value }}</div>
                      </Col>
                    </Row>
                  </Option>
                </Select>
              </template>
            </Input>
          </Col>
        </Row>
      </FormItem>
      <FormItem prop="verificationCode">
        <Row>
          <Col span="4">
            <span>验证码:</span>
          </Col>
          <Col span="20">
            <Input type="text" v-model="verificationCodeLoginForm.verificationCode" placeholder="验证码">
              <template #append>
                <Button
                  type="primary"
                  @click="sendVerificationCode"
                  class="send-verification-btn"
                  :loading="isBtnLoading"
                  :disabled="isBtnDisabled"
                  >{{ verificationAppendText }}</Button
                >
              </template>
            </Input>
          </Col>
        </Row>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="verificationCodeLogin" class="verification-login-btn">登陆</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'VerificationCodeLoginForm',
  data() {
    const verificationCodeVal = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'));
      } else {
        if (value.length !== 4) {
          callback(new Error('请输入4位数的验证码'));
        }
      }
    };
    return {
      phoneAreaDefaultCode: '+86',
      verificationAppendText: '发送验证码',
      isBtnLoading: false,
      isBtnDisabled: false,
      waitTime: 60,
      phoneAreaOption: [
        { value: '+86', label: '中国' },
        { value: '+853', label: '中国澳门' },
        { value: '+852', label: '中国台湾' },
        { value: '+355', label: '阿尔巴加尼亚' },
      ],
      verificationCodeLoginForm: {
        phoneNumber: '',
        verificationCode: '',
      },
      verificationCodeLoginFormVal: {
        phoneNumber: [{ required: true, message: '请输入电话号码', trigger: 'blur' }],
        verificationCode: [
          { require: true, message: '请输入验证码', trigger: 'blur' },
          { validator: verificationCodeVal, trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    verificationCodeLogin() {
      this.$refs.verificationCodeLoginForm.validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      });
    },
    sendVerificationCode() {
      // this.isBtnLoading = true;
      //request
      // this.isBtnLoading = false;
      const that = this;
      that.isBtnDisabled = true;
      let timer = setInterval(function () {
        if (that.waitTime > 1) {
          that.waitTime--;
          that.verificationAppendText = `${that.waitTime}s 后重新发送`;
        } else {
          clearInterval(timer);
          that.verificationAppendText = '发送验证码';
          that.isBtnDisabled = false;
          that.waitTime = 60;
        }
      }, 1000);
    },
  },
};
</script>
<style scoped>
@import '~assets/css/login/verification-code-login.css';
</style>
