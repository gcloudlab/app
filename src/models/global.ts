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
