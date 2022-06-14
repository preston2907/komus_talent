import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { RateListItemDTO } from "@shared/api/dto";

import cn from "classnames";
import styles from "./styles.module.scss";
import { useData } from "@shared/helpers/hooks/useData";
import { RateContext } from "@shared/api/dataContext/fake";

interface ITableFiltersBody
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  className?: string;
}

const TableFilters: React.FC<ITableFiltersBody> = props => {
  const { data, isError, isLoading } = useData<RateListItemDTO[]>(() =>
    RateContext.getGeneralRateListByRaitingId({ raitingId: "1" })
  );

  const { className } = props;

  return <div className='1'>TableFilters</div>;
};

export default TableFilters;
