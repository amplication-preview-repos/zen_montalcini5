import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { LikeUpdateManyWithoutPostsInput } from "./LikeUpdateManyWithoutPostsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  likes?: LikeUpdateManyWithoutPostsInput;
  user?: UserWhereUniqueInput | null;
};
