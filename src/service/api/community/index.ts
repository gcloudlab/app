import axios from '@/service/axios';
import {
  PostsCommentFormItem,
  PostsCommentItem,
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

export const updatePosts = (data: PostsFormItem): Promise<CustomResponse<BaseData>> => {
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
): Promise<CustomResponse<PostsCommentItem>> => {
  return axios.post('/posts/comment/list', { posts_identity });
};

export const deletePostsComment = (id: string): Promise<CustomResponse<BaseData>> => {
  return axios.delete('/posts/comment/delete', {
    data: { identity: id },
  });
};
