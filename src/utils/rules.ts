import { FormItemRule, FormRules } from 'naive-ui';
import { validateEmail } from './email';

export const AuthRules: FormRules = {
  name: [
    {
      required: true,
      trigger: ['input', 'blur'],
      validator(rule: FormItemRule, value: string) {
        if (!value || value.length < 6) {
          return new Error('昵称长度至少6位');
        }
        return true;
      },
    },
  ],
  password: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value || value.length < 6) {
          return new Error('密码长度至少6位');
        }
        return true;
      },
    },
  ],
  email: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!validateEmail(value)) {
          return new Error('请输入有效邮箱');
        }
        return true;
      },
    },
  ],
  code: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        if (!value || value.length < 6) {
          return new Error('验证码长度错误');
        }
        return true;
      },
    },
  ],
};
