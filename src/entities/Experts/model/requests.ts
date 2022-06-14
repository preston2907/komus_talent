import { ExpertContext } from "@shared/api/dataContext/fake";

export const getExpertListByGroupId = async (groupId: string) => {
  const data = await ExpertContext.getExpertListByGroupId({ groupId });
  return data;
};
