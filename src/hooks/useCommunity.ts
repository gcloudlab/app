import { useCommunityOutsideStore } from '@/store/modules/community';
import { PaginationOptions } from '@/models';
import { PostsFormItem } from '@/models/community';

const communityStore = useCommunityOutsideStore();

export const useCommunity = () => {
  const onCreatePosts = async (data: PostsFormItem) => {
    return await communityStore.onCreatePostsAction(data);
  };

  const onGetPostsList = async (option?: PaginationOptions) => {
    return await communityStore.onGetPostsAction(option);
  };

  const onGetPostsDetail = async (id: string) => {
    return await communityStore.onGetPostsDetailAction(id);
  };

  return {
    communityStore,
    onCreatePosts,
    onGetPostsList,
    onGetPostsDetail,
  };
};
