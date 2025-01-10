import { Like } from "../like/Like";
import { Post } from "../post/Post";
import { User } from "../user/User";

export type Comment = {
  content: string | null;
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  post?: Post | null;
  updatedAt: Date;
  user?: User | null;
};
