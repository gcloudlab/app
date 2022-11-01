import { defineStore } from 'pinia';
import piniaStore from '@/store';
import { onWarning, onError, onSuccess } from '@/utils/messages';
import { CreateShareOption, SaveShareOption, ShareDetailItem } from '@/models/share';
import {
  createShare,
  getPopularShares,
  getShareDetailByShareIdentity,
  getUserShares,
  saveShare,
} from '@/service/api/share';
import useTimer from '@/hooks/useTimer';

export interface ShareStateProps {
  share_list: ShareDetailItem[] | null;
  popular_share_list: ShareDetailItem[] | null;
  fetching: boolean;
  current_sharing_file_identity: string;
  share_detail: ShareDetailItem;
}

export const useShareStore = defineStore({
  id: 'share',
  state: () =>
    ({
      share_list: null,
      popular_share_list: null,
      fetching: false,
      current_sharing_file_identity: '',
      share_detail: {},
    } as ShareStateProps),
  getters: {
    // register_count: state => state.register_count,
  },
  actions: {
    async onGetPopularShareListAction(click_num?: number) {
      this.fetching = true;
      try {
        const res = await getPopularShares(click_num);
        if (res.status === 200) {
          this.popular_share_list = res.data.list;
        }
        this.fetching = false;
      } catch (error) {
        useTimer(() => {
          this.fetching = false;
        }, 3);
        onError(`${error}`);
      }
      this.fetching = false;
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
        onError(`${error}`);
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
        onError(`${error}`);
      }
      this.fetching = false;
    },
    async onSaveShareBasicAction(option: SaveShareOption) {
      try {
        const res = await saveShare(option);
        if (res.data.msg === 'success') {
          onSuccess('已保存');
        } else {
          onWarning(res.data.msg);
        }
      } catch (error) {
        onError(`${error}`);
      }
    },
    async onGetUserShareListAction() {
      try {
        const res = await getUserShares();
        if (res.data.msg === 'success') {
          this.share_list = res.data.list;
        } else {
          onWarning(res.data.msg);
        }
      } catch (e) {
        onError(`${e}`);
      }
    },
  },
});

export function useShareOutsideStore() {
  return useShareStore(piniaStore);
}
