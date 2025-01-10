import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  post?: PostWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
