import { UserType } from "@api/types";
import { httpService, ResponseResult } from "@shared/service/service";

export class CuratorData {
  getCuratorListByGroupId(payload: {
    groupId: string;
  }): ResponseResult<UserType[]> {
    const data = httpService<UserType[]>(
      "GET",
      "getCuratorListByGroupId",
      `code=${payload.groupId}`
    );
    return data;
  }
}
