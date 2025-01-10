import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  comments?: CommentCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  password: string;
  posts?: PostCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
