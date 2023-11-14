// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostType = {
  "VLOG": "VLOG",
  "PLOG": "PLOG"
};

const MediaType = {
  "IMAGE": "IMAGE",
  "VIDEO": "VIDEO"
};

const { User, Post, PostMedia, PostComment, PostCommentReply, Business } = initSchema(schema);

export {
  User,
  Post,
  PostMedia,
  PostComment,
  PostCommentReply,
  Business,
  PostType,
  MediaType
};