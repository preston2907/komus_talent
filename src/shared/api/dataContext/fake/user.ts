import { UserType } from "@api/types";
import { httpServiceMock, ResponseResult } from "@shared/service/service";
import { userData } from './items/user';

export class UserData {
  getCurrentUser(): ResponseResult<UserType> {
    const data = httpServiceMock<UserType>(userData);
    return data;
  }
  getUserById(payload: { userId: string }): ResponseResult<UserType> {
    const data = httpServiceMock<UserType>(userData);
    return data;
  }
}
