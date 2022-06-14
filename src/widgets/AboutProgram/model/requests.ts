import { ProgramContext } from "@api/dataContext/fake";

export const getArticleById = async (programId: string) => {
  const data = await ProgramContext.getProgramById({ programId });
  return data;
};
