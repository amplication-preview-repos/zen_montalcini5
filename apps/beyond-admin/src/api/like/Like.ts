import { Comment } from "../comment/Comment";
import { Post } from "../post/Post";
import { User } from "../user/User";

export type Like = {
  comment?: Comment | null;
  createdAt: Date;
  id: string;
  post?: Post | null;
  updatedAt: Date;
  user?: User | null;
};
