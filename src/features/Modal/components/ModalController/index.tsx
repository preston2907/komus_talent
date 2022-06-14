import React from "react";
import { CuratorsWidget } from "@widgets/CuratorsWidget";
import { ExpertsWidget } from "@widgets/ExpertsWidget";
import { RoadmapWidget } from "@widgets/roadmap";
import { UserGroupWidget } from '@widgets/UserGroup';
import { AboutProgramWidget } from '@widgets/AboutProgram';


export enum ModalKey {
  Default = "DEFAULT",
  CuratorsWidget = "CURATORS_WIDGET",
  ExpertsWidget = "EXPERTS_WIDGET",
  RoadmapWidget = "ROADMAP_WIDGET",
  UserGroupWidget = "USER_GROUP_WIDGET",
  AboutProgramWidget = "ABOUT_PROGRAM_WIDGET",
}

export type ModalKeyToPayload = {
  [ModalKey.Default]: null;
  [ModalKey.CuratorsWidget]: { readonly groupId: number | string | null };
  [ModalKey.ExpertsWidget]: { readonly groupId: number | string | null };
  [ModalKey.RoadmapWidget]: { readonly groupId: number | string | null };
  [ModalKey.UserGroupWidget]: { readonly groupId: number | string | null };
  [ModalKey.AboutProgramWidget]: { readonly programId: number | string | null };
};

export const MODAL_KEY_TO_COMPONENT_MAP: {
  [key in ModalKey]: React.FC<{ payload: ModalKeyToPayload[key] }>;
} = {
  [ModalKey.Default]: ({ payload }) => null,
  [ModalKey.CuratorsWidget]: payload => {
    return <CuratorsWidget {...payload} />;
  },
  [ModalKey.ExpertsWidget]: payload => {
    return <ExpertsWidget {...payload} />;
  },
  [ModalKey.RoadmapWidget]: payload => {
    return <RoadmapWidget {...payload} />;
  },
  [ModalKey.UserGroupWidget]: payload => {
    return <UserGroupWidget {...payload} />;
  },
  [ModalKey.AboutProgramWidget]: payload => {
    return <AboutProgramWidget {...payload} />;
  },
};

// export function openModal<K extends ModalKey>(
// 	key: K,
// 	payload: ModalKeyToPayload[K]
// ): ModalKeyToPayload[K];

// const Component = MODAL_KEY_TO_COMPONENT_MAP['PROCESS'];

// const payload = openModal(ModalKey.Process, {
// 	eventId: 1
// });
