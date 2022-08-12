import { h } from 'vue';
import { Alert, Checkmark, PricetagOutline, WarningOutline } from '@vicons/ionicons5';
import { MessageOptions, NIcon } from 'naive-ui';

export const onError = (message?: string, option?: MessageOptions) =>
  window.$message.error(message ? message : '出错了', {
    icon: () => h(NIcon, null, { default: () => h(Alert) }),
    ...option,
  });

export const onSuccess = (message?: string, option?: MessageOptions) =>
  window.$message.success(message ? message : '', {
    icon: () => h(NIcon, null, { default: () => h(Checkmark) }),
    ...option,
  });

export const onWarning = (message?: string, option?: MessageOptions) =>
  window.$message.warning(message ? message : '注意', {
    icon: () => h(NIcon, null, { default: () => h(WarningOutline) }),
    ...option,
  });

export const onInfo = (message?: string, option?: MessageOptions) =>
  window.$message.info(message ? message : '提示', {
    icon: () =>
      h(NIcon, null, {
        default: () => h(PricetagOutline),
      }),
    ...option,
  });
