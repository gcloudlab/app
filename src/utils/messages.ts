import { h } from 'vue';
import { Alert, Checkmark, PricetagOutline, WarningOutline } from '@vicons/ionicons5';
import { NIcon } from 'naive-ui';

export const onError = (message?: string) =>
  window.$message.error(message ? message : '出错了', {
    icon: () => h(NIcon, null, { default: () => h(Alert) }),
  });

export const onSuccess = (message?: string) =>
  window.$message.success(message ? message : '', {
    icon: () => h(NIcon, null, { default: () => h(Checkmark) }),
  });

export const onWarning = (message?: string) =>
  window.$message.warning(message ? message : '注意', {
    icon: () => h(NIcon, null, { default: () => h(WarningOutline) }),
  });

export const onInfo = (message?: string) =>
  window.$message.info(message ? message : '提示', {
    icon: () => h(NIcon, null, { default: () => h(PricetagOutline) }),
  });
