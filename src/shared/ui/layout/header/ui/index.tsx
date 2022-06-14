import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import { UserType } from "@shared/api/types";
import { useSelector } from "react-redux";
import { userModel } from "@entities/User";
import { WithSkeleton } from "@shared/ui/WithSkeleton";

interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

const Header: React.FC<HeaderProps> = props => {
  const { className, style } = props;

  const userState = useSelector(
    (state: { user: userModel.slices.UserState }) => state.user
  );

  return (
    <div
      className={cn(styles.root, className)}
      style={{
        backgroundImage:
          'url("' + process.env["PUBLIC"] + 'images/main_header.png")',
      }}
    >
      <div className={styles.mainMenu_ellipse1}>
        <img
          src={`${process.env["PUBLIC"]}/images/icons/Elipse 83.png`}
          alt=""
        />
      </div>
      <div className={styles.mainMenu_bird}>
        <img src={`${process.env["PUBLIC"]}/images/icons/logo.png`} alt="" />
      </div>
      <div className={styles.mainMenu__wrapper}>
        <div className={styles.mainMenu__logo}>
          <Link to="/main">
            <img
              src={`${process.env["PUBLIC"]}/images/MainLogo.png`}
              alt="logo"
              title="logo"
            />
          </Link>
        </div>
        <WithSkeleton
          isLoading={userState.isLoading}
          isEmpty={userState.entity === null}
        >
          {userState.entity && (
            <div className={styles.mainMenu__userbar}>
              <div className={styles.mainMenu__userContainer}>
                <a href="" className={styles.mainMenu__userLink}>
                  <div className={styles.mainMenu__userQuest}>
                    Задать вопрос
                  </div>
                  <img
                    src={`${process.env["PUBLIC"]}/images/user.png`}
                    alt=""
                  />
                  <div className={styles.mainMenu__userName}>
                    {userState.entity.fullname}
                  </div>
                </a>
              </div>
            </div>
          )}
        </WithSkeleton>
      </div>
      <div className={styles.mainMenu__item}>
        <div className={styles.mainMenu__item1}>
          Таланты _ <span className={styles.mainMenu__text}>Лига Юниоров</span>
        </div>
        <div className={styles.mainMenu__item2}>
          Всё сл &nbsp;
          <img
            src={`${process.env["PUBLIC"]}/images/icons/Ellipse 82.png`}
            alt=""
          />
          жится!
        </div>
      </div>
    </div>
  );
};

export default Header;
