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
  getters: {},
  actions: {
    async onGetAction() {
      try {
        this.fetching = true;
      } catch (error) {
        useTimer(() => {
          this.fetching = false;
        }, 3);
        onError('出错了');
      }
    },
    async onGetxAction() {
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
