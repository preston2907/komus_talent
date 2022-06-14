import { RateListItemDTO } from '@api/dto';
import { RateType } from "@api/types";
import { httpService, ResponseResult } from "@shared/service/service";

export class RateData {
  getUserRateByUserId(payload: {
    userId: string;
  }): ResponseResult<RateType> {
    const data = httpService<RateType>(
      "GET",
      "getUserRateByUserId",
      `user_id=${payload.userId}`
    );
    return data;
  }

  getGeneralRateListByRaitingId(payload: {
    raitingId: string;
  }): ResponseResult<RateListItemDTO[]> {
    const data = httpService<RateListItemDTO[]>(
      "GET",
      "getRateListByRaitingId",
      `raiting_id=${payload.raitingId}`
    );
    return data;
  }
  getUserRateListInGroupByRaitingId(payload: {
    raitingId: string;
  }): ResponseResult<RateListItemDTO[]> {
    const data = httpService<RateListItemDTO[]>(
      "GET",
      "getUserRateListInGroupByRaitingId",
      `raiting_id=${payload.raitingId}`
    );
    return data;
  }
  getGroupRatesListByRaitingId(payload: {
    raitingId: string;
  }): ResponseResult<RateListItemDTO[]> {
    const data = httpService<RateListItemDTO[]>(
      "GET",
      "getGroupRatesListByRaitingId",
      `raiting_id=${payload.raitingId}`
    );
    return data;
  }
}
