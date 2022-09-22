import { h } from 'vue';
import { Notifications } from '@/models/global';
import HowToUse from '@/components/global-notification/how-to-use.vue';
import JoinUs from '@/components/global-notification/join-us.vue';

export const How_To_Use_GCloud: Notifications = {
  key: 'How_TO_Use_GCloud',
  label: '使用说明',
  message_type: 'nomarl',
  has_read: false,
  description: '如何使用GCloud云盘，这里有使用说明~',
};

export const Join_Us: Notifications = {
  key: 'Join_Us',
  label: '加入我们',
  message_type: 'nomarl',
  has_read: false,
  description: '加入我们！以及未来计划！',
};
