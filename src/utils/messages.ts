import { MessageOptions } from 'naive-ui';

export const onError = (message?: string, option?: MessageOptions) =>
  window.$message.error(message ? message : '出错了', option);

export const onSuccess = (message?: string, option?: MessageOptions) =>
  window.$message.success(message ? message : 'Nice~', option);

export const onWarning = (message?: string, option?: MessageOptions) =>
  window.$message.warning(message ? message : '注意', option);

export const onInfo = (message?: string, option?: MessageOptions) =>
  window.$message.info(message ? message : '提示', option);
