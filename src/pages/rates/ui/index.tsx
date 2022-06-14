import React from "react";
import { withLayout } from "@ui/layout";
import { UserWidgets } from "@widgets/UserWidgets/ui";
import { ReviewSection } from "@shared/ui/layout/review";

import { useData } from "@shared/helpers/hooks/useData";
import { INews } from "@shared/api/interfaces";
import { ProgramContext, RateContext } from "@shared/api/dataContext/fake";
import { WithSkeleton } from "@shared/ui/WithSkeleton";

import cn from "classnames";
import styles from "./styles.module.scss";
import { RateType } from "@shared/api/types";
import classNames from "classnames";
import { Search } from "@shared/ui/Search/ui/Search";
import { Table } from '@features/Table';


const Rates: React.FC<any> = props => {
  const { data, isLoading, isError } = useData<RateType>(() =>
    RateContext.getUserRateByUserId({ userId: "1" })
  );

  return (
    <WithSkeleton isLoading={isLoading} isEmpty={data === null}>
      <div className={cn(styles.root, classNames)}>
        <Search searchQuery={'1'}/>
        <Table/>
      </div>
      <h1>Rates</h1>
    </WithSkeleton>
  );
};

export default withLayout(Rates);
