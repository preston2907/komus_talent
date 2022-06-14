import { RateListItemDTO } from "@shared/api/dto";
import Arrow from "@shared/ui/icons/Arrow";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface TableProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  className?: string;
  data?: RateListItemDTO[];
}

const useSortableData = (items, config = null) => {
  console.log(items);
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = (items && [...items]) || [];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = key => {
    console.log(key);
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const TableContent: React.FC<TableProps> = props => {
  const { className, data } = props;

  const { items, requestSort, sortConfig } = useSortableData(data);
  console.log(requestSort);
  const getClassNamesFor = name => {
    console.log("sortConfig", sortConfig);
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <table className={styles.table}>
      <thead className={styles.table__thead}>
        <tr>
          <th>
            Место в рейтинге
            <img
              src={`${process.env["PUBLIC"]}/images/icons/arrows.png`}
              onClick={() => requestSort("placeInRaiting")}
              className={getClassNamesFor("placeInRaiting")}
            />
          </th>
          <th>
            Name
            <img
              src={`${process.env["PUBLIC"]}/images/icons/arrows.png`}
              onClick={() => requestSort("groupName")}
              className={getClassNamesFor("groupName")}
            />
          </th>
          <th>
            Talents
            <img
              src={`${process.env["PUBLIC"]}/images/icons/arrows.png`}
              onClick={() => requestSort("talentsCount")}
              className={getClassNamesFor("talentsCount")}
            />
          </th>
        </tr>
      </thead>
      <tbody className={styles.table__tbody}>
        {data &&
          items.map((item, i) => (
            <tr key={item.groupId}>
              <td>{item.placeInRaiting}</td>
              <td>{`${item.groupName} ${item.curator.fullname}`}</td>
              <td>{item.talentsCount}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableContent;
