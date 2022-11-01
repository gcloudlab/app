import { useCommunityOutsideStore } from '@/store/modules/community';
import { PaginationOptions } from '@/models';
import {
  PostsCommentFormItem,
  PostsFeedbackCreate,
  PostsFormItem,
  PostsItem,
} from '@/models/community';

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

  const onUpdatePosts = async (data: PostsItem) => {
    return await communityStore.onUpdatePostsAction(data);
  };

  const onDeletePosts = async (id: string) => {
    return await communityStore.onDeletePostsAction(id);
  };

  const onCreatePostsComment = async (data: PostsCommentFormItem) => {
    return await communityStore.onCreatePostsCommentAction(data);
  };

  const onGetPostsComment = async (id: string) => {
    return await communityStore.onGetPostsCommentAction(id);
  };

  const onUpdatePostsComment = async (data: PostsCommentFormItem) => {
    return await communityStore.onUpdatePostsCommentAction(data);
  };

  const onDeletePostsComment = async (id: string, posts_id: string) => {
    return await communityStore.onDeletePostsCommentAction(id, posts_id);
  };

  const onCreatePostsFeedback = async (data: PostsFeedbackCreate) => {
    return await communityStore.onCreatePostsFeedbackAction(data);
  };

  return {
    communityStore,
    onCreatePosts,
    onGetPostsList,
    onGetPostsDetail,
    onDeletePosts,
    onUpdatePosts,
    onCreatePostsComment,
    onGetPostsComment,
    onUpdatePostsComment,
    onDeletePostsComment,
    onCreatePostsFeedback,
  };
};
