export interface PostsBaseItem {
  title: string;
  tags: string;
  content: string;
  mention: string;
}

export interface PostsFormItem extends PostsBaseItem {
  cover?: string;
}

export interface PostsItem extends PostsBaseItem {
  identity: string;
  like: number;
  dislike: number;
  collection: number;
  click_num: number;
  owner: string;
  updated_at: string;
  deleted_at?: string;
}

export interface PostsCommentBaseItem {
  content: string;
  mention: string;
  reply_identity: string; // 回复用户
  posts_identity: string; // 所属帖子
}

export interface PostsCommentFormItem extends PostsCommentBaseItem {}

export interface PostsCommentItem extends PostsCommentBaseItem {
  identity: string;
  posts_name: string;
  reply_name: string;
  owner: string;
  like: number;
  dislike: number;
  updated_at: string;
  deleted_at?: string;
}
