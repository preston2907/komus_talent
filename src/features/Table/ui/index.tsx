import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { RateListItemDTO } from "@shared/api/dto";

import cn from "classnames";
import styles from "./styles.module.scss";
import { useData } from "@shared/helpers/hooks/useData";
import { RateContext } from "@shared/api/dataContext/fake";
import { WithSkeleton } from "@shared/ui/WithSkeleton";
import { TableFilters } from "./components/TableFilters";
import TableContent from "./components/TableContent/ui";

interface ITableBody
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  className?: string;
}


const Table: React.FC<ITableBody> = props => {
  const { data, isError, isLoading } = useData<RateListItemDTO[]>(() =>
    RateContext.getGeneralRateListByRaitingId({ raitingId: "1" })
  );

   
  const { className } = props;
  

  return (
    <WithSkeleton isLoading={isLoading} isEmpty={data === null}>
      {/* TODO */}
      {/* <TableFilters current={state.current} filters={filters}  /> */}
      {data && <TableContent data={data} />}
    </WithSkeleton>
  );
};

export default Table;
