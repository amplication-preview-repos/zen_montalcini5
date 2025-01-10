import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeUpdateInput = {
  comment?: CommentWhereUniqueInput | null;
  post?: PostWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
