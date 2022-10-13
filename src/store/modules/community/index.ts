import { defineStore } from 'pinia';
import piniaStore from '@/store';
import { onWarning, onError, onSuccess } from '@/utils/messages';
import useTimer from '@/hooks/useTimer';
import { PaginationOptions } from '@/models';
import {
  createPosts,
  deletePosts,
  getPosts,
  getPostsById,
  updatePosts,
} from '@/service/api/community';
import { PostsFormItem, PostsItem } from '@/models/community';
export interface CommunityStateProps {
  posts_list: PostsItem[];
  posts_detail: PostsItem | null;
  fetching: boolean;
  fetching_detail: boolean;
}

export const useCommunityStore = defineStore({
  id: 'community',
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
          this.fetching = false;
        } else {
          onWarning(res.data.msg);
          this.fetching = false;
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
        this.fetching_detail = true;
        const res = await getPostsById(id);
        if (res.data.msg === 'success') {
          this.posts_detail = res.data;
          this.fetching_detail = false;
        } else {
          onWarning(res.data.msg);
          this.fetching_detail = false;
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
          this.onGetPostsAction();
        } else {
          onWarning(res.data.msg);
        }
      } catch (error) {
        onError('出错了');
      }
    },
    async onUpdatePostsAction(data: PostsItem) {
      try {
        const res = await updatePosts(data);
        if (res.data.msg === 'success') {
          onSuccess('更新成功');
          this.onGetPostsAction();
        } else {
          onWarning(res.data.msg);
        }
      } catch (error) {
        onError('出错了');
      }
    },
    async onDeletePostsAction(id: string) {
      try {
        const res = await deletePosts(id);
        if (res.data.msg === 'success') {
          onSuccess('已删除');
          this.onGetPostsAction();
        } else {
          onWarning(res.data.msg);
        }
      } catch (error) {
        onError('出错了');
      }
    },
  },
});

export function useCommunityOutsideStore() {
  return useCommunityStore(piniaStore);
}
