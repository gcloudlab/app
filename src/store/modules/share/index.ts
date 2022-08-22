import { defineStore } from "pinia";
import piniaStore from "@/store";
// import {  } from '@/service/api/share';
import { onWarning, onError } from "@/utils/messages";

export interface ShareStateProps {
  share_list: [];
}

export const useShareStore = defineStore({
  id: "share",
  state: () =>
    ({
      share_list: [],
    } as ShareStateProps),
  getters: {
    // register_count: state => state.register_count,
  },
  actions: {
    async onGetRegisterCountAction() {
      try {
      } catch (error) {
        onError("出错了");
      }
    },
  },
});

export function useShareOutsideStore() {
  return useShareStore(piniaStore);
}
