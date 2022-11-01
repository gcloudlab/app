export interface PostsBaseItem {
  title?: string | null;
  tags?: string | null;
  content?: string;
  mention?: string | null;
}

export interface PostsFormItem extends PostsBaseItem {
  cover?: string | null;
}

export interface PostsItem extends PostsBaseItem {
  identity: string;
  ilike: number;
  dislike: number;
  collection: number;
  click_num: number;
  owner: string;
  avatar: string;
  reply_num: number;
  updated_at: string;
  deleted_at?: string;
}

export interface PostsCommentBaseItem {
  content?: string | null;
  mention?: string | null;
  reply_identity: string | null; // 回复用户
  posts_identity: string; // 所属帖子
  reply_name: string | null;
}

export interface PostsCommentFormItem extends PostsCommentBaseItem {}

export interface PostsCommentItem extends PostsCommentBaseItem {
  identity: string;
  posts_name: string;
  reply_name: string;
  reply_identity: string;
  owner: string;
  owner_identity: string;
  avatar: string;
  ilike: number;
  dislike: number;
  updated_at: string;
  deleted_at?: string;
}

export type FeedbackType = 'ilike' | 'dislike' | 'collect';
export interface PostsFeedbackCreate {
  posts_identity: string;
  type: FeedbackType;
}
