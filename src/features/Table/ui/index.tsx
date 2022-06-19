import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { RateListItemDTO } from "@shared/api/dto";

import { useData } from "@shared/helpers/hooks/useData";
import { RateContext } from "@shared/api/dataContext/fake";
import { WithSkeleton } from "@shared/ui/WithSkeleton";
import TableContent from "./components/TableContent/ui";

import cn from "classnames";
import styles from "./styles.module.scss";

interface ITableBody
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  className?: string;
  data?: any;
}

const Table: React.FC<ITableBody> = props => {
  const { className, data } = props;

  return <TableContent data={data} />;
};

export default Table;
