export default {
  companyName: [
    {
      required: true,
      message: '请输入公司名称',
      trigger: 'blur',
    },
  ],
  phone: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur',
    },
  ],
  verificationCode: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur',
    },
    {
      max: 4,
      min: 4,
      message: '请输入四位数的验证码',
      trigger: 'blur',
    },
  ],
};
