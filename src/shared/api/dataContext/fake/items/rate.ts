import { RateListItemDTO } from "@api/dto";
import { RateType } from "@api/types";

export const userRateInfo: RateType = {
  placeInRate: 21,
  placeInGroup: 7,
};

export const generalRateListByRaitingId: RateListItemDTO[] = [
  {
    placeInRaiting: 1,
    groupId: "1",
    groupName: "Группа 1",
    curator: {
      id: "1",
      fullname: "Козырева Маргарита Анатольевна",
      positionName: "Менеджер",
    },
    talentsCount: 75,
  },
  {
    placeInRaiting: 2,
    groupId: "2",
    groupName: "Группа 2",
    curator: {
      id: "2",
      fullname: "Бадьянова Наталья Михайловна",
      positionName: "Технолог",
    },
    talentsCount: 53,
  },
  {
    placeInRaiting: 3,
    groupId: "3",
    groupName: "Группа 3",
    curator: {
      id: "3",
      fullname: "Рогов Марк Васильевич",
      positionName: "Директор",
    },
    talentsCount: 33,
  },
];
export const userRateListInGroupByRaitingId: RateListItemDTO[] = [
  {
    placeInRaiting: 1,
    groupId: "1",
    groupName: "Группа 1",
    curator: {
      id: "1",
      fullname: "Козырева Маргарита Анатольевна",
      positionName: "Менеджер",
    },
    talentsCount: 99,
  },
  {
    placeInRaiting: 2,
    groupId: "1",
    groupName: "Группа 1",
    curator: {
      id: "2",
      fullname: "Шорохова Ольга Васильевна",
      positionName: "Менеджер",
    },
    talentsCount: 75,
  },
  {
    placeInRaiting: 3,
    groupId: "1",
    groupName: "Группа 1",
    curator: {
      id: "3",
      fullname: "Игнатьев Игнат Игнатович",
      positionName: "Менеджер",
    },
    talentsCount: 50,
  },
];
export const groupRateListByRaitingId: RateListItemDTO[] = [
  {
    placeInRaiting: 1,
    groupId: "1",
    groupName: "Группа 1",
    curator: {
      id: "1",
      fullname: "Козырева Маргарита Анатольевна",
      positionName: "Менеджер",
    },
    talentsCount: 99,
  },
  {
    placeInRaiting: 2,
    groupId: "2",
    groupName: "Группа 2",
    curator: {
      id: "2",
      fullname: "Шорохова Ольга Васильевна",
      positionName: "Менеджер",
    },
    talentsCount: 75,
  },
  {
    placeInRaiting: 3,
    groupId: "3",
    groupName: "Группа 3",
    curator: {
      id: "3",
      fullname: "Игнатьев Игнат Игнатович",
      positionName: "Менеджер",
    },
    talentsCount: 50,
  },
];
