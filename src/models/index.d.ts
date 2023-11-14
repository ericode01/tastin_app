import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum PostType {
  VLOG = "VLOG",
  PLOG = "PLOG"
}

export enum MediaType {
  IMAGE = "IMAGE",
  VIDEO = "VIDEO"
}



type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly profile_picture_url: string;
  readonly description?: string | null;
  readonly posts?: (Post | null)[] | null;
  readonly post_comments?: (PostComment | null)[] | null;
  readonly post_comment_replies?: (PostCommentReply | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly profile_picture_url: string;
  readonly description?: string | null;
  readonly posts: AsyncCollection<Post>;
  readonly post_comments: AsyncCollection<PostComment>;
  readonly post_comment_replies: AsyncCollection<PostCommentReply>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly post_type: PostType | keyof typeof PostType;
  readonly cover_image_url: string;
  readonly post_media?: (PostMedia | null)[] | null;
  readonly user?: User | null;
  readonly post_comments?: (PostComment | null)[] | null;
  readonly business?: Business | null;
  readonly post_comment_replies?: (PostCommentReply | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userPostsId?: string | null;
  readonly businessPostsId?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description?: string | null;
  readonly post_type: PostType | keyof typeof PostType;
  readonly cover_image_url: string;
  readonly post_media: AsyncCollection<PostMedia>;
  readonly user: AsyncItem<User | undefined>;
  readonly post_comments: AsyncCollection<PostComment>;
  readonly business: AsyncItem<Business | undefined>;
  readonly post_comment_replies: AsyncCollection<PostCommentReply>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userPostsId?: string | null;
  readonly businessPostsId?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerPostMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostMedia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly url: string;
  readonly media_type: MediaType | keyof typeof MediaType;
  readonly post?: Post | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postPost_mediaId?: string | null;
}

type LazyPostMedia = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostMedia, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly url: string;
  readonly media_type: MediaType | keyof typeof MediaType;
  readonly post: AsyncItem<Post | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postPost_mediaId?: string | null;
}

export declare type PostMedia = LazyLoading extends LazyLoadingDisabled ? EagerPostMedia : LazyPostMedia

export declare const PostMedia: (new (init: ModelInit<PostMedia>) => PostMedia) & {
  copyOf(source: PostMedia, mutator: (draft: MutableModel<PostMedia>) => MutableModel<PostMedia> | void): PostMedia;
}

type EagerPostComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly post?: Post | null;
  readonly user?: User | null;
  readonly post_comment_replies?: (PostCommentReply | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userPost_commentsId?: string | null;
  readonly postPost_commentsId?: string | null;
}

type LazyPostComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly post: AsyncItem<Post | undefined>;
  readonly user: AsyncItem<User | undefined>;
  readonly post_comment_replies: AsyncCollection<PostCommentReply>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userPost_commentsId?: string | null;
  readonly postPost_commentsId?: string | null;
}

export declare type PostComment = LazyLoading extends LazyLoadingDisabled ? EagerPostComment : LazyPostComment

export declare const PostComment: (new (init: ModelInit<PostComment>) => PostComment) & {
  copyOf(source: PostComment, mutator: (draft: MutableModel<PostComment>) => MutableModel<PostComment> | void): PostComment;
}

type EagerPostCommentReply = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostCommentReply, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly post?: Post | null;
  readonly user?: User | null;
  readonly post_comment?: PostComment | null;
  readonly reply_to_user_id: string;
  readonly reply_to_user_name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userPost_comment_repliesId?: string | null;
  readonly postPost_comment_repliesId?: string | null;
  readonly postCommentPost_comment_repliesId?: string | null;
}

type LazyPostCommentReply = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostCommentReply, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly content: string;
  readonly post: AsyncItem<Post | undefined>;
  readonly user: AsyncItem<User | undefined>;
  readonly post_comment: AsyncItem<PostComment | undefined>;
  readonly reply_to_user_id: string;
  readonly reply_to_user_name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userPost_comment_repliesId?: string | null;
  readonly postPost_comment_repliesId?: string | null;
  readonly postCommentPost_comment_repliesId?: string | null;
}

export declare type PostCommentReply = LazyLoading extends LazyLoadingDisabled ? EagerPostCommentReply : LazyPostCommentReply

export declare const PostCommentReply: (new (init: ModelInit<PostCommentReply>) => PostCommentReply) & {
  copyOf(source: PostCommentReply, mutator: (draft: MutableModel<PostCommentReply>) => MutableModel<PostCommentReply> | void): PostCommentReply;
}

type EagerBusiness = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Business, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly posts?: (Post | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBusiness = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Business, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly posts: AsyncCollection<Post>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Business = LazyLoading extends LazyLoadingDisabled ? EagerBusiness : LazyBusiness

export declare const Business: (new (init: ModelInit<Business>) => Business) & {
  copyOf(source: Business, mutator: (draft: MutableModel<Business>) => MutableModel<Business> | void): Business;
}