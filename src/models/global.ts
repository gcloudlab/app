export type NotificationsType = 'nomarl' | 'admin';
export interface Notifications {
  key: string;
  label: string;
  type?: string;
  message_type: NotificationsType;
  has_read: boolean;
  description: string;
  render?: any;
}

export interface ShareStatisticsData {
  share_count: number;
  click_num: number;
  msg: string;
  code: number;
}
