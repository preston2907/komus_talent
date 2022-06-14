import { INews } from "@shared/api/interfaces";
import { httpServiceMock, ResponseResult } from "@shared/service/service";
import { programData } from "./items/program";

export class ProgramData {
  getProgramById(payload: { programId: string }): ResponseResult<INews> {
    const data = httpServiceMock<INews>(programData);
    return data;
  }
}
