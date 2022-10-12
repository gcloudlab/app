import { useCommunityOutsideStore } from '@/store/modules/community';
import { PaginationOptions } from '@/models';
import { PostsFormItem } from '@/models/community';
import { createPosts, getPosts, getPostsById } from '@/service/api/community';
import { onError, onSuccess, onWarning } from '@/utils/messages';
import useTimer from './useTimer';

const communityStore = useCommunityOutsideStore();

export const useCommunity = () => {
  const onCreatePosts = async (data: PostsFormItem) => {
    // return await communityStore.onCreatePostsAction(data);
    try {
      const res = await createPosts(data);
      if (res.data.msg === 'success') {
        onSuccess('发布成功');
        communityStore.onGetPostsAction();
      } else {
        onWarning(res.data.msg);
      }
    } catch (error) {
      onError('出错了');
    }
  };

  const onGetPostsList = async (option?: PaginationOptions) => {
    // return await communityStore.onGetPostsAction(option);
    try {
      communityStore.fetching = true;
      const res = await getPosts(option);
      if (res.data.msg === 'success') {
        communityStore.posts_list = res.data.list;
        communityStore.fetching = false;
      } else {
        onWarning(res.data.msg);
        communityStore.fetching = false;
      }
    } catch (error) {
      useTimer(() => {
        communityStore.fetching = false;
      }, 3);
      onError('出错了');
    }
  };

  const onGetPostsDetail = async (id: string) => {
    // return await communityStore.onGetPostsDetailAction(id);
    try {
      communityStore.fetching = true;
      const res = await getPostsById(id);
      if (res.data.msg === 'success') {
        communityStore.posts_detail = res.data;
      } else {
        onWarning(res.data.msg);
      }
    } catch (error) {
      useTimer(() => {
        communityStore.fetching_detail = false;
      }, 3);
      onError('出错了');
    }
  };

  return {
    communityStore,
    onCreatePosts,
    onGetPostsList,
    onGetPostsDetail,
  };
};
