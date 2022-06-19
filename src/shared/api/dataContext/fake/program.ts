import { INews } from "@shared/api/interfaces";
import { httpServiceMock, ResponseResult } from "@shared/service/service";
import { programData, gemificationData } from "./items/program";

export class ProgramData {
  getArticleByCode(payload: { articleCode: string }): ResponseResult<INews> {
    if (payload.articleCode === "about_program") {
      const data = httpServiceMock<INews>(programData);
      return data;
    }
    if(payload.articleCode === "gemification_rules"){
      const data = httpServiceMock<INews>(gemificationData);
      return data;
    }
    return null
  }
}
