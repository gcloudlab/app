import { defineStore } from 'pinia';
import piniaStore from '@/store';
// import {  } from '@/service/api/share';
import { onWarning, onError } from '@/utils/messages';
import { CreateShareOption, ShareDetailItem } from '@/models/share';
import { createShare, getShareDetailByShareIdentity } from '@/service/api/share';
import { onSuccess } from '../../../utils/messages';

export interface ShareStateProps {
  share_list: ShareDetailItem[] | null;
  fetching: boolean;
  current_sharing_file_identity: string;
  share_detail: ShareDetailItem;
}

export const useShareStore = defineStore({
  id: 'share',
  state: () =>
    ({
      share_list: null,
      fetching: false,
      current_sharing_file_identity: '',
      share_detail: {},
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
    async onCreateShareRecordAction(option: CreateShareOption) {
      try {
        const res = await createShare(option);
        if (res.data.msg === 'success') {
          this.current_sharing_file_identity = res.data.identity;
        } else {
          onWarning(res.data.msg);
        }
      } catch (error) {
        onError('出错了');
      }
    },
    async onGetShareDetailByIndentityAction(id: string) {
      this.fetching = true;
      try {
        const res = await getShareDetailByShareIdentity(id);
        if (res.data.msg === 'success') {
          this.share_detail = res.data;
        } else {
          onError(res.data.msg);
        }
      } catch (error) {
        onError('出错了');
      }
      this.fetching = false;
    },
  },
});

export function useShareOutsideStore() {
  return useShareStore(piniaStore);
}
