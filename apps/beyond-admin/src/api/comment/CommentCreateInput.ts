import { LikeCreateNestedManyWithoutCommentsInput } from "./LikeCreateNestedManyWithoutCommentsInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  likes?: LikeCreateNestedManyWithoutCommentsInput;
  post?: PostWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
