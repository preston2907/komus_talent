import { INews } from "@shared/api/interfaces";
import { httpService, ResponseResult } from "@shared/service/service";

export class ProgramData {
  public getAboutProgram(payload: { programCode: string }): ResponseResult<INews[]> {
      const data = httpService<INews[]>("GET", "get_about_program", `program_code=${payload.programCode}`);
      return data;
  }
  public getContacts(): ResponseResult<INews[]> {
    const data = httpService<INews[]>("GET", "get_contacts");
    return data;
}
  public getInstructions(): ResponseResult<INews[]> {
    const data = httpService<INews[]>("GET", "get_instructions");
    return data;
}
}