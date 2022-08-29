import { defineStore } from 'pinia';
import piniaStore from '@/store';
import { getRegisterCount } from '@/service/api/global';
import { onWarning, onError } from '@/utils/messages';

export interface GlobalStateProps {
  register_count: number;
}

export const useGlobalStore = defineStore({
  id: 'global',
  state: () =>
    ({
      register_count: 0,
    } as GlobalStateProps),
  getters: {
    // register_count: state => state.register_count,
  },
  actions: {
    async onGetRegisterCountAction() {
      try {
        const { data } = await getRegisterCount();
        if (data.msg === 'success') {
          this.register_count = data.count;
        } else {
          onWarning(data.msg);
        }
      } catch (error) {
        onError('出错了');
      }
    },
  },
});

export function useGlobalOutsideStore() {
  return useGlobalStore(piniaStore);
}
