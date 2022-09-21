import { defineStore } from 'pinia';
import piniaStore from '@/store';
import { getRegisterCount } from '@/service/api/global';
import { onWarning, onError } from '@/utils/messages';
import useTimer from '@/hooks/useTimer';
import { Notifications } from '@/models/global';
import { useStorage } from '@/utils/use-storage';
import { How_To_Use_GCloud, Join_Us } from '@/constants/notifications';

export interface GlobalStateProps {
  register_count: number;
  fetching: boolean;
  notifications: Notifications[];
  has_read_notifications: string[];
}

const initialState = {
  has_read_notifications: useStorage('has_read_notifications'),
};

export const useGlobalStore = defineStore({
  id: 'global',
  state: () =>
    ({
      register_count: -1,
      fetching: false,
      notifications: [How_To_Use_GCloud, Join_Us],
      has_read_notifications: initialState.has_read_notifications || [],
    } as GlobalStateProps),
  getters: {
    // register_count: state => state.register_count,
  },
  actions: {
    async onGetRegisterCountAction() {
      try {
        this.fetching = true;
        const { data } = await getRegisterCount();
        if (data.msg === 'success') {
          this.register_count = data.count;
          this.fetching = false;
        } else {
          onWarning(data.msg);
        }
      } catch (error) {
        useTimer(() => {
          this.register_count = 0;
          this.fetching = false;
        }, 3);
        onError('出错了');
      }
    },
    onSetNotificationsStatusAction(key: string) {
      if (!this.has_read_notifications.includes(key)) {
        this.has_read_notifications.push(key);
        useStorage('has_read_notifications', this.has_read_notifications);
      }
    },
  },
});

export function useGlobalOutsideStore() {
  return useGlobalStore(piniaStore);
}
