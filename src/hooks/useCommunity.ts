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

  return {
    communityStore,
    onCreatePosts,
    onGetPostsList,
  };
};
