import { defineStore } from 'pinia';
import piniaStore from '@/store';
import { getRegisterCount } from '@/service/api/global';
import { onWarning, onError } from '@/utils/messages';
import useTimer from '@/hooks/useTimer';

export interface GlobalStateProps {
  register_count: number;
  fetching: boolean;
}

export const useGlobalStore = defineStore({
  id: 'global',
  state: () =>
    ({
      register_count: -1,
      fetching: false,
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
  },
});

export function useGlobalOutsideStore() {
  return useGlobalStore(piniaStore);
}
