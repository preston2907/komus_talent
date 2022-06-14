import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { useData } from "@shared/helpers/hooks/useData";
import { ModuleType } from "@shared/api/types";

import cn from "classnames";
import styles from "./styles.module.scss";
import { WithSkeleton } from "@shared/ui/WithSkeleton";
import { ModuleCard, moduleModel } from "@entities/Module";

interface RoadmapProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

const Roadmap: React.FC<RoadmapProps> = props => {
  const { className } = props;
  const { data, isLoading, isError } = useData<ModuleType[]>(() =>
    moduleModel.requests.getModules()
  );

  return (
    <WithSkeleton isEmpty={data === null} isLoading={isLoading}>
      <div className={cn(styles.root)}>
        <span className={styles.title}>Дорожная карта</span>
        <div className={cn(styles.header)}>
          <div className={cn(styles.card)}>
            <p>
              Люди и взаимодействие важнее процессов и инструментов. Работающий
              продукт важнее исчерпывающей документации. Сотрудничество с
              заказчиком важнее согласования условий контракта. Готовность к
              изменениям важнее следования первоначальному плану.
            </p>
          </div>

          <img
            src={`${process.env["PUBLIC"]}/images/birdInCircle.svg`}
            alt=""
          />
        </div>
        <div className={cn(styles.modules)}>
          {data &&
            data.map((item, i) => {
              const setBgImage = () => {
                let count = i;
                if (count < 3) {
                  return `url("${process.env["PUBLIC"]}images/vectors/vector-card-${count}.svg")`;
                } else {
                  count = Math.round(Math.floor(Math.random() * 3));
                  return `url("${process.env["PUBLIC"]}images/vectors/vector-card-${count}.svg")`;
                }
              };

              return (
                <ModuleCard
                  key={item.id}
                  className={cn(styles.moduleCard, {
                    [styles.cardDisabled]: item.disabled === true
                  })}
                  style={{
                    background: setBgImage(),
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "right",
                  }}
                >
                  <div className={styles.content}>
                    <h3>{item.title}</h3>
                    <span>{item.shortText}</span>
                  </div>
                  <div className={styles.date}>{item.date}</div>
                </ModuleCard>
              );
            })}
        </div>
      </div>
    </WithSkeleton>
  );
};

export default Roadmap;
