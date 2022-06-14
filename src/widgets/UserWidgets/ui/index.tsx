import React, { DetailedHTMLProps, HTMLAttributes, useEffect } from "react";
import {userModel} from '@entities/User'
import { UserGroupCard, userGroupModel } from "@entities/GroupCard";
import { UserRateCard, userRateModel } from "@entities/RateCard";
import { WithSkeleton } from "@ui/WithSkeleton";
import { useDispatch, useSelector } from "react-redux";

import cn from "classnames";
import styles from "./styles.module.scss";
import EllipseSvg from "../assets/ellipse.svg";
import RedCircleSvg from "../assets/redCircle.svg";
import PlaceInGroupSvg from "../assets/placeInGroup.svg";
import Button from "@shared/ui/Button/ui";
import { modalActions } from '@features/Modal/redux/ModalSlices';
import { ModalKey } from '@features/Modal/components/ModalController';

interface userWidgetsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

const UserWidgets: React.FC<userWidgetsProps> = props => {
  const { className } = props;

  const dispatch = useDispatch();

  const onClickHandler = (groupId: string) => {
    dispatch(
      modalActions.showModal({
        key: ModalKey.UserGroupWidget,
        withBackground: true,
        payload: {
          groupId: groupId,
        },
      })
    );
  };

  const userGroupResponse = useSelector(
    (state: { userGroup: userGroupModel.GroupSlices.UserGroupState }) =>
      state.userGroup
  );
  const userRateResponse = useSelector(
    (state: { userRate: userRateModel.slices.UserRateState }) => state.userRate
  );

  useEffect(() => {
    dispatch(userGroupModel.actions.getUserGroupByUserId("1"));
  }, [dispatch]);
  useEffect(() => {
    dispatch(userRateModel.actions.getUserRateByUserId("1"));
  }, [dispatch]);
  useEffect(() => {
    dispatch(userGroupModel.actions.getUserTalentsByUserId("1"));
  }, [dispatch]);

  return (
    <div className={cn(styles.root, className)}>
      <WithSkeleton
        isEmpty={userGroupResponse.entity === null}
        isLoading={userGroupResponse.isLoading}
      >
        <UserGroupCard className={styles.groupCard} onClick={() => onClickHandler('1')}>
          <div className={styles.groupCardbox}>
            <div>
              <h2>Моя группа</h2>
              <span>{userGroupResponse.entity?.shortText}</span>
            </div>

            <Button mode="red" withCircle>
              Посмотреть
            </Button>
          </div>
          <div className={styles.placeInTalentSelection}>
            <EllipseSvg />
            <div>
              <span style={{ fontWeight: "700", fontSize: "72px" }}>
                {userRateResponse?.entity?.placeInRate}
              </span>
              <br />
              <span>Мои tаlents</span>
            </div>
          </div>
        </UserGroupCard>
      </WithSkeleton>
      <WithSkeleton
        isEmpty={userRateResponse.entity === null}
        isLoading={userRateResponse.isLoading}
      >
        <UserRateCard
          data={userRateResponse.entity}
          className={styles.rateCard}
        >
          <div>
            <RedCircleSvg className={styles.redCircle} />
            <div className={styles.placeInGroupSelection}>
              <PlaceInGroupSvg />
              <div>
                <span style={{ fontWeight: "700", fontSize: "50px" }}>
                  {userRateResponse?.entity?.placeInGroup}
                </span>
                <br />
                <span>место</span>
                <br />
                <span>в группе</span>
              </div>
            </div>
          </div>
          <div className={styles.rateCardbox}>
            <Button mode="red" withCircle>
              Подробнее
            </Button>
          </div>
        </UserRateCard>
      </WithSkeleton>
    </div>
  );
};

export { UserWidgets };
