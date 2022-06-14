import { RateListItemDTO } from "@api/dto";
import { RateType } from "@api/types";
import { httpServiceMock, ResponseResult } from "@shared/service/service";
import {
  generalRateListByRaitingId,
  groupRateListByRaitingId,
  userRateInfo,
  userRateListInGroupByRaitingId,
} from "./items/rate";

export class RateData {
  getUserRateByUserId(payload: { userId: string }): ResponseResult<RateType> {
    const data = httpServiceMock<RateType>(userRateInfo);
    return data;
  }

  getGeneralRateListByRaitingId(payload: {
    raitingId: string;
  }): ResponseResult<RateListItemDTO[]> {
    const data = httpServiceMock<RateListItemDTO[]>(generalRateListByRaitingId);
    return data;
  }
  getUserRateListInGroupByRaitingId(payload: {
    raitingId: string;
  }): ResponseResult<RateListItemDTO[]> {
    const data = httpServiceMock<RateListItemDTO[]>(
      userRateListInGroupByRaitingId
    );
    return data;
  }
  getGroupRatesListByRaitingId(payload: {
    raitingId: string;
  }): ResponseResult<RateListItemDTO[]> {
    const data = httpServiceMock<RateListItemDTO[]>(groupRateListByRaitingId);
    return data;
  }
}
