import { RoadmapContext } from "@api/dataContext/fake";

export const getModules = async () => {
  const data = await RoadmapContext.getModules();
  return data;
};

export const getModuleById = async (moduleId: string) => {
  const data = await RoadmapContext.getModuleById({ moduleId });
  return data;
};
