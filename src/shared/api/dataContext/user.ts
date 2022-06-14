import { GroupType, UserTalentType, UserType } from "@api/types";
import { httpService, ResponseResult } from "@shared/service/service";

export class UserData {
  getCurrentUser(): ResponseResult<UserType> {
    const data = httpService<UserType>(
      "GET",
      "getCurrentUser",
    );
    return data;
  }
  getUserById(payload: { userId: string }): ResponseResult<UserType> {
    const data = httpService<UserType>(
      "GET",
      "getUserGroupByUserId",
      `user_id=${payload.userId}`
    );
    return data;
  }
}

