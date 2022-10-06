export interface PostsBaseItem {
  title: string;
  content: string;
  tags: string;
  at: string;
  link: string;
}

export interface PostsFormItem extends PostsBaseItem {
  cover: string;
}

export interface PostsItem extends PostsBaseItem {
  identity: string;
  like: number;
  dislike: number;
  collection: number;
  click_num: number;
  owner: string;
  updated_at: string;
}

export interface PostsCommentItem {
  identity: string;
  posts_identity: string;
  reply_to?: string;
  owner: string;
  at: string;
  like: number;
  dislike: number;
  content: string;
  updated_at: string;
}
