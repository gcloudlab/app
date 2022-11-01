import { defineStore } from 'pinia';
import piniaStore from '@/store';
import { onWarning, onError, onSuccess, onInfo } from '@/utils/messages';
import useTimer from '@/hooks/useTimer';
import { PaginationOptions } from '@/models';
import {
  createPosts,
  createPostsComment,
  createPostsFeedback,
  deletePosts,
  deletePostsComment,
  getPosts,
  getPostsById,
  getPostsComment,
  updatePosts,
  updatePostsComment,
} from '@/service/api/community';
import {
  PostsCommentFormItem,
  PostsCommentItem,
  PostsFeedbackCreate,
  PostsFormItem,
  PostsItem,
} from '@/models/community';
export interface CommunityStateProps {
  posts_list: PostsItem[];
  posts_list_changable: PostsItem[];
  posts_detail: PostsItem | null;
  fetching: boolean;
  fetching_detail: boolean;
  fetching_comment: boolean;
  posts_detail_comment: PostsCommentItem[] | null;
}

export const useCommunityStore = defineStore({
  id: 'community',
  state: () =>
    ({
      posts_list: [],
      posts_list_changable: [],
      posts_detail: null,
      posts_detail_comment: null,
      fetching: false,
      fetching_detail: false,
      fetching_comment: false,
    } as CommunityStateProps),
  getters: {
    posts_count: state => state.posts_list.length || -1,
    posts_views: state => state.posts_list.reduce((total, item) => total + item.click_num, 0),
    posts_comment: state => state.posts_list.reduce((total, item) => total + item.reply_num, 0),
  },
  actions: {
    async onGetPostsAction(option?: PaginationOptions) {
      try {
        this.fetching = true;
        const res = await getPosts(option);
        if (res.data.msg === 'success') {
          this.posts_list = res.data.list;
          this.posts_list_changable = res.data.list;
          this.fetching = false;
        } else {
          onWarning(res.data.msg);
          this.fetching = false;
        }
      } catch (error) {
        useTimer(() => {
          this.fetching = false;
        }, 3);
        onError(`出错了: ${error}`);
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
        onError(`出错了: ${error}`);
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
        onError(`${error}`);
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
        onError(`${error}`);
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
        onError(`${error}`);
      }
    },
    async onCreatePostsCommentAction(data: PostsCommentFormItem) {
      try {
        const res = await createPostsComment(data);
        if (res.data.msg === 'success') {
          onSuccess('评论成功');
          this.onGetPostsCommentAction(data.posts_identity);
        } else {
          onWarning(res.data.msg);
        }
      } catch (error) {
        onError(`${error}`);
      }
    },
    async onGetPostsCommentAction(id: string) {
      try {
        this.fetching_comment = true;
        const res = await getPostsComment(id);
        if (res.data.msg === 'success') {
          this.posts_detail_comment = res.data.list;
          this.fetching_comment = false;
        } else {
          onWarning(res.data.msg);
          this.fetching_comment = false;
        }
      } catch (error) {
        useTimer(() => {
          this.fetching_comment = false;
        }, 3);
        onError(`${error}`);
      }
    },
    async onUpdatePostsCommentAction(data: PostsCommentFormItem) {
      try {
        const res = await updatePostsComment(data);
        if (res.data.msg === 'success') {
          onSuccess('更新成功');
          this.onGetPostsCommentAction(data.posts_identity);
        } else {
          onWarning(res.data.msg);
        }
      } catch (error) {
        onError(`${error}`);
      }
    },
    async onDeletePostsCommentAction(id: string, posts_id: string) {
      try {
        const res = await deletePostsComment(id);
        if (res.data.msg === 'success') {
          onSuccess('已删除');
          this.onGetPostsCommentAction(posts_id);
        } else {
          onWarning(res.data.msg);
        }
      } catch (error) {
        onError(`${error}`);
      }
    },
    async onCreatePostsFeedbackAction(data: PostsFeedbackCreate) {
      try {
        const res = await createPostsFeedback(data);
        if (res.data.msg === 'error') {
          onWarning(res.data.msg);
          return;
        } else if (res.data.code === 405) {
          onInfo('已取消');
        } else if (res.data.msg === 'success') {
        }
        this.posts_detail!.ilike = res.data.ilike;
        this.posts_detail!.dislike = res.data.dislike;
        this.posts_detail!.collection = res.data.collect;
      } catch (error) {
        onError(`${error}`);
      }
    },
  },
});

export function useCommunityOutsideStore() {
  return useCommunityStore(piniaStore);
}
