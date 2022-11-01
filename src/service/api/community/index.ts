import axios from '@/service/axios';
import {
  PostsCommentFormItem,
  PostsCommentItem,
  PostsFeedbackCreate,
  PostsFormItem,
  PostsItem,
} from '@/models/community';
import { BaseData, CustomResponse, PaginationOptions } from '@/models';

export const createPosts = (data: PostsFormItem): Promise<CustomResponse<BaseData>> => {
  return axios.post('/posts/create', data);
};

export const getPosts = (
  options?: PaginationOptions
): Promise<CustomResponse<{ list: PostsItem[]; msg?: string; code?: number }>> => {
  return axios.post('/posts/list', options);
};

export const getPostsById = (id: string): Promise<CustomResponse<PostsItem>> => {
  return axios.post('/posts/detail', { identity: id });
};

export const updatePosts = (data: PostsItem): Promise<CustomResponse<BaseData>> => {
  return axios.post('/posts/update', data);
};

export const deletePosts = (id: string): Promise<CustomResponse<BaseData>> => {
  return axios.delete('/posts/delete', {
    data: { identity: id },
  });
};

export const createPostsComment = (
  data: PostsCommentFormItem
): Promise<CustomResponse<BaseData>> => {
  return axios.post('/posts/comment/create', data);
};

export const getPostsComment = (
  posts_identity: string
): Promise<CustomResponse<{ list: PostsCommentItem[]; msg?: string; code?: number }>> => {
  return axios.post('/posts/comment', { posts_identity });
};

export const updatePostsComment = (
  data: PostsCommentFormItem
): Promise<CustomResponse<BaseData>> => {
  return axios.post('/posts/comment/update', data);
};

export const deletePostsComment = (id: string): Promise<CustomResponse<BaseData>> => {
  return axios.delete('/posts/comment/delete', {
    data: { identity: id },
  });
};

export const createPostsFeedback = (
  data: PostsFeedbackCreate
): Promise<
  CustomResponse<{ ilike: number; dislike: number; collect: number; msg?: string; code?: number }>
> => {
  return axios.post('/posts/feedback/create', data);
};
