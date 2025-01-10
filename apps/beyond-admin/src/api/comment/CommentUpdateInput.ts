import { LikeUpdateManyWithoutCommentsInput } from "./LikeUpdateManyWithoutCommentsInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  likes?: LikeUpdateManyWithoutCommentsInput;
  post?: PostWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
