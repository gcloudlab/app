import { defineStore } from 'pinia';
import piniaStore from '@/store';
// import {  } from '@/service/api/share';
import { onWarning, onError } from '@/utils/messages';
import { CreateShareOption } from '@/models/share';
import { createShare, getShareDetailByShareIdentity } from '@/service/api/share';
import { onSuccess } from '../../../utils/messages';

export interface ShareStateProps {
  share_list: [];
  fetching: boolean;
  current_sharing_file_identity: string;
}

export const useShareStore = defineStore({
  id: 'share',
  state: () =>
    ({
      share_list: [],
      fetching: false,
      current_sharing_file_identity: '',
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
          onSuccess('分享成功', {
            duration: 5000,
            closable: true,
            keepAliveOnHover: true,
          });
          this.current_sharing_file_identity = res.data.identity;
        } else {
          onWarning(res.data.msg);
        }
      } catch (error) {
        onError('出错了');
      }
    },
    async onGetShareDetailByIndentityAction(id: string) {
      try {
        const res = await getShareDetailByShareIdentity(id);
        if (res.data.msg !== 'success') {
          onError(res.data.msg);
        }
      } catch (error) {
        onError('出错了');
      }
    },
  },
});

export function useShareOutsideStore() {
  return useShareStore(piniaStore);
}
