import { ProgramContext } from "@api/dataContext/fake";

export const getAboutProgram = async (programCode: string) => {
  const data = await ProgramContext.getAboutProgram({ programCode });
  return data;
};
