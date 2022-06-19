import { ProgramContext } from "@api/dataContext/fake";

export const getArticleById = async (articleCode: string) => {
  const data = await ProgramContext.getArticleByCode({ articleCode });
  return data;
};
