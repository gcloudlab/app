import { defineStore } from 'pinia';
import piniaStore from '@/store';
import { onWarning, onError, onSuccess } from '@/utils/messages';
import useTimer from '@/hooks/useTimer';
import { PaginationOptions } from '@/models';
import { createPosts, getPosts, getPostsById } from '@/service/api/community';
import { PostsFormItem, PostsItem } from '@/models/community';
export interface CommunityStateProps {
  posts_list: PostsItem[];
  posts_detail: PostsItem | null;
  fetching: boolean;
  fetching_detail: boolean;
}

export const useCommunityStore = defineStore({
  id: 'global',
  state: () =>
    ({
      posts_list: [],
      posts_detail: null,
      fetching: false,
      fetching_detail: false,
    } as CommunityStateProps),
  getters: {
    posts_count: state => state.posts_list.length || -1,
  },
  actions: {
    async onGetPostsAction(option?: PaginationOptions) {
      try {
        this.fetching = true;
        const res = await getPosts(option);
        if (res.data.msg === 'success') {
          this.posts_list = res.data.list;
        } else {
          onWarning(res.data.msg);
        }
      } catch (error) {
        useTimer(() => {
          this.fetching = false;
        }, 3);
        onError('出错了');
      }
    },
    async onGetPostsDetailAction(id: string) {
      try {
        this.fetching = true;
        const res = await getPostsById(id);
        if (res.data.msg === 'success') {
          this.posts_detail = res.data;
        } else {
          onWarning(res.data.msg);
        }
      } catch (error) {
        useTimer(() => {
          this.fetching_detail = false;
        }, 3);
        onError('出错了');
      }
    },
    async onCreatePostsAction(data: PostsFormItem) {
      try {
        const res = await createPosts(data);
        if (res.data.msg === 'success') {
          onSuccess('发布成功');
        } else {
          onWarning(res.data.msg);
        }
      } catch (error) {
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
