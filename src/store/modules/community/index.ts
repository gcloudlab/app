import { defineStore } from 'pinia';
import piniaStore from '@/store';
import { onWarning, onError } from '@/utils/messages';
import useTimer from '@/hooks/useTimer';

export interface CommunityStateProps {
  fetching: boolean;
}

export const useCommunityStore = defineStore({
  id: 'global',
  state: () =>
    ({
      fetching: false,
    } as CommunityStateProps),
  getters: {
    // register_count: state => state.register_count,
  },
  actions: {
    async onGetRegisterCountAction() {
      try {
        this.fetching = true;
      } catch (error) {
        useTimer(() => {
          this.fetching = false;
        }, 3);
        onError('出错了');
      }
    },
    async onGetShareStatisticsAction() {
      try {
        this.fetching = true;
      } catch (error) {
        useTimer(() => {
          this.fetching = false;
        }, 3);
        onError('出错了');
      }
    },
  },
});

export function useCommunityOutsideStore() {
  return useCommunityStore(piniaStore);
}
