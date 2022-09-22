import { defineStore } from 'pinia';
import piniaStore from '@/store';
// import {  } from '@/service/api/share';
import { onWarning, onError } from '@/utils/messages';

export interface ShareStateProps {
  share_list: [];
  fetching: boolean;
}

export const useShareStore = defineStore({
  id: 'share',
  state: () =>
    ({
      share_list: [],
      fetching: false,
    } as ShareStateProps),
  getters: {
    // register_count: state => state.register_count,
  },
  actions: {
    async onGetShareListAction() {
      try {
        this.fetching = true;
      } catch (error) {
        onError('出错了');
      }
    },
  },
});

export function useShareOutsideStore() {
  return useShareStore(piniaStore);
}
